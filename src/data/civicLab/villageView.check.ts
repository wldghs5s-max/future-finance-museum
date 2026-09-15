import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  deriveVillageView,
  opsFromScore,
  scoreToStep,
  stepsFromPicks,
  villageChangeNotes,
  type ZoneStep,
} from "./villageView";
import { exclusiveRoundPick, removePolicy } from "./model";
import { VILLAGE_BASE, ZONE_ARROW_ANCHOR, ZONE_STEPS, zoneSrc } from "./villageAssets";

function jpegSize(buf: Buffer): [number, number] {
  let i = 2;
  while (i + 8 < buf.length && buf[i] === 0xff) {
    const marker = buf[i + 1];
    const len = buf.readUInt16BE(i + 2);
    if (marker >= 0xc0 && marker <= 0xc3) {
      return [buf.readUInt16BE(i + 7), buf.readUInt16BE(i + 5)];
    }
    i += 2 + len;
  }
  throw new Error("JPEG SOF not found");
}

const empty = deriveVillageView([]);
assert.equal(empty.care, 0);
assert.equal(empty.work, 0);
assert.equal(empty.commons, 0);
assert.equal(empty.careOps, "steady");
assert.deepEqual(empty, deriveVillageView([]));
assert.equal(scoreToStep(1), 0);
assert.equal(opsFromScore(2), "staffed");

const careEarly = deriveVillageView(["tax_up", "spend_care"]);
const workEarly = deriveVillageView(["tax_down", "spend_future"]);
assert.ok(careEarly.care >= 1 && careEarly.care <= 1);
assert.ok(workEarly.work >= 1 && workEarly.work <= 1);
assert.ok(Math.abs(careEarly.care) < 3);
assert.ok(Math.abs(workEarly.work) < 3);

const carePath = deriveVillageView([
  "tax_up",
  "spend_care",
  "care_staff",
  "care_debt",
  "care_expand",
  "finale_care",
]);
const workPath = deriveVillageView([
  "tax_down",
  "spend_future",
  "work_staff",
  "work_debt",
  "work_expand",
  "finale_work",
]);
const laterPath = deriveVillageView([
  "tax_up",
  "spend_hold",
  "keep_saving",
  "keep_lid",
  "repair_books",
  "finale_book",
]);

assert.ok(carePath.care > workPath.care, "care path should raise care step");
assert.ok(workPath.work > carePath.work, "work path should raise work step");
assert.ok(laterPath.later < carePath.later, "repair path should show less later load");
assert.ok(carePath.care >= 2);
assert.ok(workPath.work >= 2);

const staffOnly = deriveVillageView(["tax_up", "spend_care", "care_staff"], ["tax_up", "spend_care"]);
assert.ok(
  staffOnly.changed.length === 0 || staffOnly.opsChanged.includes("care"),
  "staffing may keep buildings and still change operations",
);
assert.ok(staffOnly.holdNote || staffOnly.opsChanged.includes("care") || staffOnly.changed.includes("care"));

const swapped = stepsFromPicks(exclusiveRoundPick(["tax_up"], "tax_down", 1));
assert.deepEqual(swapped, stepsFromPicks(["tax_down"]));
assert.deepEqual(
  stepsFromPicks(removePolicy(["tax_up", "spend_care"], "spend_care")),
  stepsFromPicks(["tax_up"]),
);

const hold = deriveVillageView(["tax_hold"]);
assert.equal(hold.care, 0);
assert.equal(hold.work, 0);

assert.equal(villageChangeNotes([]).length, 0);
const careNotes = villageChangeNotes(["spend_care"], []);
assert.ok(careNotes.some((n) => n.zone === "care" && n.better && n.text.includes("확대")));
assert.equal(villageChangeNotes(["tax_hold"], []).length, 0);
assert.equal(Object.keys(ZONE_ARROW_ANCHOR).length, 3);

const debtNotes = villageChangeNotes(
  ["tax_up", "spend_care", "care_staff", "care_debt"],
  ["tax_up", "spend_care", "care_staff"],
);
assert.ok(
  debtNotes.length === 0 || debtNotes.every((n) => n.text.includes("운영")),
  "borrowing should not pretend buildings collapsed",
);

const root = join(dirname(fileURLToPath(import.meta.url)), "../../../public");
const expected = [1280, 720] as const;
for (const rel of [
  VILLAGE_BASE.replace(/^\//, ""),
  ...(["care", "work", "commons"] as const).flatMap((zone) =>
    ZONE_STEPS.map((step) => zoneSrc(zone, step as ZoneStep).replace(/^\//, "")),
  ),
]) {
  const file = join(root, rel);
  assert.ok(existsSync(file), `missing ${rel}`);
  const [w, h] = jpegSize(readFileSync(file));
  assert.equal(w, expected[0], `${rel} width`);
  assert.equal(h, expected[1], `${rel} height`);
}

console.log("civic-lab village view checks passed");

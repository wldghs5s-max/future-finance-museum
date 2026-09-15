import assert from "node:assert/strict";
import {
  BASELINE,
  POLICIES,
  TOTAL_ROUNDS,
  applyDelta,
  clampIndicator,
  clearFromRound,
  computeState,
  exclusiveRoundPick,
  getPolicy,
  goalFit,
  optionsForRound,
  removePolicy,
  tagScore,
} from "./model";
import { scoreToStep, stepsFromPicks } from "./villageView";

assert.equal(clampIndicator(-4), 0);
assert.equal(clampIndicator(140), 100);
assert.equal(clampIndicator(52.4), 52);
assert.equal(TOTAL_ROUNDS, 6);
assert.equal(scoreToStep(0), 0);
assert.equal(scoreToStep(2), 1);
assert.equal(scoreToStep(4), 2);
assert.equal(scoreToStep(6), 3);
assert.equal(scoreToStep(-2), -1);

const taxUp = getPolicy("tax_up");
assert.ok(taxUp);
const afterTax = applyDelta(BASELINE, taxUp.delta);
assert.equal(afterTax.coffer, BASELINE.coffer + 12);
assert.equal(afterTax.work, BASELINE.work - 6);

const undo = exclusiveRoundPick(["tax_up"], "tax_down", 1);
assert.deepEqual(undo, ["tax_down"]);
assert.deepEqual(removePolicy(["tax_up", "spend_care"], "tax_up"), [
  "spend_care",
]);
assert.deepEqual(
  exclusiveRoundPick(["tax_up", "spend_care", "care_staff"], "spend_future", 2),
  ["tax_up", "spend_future"],
);
assert.deepEqual(clearFromRound(["tax_up", "spend_care", "care_staff"], 2), [
  "tax_up",
]);

for (let round = 1; round <= 6; round += 1) {
  const history = ["tax_up", "spend_care", "care_staff", "care_debt", "care_expand"].slice(
    0,
    round - 1,
  );
  const opts = optionsForRound(round as 1 | 2 | 3 | 4 | 5 | 6, history);
  assert.equal(opts.length, 3, `round ${round} should offer 3 options`);
  assert.equal(new Set(opts.map((item) => item.id)).size, 3);
}

const r3Care = optionsForRound(3, ["tax_up", "spend_care"]).map((item) => item.id);
assert.deepEqual(r3Care, ["care_staff", "care_access", "pivot_work"]);
const r3Work = optionsForRound(3, ["tax_hold", "spend_future"]).map((item) => item.id);
assert.deepEqual(r3Work, ["work_staff", "work_link", "pivot_care"]);
const r3Hold = optionsForRound(3, ["tax_hold", "spend_hold"]).map((item) => item.id);
assert.deepEqual(r3Hold, ["catchup_care", "catchup_work", "keep_saving"]);
assert.ok(optionsForRound(4, ["tax_up", "spend_care", "pivot_work"]).some((item) => item.id === "deepen_work"));
assert.ok(!optionsForRound(3, ["tax_up", "spend_care"]).some((item) => item.id === "spend_care"));

const clash = computeState(["tax_down", "spend_care", "care_staff", "care_debt"]);
const mild = computeState(["tax_up", "spend_hold", "keep_saving", "keep_lid"]);
assert.ok(clash.conflicts.length >= 1);
assert.ok(clash.indicators.later > mild.indicators.later);
assert.ok(clash.indicators.coffer < mild.indicators.coffer);

const carePath = [
  "tax_up",
  "spend_care",
  "care_staff",
  "care_debt",
  "care_expand",
  "finale_care",
];
const workPath = [
  "tax_down",
  "spend_future",
  "work_staff",
  "work_debt",
  "work_expand",
  "finale_work",
];
const pivotPath = [
  "tax_up",
  "spend_care",
  "pivot_work",
  "deepen_work",
  "work_expand",
  "finale_work",
];
const balancePath = [
  "tax_hold",
  "spend_care",
  "pivot_work",
  "hold_both",
  "modest_work",
  "finale_book",
];

const careState = computeState(carePath);
const workState = computeState(workPath);
const pivotState = computeState(pivotPath);
const balanceState = computeState(balancePath);

assert.ok(careState.indicators.life > workState.indicators.life);
assert.ok(workState.indicators.work > careState.indicators.work);
assert.ok(tagScore(pivotPath, "work") >= 2);
assert.ok(tagScore(pivotPath, "care") >= 1);
assert.ok(pivotState.indicators.work > careState.indicators.work);
assert.ok(balanceState.indicators.later < careState.indicators.later);

const earlyCare = stepsFromPicks(carePath.slice(0, 2));
const earlyWork = stepsFromPicks(workPath.slice(0, 2));
assert.ok(Math.abs(earlyCare.care) <= 1, "care should not max after 2 rounds");
assert.ok(Math.abs(earlyCare.work) <= 1);
assert.ok(Math.abs(earlyWork.work) <= 1);
assert.ok(Math.abs(earlyWork.care) <= 1);

const lateCare = stepsFromPicks(carePath);
const lateWork = stepsFromPicks(workPath);
assert.ok(lateCare.care >= 2, "concentrated care should grow by the end");
assert.ok(lateWork.work >= 2, "concentrated work should grow by the end");
assert.ok(lateCare.care > earlyCare.care || lateCare.careOps !== earlyCare.careOps);

const midCare = stepsFromPicks(carePath.slice(0, 3));
assert.ok(Math.abs(midCare.care) < 3, "should not hit max by round 3");

const lifeGoal = goalFit("life", careState.indicators);
const laterGoal = goalFit("later", mild.indicators);
assert.equal(typeof lifeGoal.ok, "boolean");
assert.ok(lifeGoal.why.length > 8);
assert.ok(laterGoal.why.length > 8);

const canceled = computeState(removePolicy(["tax_down", "spend_care"], "tax_down"));
assert.deepEqual(canceled.indicators, computeState(["spend_care"]).indicators);

const combos = [carePath, workPath, pivotPath, balancePath] as const;
const wins = combos.map((ids) => {
  const now = computeState([...ids]).indicators;
  return (
    now.life > BASELINE.life &&
    now.work > BASELINE.work &&
    now.coffer > BASELINE.coffer &&
    now.later < BASELINE.later &&
    now.fair > BASELINE.fair
  );
});
assert.ok(!wins.some(Boolean), "no combination should raise every indicator");

assert.ok(POLICIES.length > 20);
assert.ok(new Set(POLICIES.map((item) => item.id)).size === POLICIES.length);

console.log("civic-lab model checks passed");

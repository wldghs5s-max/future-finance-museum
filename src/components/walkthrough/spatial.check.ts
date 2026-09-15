import assert from "node:assert/strict";
import {
  CORRIDOR_EXHIBIT_IDS,
  CORRIDOR_LAYOUT,
  EXHIBIT_POSES,
  FIRST_AFTER_GATE,
  FLOORS,
  GATES,
  MAX_WORLD_Z,
  ZONE_CAMERA_Z_MAP,
  doorOpenAmount,
  gateOpacity,
  isArchitectureMounted,
  isBlockedByClosedGate,
  isGateOpenEnough,
  panelWorldXRange,
  readCameraZ,
} from "../../data/spaceLayout";
import { exhibitMotion, isExhibitMounted } from "./spatialMotion";

assert.deepEqual(exhibitMotion(-800, 0, 0).readable, true);
assert.ok(exhibitMotion(-800, 0, 0).exitT < 0.02);
assert.ok(exhibitMotion(-800, 0, 0).opacity > 0.85);
assert.ok(exhibitMotion(-1800, 0, 0).opacity > 0.2);
assert.ok(exhibitMotion(-1800, 0, 0).inspectable);

const leaving = exhibitMotion(-80, 0, 0);
assert.ok(leaving.exitT > 0.35);
assert.ok(leaving.driftY < -80);

for (const row of FIRST_AFTER_GATE) {
  const gate = GATES.find((g) => g.id === row.gateId);
  const first = EXHIBIT_POSES[row.exhibitId];
  assert.ok(gate && first, row.exhibitId);
  assert.ok(
    first.z < gate.z - 800,
    `${row.exhibitId} too close to ${row.gateId}: ${first.z} vs ${gate.z}`,
  );

  const atDoor = -gate.z;
  const relAtDoor = first.z + atDoor;
  const motionAtDoor = exhibitMotion(relAtDoor, first.x, first.y);
  assert.ok(
    motionAtDoor.exitT < 0.05,
    `${row.exhibitId} already exiting at gate ${row.gateId}`,
  );
  assert.ok(
    isGateOpenEnough(gate.z, atDoor),
    `${row.gateId} not open at its plane`,
  );
  assert.equal(isBlockedByClosedGate(first.z, atDoor), false);
  assert.ok(motionAtDoor.inspectable);

  const beforeOpen = -gate.z - 800;
  assert.ok(doorOpenAmount(gate.z + beforeOpen) < 0.2);
  assert.equal(isBlockedByClosedGate(first.z, beforeOpen), true);

  const zone = zoneForGate(row.gateId);
  if (zone && zone !== "lobby") {
    const mapZ = ZONE_CAMERA_Z_MAP[zone];
    const relMap = first.z + mapZ;
    const mapped = exhibitMotion(relMap, first.x, first.y);
    assert.ok(mapped.inspectable, `map landing misses ${row.exhibitId}`);
    assert.ok(mapped.exitT < 0.15);
    assert.equal(isBlockedByClosedGate(first.z, mapZ), false);
  }
}

function zoneForGate(id: string): keyof typeof ZONE_CAMERA_Z_MAP | "" {
  if (id === "entrance") return "lobby";
  if (id === "hall01") return "hall_01";
  if (id === "hall02") return "hall_02";
  if (id === "hall03") return "hall_03";
  if (id === "hall04") return "hall_04";
  if (id === "hall05") return "hall_05";
  if (id === "hall06") return "hall_06";
  return "";
}

const centers = [
  EXHIBIT_POSES.exhibit_lobby_monument,
  EXHIBIT_POSES.exhibit_1c,
  EXHIBIT_POSES.exhibit_2c,
  EXHIBIT_POSES.exhibit_3c,
  EXHIBIT_POSES.exhibit_4c,
  EXHIBIT_POSES.exhibit_5c,
  EXHIBIT_POSES.exhibit_6c,
  EXHIBIT_POSES.exhibit_6d,
];
for (let i = 0; i < centers.length - 1; i++) {
  const a = centers[i];
  const b = centers[i + 1];
  for (let cameraZ = 0; cameraZ <= MAX_WORLD_Z; cameraZ += 80) {
    const ma = exhibitMotion(a.z + cameraZ, a.x, a.y);
    const mb = exhibitMotion(b.z + cameraZ, b.x, b.y);
    const aOn =
      isExhibitMounted(a.z + cameraZ) &&
      ma.opacity > 0.72 &&
      ma.exitT < 0.15 &&
      a.z + cameraZ >= -1100;
    const bOn =
      isExhibitMounted(b.z + cameraZ) &&
      mb.opacity > 0.72 &&
      mb.exitT < 0.15 &&
      b.z + cameraZ >= -1100;
    assert.ok(!(aOn && bOn), `center overlap at ${cameraZ}`);
  }
}

const choicePairs = [
  ["exhibit_1_choices", "exhibit_corridor_01"],
  ["exhibit_2_choices", "exhibit_corridor_02"],
  ["exhibit_3_choices", "exhibit_corridor_03"],
  ["exhibit_4_choices", "exhibit_corridor_04"],
  ["exhibit_5_choices", "exhibit_corridor_05"],
] as const;

for (const [choiceId, corridorId] of choicePairs) {
  const choice = EXHIBIT_POSES[choiceId];
  const corridor = EXHIBIT_POSES[corridorId];
  assert.ok(choice && corridor, `${choiceId}/${corridorId}`);
  assert.ok(choice.z > corridor.z, `${choiceId} should sit before ${corridorId}`);
  const choiceRange = panelWorldXRange(choice);
  const corridorRange = panelWorldXRange(corridor);
  const xOverlap = choiceRange.min < corridorRange.max && choiceRange.max > corridorRange.min;
  assert.ok(!xOverlap, `${choiceId} x-overlaps ${corridorId}`);
}

for (const id of CORRIDOR_EXHIBIT_IDS) {
  const pose = EXHIBIT_POSES[id];
  assert.ok(pose, id);
  assert.ok(pose.width >= 420 && pose.width <= 460, `${id} width ${pose.width}`);
  assert.ok(Math.abs(pose.rotateY) <= 8, `${id} should face the walkway`);
  const range = panelWorldXRange(pose);
  assert.ok(
    range.min > -CORRIDOR_LAYOUT.wallX + 24,
    `${id} left edge ${range.min} through wall`,
  );
  assert.ok(
    range.max < CORRIDOR_LAYOUT.wallX - 24,
    `${id} right edge ${range.max} through wall`,
  );

  const mapZone = id.replace("exhibit_", "") as keyof typeof ZONE_CAMERA_Z_MAP;
  const mapZ = ZONE_CAMERA_Z_MAP[mapZone];
  assert.equal(mapZ, readCameraZ(id), `${id} map landing moved`);
  const mapped = exhibitMotion(pose.z + mapZ, pose.x, pose.y, "corridor");
  assert.ok(mapped.inspectable, `map landing misses ${id}`);
  assert.ok(mapped.exitT < 0.15);
  assert.equal(mapped.driftX, 0);

  const leaving = exhibitMotion(-80, pose.x, pose.y, "corridor");
  assert.equal(leaving.driftX, 0, `${id} exit must not shove into the wall`);
  const afterExit = panelWorldXRange({ ...pose, x: pose.x + leaving.driftX });
  assert.ok(afterExit.min > -CORRIDOR_LAYOUT.wallX + 24);
  assert.ok(afterExit.max < CORRIDOR_LAYOUT.wallX - 24);
}

assert.ok(
  FLOORS.every((floor) => floor.height < 8000),
  "floor/ceiling slabs must stay below GPU texture limits",
);

const hall01Cam = readCameraZ("exhibit_1d");
const hall02Cam = readCameraZ("exhibit_2d");
const hall03Cam = readCameraZ("exhibit_3d");
const floorByZ = (z: number) => FLOORS.find((floor) => floor.z === z);

const hall01Floor = floorByZ(-4600);
const hall02Floor = floorByZ(-9500);
const hall03Floor = floorByZ(-14400);
const lobbyFloor = floorByZ(-1600);
const hall05Floor = floorByZ(-24200);
if (!hall01Floor || !hall02Floor || !hall03Floor || !lobbyFloor || !hall05Floor) {
  throw new Error("missing hall floor slabs");
}

assert.equal(isArchitectureMounted(hall01Floor.z, hall01Cam, hall01Floor.height), true);
assert.equal(isArchitectureMounted(hall05Floor.z, hall01Cam, hall05Floor.height), false);
assert.equal(isArchitectureMounted(hall02Floor.z, hall02Cam, hall02Floor.height), true);
assert.equal(isArchitectureMounted(lobbyFloor.z, hall02Cam, lobbyFloor.height), false);
assert.equal(isArchitectureMounted(hall03Floor.z, hall03Cam, hall03Floor.height), true);
assert.equal(isArchitectureMounted(lobbyFloor.z, hall03Cam, lobbyFloor.height), false);

const hall03Gate = GATES.find((gate) => gate.id === "hall03");
assert.ok(hall03Gate);
assert.ok(gateOpacity(GATES[0].z + hall03Cam) <= 0);
assert.ok(gateOpacity(hall03Gate.z + hall03Cam) > 0.5);

console.log("spatial exhibit motion checks passed");

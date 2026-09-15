import { SpatialZoneId } from "../types/spatial";

export const MOTION = {
  appearStart: -1750,
  appearFull: -1150,
  readFar: -1100,
  readBest: -720,
  readNear: -280,
  exitStart: -250,
  exitDone: 100,
  unmountAhead: -3200,
  unmountBehind: 900,
} as const;

export const GATE_OPEN = {
  startBefore: 360,
  span: 400,
  clickMin: 0.7,
  passed: 60,
} as const;

export const GATES = [
  { id: "entrance", z: -500, label: "정문", hall: "00" },
  { id: "hall01", z: -2700, label: "인구변화 전시장", hall: "01" },
  { id: "hall02", z: -7500, label: "복지 및 연금 전시장", hall: "02" },
  { id: "hall03", z: -12400, label: "환경 문제 전시장", hall: "03" },
  { id: "hall04", z: -17300, label: "AI 기술 전시장", hall: "04" },
  { id: "hall05", z: -22200, label: "장기 재정 전망관", hall: "05" },
  { id: "hall06", z: -27100, label: "나라살림 랩", hall: "06" },
] as const;

export type GateId = (typeof GATES)[number]["id"];

/** 문 장식을 읽기 좋은 거리. 거대한 평면을 만들지 않고 기존 게이트 프레임을 본다. */
export const GATE_VIEW = -520;

export function gateViewCameraZ(gateId: GateId): number {
  const gate = GATES.find((item) => item.id === gateId);
  if (!gate) throw new Error(`Missing gate ${gateId}`);
  return Math.round(-gate.z + GATE_VIEW);
}

export interface ExhibitPose {
  x: number;
  y: number;
  z: number;
  rotateY: number;
  width: number;
}

export const EXHIBIT_POSES: Record<string, ExhibitPose> = {
  exhibit_lobby_intro: { x: -460, y: -10, z: -1450, rotateY: 18, width: 460 },
  exhibit_lobby_monument: { x: 0, y: 10, z: -1950, rotateY: 0, width: 560 },
  exhibit_lobby_directory: { x: 460, y: -10, z: -1450, rotateY: -18, width: 460 },

  exhibit_1d: { x: -460, y: 0, z: -3720, rotateY: 22, width: 480 },
  exhibit_1f: { x: 460, y: 0, z: -4140, rotateY: -22, width: 480 },
  exhibit_1a: { x: -460, y: -20, z: -4620, rotateY: 22, width: 500 },
  exhibit_1g: { x: 460, y: 0, z: -5040, rotateY: -22, width: 480 },
  exhibit_1b: { x: -460, y: 0, z: -5520, rotateY: 22, width: 480 },
  exhibit_1h: { x: 460, y: -10, z: -5940, rotateY: -18, width: 500 },
  exhibit_1e: { x: -460, y: 10, z: -6420, rotateY: 22, width: 460 },
  exhibit_1c: { x: 0, y: 0, z: -6620, rotateY: 0, width: 500 },
  exhibit_1_choices: { x: 280, y: 0, z: -7140, rotateY: -12, width: 500 },
  exhibit_corridor_01: { x: -236, y: 10, z: -7320, rotateY: 6, width: 440 },

  exhibit_2d: { x: -460, y: 0, z: -8520, rotateY: 22, width: 480 },
  exhibit_2f: { x: 460, y: 0, z: -8940, rotateY: -22, width: 480 },
  exhibit_2a: { x: -460, y: -20, z: -9420, rotateY: 22, width: 500 },
  exhibit_2e: { x: 460, y: 0, z: -9840, rotateY: -22, width: 480 },
  exhibit_2b: { x: -460, y: 0, z: -10320, rotateY: 22, width: 480 },
  exhibit_2c: { x: 0, y: 0, z: -10880, rotateY: 0, width: 520 },
  exhibit_2_choices: { x: -280, y: 0, z: -11680, rotateY: 12, width: 500 },
  exhibit_corridor_02: { x: 236, y: 10, z: -12080, rotateY: -6, width: 440 },

  exhibit_3d: { x: -460, y: 0, z: -13420, rotateY: 22, width: 480 },
  exhibit_3e: { x: 460, y: 0, z: -13840, rotateY: -22, width: 480 },
  exhibit_3a: { x: -460, y: -20, z: -14320, rotateY: 22, width: 500 },
  exhibit_3f: { x: 460, y: 0, z: -14740, rotateY: -22, width: 480 },
  exhibit_3b: { x: -460, y: 0, z: -15220, rotateY: 22, width: 480 },
  exhibit_3h: { x: 460, y: -10, z: -15640, rotateY: -18, width: 500 },
  exhibit_3c: { x: 0, y: 0, z: -16120, rotateY: 0, width: 520 },
  exhibit_3_choices: { x: 280, y: 0, z: -16680, rotateY: -12, width: 500 },
  exhibit_corridor_03: { x: -236, y: 10, z: -17000, rotateY: 6, width: 440 },

  exhibit_4d: { x: -460, y: 0, z: -18320, rotateY: 22, width: 480 },
  exhibit_4e: { x: 460, y: 0, z: -18740, rotateY: -22, width: 480 },
  exhibit_4a: { x: -460, y: -20, z: -19220, rotateY: 22, width: 500 },
  exhibit_4f: { x: 460, y: 0, z: -19640, rotateY: -22, width: 480 },
  exhibit_4b: { x: -460, y: 0, z: -20120, rotateY: 22, width: 480 },
  exhibit_4h: { x: 460, y: -10, z: -20540, rotateY: -18, width: 500 },
  exhibit_4c: { x: 0, y: 0, z: -21020, rotateY: 0, width: 520 },
  exhibit_4_choices: { x: -280, y: 0, z: -21580, rotateY: 12, width: 500 },
  exhibit_corridor_04: { x: 236, y: 10, z: -21900, rotateY: -6, width: 440 },

  exhibit_5d: { x: -460, y: 0, z: -23220, rotateY: 22, width: 480 },
  exhibit_5e: { x: 460, y: 0, z: -23640, rotateY: -22, width: 480 },
  exhibit_5a: { x: -460, y: -20, z: -24120, rotateY: 22, width: 520 },
  exhibit_5f: { x: 460, y: -10, z: -24540, rotateY: -18, width: 500 },
  exhibit_5b: { x: -460, y: 0, z: -25020, rotateY: 22, width: 480 },
  exhibit_5c: { x: 0, y: 0, z: -25600, rotateY: 0, width: 520 },
  exhibit_5_choices: { x: 280, y: 0, z: -26400, rotateY: -12, width: 500 },
  exhibit_corridor_05: { x: -236, y: 10, z: -26780, rotateY: 6, width: 440 },

  exhibit_6a: { x: -420, y: -10, z: -28120, rotateY: 16, width: 480 },
  exhibit_6b: { x: 420, y: -10, z: -28120, rotateY: -16, width: 460 },
  exhibit_6c: { x: 0, y: -10, z: -29100, rotateY: 0, width: 640 },
  exhibit_6d: { x: 0, y: 0, z: -30200, rotateY: 0, width: 500 },
};

export const FIRST_AFTER_GATE: { gateId: GateId; exhibitId: string }[] = [
  { gateId: "entrance", exhibitId: "exhibit_lobby_intro" },
  { gateId: "hall01", exhibitId: "exhibit_1d" },
  { gateId: "hall02", exhibitId: "exhibit_2d" },
  { gateId: "hall03", exhibitId: "exhibit_3d" },
  { gateId: "hall04", exhibitId: "exhibit_4d" },
  { gateId: "hall05", exhibitId: "exhibit_5d" },
  { gateId: "hall06", exhibitId: "exhibit_6a" },
];

/** 마지막 6-D가 화면 안에 남은 채 멈추게 해 워프 버튼이 끝까지 보이게 한다. */
export const MAX_WORLD_Z = Math.round(
  -EXHIBIT_POSES.exhibit_6d.z + MOTION.readNear,
);

export const ZONE_CAMERA_Z_MAP: Record<SpatialZoneId, number> = {
  lobby: readCameraZ("exhibit_lobby_monument"),
  hall_01: readCameraZ("exhibit_1d"),
  corridor_01: gateViewCameraZ("hall02"),
  hall_02: readCameraZ("exhibit_2d"),
  corridor_02: gateViewCameraZ("hall03"),
  hall_03: readCameraZ("exhibit_3d"),
  corridor_03: gateViewCameraZ("hall04"),
  hall_04: readCameraZ("exhibit_4d"),
  corridor_04: gateViewCameraZ("hall05"),
  hall_05: readCameraZ("exhibit_5d"),
  corridor_05: gateViewCameraZ("hall06"),
  hall_06: readCameraZ("exhibit_6a"),
};

export const ZONE_BREAKS: { until: number; id: SpatialZoneId; nameKo: string; nameEn: string }[] =
  [
    { until: 600, id: "lobby", nameKo: "박물관 정문 입구", nameEn: "MUSEUM ENTRANCE" },
    { until: 2550, id: "lobby", nameKo: "재정미래관 중앙 로비", nameEn: "GRAND LOBBY" },
    { until: 6200, id: "hall_01", nameKo: "HALL 01: 인구변화 전시장", nameEn: "HALL 01: DEMOGRAPHY" },
    { until: 7200, id: "corridor_01", nameKo: "세대·복지 회랑 (복도 01)", nameEn: "CORRIDOR 01: WELFARE TRANSIT" },
    { until: 11000, id: "hall_02", nameKo: "HALL 02: 복지 및 연금 전시장", nameEn: "HALL 02: WELFARE & PENSION" },
    { until: 12000, id: "corridor_02", nameKo: "기후 회랑 (복도 02)", nameEn: "CORRIDOR 02: CLIMATE TRANSIT" },
    { until: 15900, id: "hall_03", nameKo: "HALL 03: 환경 문제 전시장", nameEn: "HALL 03: ENVIRONMENT & CLIMATE" },
    { until: 16900, id: "corridor_03", nameKo: "AI 회랑 (복도 03)", nameEn: "CORRIDOR 03: AI TRANSIT" },
    { until: 20800, id: "hall_04", nameKo: "HALL 04: AI 기술 전시장", nameEn: "HALL 04: AI & FUTURE LABOR" },
    { until: 21800, id: "corridor_04", nameKo: "악어의 입 회랑 (복도 04)", nameEn: "CORRIDOR 04: FISCAL TRAJECTORY" },
    { until: 25700, id: "hall_05", nameKo: "HALL 05: 장기 재정 전망관", nameEn: "HALL 05: FISCAL OUTLOOK" },
    { until: 26700, id: "corridor_05", nameKo: "시뮬레이션 게이트 회랑 (복도 05)", nameEn: "CORRIDOR 05: LAB ACCESS" },
    { until: 99999, id: "hall_06", nameKo: "HALL 06: 나라살림게임 랩", nameEn: "HALL 06: FISCAL LAB" },
  ];

export const MUSEUM_ENTRANCE_Z = 80;

export function readCameraZ(exhibitId: string): number {
  const pose = EXHIBIT_POSES[exhibitId];
  return Math.round(-pose.z + MOTION.readBest);
}

export function requirePose(id: string): ExhibitPose {
  const pose = EXHIBIT_POSES[id];
  if (!pose) throw new Error(`Missing exhibit pose: ${id}`);
  return pose;
}

export function clamp01(n: number) {
  return Math.max(0, Math.min(1, n));
}

export function doorOpenAmount(dist: number) {
  return clamp01((dist + GATE_OPEN.startBefore) / GATE_OPEN.span);
}

export function gateOpacity(dist: number) {
  if (dist > 640) return 0;
  if (dist > 220) return Math.max(0, 1 - (dist - 220) / 420);
  if (dist < -1250) return 0;
  if (dist < -750) return (dist + 1250) / 500;
  return 1;
}

export function isGateOpenEnough(gateZ: number, cameraZ: number) {
  const dist = gateZ + cameraZ;
  return dist >= GATE_OPEN.passed || doorOpenAmount(dist) >= GATE_OPEN.clickMin;
}

/** 카메라와 전시 사이에 아직 닫힌 문이 있으면 클릭을 막는다. */
export function isBlockedByClosedGate(exhibitZ: number, cameraZ: number) {
  return GATES.some((gate) => exhibitZ < gate.z && !isGateOpenEnough(gate.z, cameraZ));
}

/** 바닥·천장·회랑 벽. 전시 마운트보다 조금 넓게 잡아 발밑/전방 건축이 먼저 사라지지 않게 한다. */
const ARCH_AHEAD = MOTION.unmountAhead - 900;
const ARCH_BEHIND = MOTION.unmountBehind + 500;

export function isArchitectureMounted(
  worldZ: number,
  cameraZ: number,
  length = 0,
) {
  const half = Math.max(length, 0) / 2;
  const minRel = worldZ - half + cameraZ;
  const maxRel = worldZ + half + cameraZ;
  return maxRel >= ARCH_AHEAD && minRel <= ARCH_BEHIND;
}

export function zoneInfoForCamera(cameraZ: number) {
  const row = ZONE_BREAKS.find((item) => cameraZ < item.until) ?? ZONE_BREAKS[ZONE_BREAKS.length - 1];
  return { id: row.id, nameKo: row.nameKo, nameEn: row.nameEn };
}

export const FLOORS = [
  { z: -1600, height: 2600, width: 1400, glow: "rgba(36, 70, 120, 0.42)", deep: "#07101f" },
  { z: -4600, height: 3000, width: 1500, glow: "rgba(40, 78, 130, 0.4)", deep: "#071224" },
  { z: -7000, height: 1400, width: 1400, glow: "rgba(90, 58, 18, 0.34)", deep: "#140c05" },
  { z: -9500, height: 3200, width: 1500, glow: "rgba(96, 62, 20, 0.38)", deep: "#160e06" },
  { z: -11900, height: 1400, width: 1400, glow: "rgba(18, 80, 58, 0.34)", deep: "#04140d" },
  { z: -14400, height: 3200, width: 1500, glow: "rgba(20, 88, 64, 0.38)", deep: "#051811" },
  { z: -16800, height: 1400, width: 1400, glow: "rgba(72, 32, 110, 0.34)", deep: "#12071f" },
  { z: -19300, height: 3200, width: 1500, glow: "rgba(80, 36, 118, 0.38)", deep: "#170725" },
  { z: -21700, height: 1400, width: 1400, glow: "rgba(110, 28, 48, 0.34)", deep: "#1c050c" },
  { z: -24200, height: 3200, width: 1500, glow: "rgba(118, 30, 52, 0.38)", deep: "#1f050d" },
  { z: -26600, height: 1400, width: 1400, glow: "rgba(24, 70, 120, 0.36)", deep: "#071525" },
  { z: -29100, height: 3400, width: 1500, glow: "rgba(28, 82, 130, 0.42)", deep: "#061830" },
] as const;

/** 회랑 전용. 홀 벽면 전시(x≈±460, 폭 480, 회전 ±22)와 분리한다. */
export const CORRIDOR_LAYOUT = {
  wallX: 500,
  alcoveX: 620,
  alcoveHalfZ: 220,
  wallLength: 640,
  panelX: 236,
  panelWidth: 440,
  panelRotateY: 6,
} as const;

export const CORRIDOR_EXHIBIT_IDS = [
  "exhibit_corridor_01",
  "exhibit_corridor_02",
  "exhibit_corridor_03",
  "exhibit_corridor_04",
  "exhibit_corridor_05",
] as const;

export type CorridorExhibitId = (typeof CORRIDOR_EXHIBIT_IDS)[number];

/** 회랑 이미지가 붙는 다음 게이트. corridor01→hall02 … corridor05→hall06 */
export const CORRIDOR_NEXT_GATE: Record<CorridorExhibitId, GateId> = {
  exhibit_corridor_01: "hall02",
  exhibit_corridor_02: "hall03",
  exhibit_corridor_03: "hall04",
  exhibit_corridor_04: "hall05",
  exhibit_corridor_05: "hall06",
};

/** 문짝에 붙는 장면. 로비 선택의 자리→hall01, 이후는 회랑 이미지. */
export const GATE_SCENE_EXHIBIT: Partial<Record<GateId, string>> = {
  hall01: "exhibit_lobby_monument",
  hall02: "exhibit_corridor_01",
  hall03: "exhibit_corridor_02",
  hall04: "exhibit_corridor_03",
  hall05: "exhibit_corridor_04",
  hall06: "exhibit_corridor_05",
};

export function corridorExhibitForGate(gateId: GateId): CorridorExhibitId | undefined {
  return CORRIDOR_EXHIBIT_IDS.find((id) => CORRIDOR_NEXT_GATE[id] === gateId);
}

export function sceneExhibitForGate(gateId: GateId): string | undefined {
  return GATE_SCENE_EXHIBIT[gateId];
}

export const CORRIDOR_WALLS = [
  { z: -7000, exhibitZ: -6500, side: "left", tone: "amber", forward: "HALL 02 WELFARE & PENSION" },
  { z: -11900, exhibitZ: -11400, side: "right", tone: "emerald", forward: "HALL 03 ENVIRONMENT" },
  { z: -16800, exhibitZ: -16300, side: "left", tone: "violet", forward: "HALL 04 AI" },
  { z: -21700, exhibitZ: -21200, side: "right", tone: "rose", forward: "HALL 05 OUTLOOK" },
  { z: -26600, exhibitZ: -26100, side: "left", tone: "cyan", forward: "HALL 06 CIVIC LAB" },
] as const;

export function isCorridorExhibit(id: string) {
  return id.startsWith("exhibit_corridor_");
}

/** 회전을 반영한 패널의 세계 X 범위. 벽 관통 검사에 사용. */
export function panelWorldXRange(pose: ExhibitPose): { min: number; max: number } {
  const half = pose.width / 2;
  const c = Math.abs(Math.cos((pose.rotateY * Math.PI) / 180));
  return { min: pose.x - half * c, max: pose.x + half * c };
}

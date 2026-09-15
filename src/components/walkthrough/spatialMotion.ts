import { MOTION } from "../../data/spaceLayout";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function smoothstep(t: number) {
  const x = clamp(t, 0, 1);
  return x * x * (3 - 2 * x);
}

/** 배치에 따른 고정 이탈 방향. 무작위 없음. */
export function exitDirection(x: number, y: number): { dx: number; dy: number } {
  if (x <= -80) return { dx: -1, dy: 0 };
  if (x >= 80) return { dx: 1, dy: 0 };
  if (y >= 24) return { dx: 0, dy: 1 };
  return { dx: 0, dy: -1 };
}

export type ExhibitMotionKind = "hall" | "corridor";

export function exhibitMotion(
  relZ: number,
  x: number,
  y: number,
  kind: ExhibitMotionKind = "hall",
) {
  const dir = exitDirection(x, y);
  const appearT = smoothstep(
    (relZ - MOTION.appearStart) / (MOTION.appearFull - MOTION.appearStart),
  );
  const exitT = smoothstep(
    (relZ - MOTION.exitStart) / (MOTION.exitDone - MOTION.exitStart),
  );
  const nearCam = smoothstep((relZ + 220) / 320);
  const corridor = kind === "corridor";
  const driftX = corridor ? 0 : dir.dx * exitT * 520;
  const driftY = corridor ? -180 * exitT : dir.dy * exitT * 340;
  const scale = clamp(
    0.9 + 0.1 * appearT - (corridor ? 0.28 : 0.42) * exitT - 0.12 * nearCam,
    corridor ? 0.5 : 0.36,
    1,
  );
  const opacity = appearT * (1 - 0.94 * exitT);
  const inView = relZ >= MOTION.appearStart + 80 && relZ <= 40;
  const inspectable = inView && opacity >= 0.2 && exitT < 0.72;
  const readable =
    inspectable && relZ >= MOTION.readFar && relZ <= MOTION.readNear && exitT < 0.18;
  return { driftX, driftY, scale, opacity, exitT, readable, appearT, inspectable };
}

export function isExhibitMounted(relZ: number) {
  return relZ <= MOTION.unmountBehind && relZ >= MOTION.unmountAhead;
}

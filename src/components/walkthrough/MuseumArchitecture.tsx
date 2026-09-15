import React from "react";
import {
  CORRIDOR_LAYOUT,
  CORRIDOR_WALLS,
  FLOORS,
  MAX_WORLD_Z,
} from "../../data/spaceLayout";

const WALL_TONE: Record<string, { bg: string; line: string; bar: string }> = {
  amber: {
    bg: "linear-gradient(180deg, #2a1808 0%, #120804 100%)",
    line: "rgba(245, 158, 11, 0.35)",
    bar: "bg-amber-300/80",
  },
  emerald: {
    bg: "linear-gradient(180deg, #0a2418 0%, #04120c 100%)",
    line: "rgba(52, 211, 153, 0.35)",
    bar: "bg-emerald-300/80",
  },
  violet: {
    bg: "linear-gradient(180deg, #1c1030 0%, #0c0618 100%)",
    line: "rgba(196, 181, 253, 0.35)",
    bar: "bg-violet-300/80",
  },
  rose: {
    bg: "linear-gradient(180deg, #2a1018 0%, #120408 100%)",
    line: "rgba(251, 113, 133, 0.35)",
    bar: "bg-rose-300/80",
  },
  cyan: {
    bg: "linear-gradient(180deg, #0c2438 0%, #061018 100%)",
    line: "rgba(34, 211, 238, 0.35)",
    bar: "bg-cyan-300/80",
  },
};

function wallSegments(wallZ: number, exhibitZ: number) {
  const wallHalf = CORRIDOR_LAYOUT.wallLength / 2;
  const half = CORRIDOR_LAYOUT.alcoveHalfZ;
  const wallStart = wallZ - wallHalf;
  const wallEnd = wallZ + wallHalf;
  const openStart = exhibitZ - half;
  const openEnd = exhibitZ + half;
  const segs: { z: number; length: number }[] = [];
  if (openStart > wallStart + 24) {
    const length = openStart - wallStart;
    segs.push({ z: wallStart + length / 2, length });
  }
  if (wallEnd > openEnd + 24) {
    const length = wallEnd - openEnd;
    segs.push({ z: openEnd + length / 2, length });
  }
  return segs;
}

function WallPlane({
  x,
  z,
  rotateY,
  length,
  tone,
  children,
}: {
  x: number;
  z: number;
  rotateY: number;
  length: number;
  tone: { bg: string; line: string };
  children?: React.ReactNode;
}) {
  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 preserve-3d"
      style={{
        width: `${length}px`,
        height: "560px",
        transform: `translate3d(${x}px, 0px, ${z}px) rotateY(${rotateY}deg)`,
        background: tone.bg,
        borderTop: `1px solid ${tone.line}`,
        borderBottom: `1px solid ${tone.line}`,
      }}
    >
      {children}
    </div>
  );
}

export const MuseumArchitecture: React.FC<{ cameraZ?: number }> = () => (
  <div className="absolute inset-0 pointer-events-none preserve-3d">
    {FLOORS.map((floor) => (
      <div
        key={floor.z}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 preserve-3d"
        style={{
          width: `${floor.width}px`,
          height: `${floor.height}px`,
          transform: `translate3d(0px, 280px, ${floor.z}px) rotateX(90deg)`,
          background: `
            radial-gradient(ellipse at 50% 50%, ${floor.glow} 0%, ${floor.deep} 78%),
            linear-gradient(180deg, ${floor.deep} 0%, #0a1424 50%, ${floor.deep} 100%)
          `,
          boxShadow: "inset 0 0 50px rgba(0, 0, 0, 0.45)",
        }}
      />
    ))}

    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 preserve-3d"
      style={{
        width: "1080px",
        height: `${MAX_WORLD_Z + 800}px`,
        transform: `translate3d(0px, -280px, ${-MAX_WORLD_Z / 2}px) rotateX(-90deg)`,
        background:
          "linear-gradient(to right, transparent 0%, rgba(125, 211, 252, 0.22) 15%, transparent 22%, transparent 78%, rgba(125, 211, 252, 0.22) 85%, transparent 100%)",
      }}
    />

    {CORRIDOR_WALLS.map((wall) => {
      const tone = WALL_TONE[wall.tone];
      const segs = wallSegments(wall.z, wall.exhibitZ);
      const alcoveSide = wall.side === "left" ? -1 : 1;
      const recess = (CORRIDOR_LAYOUT.wallX + CORRIDOR_LAYOUT.alcoveX) / 2;
      const depth = CORRIDOR_LAYOUT.alcoveX - CORRIDOR_LAYOUT.wallX;

      return (
        <React.Fragment key={wall.z}>
          {([-1, 1] as const).map((sign) => {
            const isAlcoveSide = sign === alcoveSide;
            const rotateY = sign < 0 ? 90 : -90;
            if (!isAlcoveSide) {
              return (
                <WallPlane
                  key={`${wall.z}-full-${sign}`}
                  x={sign * CORRIDOR_LAYOUT.wallX}
                  z={wall.z}
                  rotateY={rotateY}
                  length={CORRIDOR_LAYOUT.wallLength}
                  tone={tone}
                >
                  {sign > 0 && (
                    <>
                      <div className={`absolute top-20 right-1/4 w-32 h-1 ${tone.bar}`} />
                      <div className="absolute bottom-16 right-1/4 text-[11px] font-mono text-white/45 tracking-widest">
                        FORWARD TO {wall.forward}
                      </div>
                    </>
                  )}
                  {sign < 0 && (
                    <div className={`absolute top-20 left-1/4 w-32 h-1 ${tone.bar}`} />
                  )}
                </WallPlane>
              );
            }

            return (
              <React.Fragment key={`${wall.z}-alcove-${sign}`}>
                {segs.map((seg) => (
                  <WallPlane
                    key={`${wall.z}-seg-${seg.z}`}
                    x={sign * CORRIDOR_LAYOUT.wallX}
                    z={seg.z}
                    rotateY={rotateY}
                    length={seg.length}
                    tone={tone}
                  />
                ))}
                <WallPlane
                  x={sign * CORRIDOR_LAYOUT.alcoveX}
                  z={wall.exhibitZ}
                  rotateY={rotateY}
                  length={CORRIDOR_LAYOUT.alcoveHalfZ * 2}
                  tone={tone}
                >
                  <div
                    className={`absolute top-16 ${sign < 0 ? "left-1/3" : "right-1/3"} w-24 h-1 ${tone.bar}`}
                  />
                </WallPlane>
                <WallPlane
                  x={sign * recess}
                  z={wall.exhibitZ - CORRIDOR_LAYOUT.alcoveHalfZ}
                  rotateY={0}
                  length={depth}
                  tone={tone}
                />
                <WallPlane
                  x={sign * recess}
                  z={wall.exhibitZ + CORRIDOR_LAYOUT.alcoveHalfZ}
                  rotateY={0}
                  length={depth}
                  tone={tone}
                />
              </React.Fragment>
            );
          })}
        </React.Fragment>
      );
    })}
  </div>
);

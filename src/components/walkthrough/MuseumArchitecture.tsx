import React from "react";
import { FLOORS, isArchitectureMounted } from "../../data/spaceLayout";

export const MuseumArchitecture: React.FC<{ cameraZ?: number }> = ({
  cameraZ = 0,
}) => (
  <div className="absolute inset-0 pointer-events-none preserve-3d">
    {FLOORS.filter((floor) =>
      isArchitectureMounted(floor.z, cameraZ, floor.height),
    ).map((floor) => (
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

    {FLOORS.filter((floor) =>
      isArchitectureMounted(floor.z, cameraZ, floor.height),
    ).map((floor) => (
      <div
        key={`ceil-${floor.z}`}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 preserve-3d"
        style={{
          width: "1080px",
          height: `${floor.height}px`,
          transform: `translate3d(0px, -280px, ${floor.z}px) rotateX(-90deg)`,
          background:
            "linear-gradient(to right, transparent 0%, rgba(125, 211, 252, 0.22) 15%, transparent 22%, transparent 78%, rgba(125, 211, 252, 0.22) 85%, transparent 100%)",
        }}
      />
    ))}
  </div>
);

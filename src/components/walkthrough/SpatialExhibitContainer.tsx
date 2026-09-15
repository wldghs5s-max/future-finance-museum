import React from "react";
import { Search } from "lucide-react";
import { ExhibitMotionKind, exhibitMotion, isExhibitMounted } from "./spatialMotion";
import { isBlockedByClosedGate } from "../../data/spaceLayout";

interface SpatialExhibitContainerProps {
  x: number;
  y?: number;
  z: number;
  rotateY?: number;
  rotateX?: number;
  cameraZ: number;
  width?: number | string;
  title?: string;
  exhibitCode?: string;
  onInspect?: () => void;
  inspectLabel?: string;
  hideInspectButton?: boolean;
  bare?: boolean;
  motionKind?: ExhibitMotionKind;
  children: React.ReactNode;
  className?: string;
}

export const SpatialExhibitContainer: React.FC<
  SpatialExhibitContainerProps
> = ({
  x,
  y = 0,
  z,
  rotateY = 0,
  rotateX = 0,
  cameraZ,
  width = 440,
  title,
  exhibitCode,
  onInspect,
  inspectLabel = "자세히 보기",
  hideInspectButton = false,
  bare = false,
  motionKind = "hall",
  children,
  className = "",
}) => {
  const relZ = z + cameraZ;
  if (!isExhibitMounted(relZ)) return null;

  const { driftX, driftY, scale, opacity, inspectable } = exhibitMotion(
    relZ,
    x,
    y,
    motionKind,
  );
  const blocked = isBlockedByClosedGate(z, cameraZ);
  const canInspect =
    Boolean(onInspect) && inspectable && !blocked && opacity >= 0.2;
  const isFocusRange = canInspect && relZ >= -820 && relZ <= -160;

  const openInspect = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (canInspect && onInspect) onInspect();
  };

  return (
    <div
      aria-label={title || exhibitCode || "전시물"}
      data-exhibit-code={exhibitCode}
      data-motion-kind={motionKind}
      data-world-x={Math.round(x + driftX)}
      onClick={openInspect}
      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 preserve-3d ${
        canInspect ? "cursor-pointer" : ""
      } ${className}`}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        transform: `translate3d(${x + driftX}px, ${y + driftY}px, ${z}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(${scale})`,
        opacity,
        pointerEvents: canInspect ? "auto" : "none",
        zIndex: relZ < -80 ? 3 : 1,
      }}
    >
      <div className="relative group">
        <div
          className={
            canInspect && !bare
              ? "ring-1 ring-cyan-400/25 group-hover:shadow-[0_0_35px_rgba(0,240,255,0.28)]"
              : ""
          }
        >
          {children}
        </div>

        {canInspect && !hideInspectButton && (
          <button
            type="button"
            onClick={openInspect}
            className={`absolute -bottom-9 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-[11px] font-mono font-bold shadow-lg shadow-cyan-500/40 cursor-pointer ${
              isFocusRange ? "opacity-100" : "opacity-80"
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>{inspectLabel}</span>
          </button>
        )}

        {isFocusRange && !bare && (
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-36 h-1 bg-cyan-400/90 rounded-full blur-[2px] shadow-[0_0_25px_#00f0ff] pointer-events-none" />
        )}
      </div>
    </div>
  );
};

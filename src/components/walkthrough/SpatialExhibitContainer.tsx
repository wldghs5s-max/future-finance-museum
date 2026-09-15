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
  interactive?: boolean;
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
  interactive = false,
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
  const canPoint =
    !blocked && opacity >= 0.2 && (canInspect || interactive);
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
      data-motion-opacity={opacity.toFixed(3)}
      data-world-x={Math.round(x + driftX)}
      onClick={openInspect}
      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 preserve-3d ${
        canInspect ? "cursor-pointer" : ""
      } ${className}`}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        transform: `translate3d(${x + driftX}px, ${y + driftY}px, ${z}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(${scale})`,
        pointerEvents: canPoint ? "auto" : "none",
        zIndex: relZ < -80 ? 3 : 1,
      }}
    >
      <div className="relative group" style={{ opacity }}>
        {!bare && (
          <>
            <div
              className={`holo-lamp pointer-events-none ${
                isFocusRange ? "holo-lamp-focus" : ""
              }`}
              aria-hidden
            />
            <div className="holo-beam pointer-events-none" aria-hidden />
          </>
        )}
        <div
          className={
            canInspect && !bare
              ? "group-hover:brightness-110 transition-[filter] duration-300"
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
      </div>
    </div>
  );
};

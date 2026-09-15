import React from "react";
import { SpatialExhibitContainer } from "./SpatialExhibitContainer";
import { ExhibitWallHeader, ExhibitWallMetrics } from "./ExhibitWallMetrics";
import { exhibitHasDeepDetail, requireExhibit } from "../../data/walkthroughData";
import { generatedVisualFor } from "../../data/museumImages";
import { ExhibitConceptImage } from "./ExhibitConceptImage";
import { requirePose } from "../../data/spaceLayout";
import { directionHintFor, hallOpeningFor } from "../../data/hallDirections";

const ACCENT: Record<
  string,
  { box: string; badge: string; label: string }
> = {
  rose: {
    box: "holo-panel holo-panel-rose",
    badge: "bg-rose-950/70 border-rose-400/40 text-rose-100",
    label: "text-rose-200",
  },
  sky: {
    box: "holo-panel holo-panel-sky",
    badge: "bg-sky-950/70 border-sky-400/40 text-sky-100",
    label: "text-sky-200",
  },
  amber: {
    box: "holo-panel holo-panel-amber",
    badge: "bg-amber-950/70 border-amber-300/40 text-amber-100",
    label: "text-amber-200",
  },
  emerald: {
    box: "holo-panel holo-panel-emerald",
    badge: "bg-emerald-950/70 border-emerald-300/40 text-emerald-100",
    label: "text-emerald-200",
  },
  violet: {
    box: "holo-panel holo-panel-violet",
    badge: "bg-violet-950/70 border-violet-300/40 text-violet-100",
    label: "text-violet-200",
  },
  cyan: {
    box: "holo-panel holo-panel-cyan",
    badge: "bg-cyan-950/70 border-cyan-300/40 text-cyan-100",
    label: "text-cyan-200",
  },
};

interface DataExhibitProps {
  id: string;
  cameraZ: number;
  onInspect: (id: string) => void;
  accent?: keyof typeof ACCENT;
  metricCount?: number;
  onLobbyWarp?: () => void;
}

export const DataExhibit: React.FC<DataExhibitProps> = ({
  id,
  cameraZ,
  onInspect,
  accent = "sky",
  metricCount = 4,
  onLobbyWarp,
}) => {
  const exhibit = requireExhibit(id);
  const pose = requirePose(id);
  const theme = ACCENT[accent];
  const concept =
    id === "exhibit_lobby_monument" ? undefined : generatedVisualFor(id);
  const deep = exhibitHasDeepDetail(id);

  return (
    <SpatialExhibitContainer
      x={pose.x}
      y={pose.y}
      z={pose.z}
      rotateY={pose.rotateY}
      cameraZ={cameraZ}
      width={pose.width}
      title={exhibit.titleKo}
      exhibitCode={exhibit.code}
      interactive={Boolean(onLobbyWarp)}
      className={`holo-accent holo-accent-${accent}`}
      onInspect={deep ? () => onInspect(id) : undefined}
    >
      <div className={`p-6 ${theme.box}`}>
        <div className="flex items-center justify-between border-b border-white/15 pb-3 mb-3">
          <span
            className={`px-2 py-0.5 rounded border text-[10px] font-mono font-bold ${theme.badge}`}
          >
            {exhibit.code}
          </span>
        </div>
        {hallOpeningFor(id) && (
          <p className="text-[11px] text-white font-semibold leading-relaxed mb-3 px-2.5 py-2 rounded-xl holo-metric">
            {hallOpeningFor(id)}
          </p>
        )}
        {concept && <ExhibitConceptImage visual={concept} />}
        <ExhibitWallHeader
          exhibit={exhibit}
          accentClass={theme.label}
          hideSummary={Boolean(concept)}
        />
        {directionHintFor(id) && (
          <p className="text-[11px] text-slate-100 leading-relaxed mb-3">
            {directionHintFor(id)}
          </p>
        )}
        <ExhibitWallMetrics exhibit={exhibit} max={metricCount} />
        {onLobbyWarp && (
          <button
            type="button"
            data-testid="warp-to-lobby"
            onClick={(event) => {
              event.stopPropagation();
              onLobbyWarp();
            }}
            className="relative z-20 mt-4 w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold cursor-pointer pointer-events-auto"
          >
            로비로 워프하기
          </button>
        )}
      </div>
    </SpatialExhibitContainer>
  );
};

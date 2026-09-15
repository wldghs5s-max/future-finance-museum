import React from "react";
import { SpatialExhibitContainer } from "./SpatialExhibitContainer";
import { ExhibitWallHeader, ExhibitWallMetrics } from "./ExhibitWallMetrics";
import { exhibitHasDeepDetail, requireExhibit } from "../../data/walkthroughData";
import { visualsForExhibit } from "../../data/visualAssets";
import { generatedVisualFor } from "../../data/museumImages";
import { ExhibitConceptImage } from "./ExhibitConceptImage";
import { requirePose } from "../../data/spaceLayout";
import { directionHintFor, hallOpeningFor } from "../../data/hallDirections";

const ACCENT: Record<
  string,
  { box: string; badge: string; label: string }
> = {
  rose: {
    box: "bg-[#2a1014]/88 border-rose-400/55 group-hover:border-rose-300/90",
    badge: "bg-rose-950 border-rose-600 text-rose-200",
    label: "text-rose-300",
  },
  sky: {
    box: "bg-[#102038]/88 border-sky-400/50 group-hover:border-sky-300/90",
    badge: "bg-sky-950 border-sky-600 text-sky-200",
    label: "text-sky-300",
  },
  amber: {
    box: "bg-[#2a1c0c]/88 border-amber-400/50 group-hover:border-amber-300/90",
    badge: "bg-amber-950 border-amber-600 text-amber-200",
    label: "text-amber-300",
  },
  emerald: {
    box: "bg-[#0c241c]/88 border-emerald-400/50 group-hover:border-emerald-300/90",
    badge: "bg-emerald-950 border-emerald-600 text-emerald-200",
    label: "text-emerald-200",
  },
  violet: {
    box: "bg-[#1e1230]/88 border-violet-400/50 group-hover:border-violet-300/90",
    badge: "bg-violet-950 border-violet-600 text-violet-200",
    label: "text-violet-200",
  },
  cyan: {
    box: "bg-[#0c2438]/88 border-cyan-400/50 group-hover:border-cyan-300/90",
    badge: "bg-cyan-950 border-cyan-600 text-cyan-200",
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
  const hasVisual = visualsForExhibit(id).length > 0;
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
      onInspect={deep ? () => onInspect(id) : undefined}
    >
      <div
        className={`p-6 rounded-2xl border-2 shadow-2xl relative overflow-hidden transition-colors ${theme.box}`}
      >
        <div className="flex items-center justify-between border-b border-white/15 pb-3 mb-3">
          <span
            className={`px-2 py-0.5 rounded border text-[10px] font-mono font-bold ${theme.badge}`}
          >
            {exhibit.code}
          </span>
          {deep && (
            <span className={`text-[10px] font-sans ${theme.label}`}>
              표와 자세한 숫자는 상세에서
            </span>
          )}
        </div>
        {hallOpeningFor(id) && (
          <p className="text-[11px] text-white font-semibold leading-relaxed mb-3 px-2.5 py-2 rounded-xl bg-black/25 border border-white/15">
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
        {hasVisual && deep && (
          <p className="text-[10px] font-mono text-slate-400">
            수치 차트는 상세에서
          </p>
        )}
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

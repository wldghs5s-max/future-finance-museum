import React from "react";
import { SpatialExhibitContainer } from "./SpatialExhibitContainer";
import { requirePose } from "../../data/spaceLayout";
import {
  hallDirectionItems,
  hallSetByClosingId,
  InspectExhibitFn,
} from "../../data/hallDirections";

interface HallChoicesBoardProps {
  id: string;
  cameraZ: number;
  onInspect: InspectExhibitFn;
}

const TONE: Record<string, string> = {
  hall01: "border-rose-400/50 bg-[#2a1014]/90",
  hall02: "border-amber-400/50 bg-[#2a1c0c]/90",
  hall03: "border-emerald-400/50 bg-[#0c241c]/90",
  hall04: "border-violet-400/50 bg-[#1e1230]/90",
  hall05: "border-rose-300/50 bg-[#1c050c]/90",
};

export const HallChoicesBoard: React.FC<HallChoicesBoardProps> = ({
  id,
  cameraZ,
  onInspect,
}) => {
  const hall = hallSetByClosingId(id);
  const pose = requirePose(id);
  if (!hall) return null;
  const tone = TONE[hall.id] ?? "border-cyan-400/50 bg-[#0c2438]/90";
  const items = hallDirectionItems(hall);

  return (
    <SpatialExhibitContainer
      x={pose.x}
      y={pose.y}
      z={pose.z}
      rotateY={pose.rotateY}
      cameraZ={cameraZ}
      width={pose.width}
      title={hall.closingTitle}
      exhibitCode="대응 방향"
      onInspect={() => onInspect(id)}
    >
      <div className={`px-5 py-4 rounded-2xl border-2 shadow-2xl ${tone}`}>
        <h3 className="text-xl font-black text-white leading-snug">
          {hall.closingTitle}
        </h3>
        <p className="text-sm text-slate-100 leading-relaxed mt-2 mb-4">
          {hall.closingLead}
        </p>
        <ol className="relative border-l border-white/20 ml-2 space-y-2.5">
          {items.map((item, index) => (
            <li key={item.id} className="relative pl-4">
              <span className="absolute -left-[7px] top-2.5 h-3 w-3 rounded-full border border-cyan-200/70 bg-cyan-300/40" />
              <button
                type="button"
                data-direction-id={item.id}
                onClick={(event) => {
                  event.stopPropagation();
                  onInspect(id, item.id);
                }}
                className="w-full text-left rounded-lg px-2 py-1.5 -mx-2 hover:bg-white/10 cursor-pointer"
              >
                <span className="font-mono text-[11px] text-cyan-200/90 mr-2">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-bold text-white leading-snug">
                  {item.title}
                </span>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </SpatialExhibitContainer>
  );
};

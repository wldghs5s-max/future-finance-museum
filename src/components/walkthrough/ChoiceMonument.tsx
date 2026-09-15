import React from "react";
import { SpatialExhibitContainer } from "./SpatialExhibitContainer";
import { generatedVisualFor } from "../../data/museumImages";
import { requirePose } from "../../data/spaceLayout";

interface ChoiceMonumentProps {
  cameraZ: number;
}

export const ChoiceMonument: React.FC<ChoiceMonumentProps> = ({ cameraZ }) => {
  const pose = requirePose("exhibit_lobby_monument");
  const visual = generatedVisualFor("exhibit_lobby_monument");

  if (!visual) return null;

  return (
    <SpatialExhibitContainer
      x={pose.x}
      y={pose.y}
      z={pose.z}
      rotateY={pose.rotateY}
      cameraZ={cameraZ}
      width={pose.width}
      title="선택의 자리"
      exhibitCode="MONUMENT 00"
      bare
    >
      <div className="relative flex flex-col items-center">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-64 h-20 bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.22)_0%,_transparent_72%)] pointer-events-none" />
        <div
          className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-[#070d16]"
          style={{ aspectRatio: visual.aspect }}
        >
          <img
            src={visual.src}
            alt={visual.alt}
            width={1448}
            height={1086}
            className="absolute inset-0 h-full w-full object-contain"
          />
        </div>
        <div className="mt-3 w-[94%] rounded-xl bg-[#071018]/88 border border-white/10 px-4 py-3 text-center">
          <h3 className="text-base font-black text-white mb-1">선택의 자리</h3>
          <p className="text-xs text-slate-200 leading-relaxed">
            인구·복지·환경·AI·재정전망·정책 선택. 여섯 이야기는 우리가 함께
            살아갈 미래로 이어집니다.
          </p>
        </div>
      </div>
    </SpatialExhibitContainer>
  );
};

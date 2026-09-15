import React from "react";
import { SpatialExhibitContainer } from "./SpatialExhibitContainer";
import { generatedVisualFor } from "../../data/museumImages";
import { requireExhibit } from "../../data/walkthroughData";
import { requirePose } from "../../data/spaceLayout";

interface CorridorSceneProps {
  id: string;
  cameraZ: number;
}

export const CorridorScene: React.FC<CorridorSceneProps> = ({ id, cameraZ }) => {
  const exhibit = requireExhibit(id);
  const pose = requirePose(id);
  const visual = generatedVisualFor(id);

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
      motionKind="corridor"
      bare
    >
      <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#071018]/90 shadow-2xl">
        {visual && (
          <div className="relative bg-[#070d16]" style={{ aspectRatio: visual.aspect }}>
            <img
              src={visual.src}
              alt={visual.alt}
              width={1376}
              height={768}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        )}
        <div className="px-4 py-3">
          <h3 className="text-base font-black text-white mb-1">{exhibit.titleKo}</h3>
          <p className="text-xs text-slate-200 leading-relaxed">{exhibit.summary}</p>
        </div>
      </div>
    </SpatialExhibitContainer>
  );
};

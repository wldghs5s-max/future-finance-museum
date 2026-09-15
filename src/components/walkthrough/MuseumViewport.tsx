import React from "react";
import { MuseumArchitecture } from "./MuseumArchitecture";
import { MuseumPortals } from "./MuseumPortals";
import { GrandLobbyExhibits } from "./GrandLobbyExhibits";
import { Hall01Exhibits } from "./Hall01Exhibits";
import { Hall02Exhibits } from "./Hall02Exhibits";
import { Hall03Exhibits } from "./Hall03Exhibits";
import { Hall04Exhibits } from "./Hall04Exhibits";
import { Hall05Exhibits } from "./Hall05Exhibits";
import { Hall06Exhibits } from "./Hall06Exhibits";
import { Mouse, ArrowDown, Eye } from "lucide-react";

interface MuseumViewportProps {
  cameraZ: number;
  lookRotateY?: number;
  lookRotateX?: number;
  onInspectExhibit: (exhibitId: string, directionId?: string) => void;
  onOpenSimulationModal: () => void;
  onWarpToLobby: () => void;
}

export const MuseumViewport: React.FC<MuseumViewportProps> = ({
  cameraZ,
  lookRotateY = 0,
  lookRotateX = 0,
  onInspectExhibit,
  onOpenSimulationModal,
  onWarpToLobby,
}) => {
  const showWalkHint = cameraZ < 800;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#07111f] text-slate-100 select-none">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#16325a]/45 via-[#0a1628]/75 to-[#060d18]" />

      <div
        className="w-full h-full preserve-3d pointer-events-none"
        style={{
          perspective: "1050px",
          perspectiveOrigin: "50% 48%",
        }}
      >
        <div
          className="w-full h-full preserve-3d pointer-events-none"
          style={{
            transform: `rotateY(${lookRotateY}deg) rotateX(${lookRotateX}deg)`,
            transformOrigin: "50% 48%",
          }}
        >
          <div
            className="w-full h-full preserve-3d pointer-events-none"
            style={{
              transform: `translate3d(0px, 0px, ${cameraZ}px)`,
            }}
          >
            <MuseumArchitecture cameraZ={cameraZ} />
            <MuseumPortals cameraZ={cameraZ} />

            <GrandLobbyExhibits
              cameraZ={cameraZ}
              onInspect={onInspectExhibit}
            />
            <Hall01Exhibits cameraZ={cameraZ} onInspect={onInspectExhibit} />
            <Hall02Exhibits cameraZ={cameraZ} onInspect={onInspectExhibit} />
            <Hall03Exhibits cameraZ={cameraZ} onInspect={onInspectExhibit} />
            <Hall04Exhibits cameraZ={cameraZ} onInspect={onInspectExhibit} />
            <Hall05Exhibits cameraZ={cameraZ} onInspect={onInspectExhibit} />
            <Hall06Exhibits
              cameraZ={cameraZ}
              onInspect={onInspectExhibit}
              onOpenSimulationModal={onOpenSimulationModal}
              onWarpToLobby={onWarpToLobby}
            />
          </div>
        </div>
      </div>

      {showWalkHint && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 pointer-events-none animate-fade-in transition-opacity duration-700 flex flex-col sm:flex-row items-center gap-2">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#071126]/90 border border-cyan-500/40 text-xs font-mono text-cyan-300 shadow-xl backdrop-blur-md">
            <Mouse className="w-4 h-4 text-cyan-400 animate-bounce" />
            <span>마우스 휠을 아래로 굴려 전진 / 위로 굴려 후진</span>
            <ArrowDown className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#071126]/75 border border-slate-700/60 text-[11px] font-mono text-slate-300 backdrop-blur-md">
            <Eye className="w-3.5 h-3.5 text-cyan-400" />
            <span>마우스를 좌우로 움직여 벽면 둘러보기</span>
          </div>
        </div>
      )}
    </div>
  );
};

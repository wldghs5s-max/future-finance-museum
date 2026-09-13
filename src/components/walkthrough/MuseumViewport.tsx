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
import { ExitLoungeExhibits } from "./ExitLoungeExhibits";
import { Mouse, ArrowDown, Eye } from "lucide-react";

import { SimulationResult } from "../../data/simulationData";

interface MuseumViewportProps {
  cameraZ: number;
  lookRotateY?: number;
  lookRotateX?: number;
  onInspectExhibit: (exhibitId: string) => void;
  selectedPolicies: Set<string>;
  simulationResult: SimulationResult;
  onOpenSimulationModal: () => void;
}

export const MuseumViewport: React.FC<MuseumViewportProps> = ({
  cameraZ,
  lookRotateY = 0,
  lookRotateX = 0,
  onInspectExhibit,
  selectedPolicies,
  simulationResult,
  onOpenSimulationModal,
}) => {
  // 사용자가 아직 초반(Z < 800)에 있을 때 보행 및 시선 안내 힌트 노출
  const showWalkHint = cameraZ < 800;

  return (
    <div className="fixed inset-0 overflow-hidden bg-[#030611] text-slate-100 select-none">
      {/* 1. 박물관 깊이에 따른 은은한 앰비언트 광원 (Atmospheric Museum Lighting) */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#091533]/40 via-[#040817]/70 to-[#02040b]" />

      {/* 2. 원근 뷰포트 (CSS Perspective 1050px, 사람 눈높이 50% 48% 안정 고정) */}
      <div
        className="w-full h-full preserve-3d"
        style={{
          perspective: "1050px",
          perspectiveOrigin: "50% 48%",
        }}
      >
        {/* 3. Camera Look Gimbal: 카메라 위치는 고정하고 시선 방향만 회전 (고개만 둘러봄) */}
        <div
          className="w-full h-full preserve-3d will-change-transform"
          style={{
            transform: `rotateY(${lookRotateY}deg) rotateX(${lookRotateX}deg)`,
            transformOrigin: "50% 48%",
          }}
        >
          {/* 4. Museum World Rail: 순수 Z축 보행 레일 (X, Y 위치 변동 없음) */}
          <div
            className="w-full h-full preserve-3d will-change-transform"
            style={{
              transform: `translate3d(0px, 0px, ${cameraZ}px)`,
            }}
          >
            {/* 연속 2.5D 건축 구조물 (바닥 타일, 천장 조명, 회랑 벽면) */}
            <MuseumArchitecture cameraZ={cameraZ} />

            {/* 환경 반응형 자동 개방 게이트 및 전이 아치 (총 8개 게이트) */}
            <MuseumPortals cameraZ={cameraZ} />

            {/* 01 & 02. 그랜드 로비 전시물 (설립취지 월, 중앙 조형물, 디렉토리 월) */}
            <GrandLobbyExhibits
              cameraZ={cameraZ}
              onInspect={onInspectExhibit}
            />

            {/* 03 & 04. HALL 01 전시물 & 회랑 01 사이니지 (2072 월, 25년 타임필러, 사회변화 키오스크, 회랑 01) */}
            <Hall01Exhibits cameraZ={cameraZ} onInspect={onInspectExhibit} />

            {/* 05 & 06. HALL 02 전시물 & 회랑 02 사이니지 (국민연금 소진 월, 개혁 역사 패널, OECD 31.6% & 건보 경보, 회랑 02) */}
            <Hall02Exhibits cameraZ={cameraZ} onInspect={onInspectExhibit} />

            {/* 07 & 08. HALL 03 전시물 & 회랑 03 사이니지 (기후 3단계 챔버, 무탄소 70.7% 타워, CBAM & 기후기금, 회랑 03) */}
            <Hall03Exhibits cameraZ={cameraZ} onInspect={onInspectExhibit} />

            {/* 09 & 10. HALL 04 전시물 & 회랑 04 사이니지 (AI 예산 & GPU 타임라인, KDI 자동화율 월, 4대 지표 순위 월, 회랑 04) */}
            <Hall04Exhibits cameraZ={cameraZ} onInspect={onInspectExhibit} />

            {/* 11 & 12. HALL 05 전시물 & 회랑 05 사이니지 (2072 채무 173% 파노라마, 악어의 입 조형물, 60-3 준칙 패널, 회랑 05) */}
            <Hall05Exhibits cameraZ={cameraZ} onInspect={onInspectExhibit} />

            {/* 13. HALL 06 전시물 (2055 메인 콘솔, 미래세대 화면, 15개 정책 선택형 콘솔, 3 Stars 리포트) */}
            <Hall06Exhibits
              cameraZ={cameraZ}
              onInspect={onInspectExhibit}
              selectedPolicies={selectedPolicies}
              simulationResult={simulationResult}
              onOpenSimulationModal={onOpenSimulationModal}
            />

            {/* 14. MUSEUM EXIT 전시 관람 종료 라운지 (종합 회고, 공식 데이터 출처, HUD 도면 안내) */}
            <ExitLoungeExhibits
              cameraZ={cameraZ}
              onInspect={onInspectExhibit}
            />
          </div>
        </div>
      </div>

      {/* 4. 하단 보행 및 둘러보기 안내 힌트 */}
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

      {/* 5. 우측 하단 미세 좌표 HUD */}
      <div className="fixed bottom-3 right-4 z-30 pointer-events-none text-[10px] font-mono text-slate-500 bg-slate-950/60 px-2.5 py-1 rounded border border-slate-800 backdrop-blur-sm flex items-center gap-2">
        <span>
          CAM_Z:{" "}
          <strong className="text-cyan-400">{Math.round(cameraZ)}px</strong>
        </span>
        <span>|</span>
        <span>
          LOOK:{" "}
          <strong className="text-slate-400">{lookRotateY.toFixed(1)}°</strong>
        </span>
      </div>
    </div>
  );
};

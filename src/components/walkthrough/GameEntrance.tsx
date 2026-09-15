import React from "react";
import { SpatialExhibitContainer } from "./SpatialExhibitContainer";
import { requirePose } from "../../data/spaceLayout";

interface GameEntranceProps {
  cameraZ: number;
  onStart: () => void;
}

export const GameEntrance: React.FC<GameEntranceProps> = ({
  cameraZ,
  onStart,
}) => {
  const pose = requirePose("exhibit_6c");

  return (
    <SpatialExhibitContainer
      x={pose.x}
      y={pose.y}
      z={pose.z}
      rotateY={pose.rotateY}
      cameraZ={cameraZ}
      width={pose.width}
      title="나라살림게임"
      exhibitCode="CONSOLE 6-C"
      hideInspectButton
      onInspect={onStart}
    >
      <div
        className="rounded-2xl overflow-hidden border-2 border-cyan-300/70 bg-[#0b1828] shadow-[0_0_40px_rgba(34,211,238,0.22)] cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          onStart();
        }}
      >
        <div className="relative aspect-video bg-[#070d16]">
          <img
            src="/images/museum/corridor-table.jpg"
            alt="미니어처 도시가 올려진 나라살림게임 테이블"
            width={1376}
            height={768}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-x-8 bottom-[18%] h-1 overflow-hidden">
            <span className="absolute left-0 top-0 h-full w-16 rounded-full bg-amber-200/80 blur-[1px] animate-[pulse_2.4s_ease-in-out_infinite]" />
          </div>
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-cyan-500 text-slate-950 text-[11px] font-black">
            직접 해보기
          </div>
        </div>
        <div className="px-5 py-4 space-y-3">
          <div>
            <p className="text-[10px] font-mono tracking-[0.2em] text-cyan-300 mb-1">
              나라살림게임
            </p>
            <h3 className="text-xl font-black text-white">이 도시의 살림을 맡아 보세요</h3>
            <p className="text-sm text-slate-200 mt-1.5 leading-relaxed">
              세금을 줄이면서 씀씀이를 키우면 다음 세대가 갚을 짐이 커질 수
              있습니다. 여섯 라운드 동안 세금, 투자, 운영과 부담을 고르며
              그 상충을
              살펴봅니다.
            </p>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onStart();
            }}
            className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold cursor-pointer"
          >
            게임 시작
          </button>
        </div>
      </div>
    </SpatialExhibitContainer>
  );
};

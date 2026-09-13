import React from "react";
import { SpatialExhibitContainer } from "./SpatialExhibitContainer";
import { Building2, Compass, Layers, Sparkles } from "lucide-react";

interface GrandLobbyExhibitsProps {
  cameraZ: number;
  onInspect: (exhibitId: string) => void;
}

export const GrandLobbyExhibits: React.FC<GrandLobbyExhibitsProps> = ({
  cameraZ,
  onInspect,
}) => {
  return (
    <>
      {/* ========================================================
          1. LOBBY LEFT WALL: 박물관 설립 취지 사이니지 월 (클릭 시 상세)
          X = -460px, Z = -1300px, RotY = 18deg
          ======================================================== */}
      <SpatialExhibitContainer
        x={-460}
        y={-10}
        z={-1300}
        rotateY={18}
        cameraZ={cameraZ}
        width={460}
        title="박물관 설립 취지 사이니지"
        exhibitCode="INTRO 00"
        onInspect={() => onInspect("exhibit_lobby_intro")}
      >
        <div className="p-6 rounded-2xl bg-[#091024]/90 border border-cyan-500/30 shadow-2xl backdrop-blur-md relative overflow-hidden group-hover:border-cyan-400/80 transition-colors">
          <div className="flex items-center justify-between mb-3 text-xs font-mono text-cyan-400">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-cyan-400" />
              <span className="tracking-widest uppercase">
                MUSEUM PHILOSOPHY
              </span>
            </div>
            <span className="text-[10px] text-cyan-400/70 font-sans">
              클릭하여 전체 취지 보기
            </span>
          </div>

          <h3 className="text-xl font-bold text-white font-mono mb-2">
            재정미래박물관 건립 취지
          </h3>

          <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
            대한민국의 미래를{" "}
            <strong className="text-cyan-300">
              인구, 복지·연금, 환경, AI, 장기재정
            </strong>
            의 5대 핵심 축에서 조망하고, 미래세대를 위한 재정의 지속가능성과
            사회적 연대를 모색하는 가상 사이버네틱 건축 공간입니다.
          </p>

          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span>OFFICIAL ARCHIVE</span>
            <span className="text-cyan-400">DATA VERIFIED</span>
          </div>
        </div>
      </SpatialExhibitContainer>

      {/* ========================================================
          2. LOBBY CENTER: 국가재정 미래를 상징하는 중앙 조형물 (클릭 시 상세)
          X = 0px, Y = +60px, Z = -1700px (독립 바닥 3D 기념비)
          ======================================================== */}
      <SpatialExhibitContainer
        x={0}
        y={60}
        z={-1700}
        rotateY={0}
        cameraZ={cameraZ}
        width={480}
        title="국가재정 미래를 상징하는 중앙 조형물"
        exhibitCode="MONUMENT 00"
        onInspect={() => onInspect("exhibit_lobby_monument")}
      >
        <div className="relative flex flex-col items-center">
          {/* 상단 홀로그램 코어 (Holographic Core) */}
          <div className="w-32 h-32 rounded-3xl bg-gradient-to-tr from-cyan-600/30 via-sky-400/20 to-transparent border-2 border-cyan-400/70 backdrop-blur-md shadow-[0_0_60px_rgba(0,240,255,0.4)] flex flex-col items-center justify-center relative mb-4 animate-pulse">
            <div className="w-16 h-16 rounded-full border border-cyan-300/60 border-dashed animate-spin flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-cyan-300" />
            </div>
            <span className="text-[9px] font-mono text-cyan-200 tracking-widest mt-1 uppercase">
              FISCAL CORE
            </span>
          </div>

          {/* 중앙 조형물 물리적 받침대 (Layered Metallic Pedestal) */}
          <div className="w-full p-6 rounded-2xl bg-gradient-to-b from-[#0b1530] to-[#040813] border-2 border-cyan-500/40 shadow-2xl text-center relative group-hover:border-cyan-400/80 transition-colors">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-600 text-[10px] font-mono text-cyan-300 mb-2">
              <Layers className="w-3 h-3 text-cyan-400" />
              <span>CENTRAL ARCHITECTURAL MONUMENT</span>
            </div>

            <h4 className="text-lg font-black text-white font-mono tracking-tight mb-1">
              국가재정 미래를 상징하는 중앙 조형물
            </h4>

            <p className="text-[11px] text-slate-400 font-sans max-w-sm mx-auto leading-relaxed">
              세대 간 신뢰와 재정 균형의 영속성을 상징하는 로비 중앙
              설치물입니다.
            </p>

            <div className="mt-3 pt-2.5 border-t border-slate-800 text-[10px] font-mono text-slate-500 flex items-center justify-around">
              <span>기획재정부 & 국회예산정책처</span>
              <span>•</span>
              <span className="text-cyan-400">PERI 미래재정모델</span>
            </div>
          </div>

          {/* 바닥 조명 반사판 (Floor Light Ring) */}
          <div className="w-72 h-10 rounded-full bg-cyan-500/20 blur-xl mt-[-10px]" />
        </div>
      </SpatialExhibitContainer>

      {/* ========================================================
          3. LOBBY RIGHT WALL: 6대 전시관 디렉토리 안내 패널 (우측 전시물 클릭 시 상세)
          X = +460px, Z = -1300px, RotY = -18deg
          ======================================================== */}
      <SpatialExhibitContainer
        x={460}
        y={-10}
        z={-1300}
        rotateY={-18}
        cameraZ={cameraZ}
        width={460}
        title="전시관 디렉토리 월"
        exhibitCode="GUIDE 00"
        onInspect={() => onInspect("exhibit_lobby_directory")}
      >
        <div className="p-6 rounded-2xl bg-[#091024]/90 border border-cyan-500/30 shadow-2xl backdrop-blur-md relative group-hover:border-cyan-400/80 transition-colors">
          <div className="flex items-center justify-between mb-3 text-xs font-mono text-cyan-400">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-cyan-400" />
              <span className="tracking-widest uppercase">
                MUSEUM DIRECTORY
              </span>
            </div>
            <span className="text-[10px] text-cyan-400/70 font-sans">
              클릭하여 전체 안내 보기
            </span>
          </div>

          <h3 className="text-xl font-bold text-white font-mono mb-3">
            6대 미래 전시관 관람 안내
          </h3>

          <div className="space-y-1.5 text-xs font-mono">
            <div className="p-2 rounded bg-slate-900/80 border border-slate-800 text-sky-300 flex items-center justify-between">
              <span>HALL 01: 인구변화 전시장</span>
              <span className="text-[10px] text-slate-500">2072 추계</span>
            </div>
            <div className="p-2 rounded bg-slate-900/80 border border-slate-800 text-amber-300 flex items-center justify-between">
              <span>HALL 02: 복지 및 연금 전시장</span>
              <span className="text-[10px] text-slate-500">2065/2069 소진</span>
            </div>
            <div className="p-2 rounded bg-slate-900/80 border border-slate-800 text-emerald-300 flex items-center justify-between">
              <span>HALL 03: 환경 문제 전시장</span>
              <span className="text-[10px] text-slate-500">
                기후 3단계 시나리오
              </span>
            </div>
            <div className="p-2 rounded bg-slate-900/80 border border-slate-800 text-purple-300 flex items-center justify-between">
              <span>HALL 04: AI 기술 전시장</span>
              <span className="text-[10px] text-slate-500">
                GPU 인프라 & 자동화
              </span>
            </div>
            <div className="p-2 rounded bg-slate-900/80 border border-slate-800 text-rose-300 flex items-center justify-between">
              <span>HALL 05: 장기재정전망 전시장</span>
              <span className="text-[10px] text-slate-500">
                악어의 입 조형물
              </span>
            </div>
            <div className="p-2 rounded bg-slate-900/80 border border-slate-800 text-cyan-300 flex items-center justify-between">
              <span>HALL 06: 나라살림게임 시뮬레이션 랩</span>
              <span className="text-[10px] text-slate-500">
                정책 탐색 터미널
              </span>
            </div>
          </div>
        </div>
      </SpatialExhibitContainer>
    </>
  );
};

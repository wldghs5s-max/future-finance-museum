import React from "react";
import { SpatialZoneId } from "../types/spatial";
import {
  Footprints,
  Sparkles,
  ArrowRight,
  Layers,
  Compass,
  Users,
  ShieldCheck,
  Leaf,
  Cpu,
  TrendingUp,
  Gamepad2,
} from "lucide-react";

interface LobbySectionProps {
  onNavigate: (zoneId: SpatialZoneId) => void;
  visitedZones: Set<SpatialZoneId>;
}

export const LobbySection: React.FC<LobbySectionProps> = ({
  onNavigate,
  visitedZones,
}) => {
  return (
    <div className="relative min-h-[92vh] flex flex-col justify-between py-10 px-4 sm:px-6 lg:px-8 overflow-hidden museum-viewport animate-fade-in">
      {/* 1. 천장 돔 앰비언트 라이트 (Ceiling Dome Beam) */}
      <div className="absolute top-0 left-0 right-0 h-48 museum-ceiling pointer-events-none opacity-40 light-beam-ceiling" />

      {/* 2. 로비 메인 홀 중앙 영역: 국가재정 미래를 상징하는 중앙 조형물 */}
      <div className="relative z-10 max-w-5xl mx-auto w-full text-center pt-6 pb-10">
        {/* 상단 웰컴 사이니지 */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono tracking-widest text-cyan-300 uppercase mb-6 shadow-lg glow-cyan">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
          <span>MUSEUM GRAND ROTUNDA & LOBBY</span>
        </div>

        {/* 박물관 명칭 */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-4 leading-none font-mono">
          재정미래박물관{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
            | 중앙 로비
          </span>
        </h1>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-light leading-relaxed mb-10 font-sans">
          시공간 포탈을 통과하여 대한민국 재정미래관 메인 로비에 입장하셨습니다.
          <br className="hidden sm:inline" />
          중앙 조형물을 중심으로 6대 상설 전시관이 회랑으로 연결되어 있습니다.
        </p>

        {/* 국가재정 미래를 상징하는 중앙 조형물 (건축적 공간 연출 요소) */}
        <div className="max-w-2xl mx-auto rounded-3xl bg-gradient-to-b from-slate-900/95 via-[#08132e]/90 to-[#030612]/95 border-2 border-cyan-500/40 p-8 shadow-2xl shadow-cyan-950/80 backdrop-blur-xl relative overflow-hidden group">
          {/* 중앙 발광 링 효과 */}
          <div className="w-24 h-24 rounded-full border-2 border-dashed border-cyan-400/80 animate-spin-slow mx-auto flex items-center justify-center mb-6 glow-cyan">
            <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center">
              <Compass className="w-8 h-8 text-cyan-300 animate-pulse" />
            </div>
          </div>

          <div className="relative z-10">
            <span className="text-[10px] font-mono tracking-[0.3em] text-cyan-400 uppercase block mb-1">
              CENTRAL MONUMENT
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-3 font-mono">
              국가재정 미래를 상징하는 중앙 조형물
            </h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed font-sans mb-6">
              인구, 복지, 환경, AI, 장기재정의 거대한 파도가 교차하는 대한민국
              미래의 기로를 형상화한 로비 중심 건축 조형물입니다.
            </p>

            {/* 관람 시작하기 (첫 번째 전시장 Hall 01로 발걸음 옮기기) */}
            <button
              onClick={() => {
                onNavigate("hall_01");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono font-bold text-sm tracking-wider uppercase transition shadow-xl shadow-cyan-500/30 flex items-center justify-center gap-2 mx-auto cursor-pointer hover:scale-105"
            >
              <Footprints className="w-4 h-4" />
              <span>관람 동선 따라 Hall 01 입장하기</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. 6대 전시관 방향 안내 사이니지 (Directional Signage) */}
      <div className="relative z-10 max-w-6xl mx-auto w-full mb-8">
        <div className="flex items-center justify-between mb-4 px-2 border-b border-slate-800 pb-2">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            전시관 방향 표지판 (EXHIBITION SIGNAGE)
          </span>
          <span className="text-[11px] font-mono text-slate-500">
            동선: HALL 01 → CORRIDOR → HALL 06
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            {
              id: "hall_01" as SpatialZoneId,
              num: "01",
              name: "인구의 미래",
              icon: <Users className="w-4 h-4 text-sky-400" />,
            },
            {
              id: "hall_02" as SpatialZoneId,
              num: "02",
              name: "복지와 연금",
              icon: <ShieldCheck className="w-4 h-4 text-amber-400" />,
            },
            {
              id: "hall_03" as SpatialZoneId,
              num: "03",
              name: "환경의 미래",
              icon: <Leaf className="w-4 h-4 text-emerald-400" />,
            },
            {
              id: "hall_04" as SpatialZoneId,
              num: "04",
              name: "AI의 미래",
              icon: <Cpu className="w-4 h-4 text-purple-400" />,
            },
            {
              id: "hall_05" as SpatialZoneId,
              num: "05",
              name: "장기재정전망",
              icon: <TrendingUp className="w-4 h-4 text-rose-400" />,
            },
            {
              id: "hall_06" as SpatialZoneId,
              num: "06",
              name: "나라살림게임",
              icon: <Gamepad2 className="w-4 h-4 text-cyan-400" />,
            },
          ].map((item) => {
            const isVisited = visitedZones.has(item.id);

            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-left transition cursor-pointer flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-cyan-400 font-bold">
                    HALL {item.num}
                  </span>
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white group-hover:text-cyan-300 transition">
                    {item.name}
                  </h4>
                  <span className="text-[10px] font-mono text-slate-500 mt-1 block">
                    {isVisited ? "✓ 방문완료" : "입장 대기"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. 원형 바닥 타일 원근 그리드 (Floor Perspective) */}
      <div className="absolute bottom-0 left-0 right-0 h-64 museum-floor pointer-events-none opacity-50" />
    </div>
  );
};

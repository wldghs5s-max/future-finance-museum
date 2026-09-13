import React from "react";
import { Map, RotateCcw, BookOpen, Compass } from "lucide-react";

interface MuseumMinimalHUDProps {
  currentZoneNameKo: string;
  currentZoneNameEn: string;
  progress: number;
  onOpenMap: () => void;
  onOpenGlossary: () => void;
  onReplayPortal: () => void;
}

export const MuseumMinimalHUD: React.FC<MuseumMinimalHUDProps> = ({
  currentZoneNameKo,
  currentZoneNameEn,
  progress,
  onOpenMap,
  onOpenGlossary,
  onReplayPortal,
}) => {
  const percent = Math.round(progress * 100);

  return (
    <aside
      aria-label="박물관 관람 안내 HUD"
      className="fixed top-0 left-0 right-0 z-40 pointer-events-none p-4 sm:p-6 flex flex-col gap-2"
    >
      {/* 상단 미니멀 HUD 바 */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-4 pointer-events-auto">
        {/* 좌측: 현재 박물관 위치 사이니지 */}
        <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#050811]/90 border border-cyan-500/30 backdrop-blur-md shadow-lg shadow-black/40">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse glow-cyan" />
          <div className="flex items-center gap-1.5 text-xs font-mono">
            <span className="text-slate-400 font-normal hidden sm:inline">
              재정미래관
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-white font-bold tracking-wide">
              {currentZoneNameKo}
            </span>
          </div>
          <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/60 hidden md:inline">
            {currentZoneNameEn}
          </span>
        </div>

        {/* 중앙: 관람 진행도 바 */}
        <div className="hidden lg:flex items-center gap-3 px-4 py-2 rounded-full bg-[#050811]/80 border border-slate-800 backdrop-blur-md">
          <Compass className="w-3.5 h-3.5 text-cyan-400" />
          <div className="w-36 h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-emerald-400 rounded-full transition-all duration-300"
              style={{ width: `${Math.max(percent, 5)}%` }}
            />
          </div>
          <span className="text-[11px] font-mono text-cyan-300 font-bold">
            {percent}% PROGRESSED
          </span>
        </div>

        {/* 우측 컨트롤 (용어사전, 포탈 영상, MUSEUM MAP) */}
        {/* "앞으로가기" 버튼은 사용자 지침에 따라 전면 삭제되었습니다. */}
        <div className="flex items-center gap-2">
          {/* 용어사전 버튼 */}
          <button
            onClick={onOpenGlossary}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#050811]/90 hover:bg-slate-900 border border-slate-800 hover:border-amber-500/40 text-slate-300 hover:text-amber-300 text-xs font-medium transition cursor-pointer backdrop-blur-md shadow-md"
            title="재정 핵심 용어 안내판"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline font-sans">용어사전</span>
          </button>

          {/* 포탈 다시보기 버튼 */}
          <button
            onClick={onReplayPortal}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#050811]/90 hover:bg-slate-900 border border-slate-800 hover:border-sky-500/40 text-slate-300 hover:text-sky-300 text-xs font-medium transition cursor-pointer backdrop-blur-md shadow-md"
            title="미래포탈 영상 다시보기"
          >
            <RotateCcw className="w-3.5 h-3.5 text-sky-400" />
            <span className="hidden sm:inline font-sans">포탈 영상</span>
          </button>

          {/* MUSEUM MAP 도면 버튼 (도면 모달) */}
          <button
            onClick={onOpenMap}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-cyan-950/90 hover:bg-cyan-900 border border-cyan-500/50 hover:border-cyan-400 text-cyan-300 hover:text-white text-xs font-mono font-bold tracking-wider uppercase transition cursor-pointer backdrop-blur-md shadow-md shadow-cyan-950/40 glow-cyan"
            title="전체 박물관 도면"
          >
            <Map className="w-3.5 h-3.5 text-cyan-400" />
            <span>MUSEUM MAP</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

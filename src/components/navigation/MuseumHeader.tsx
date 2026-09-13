import React, { useState } from "react";
import { SectionId } from "../../types/museum";
import { MUSEUM_SECTIONS } from "../../data/museumData";
import { ExhibitionProgress } from "./ExhibitionProgress";
import {
  Building2,
  RotateCcw,
  BookOpen,
  Gamepad2,
  Menu,
  X,
  Compass,
} from "lucide-react";

interface MuseumHeaderProps {
  currentSection: SectionId;
  visitedSections: Set<SectionId>;
  onSelectSection: (id: SectionId) => void;
  onReplayPortal: () => void;
  onOpenGlossary: () => void;
}

export const MuseumHeader: React.FC<MuseumHeaderProps> = ({
  currentSection,
  visitedSections,
  onSelectSection,
  onReplayPortal,
  onOpenGlossary,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentMeta =
    MUSEUM_SECTIONS.find((s) => s.id === currentSection) || MUSEUM_SECTIONS[0];

  const handleNavClick = (id: SectionId) => {
    onSelectSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-cyan-500/20 bg-[#050811]/90 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* 1. 좌측 로고 및 브랜드 */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick("lobby")}
            className="flex items-center gap-2.5 group cursor-pointer text-left"
          >
            <div className="w-9 h-9 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:glow-cyan transition">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold tracking-tight text-white group-hover:text-cyan-300 transition">
                  재정미래관
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/60">
                  모두의 재정
                </span>
              </div>
              <p className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">
                FUTURE FISCAL MUSEUM
              </p>
            </div>
          </button>
        </div>

        {/* 2. 중앙 현재 전시관 표시기 (데스크톱) */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800">
          <Compass className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
          <span className="text-xs font-mono text-slate-400">LOCATION:</span>
          <span className="text-xs font-mono font-bold text-white tracking-wide">
            {currentMeta.number} {currentMeta.titleKo}
          </span>
          <span className="text-[10px] font-mono text-cyan-400/80">
            ({currentMeta.code})
          </span>
        </div>

        {/* 3. 우측 컨트롤 (진행률, 포탈 다시보기, 용어사전, 시뮬레이션 바로가기) */}
        <div className="hidden md:flex items-center gap-3">
          <ExhibitionProgress
            currentSection={currentSection}
            visitedSections={visitedSections}
            onSelectSection={handleNavClick}
          />

          <button
            onClick={onOpenGlossary}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-700/60 text-xs font-medium transition cursor-pointer"
            title="핵심 재정 용어사전"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>용어사전</span>
          </button>

          <button
            onClick={onReplayPortal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 text-xs font-medium transition cursor-pointer"
            title="미래포탈 영상 다시보기"
          >
            <RotateCcw className="w-3.5 h-3.5 text-sky-400" />
            <span>포탈 영상</span>
          </button>

          {currentSection !== "game" && (
            <button
              onClick={() => handleNavClick("game")}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 hover:text-white border border-cyan-500/50 text-xs font-bold transition glow-cyan cursor-pointer"
            >
              <Gamepad2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>나라살림게임</span>
            </button>
          )}
        </div>

        {/* 4. 모바일 햄버거 토글 버튼 */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenGlossary}
            className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-amber-400 text-xs cursor-pointer"
            title="용어사전"
          >
            <BookOpen className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white cursor-pointer"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-[#070c1e] px-4 py-4 space-y-3 animate-fade-in">
          <div className="pb-3 border-b border-slate-800">
            <ExhibitionProgress
              currentSection={currentSection}
              visitedSections={visitedSections}
              onSelectSection={handleNavClick}
            />
          </div>

          <div className="grid grid-cols-1 gap-1.5">
            {MUSEUM_SECTIONS.map((sec) => (
              <button
                key={sec.id}
                onClick={() => handleNavClick(sec.id)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium text-left transition ${
                  currentSection === sec.id
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold"
                    : "text-slate-300 hover:bg-slate-900"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-cyan-400">{sec.number}</span>
                  <span>{sec.titleKo}</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">
                  {sec.code}
                </span>
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800 flex items-center justify-between gap-2">
            <button
              onClick={() => {
                onReplayPortal();
                setMobileMenuOpen(false);
              }}
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 text-slate-300 text-xs border border-slate-800"
            >
              <RotateCcw className="w-3.5 h-3.5 text-sky-400" />
              <span>포탈 다시보기</span>
            </button>
            <button
              onClick={() => {
                onOpenGlossary();
                setMobileMenuOpen(false);
              }}
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 text-slate-300 text-xs border border-slate-800"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>재정 용어사전</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

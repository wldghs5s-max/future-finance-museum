import React from "react";
import { SectionId } from "../../types/museum";
import { MUSEUM_SECTIONS } from "../../data/museumData";
import { ArrowRight, CornerDownLeft, Sparkles } from "lucide-react";

interface NextSectionGateProps {
  currentSection: SectionId;
  onNavigate: (id: SectionId) => void;
}

export const NextSectionGate: React.FC<NextSectionGateProps> = ({
  currentSection,
  onNavigate,
}) => {
  const currentIndex = MUSEUM_SECTIONS.findIndex(
    (s) => s.id === currentSection,
  );
  const nextSection =
    currentIndex < MUSEUM_SECTIONS.length - 1
      ? MUSEUM_SECTIONS[currentIndex + 1]
      : null;

  return (
    <div className="mt-16 pt-10 border-t border-slate-800/80 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 px-4">
      {/* 로비로 돌아가기 */}
      <button
        onClick={() => {
          onNavigate("lobby");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-300 transition cursor-pointer"
      >
        <CornerDownLeft className="w-4 h-4 text-cyan-400" />
        <span>중앙 로비로 돌아가기 (RETURN TO LOBBY)</span>
      </button>

      {/* 다음 전시실 워프 버튼 */}
      {nextSection && (
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => {
              onNavigate(nextSection.id);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="w-full sm:w-auto flex items-center justify-between gap-4 px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-950/60 to-slate-900 border border-cyan-500/40 hover:border-cyan-400 hover:glow-cyan text-left group transition cursor-pointer"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
                  NEXT EXHIBITION [{nextSection.number}]
                </span>
                <Sparkles className="w-3 h-3 text-cyan-400" />
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition">
                {nextSection.titleKo}
              </h4>
            </div>
            <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 group-hover:translate-x-1 transition">
              <ArrowRight className="w-5 h-5" />
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

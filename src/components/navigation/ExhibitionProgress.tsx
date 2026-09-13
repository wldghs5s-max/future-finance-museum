import React from "react";
import { SectionId } from "../../types/museum";
import { MUSEUM_SECTIONS } from "../../data/museumData";
import { CheckCircle2 } from "lucide-react";

interface ExhibitionProgressProps {
  currentSection: SectionId;
  visitedSections: Set<SectionId>;
  onSelectSection: (id: SectionId) => void;
}

export const ExhibitionProgress: React.FC<ExhibitionProgressProps> = ({
  currentSection,
  visitedSections,
  onSelectSection,
}) => {
  // 로비를 제외한 6대 전시관 기준 진행률 계산
  const exhibitionList = MUSEUM_SECTIONS.filter((s) => s.id !== "lobby");
  const visitedExhibitionsCount = exhibitionList.filter((s) =>
    visitedSections.has(s.id),
  ).length;
  const progressPercent = Math.round(
    (visitedExhibitionsCount / exhibitionList.length) * 100,
  );

  return (
    <div className="flex items-center gap-3 bg-slate-900/90 border border-slate-800 rounded-full px-3 py-1.5 backdrop-blur-md">
      {/* 진행률 뱃지 */}
      <div className="flex items-center gap-1.5 pr-2 border-r border-slate-800">
        <span className="text-[10px] font-mono text-slate-400 tracking-wider">
          PROGRESS
        </span>
        <span className="text-xs font-mono font-bold text-cyan-400">
          {progressPercent}%
        </span>
      </div>

      {/* 6개 전시관 아이콘 칩들 */}
      <div className="flex items-center gap-1">
        {exhibitionList.map((sec) => {
          const isVisited = visitedSections.has(sec.id);
          const isCurrent = currentSection === sec.id;

          return (
            <button
              key={sec.id}
              onClick={() => onSelectSection(sec.id)}
              title={`${sec.number} ${sec.titleKo}`}
              className={`flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-mono transition cursor-pointer ${
                isCurrent
                  ? "bg-cyan-500 text-slate-950 font-black ring-2 ring-cyan-400/50 glow-cyan"
                  : isVisited
                    ? "bg-cyan-950/70 text-cyan-300 border border-cyan-700/50 hover:bg-cyan-900/60"
                    : "bg-slate-800/80 text-slate-400 hover:text-slate-200 border border-slate-700/40"
              }`}
            >
              {isVisited && !isCurrent ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              ) : (
                sec.number
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

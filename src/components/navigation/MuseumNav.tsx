import React from "react";
import { SectionId } from "../../types/museum";
import { MUSEUM_SECTIONS } from "../../data/museumData";
import {
  Home,
  Users,
  ShieldCheck,
  Leaf,
  Cpu,
  TrendingUp,
  Gamepad2,
} from "lucide-react";

interface MuseumNavProps {
  currentSection: SectionId;
  onSelectSection: (id: SectionId) => void;
}

const SECTION_ICONS: Record<SectionId, React.ReactNode> = {
  lobby: <Home className="w-4 h-4" />,
  demography: <Users className="w-4 h-4" />,
  welfare: <ShieldCheck className="w-4 h-4" />,
  environment: <Leaf className="w-4 h-4" />,
  ai: <Cpu className="w-4 h-4" />,
  fiscal: <TrendingUp className="w-4 h-4" />,
  game: <Gamepad2 className="w-4 h-4" />,
};

export const MuseumNav: React.FC<MuseumNavProps> = ({
  currentSection,
  onSelectSection,
}) => {
  return (
    <nav className="w-full bg-[#080e22]/80 border-b border-cyan-500/10 backdrop-blur-md px-4 overflow-x-auto no-scrollbar">
      <div className="max-w-7xl mx-auto flex items-center justify-start md:justify-center gap-1 py-2 min-w-max">
        {MUSEUM_SECTIONS.map((sec) => {
          const isActive = currentSection === sec.id;

          return (
            <button
              key={sec.id}
              onClick={() => onSelectSection(sec.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer select-none ${
                isActive
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20 font-bold"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 border border-transparent"
              }`}
            >
              <span className={isActive ? "text-cyan-400" : "text-slate-500"}>
                {SECTION_ICONS[sec.id]}
              </span>
              <span className="font-bold text-[11px] tracking-wider opacity-70">
                {sec.number}
              </span>
              <span className="font-sans font-medium text-xs tracking-tight">
                {sec.titleKo}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

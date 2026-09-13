import React from "react";
import { MetricItem } from "../../types/museum";
import { Info } from "lucide-react";

interface StatCardProps {
  label: string;
  metric: MetricItem<any>;
  subtext?: string;
  badge?: string;
  accentColor?: "cyan" | "amber" | "emerald" | "rose" | "purple" | "sky";
  icon?: React.ReactNode;
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  metric,
  subtext,
  badge,
  accentColor = "cyan",
  icon,
}) => {
  const colorMap = {
    cyan: "border-cyan-500/30 hover:border-cyan-400 text-cyan-400 hover:glow-cyan",
    amber:
      "border-amber-500/30 hover:border-amber-400 text-amber-400 hover:glow-amber",
    emerald:
      "border-emerald-500/30 hover:border-emerald-400 text-emerald-400 hover:glow-emerald",
    rose: "border-rose-500/30 hover:border-rose-400 text-rose-400 hover:glow-rose",
    purple: "border-purple-500/30 hover:border-purple-400 text-purple-400",
    sky: "border-sky-500/30 hover:border-sky-400 text-sky-400",
  };

  const badgeColorMap = {
    cyan: "bg-cyan-950/80 text-cyan-300 border-cyan-700/50",
    amber: "bg-amber-950/80 text-amber-300 border-amber-700/50",
    emerald: "bg-emerald-950/80 text-emerald-300 border-emerald-700/50",
    rose: "bg-rose-950/80 text-rose-300 border-rose-700/50",
    purple: "bg-purple-950/80 text-purple-300 border-purple-700/50",
    sky: "bg-sky-950/80 text-sky-300 border-sky-700/50",
  };

  return (
    <div
      className={`relative p-5 rounded-xl bg-slate-900/70 border backdrop-blur-md transition-all group ${colorMap[accentColor]}`}
    >
      {/* 카드 헤더 */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="text-xs font-mono tracking-wider text-slate-400 uppercase flex items-center gap-1.5">
          {icon}
          {label}
        </span>
        {badge && (
          <span
            className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${badgeColorMap[accentColor]}`}
          >
            {badge}
          </span>
        )}
      </div>

      {/* 메인 표시값 (Display Value) */}
      <div className="flex items-baseline gap-1.5 mb-2">
        <span className="text-2xl md:text-3xl font-black tracking-tight text-white group-hover:text-white font-mono">
          {metric.display}
        </span>
        {metric.unit && !metric.display.includes(metric.unit) && (
          <span className="text-xs font-mono text-slate-400">
            {metric.unit}
          </span>
        )}
      </div>

      {/* 서브텍스트 및 원본 데이터 보존 확인용 정보 */}
      {(subtext || metric.note || metric.sourceNote) && (
        <p className="text-xs text-slate-400 leading-relaxed font-sans">
          {subtext || metric.note || metric.sourceNote}
        </p>
      )}

      {/* 원본값 툴팁 안내 (Raw Data Tooltip) */}
      <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
        <span className="flex items-center gap-1">
          <Info className="w-3 h-3 text-slate-400" />
          <span>공식 기준치:</span>
        </span>
        <span
          className="text-slate-300 font-semibold truncate max-w-[160px]"
          title={String(metric.raw)}
        >
          {String(metric.raw)} {metric.unit ? `(${metric.unit})` : ""}
        </span>
      </div>
    </div>
  );
};

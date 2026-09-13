import React from "react";

interface ComparisonItem {
  label: string;
  value: number;
  displayValue: string;
  sublabel?: string;
  isHighlight?: boolean;
  colorClass?: string;
}

interface ComparisonBarProps {
  title?: string;
  items: ComparisonItem[];
  maxValue?: number;
  unit?: string;
}

export const ComparisonBar: React.FC<ComparisonBarProps> = ({
  title,
  items,
  maxValue,
  unit,
}) => {
  const max = maxValue || Math.max(...items.map((i) => i.value), 1);

  return (
    <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
      {title && (
        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
          <span className="font-bold text-slate-300">{title}</span>
          {unit && <span>단위: {unit}</span>}
        </div>
      )}

      <div className="space-y-2.5">
        {items.map((item, idx) => {
          const percent = Math.min(Math.max((item.value / max) * 100, 3), 100);

          return (
            <div key={idx} className="space-y-1">
              <div className="flex items-center justify-between text-xs font-sans">
                <span
                  className={`font-medium ${item.isHighlight ? "text-cyan-300 font-bold" : "text-slate-300"}`}
                >
                  {item.label}
                  {item.sublabel && (
                    <span className="text-[11px] text-slate-500 ml-1.5">
                      ({item.sublabel})
                    </span>
                  )}
                </span>
                <span
                  className={`font-mono font-bold ${item.isHighlight ? "text-cyan-400" : "text-slate-200"}`}
                >
                  {item.displayValue}
                </span>
              </div>

              <div className="h-2.5 w-full bg-slate-800/80 rounded-full overflow-hidden p-0.5 border border-slate-700/50">
                <div
                  className={`h-full rounded-full transition-all duration-500 ease-out ${
                    item.colorClass ||
                    (item.isHighlight
                      ? "bg-gradient-to-r from-cyan-500 to-sky-400 glow-cyan"
                      : "bg-slate-500")
                  }`}
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

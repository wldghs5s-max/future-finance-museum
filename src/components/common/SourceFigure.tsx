import React, { useState } from "react";
import { VisualAsset } from "../../data/visualAssets";

interface SourceFigureProps {
  asset: VisualAsset;
}

export const SourceFigure: React.FC<SourceFigureProps> = ({ asset }) => {
  const [showOriginal, setShowOriginal] = useState(true);
  const seriesList = asset.labeledSeries ?? [];
  const canRemake = seriesList.length > 0;
  const max = canRemake
    ? Math.max(...seriesList.flatMap((s) => s.points.map((p) => p.value)))
    : 0;

  return (
    <figure className="rounded-xl border border-slate-800 bg-slate-950/70 overflow-hidden">
      <figcaption className="px-3 py-2 border-b border-slate-800 flex items-start justify-between gap-2">
        <div>
          <div className="text-xs font-bold text-white">{asset.title}</div>
          <div className="text-[10px] font-mono text-slate-500">
            {asset.hall}
          </div>
        </div>
        {canRemake && (
          <button
            type="button"
            onClick={() => setShowOriginal((v) => !v)}
            className="shrink-0 text-[10px] font-mono px-2 py-1 rounded bg-slate-900 border border-slate-700 text-cyan-300 cursor-pointer"
          >
            {showOriginal ? "웹 재구현" : "원본 차트"}
          </button>
        )}
      </figcaption>

      {showOriginal && asset.src ? (
        <div className="overflow-x-auto bg-white">
          <img
            src={asset.src}
            alt={asset.title}
            className="min-w-[20rem] w-full h-auto"
          />
        </div>
      ) : canRemake ? (
        <div className="p-3 space-y-2 overflow-x-auto">
          {seriesList.map((s) => (
            <div key={s.key}>
              <div className="text-[10px] font-mono text-slate-400 mb-1">
                {s.label}
              </div>
              {s.points.map((p) => (
                <div key={s.key + p.name} className="mb-1.5">
                  <div className="flex justify-between text-[11px] text-slate-300">
                    <span>{p.name}</span>
                    <span className="font-mono">{p.display}</span>
                  </div>
                  <div className="h-2 rounded bg-slate-800 overflow-hidden">
                    <div
                      className="h-full"
                      style={{
                        width: `${(p.value / max) * 100}%`,
                        background: s.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
          <p className="text-[10px] text-slate-500">
            자료 차트에 적힌 값을 막대로 다시 그렸습니다.
          </p>
        </div>
      ) : null}

      <div className="px-3 py-2 text-[10px] text-slate-400 leading-relaxed">
        {asset.sourceCaption}
        {asset.chartNote && (
          <span className="block text-amber-200/80 mt-1">{asset.chartNote}</span>
        )}
      </div>
    </figure>
  );
};

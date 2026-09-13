import React from "react";
import { Info } from "lucide-react";

interface ExhibitPlaqueProps {
  exhibitCode: string; // 예: "EXHIBIT 01-A"
  titleKo: string;
  titleEn?: string;
  primaryValue?: string;
  primaryLabel?: string;
  secondaryValue?: string;
  secondaryLabel?: string;
  description: string;
  sourceNote?: string;
  children?: React.ReactNode;
  themeColor?: string;
}

export const ExhibitPlaque: React.FC<ExhibitPlaqueProps> = ({
  exhibitCode,
  titleKo,
  titleEn,
  primaryValue,
  primaryLabel,
  secondaryValue,
  secondaryLabel,
  description,
  sourceNote,
  children,
  themeColor = "#00F0FF",
}) => {
  return (
    <div className="rounded-2xl exhibit-pedestal p-6 md:p-8 backdrop-blur-xl relative overflow-hidden transition-all duration-300">
      {/* 상단 핀 조명 및 메탈 마운트 나사 효과 */}
      <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <div
            className="w-2.5 h-2.5 rounded-full animate-pulse"
            style={{ backgroundColor: themeColor }}
          />
          <span className="font-mono text-xs font-bold tracking-widest text-slate-300 uppercase">
            {exhibitCode}
          </span>
        </div>

        {titleEn && (
          <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase">
            {titleEn}
          </span>
        )}
      </div>

      {/* 전시물 제목 및 캡션 본문 */}
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
          {titleKo}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans max-w-3xl">
          {description}
        </p>
      </div>

      {/* 핵심 정량 지표 비교 디스플레이 (수치가 있는 경우) */}
      {(primaryValue || secondaryValue) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 p-4 rounded-xl bg-slate-950/70 border border-slate-800">
          {primaryValue && (
            <div>
              <span className="text-[11px] font-mono text-slate-400 block mb-1">
                {primaryLabel || "기준 지표"}
              </span>
              <span className="text-2xl sm:text-3xl font-mono font-black text-white">
                {primaryValue}
              </span>
            </div>
          )}

          {secondaryValue && (
            <div className="border-t sm:border-t-0 sm:border-l border-slate-800 pt-3 sm:pt-0 sm:pl-4">
              <span className="text-[11px] font-mono text-slate-400 block mb-1">
                {secondaryLabel || "전망 지표"}
              </span>
              <span
                className="text-2xl sm:text-3xl font-mono font-black"
                style={{ color: themeColor }}
              >
                {secondaryValue}
              </span>
            </div>
          )}
        </div>
      )}

      {/* 전시물 상세 비주얼 / 차트 슬롯 */}
      {children && (
        <div className="mt-4 pt-4 border-t border-slate-800/80">{children}</div>
      )}

      {/* 캡션 하단 출처 표기 (박물관 큐레이터 캡션) */}
      {sourceNote && (
        <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span className="flex items-center gap-1">
            <Info className="w-3 h-3 text-slate-400" />
            <span>공식 전시 데이터 출처:</span>
          </span>
          <span className="text-slate-400 truncate max-w-md">{sourceNote}</span>
        </div>
      )}
    </div>
  );
};

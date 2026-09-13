import React from "react";
import { X, BookOpen, ShieldCheck, Database, ArrowRight } from "lucide-react";

export interface ExhibitDetailData {
  id: string;
  code: string;
  hallName: string;
  titleKo: string;
  titleEn: string;
  category: string;
  summary: string;
  sourceDoc: string;
  officialMetrics: {
    label: string;
    raw: string;
    display: string;
    highlight?: boolean;
    description: string;
  }[];
  detailedAnalysis: string[];
  policyImplication: string;
}

interface ExhibitDetailDrawerProps {
  data: ExhibitDetailData | null;
  onClose: () => void;
}

export const ExhibitDetailDrawer: React.FC<ExhibitDetailDrawerProps> = ({
  data,
  onClose,
}) => {
  if (!data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-slate-950/60 backdrop-blur-sm animate-fade-in">
      {/* 바깥 배경 클릭 시 닫기 */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* 우측 슬라이드 디테일 드로어 */}
      <div className="relative z-10 w-full max-w-xl h-full bg-[#070c1a] border-l border-cyan-500/40 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto shadow-2xl shadow-cyan-950/80">
        {/* 드로어 상단 바 */}
        <div>
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="px-2.5 py-0.5 rounded bg-cyan-950 border border-cyan-700 text-cyan-300 font-bold">
                {data.code}
              </span>
              <span className="text-slate-400">|</span>
              <span className="text-slate-300">{data.hallName}</span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition cursor-pointer"
              title="닫기 / 관람 계속하기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* 전시물 메인 헤더 */}
          <div className="mb-6">
            <span className="text-[11px] font-mono tracking-widest text-cyan-400 uppercase block mb-1">
              {data.titleEn}
            </span>
            <h2 className="text-2xl font-black text-white font-mono tracking-tight mb-2">
              {data.titleKo}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              {data.summary}
            </p>
          </div>

          {/* 공식 통계 수치 그리드 (future_finance_doc.md 원본 보존) */}
          <div className="mb-6">
            <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 font-bold uppercase mb-3">
              <Database className="w-3.5 h-3.5" />
              <span>공식 통계 원본 지표 (OFFICIAL METRICS)</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.officialMetrics.map((m, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 rounded-xl border ${
                    m.highlight
                      ? "bg-cyan-950/40 border-cyan-500/50 glow-cyan"
                      : "bg-slate-900/80 border-slate-800"
                  }`}
                >
                  <span className="text-[11px] font-mono text-slate-400 block mb-1">
                    {m.label}
                  </span>
                  <div className="text-xl font-mono font-black text-white mb-1">
                    {m.display}
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 block mb-1">
                    원문 수치: {m.raw}
                  </div>
                  <p className="text-[11px] text-slate-400 font-sans leading-normal">
                    {m.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 심층 구조 분석 */}
          <div className="mb-6 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300 font-bold uppercase mb-3">
              <BookOpen className="w-3.5 h-3.5 text-sky-400" />
              <span>심층 재정 영향 분석</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-300 font-sans leading-relaxed list-disc list-inside">
              {data.detailedAnalysis.map((analysis, idx) => (
                <li key={idx} className="marker:text-cyan-400">
                  {analysis}
                </li>
              ))}
            </ul>
          </div>

          {/* 정책적 시사점 */}
          <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 mb-6">
            <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-300 font-bold uppercase mb-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>국가재정 정책적 시사점</span>
            </div>
            <p className="text-xs text-cyan-100 font-sans leading-relaxed">
              {data.policyImplication}
            </p>
          </div>
        </div>

        {/* 드로어 하단: 닫고 관람 계속하기 바 */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <div className="text-[11px] font-mono text-slate-500">
            출처: {data.sourceDoc}
          </div>

          <button
            onClick={onClose}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-cyan-500/30 cursor-pointer"
          >
            <span>닫기 & 관람 계속하기</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

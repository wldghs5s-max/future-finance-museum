import React, { useState } from "react";
import { GLOSSARY_LIST } from "../../data/gameData";
import { BookOpen, X, Sparkles, CheckCircle2 } from "lucide-react";

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedTerm, setSelectedTerm] = useState(GLOSSARY_LIST[0].term);

  if (!isOpen) return null;

  const currentItem =
    GLOSSARY_LIST.find((item) => item.term === selectedTerm) ||
    GLOSSARY_LIST[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#091124] border border-cyan-500/30 shadow-2xl shadow-cyan-950/50 overflow-hidden flex flex-col max-h-[85vh]">
        {/* 모달 상단 헤더 */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white tracking-wide">
                재정미래관 핵심 용어사전
              </h3>
              <p className="text-[10px] font-mono text-slate-400 uppercase">
                FISCAL TERMINOLOGY ARCHIVE
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 모달 내용 영역 (좌측 탭 + 우측 상세 설명) */}
        <div className="p-6 overflow-y-auto flex-1 flex flex-col md:flex-row gap-6">
          {/* 용어 선택 리스트 */}
          <div className="w-full md:w-5/12 flex md:flex-col gap-1.5 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {GLOSSARY_LIST.map((item) => {
              const isSelected = item.term === selectedTerm;

              return (
                <button
                  key={item.term}
                  onClick={() => setSelectedTerm(item.term)}
                  className={`px-3 py-2.5 rounded-xl text-xs text-left font-sans transition flex items-center justify-between gap-2 whitespace-nowrap md:whitespace-normal cursor-pointer ${
                    isSelected
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold glow-cyan"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 border border-transparent"
                  }`}
                >
                  <span>{item.titleKo}</span>
                  {isSelected && (
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* 선택된 용어 상세 카드 */}
          <div className="w-full md:w-7/12 rounded-xl bg-slate-900/80 border border-slate-800 p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/60">
                  {currentItem.term}
                </span>
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              </div>

              <h4 className="text-lg font-bold text-white mb-3">
                {currentItem.titleKo}
              </h4>

              <div className="p-3.5 rounded-lg bg-cyan-950/30 border border-cyan-500/20 mb-4 text-xs font-sans text-cyan-200 leading-relaxed font-medium">
                {currentItem.definition}
              </div>

              <div className="space-y-1.5">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  전시 심화 해설 및 데이터 맥락:
                </span>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {currentItem.docDetails}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800 text-[10px] font-mono text-slate-500 text-right">
              출처: future_finance_doc.md 공식 해설
            </div>
          </div>
        </div>

        {/* 모달 하단 닫기 */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-900/40 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition cursor-pointer"
          >
            확인 및 닫기
          </button>
        </div>
      </div>
    </div>
  );
};

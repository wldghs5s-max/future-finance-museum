import React, { useEffect, useRef } from "react";
import { BookOpen, X } from "lucide-react";
import { getGlossary } from "../../data/glossaryData";

interface TermPopoverProps {
  termId: string;
  onClose: () => void;
  onOpenFull: (termId: string) => void;
  returnFocus: HTMLElement | null;
}

export const TermPopover: React.FC<TermPopoverProps> = ({
  termId,
  onClose,
  onOpenFull,
  returnFocus,
}) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const item = getGlossary(termId);

  useEffect(() => {
    closeRef.current?.focus();
    return () => {
      returnFocus?.focus();
    };
  }, [termId, returnFocus]);

  const closeFromBackdrop = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;
    event.stopPropagation();
    onClose();
  };

  const stopInside = (event: React.SyntheticEvent) => {
    event.stopPropagation();
  };

  if (!item) {
    return (
      <div
        className="absolute inset-0 z-20 flex items-end sm:items-center justify-center p-3 bg-slate-950/55"
        data-testid="term-popover-backdrop"
        onMouseDown={stopInside}
        onClick={closeFromBackdrop}
      >
        <div
          role="dialog"
          aria-modal="true"
          className="w-full max-w-md rounded-2xl border border-amber-700/50 bg-[#120c08] p-4"
          onMouseDown={stopInside}
          onClick={stopInside}
        >
          <p className="text-sm text-amber-100">이 용어 설명을 아직 준비하지 못했습니다.</p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="mt-3 px-3 py-1.5 rounded-lg bg-slate-800 text-xs text-white cursor-pointer"
          >
            닫기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="absolute inset-0 z-20 flex items-end sm:items-center justify-center p-3 bg-slate-950/55"
      data-testid="term-popover-backdrop"
      onMouseDown={stopInside}
      onClick={closeFromBackdrop}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="term-popover-title"
        className="w-full max-w-md max-h-[min(28rem,80vh)] overflow-y-auto rounded-2xl border border-amber-600/40 bg-[#14100a] p-4 shadow-2xl"
        onMouseDown={stopInside}
        onClick={stopInside}
      >
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <p className="text-[10px] font-mono text-amber-300">{item.field}</p>
            <h4 id="term-popover-title" className="text-lg font-black text-white">
              {item.titleKo}
            </h4>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white cursor-pointer"
            aria-label="용어 설명 닫기"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <p className="text-sm text-amber-50 leading-relaxed">{item.definition}</p>
        {item.exhibitContext && (
          <p className="mt-3 text-xs text-slate-300 leading-relaxed">
            {item.exhibitContext}
          </p>
        )}
        <button
          type="button"
          onClick={() => onOpenFull(item.id)}
          className="mt-4 inline-flex items-center gap-1.5 text-xs text-cyan-200 cursor-pointer"
        >
          <BookOpen className="w-3.5 h-3.5" />
          용어사전에서 더 보기
        </button>
      </div>
    </div>
  );
};

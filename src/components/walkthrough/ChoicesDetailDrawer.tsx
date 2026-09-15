import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, HelpCircle, X } from "lucide-react";
import { ExhibitDetailData } from "../../types/exhibit";
import {
  HallDirectionSet,
  hallDirectionItems,
  InspectExhibitFn,
} from "../../data/hallDirections";
import { directionDetail } from "../../data/hallDirectionDetails";
import { getExhibit } from "../../data/walkthroughData";
import { getGlossary } from "../../data/glossaryData";
import { TermPopover } from "../common/TermPopover";
import { SourceCitation } from "../../types/exhibit";
import { HoloDetailFrame } from "./HoloDetailFrame";
import { HOLO_CTA, holoAccentFor } from "../../data/exhibitAccent";

function isVisitorNote(note?: string) {
  if (!note) return false;
  return !/원문|MD |검증|산출하지|매핑|파일명/.test(note);
}

function CitationBlock({ source }: { source: SourceCitation }) {
  return (
    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-[12px] space-y-1">
      {source.institution && (
        <div className="font-mono text-cyan-300">{source.institution}</div>
      )}
      {source.documentName && (
        <div className="text-slate-200">{source.documentName}</div>
      )}
      {source.publishedAt && (
        <div className="text-slate-500">발표: {source.publishedAt}</div>
      )}
      {isVisitorNote(source.note) && (
        <div className="text-slate-400">{source.note}</div>
      )}
      {source.url && (
        <a
          href={source.url}
          target="_blank"
          rel="noreferrer"
          className="text-sky-300 hover:text-sky-200 break-all"
        >
          {source.url}
        </a>
      )}
    </div>
  );
}

interface ChoicesDetailDrawerProps {
  hall: HallDirectionSet;
  data: ExhibitDetailData;
  focusDirectionId?: string | null;
  onClose: () => void;
  onOpenTerm?: (termId: string) => void;
  onOpenExhibit?: InspectExhibitFn;
}

export const ChoicesDetailDrawer: React.FC<ChoicesDetailDrawerProps> = ({
  hall,
  data,
  focusDirectionId,
  onClose,
  onOpenTerm,
  onOpenExhibit,
}) => {
  const items = hallDirectionItems(hall);
  const firstId = items[0]?.id ?? null;
  const [openId, setOpenId] = useState(focusDirectionId ?? firstId);
  const [showSources, setShowSources] = useState(false);
  const [termId, setTermId] = useState<string | null>(null);
  const termButtonRef = useRef<HTMLButtonElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const savedScroll = useRef(0);

  useEffect(() => {
    setOpenId(focusDirectionId ?? firstId);
    setShowSources(false);
    setTermId(null);
    savedScroll.current = 0;
  }, [data.id, focusDirectionId, firstId]);

  useEffect(() => {
    if (termId || !scrollRef.current) return;
    scrollRef.current.scrollTop = savedScroll.current;
  }, [termId]);

  useEffect(() => {
    if (!openId) return;
    const node = scrollRef.current?.querySelector(
      `[data-direction-panel="${openId}"]`,
    );
    node?.scrollIntoView({ block: "start", behavior: "smooth" });
  }, [openId, data.id]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (document.querySelector('[data-testid="glossary-backdrop"]')) return;
      if (termId) {
        event.preventDefault();
        event.stopImmediatePropagation();
        setTermId(null);
        return;
      }
      onClose();
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [onClose, termId]);

  const accent = holoAccentFor(data.id);

  return (
    <HoloDetailFrame
      accent={accent}
      onBackdrop={() => (termId ? setTermId(null) : onClose())}
    >
        {termId && (
          <TermPopover
            termId={termId}
            returnFocus={termButtonRef.current}
            onClose={() => setTermId(null)}
            onOpenFull={(id) => {
              savedScroll.current = scrollRef.current?.scrollTop ?? 0;
              onOpenTerm?.(id);
            }}
          />
        )}

        <div className="flex items-start justify-between gap-3 shrink-0 mb-3">
          <div className="min-w-0">
            <h2 className="text-xl sm:text-2xl font-black text-white leading-snug">
              {hall.closingTitle}
            </h2>
            <p className="text-sm text-slate-200 leading-relaxed mt-2">
              {hall.closingLead}
            </p>
          </div>
          <button
            onClick={() => (termId ? setTermId(null) : onClose())}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition cursor-pointer shrink-0"
            title="닫기 (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div ref={scrollRef} className="min-h-0 flex-1 overflow-y-auto pr-1 space-y-2">
          {items.map((item) => {
            const detail = directionDetail(item.id);
            const expanded = openId === item.id;
            const terms = (detail?.relatedTerms ?? [])
              .map((id) => getGlossary(id))
              .filter(
                (term): term is NonNullable<ReturnType<typeof getGlossary>> =>
                  Boolean(term),
              );
            const related = item.exhibitIds
              .map((id) => getExhibit(id))
              .filter(
                (exhibit): exhibit is NonNullable<ReturnType<typeof getExhibit>> =>
                  Boolean(exhibit),
              );

            return (
              <section
                key={item.id}
                data-direction-panel={item.id}
                className={`rounded-xl border ${
                  expanded
                    ? "border-white/25 bg-slate-900/55"
                    : "border-white/10 bg-slate-950/40"
                }`}
              >
                <button
                  type="button"
                  data-direction-id={item.id}
                  onClick={() => setOpenId(item.id)}
                  className="w-full flex items-center justify-between gap-3 px-3.5 py-3 text-left cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-white leading-snug">
                    {item.title}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition ${
                      expanded ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expanded && detail && (
                  <div className="px-3.5 pb-4 space-y-3">
                    {detail.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 24)}
                        className="text-sm text-slate-200 leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                    {related.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {related.map((exhibit) => (
                          <button
                            key={exhibit.id}
                            type="button"
                            onClick={() => onOpenExhibit?.(exhibit.id)}
                            className="px-2.5 py-1 rounded-lg border border-cyan-700/50 bg-cyan-950/40 text-[12px] text-cyan-100 cursor-pointer"
                          >
                            {exhibit.titleKo}
                          </button>
                        ))}
                      </div>
                    )}
                    {terms.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {terms.map((term) => (
                          <button
                            key={term.id}
                            type="button"
                            data-term-id={term.id}
                            onClick={(event) => {
                              termButtonRef.current = event.currentTarget;
                              savedScroll.current =
                                scrollRef.current?.scrollTop ?? 0;
                              setTermId(term.id);
                            }}
                            className="px-2 py-1 rounded-lg bg-amber-950/50 border border-amber-700/40 text-[11px] text-amber-200 cursor-pointer flex items-center gap-1"
                          >
                            <HelpCircle className="w-3 h-3" />
                            {term.titleKo}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </section>
            );
          })}

          <div className="pt-2">
            <button
              type="button"
              onClick={() => setShowSources((open) => !open)}
              className="text-[12px] font-mono text-slate-400 hover:text-slate-200 cursor-pointer"
            >
              {showSources ? "자료 출처 닫기" : "자료 출처"}
            </button>
            {showSources && (
              <div className="mt-2 space-y-2">
                {data.sources.map((source) => (
                  <CitationBlock key={source.id + source.pages} source={source} />
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="pt-3 mt-2 border-t border-white/10 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono font-bold text-xs uppercase tracking-wider transition cursor-pointer ${HOLO_CTA[accent]}`}
          >
            <span>닫기</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
    </HoloDetailFrame>
  );
};

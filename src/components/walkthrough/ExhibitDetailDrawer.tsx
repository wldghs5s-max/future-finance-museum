import React, { useEffect, useRef, useState } from "react";
import {
  X,
  BookOpen,
  Scale,
  Database,
  ArrowRight,
  ExternalLink,
  HelpCircle,
} from "lucide-react";
import {
  CONTENT_KIND_LABEL,
  ExhibitDetailData,
  SourceCitation,
} from "../../types/exhibit";
import { visualsForExhibit } from "../../data/visualAssets";
import { SourceFigure } from "../common/SourceFigure";
import { getGlossary } from "../../data/glossaryData";
import { directionHintFor, hallSetByClosingId } from "../../data/hallDirections";
import { TermPopover } from "../common/TermPopover";
import { ChoicesDetailDrawer } from "./ChoicesDetailDrawer";
import { HoloDetailFrame } from "./HoloDetailFrame";
import {
  HOLO_BADGE,
  HOLO_CTA,
  HOLO_TAB_ACTIVE,
  holoAccentFor,
} from "../../data/exhibitAccent";

export type { ExhibitDetailData };

interface ExhibitDetailDrawerProps {
  data: ExhibitDetailData | null;
  onClose: () => void;
  onOpenTerm?: (termId: string) => void;
  onOpenExhibit?: (exhibitId: string) => void;
  focusDirectionId?: string | null;
}

type DetailTab = "overview" | "detail" | "visuals" | "sources";

function sourceFooterLabel(sources: { institution?: string }[]) {
  const names = [
    ...new Set(sources.map((item) => item.institution).filter(Boolean)),
  ] as string[];
  if (names.length === 0) return "자료 출처";
  if (names.length <= 2) return names.join(" · ");
  return `${names.slice(0, 2).join(" · ")} 외 ${names.length - 2}곳`;
}

function isVisitorNote(note?: string) {
  if (!note) return false;
  return !/원문|MD |검증|산출하지|매핑|파일명/.test(note);
}

function CitationBlock({ source }: { source: SourceCitation }) {
  return (
    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] space-y-1">
      {source.institution && (
        <div className="font-mono text-cyan-300">{source.institution}</div>
      )}
      {source.documentName && (
        <div className="text-slate-200">{source.documentName}</div>
      )}
      {source.publishedAt && (
        <div className="text-slate-500">발표: {source.publishedAt}</div>
      )}
      {(source.baseYear || source.scenario) && (
        <div className="text-slate-500">
          {[source.baseYear, source.scenario].filter(Boolean).join(" · ")}
        </div>
      )}
      {isVisitorNote(source.note) && (
        <div className="text-slate-400">{source.note}</div>
      )}
      {source.url && (
        <a
          href={source.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-sky-300 hover:text-sky-200 break-all"
        >
          <ExternalLink className="w-3 h-3 shrink-0" />
          {source.url}
        </a>
      )}
    </div>
  );
}

function RelatedTermButtons({
  ids,
  onOpen,
}: {
  ids: string[];
  onOpen: (id: string, button: HTMLButtonElement) => void;
}) {
  const terms = ids
    .map((id) => getGlossary(id))
    .filter((item): item is NonNullable<ReturnType<typeof getGlossary>> => Boolean(item));
  if (terms.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {terms.map((term) => (
        <button
          key={term.id}
          type="button"
          onClick={(event) => onOpen(term.id, event.currentTarget)}
          data-term-id={term.id}
          className="px-2 py-1 rounded-lg bg-amber-950/50 border border-amber-700/40 text-[11px] text-amber-200 cursor-pointer flex items-center gap-1"
        >
          <HelpCircle className="w-3 h-3" />
          {term.titleKo}
        </button>
      ))}
    </div>
  );
}

export const ExhibitDetailDrawer: React.FC<ExhibitDetailDrawerProps> = ({
  data,
  onClose,
  onOpenTerm,
  onOpenExhibit,
  focusDirectionId,
}) => {
  const [tab, setTab] = useState<DetailTab>("overview");
  const [termId, setTermId] = useState<string | null>(null);
  const termButtonRef = useRef<HTMLButtonElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const savedScroll = useRef(0);

  useEffect(() => {
    setTab("overview");
    const fromQuery = new URLSearchParams(window.location.search).get("term");
    setTermId(fromQuery);
    savedScroll.current = 0;
  }, [data?.id]);

  useEffect(() => {
    if (termId || !scrollRef.current) return;
    scrollRef.current.scrollTop = savedScroll.current;
  }, [termId]);

  useEffect(() => {
    if (!data) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (document.querySelector('[data-testid="glossary-backdrop"]')) return;
      if (termId) {
        e.preventDefault();
        e.stopImmediatePropagation();
        setTermId(null);
        return;
      }
      onClose();
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [data, onClose, termId]);

  if (!data) return null;

  const choicesHall = hallSetByClosingId(data.id);
  if (choicesHall) {
    return (
      <ChoicesDetailDrawer
        hall={choicesHall}
        data={data}
        focusDirectionId={focusDirectionId}
        onClose={onClose}
        onOpenTerm={onOpenTerm}
        onOpenExhibit={onOpenExhibit}
      />
    );
  }

  const visuals = visualsForExhibit(data.id);
  const accent = holoAccentFor(data.id);
  const tabs: { id: DetailTab; label: string }[] = [
    { id: "overview", label: "1. 핵심" },
    { id: "detail", label: "2. 상세" },
    ...(visuals.length
      ? [{ id: "visuals" as const, label: `그림 ${visuals.length}` }]
      : []),
    { id: "sources", label: "자료 출처" },
  ];

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
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4 shrink-0">
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className={`px-2.5 py-0.5 rounded font-bold ${HOLO_BADGE[accent]}`}>
              {data.code}
            </span>
            <span className="text-slate-400 hidden sm:inline">|</span>
            <span className="text-slate-300 hidden sm:inline">{data.hallName}</span>
          </div>
          <button
            onClick={() => (termId ? setTermId(null) : onClose())}
            className="p-2 rounded-lg bg-slate-900/70 hover:bg-slate-800 border border-white/15 text-slate-300 hover:text-white transition cursor-pointer"
            title="닫기 (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mb-4 shrink-0">
          <span className="text-[11px] font-mono tracking-widest text-cyan-400 uppercase block mb-1">
            {data.titleEn}
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-white font-mono tracking-tight mb-2">
            {data.titleKo}
          </h2>
          <span className="inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-400">
            {CONTENT_KIND_LABEL[data.kind]}
          </span>
        </div>

        <div className="flex flex-wrap gap-1 mb-4 shrink-0">
          {tabs.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setTab(item.id)}
              className={`flex-1 px-2 py-2 rounded-lg text-[11px] font-mono font-bold cursor-pointer border ${
                tab === item.id
                  ? HOLO_TAB_ACTIVE[accent]
                  : "bg-slate-950/70 border-white/10 text-slate-500"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div ref={scrollRef} className="min-h-0 flex-1 overflow-y-auto pr-1 space-y-4">
          {tab === "overview" && (
            <>
              <p className="text-sm text-cyan-100 font-sans leading-relaxed">
                {data.coreQuestion}
              </p>
              {directionHintFor(data.id) && (
                <p className="text-xs text-amber-100 leading-relaxed rounded-xl border border-amber-700/40 bg-amber-950/30 px-3 py-2">
                  {directionHintFor(data.id)}
                </p>
              )}
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {data.summary}
              </p>
              <RelatedTermButtons
                ids={data.relatedTerms}
                onOpen={(id, button) => {
                  termButtonRef.current = button;
                  savedScroll.current = scrollRef.current?.scrollTop ?? 0;
                  setTermId(id);
                }}
              />
              {visuals.length > 0 && (
                <button
                  type="button"
                  onClick={() => setTab("visuals")}
                  className="w-full text-left text-[11px] text-cyan-200 p-3 rounded-xl bg-cyan-950/30 border border-cyan-700/40 cursor-pointer"
                >
                  자료 그림 {visuals.length}점 — 상세 그림 보기
                </button>
              )}
              {data.featuredMetrics.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 font-bold uppercase mb-3">
                    <Database className="w-3.5 h-3.5" />
                    <span>대표 지표</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {data.featuredMetrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className={`p-3.5 rounded-xl border ${
                          metric.highlight
                            ? "bg-cyan-950/40 border-cyan-500/50"
                            : "bg-slate-900/80 border-slate-800"
                        }`}
                      >
                        <span className="text-[11px] font-mono text-slate-400 block mb-1">
                          {metric.label}
                        </span>
                        <div className="text-lg font-mono font-black text-white mb-1">
                          {metric.display}
                        </div>
                        <div className="text-[10px] font-mono text-slate-500 mb-1">
                          {metric.raw}
                        </div>
                        <p className="text-[11px] text-slate-400 leading-normal">
                          {metric.description}
                        </p>
                        <span className="mt-1 inline-block text-[9px] font-mono text-slate-500">
                          {CONTENT_KIND_LABEL[metric.kind]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {tab === "detail" && (
            <>
              {data.causes.length > 0 && (
                <section className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300 font-bold uppercase mb-3">
                    <BookOpen className="w-3.5 h-3.5 text-sky-400" />
                    <span>원인</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300 leading-relaxed list-disc list-inside">
                    {data.causes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              )}
              {data.responses.length > 0 && (
                <section className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-xs font-mono text-emerald-300 font-bold uppercase mb-3">
                    대응 방안
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300 leading-relaxed list-disc list-inside">
                    {data.responses.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              )}
              {data.tradeoffs.length > 0 && (
                <section className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-300 font-bold uppercase mb-3">
                    <Scale className="w-3.5 h-3.5" />
                    <span>정책의 장단점</span>
                  </div>
                  <div className="space-y-3">
                    {data.tradeoffs.map((item) => (
                      <div key={item.title}>
                        <div className="text-xs font-bold text-white mb-1">
                          {item.title}
                        </div>
                        <p className="text-[11px] text-emerald-200/90">
                          기대: {item.benefit}
                        </p>
                        <p className="text-[11px] text-amber-200/90">
                          부담: {item.cost}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
              {data.comparison && (
                <section className="overflow-x-auto">
                  {data.comparison.caption && (
                    <p className="text-[11px] text-slate-400 mb-2">
                      {data.comparison.caption}
                    </p>
                  )}
                  <table className="w-full text-[11px] text-left border-collapse">
                    <thead>
                      <tr className="text-slate-400 font-mono">
                        <th className="p-2 border-b border-slate-800">구분</th>
                        {data.comparison.headers.slice(1).map((h) => (
                          <th key={h} className="p-2 border-b border-slate-800">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data.comparison.rows.map((row) => (
                        <tr key={row.label + row.values.join()}>
                          <td className="p-2 border-b border-slate-900 text-slate-200">
                            {row.label}
                          </td>
                          {row.values.map((value) => (
                            <td
                              key={value}
                              className="p-2 border-b border-slate-900 text-slate-300"
                            >
                              {value}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </section>
              )}
              <RelatedTermButtons
                ids={data.relatedTerms}
                onOpen={(id, button) => {
                  termButtonRef.current = button;
                  savedScroll.current = scrollRef.current?.scrollTop ?? 0;
                  setTermId(id);
                }}
              />
            </>
          )}

          {tab === "visuals" && (
            <div className="space-y-4">
              {visuals.length === 0 ? (
                <p className="text-xs text-slate-400">
                  이 전시에 따로 보여 줄 그림은 없습니다.
                </p>
              ) : (
                visuals.map((asset) => (
                  <SourceFigure key={asset.id} asset={asset} />
                ))
              )}
            </div>
          )}

          {tab === "sources" && (
            <div className="space-y-3">
              <p className="text-[11px] text-slate-400">
                {data.id === "exhibit_lobby_intro"
                  ? "이 전시가 인용한 통계와 전망치는 아래 기관의 공개 자료와 공공 포털에서 원자료를 확인할 수 있습니다. 전시를 본 뒤에도 최신 수치를 직접 검색해 보길 권합니다."
                  : "숫자와 설명의 근거입니다. 기관, 자료명, 발표 시점, 링크를 확인할 수 있습니다."}
              </p>
              {data.sources.map((source) => (
                <CitationBlock key={source.id + source.pages} source={source} />
              ))}
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-white/10 flex items-center justify-between shrink-0 gap-3">
          <div className="text-[10px] font-mono text-slate-500">
            {sourceFooterLabel(data.sources)}
          </div>
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

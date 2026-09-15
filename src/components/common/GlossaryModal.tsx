import React, { useEffect, useMemo, useState } from "react";
import { BookOpen, X, Search } from "lucide-react";
import {
  GLOSSARY_FIELDS,
  GLOSSARY_LIST,
  GlossaryField,
} from "../../data/glossaryData";
import { MUSEUM_SPACE_GUIDE } from "../../types/exhibit";

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTermId?: string | null;
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({
  isOpen,
  onClose,
  initialTermId,
}) => {
  const [query, setQuery] = useState("");
  const [field, setField] = useState<GlossaryField | "all">("all");
  const [selectedId, setSelectedId] = useState<string | null>(
    initialTermId && GLOSSARY_LIST.some((item) => item.id === initialTermId)
      ? initialTermId
      : (GLOSSARY_LIST[0]?.id ?? null),
  );
  const [missingId, setMissingId] = useState<string | null>(
    initialTermId && !GLOSSARY_LIST.some((item) => item.id === initialTermId)
      ? initialTermId
      : null,
  );

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      e.preventDefault();
      e.stopImmediatePropagation();
      onClose();
    };
    window.addEventListener("keydown", handleKeyDown, true);
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, [isOpen, onClose]);

  const applyTerm = (termId?: string | null) => {
    setQuery("");
    setField("all");
    if (!termId) {
      setMissingId(null);
      setSelectedId(GLOSSARY_LIST[0]?.id ?? null);
      return;
    }
    const found = GLOSSARY_LIST.find((item) => item.id === termId);
    if (found) {
      setMissingId(null);
      setSelectedId(found.id);
    } else {
      setSelectedId(null);
      setMissingId(termId);
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    applyTerm(initialTermId);
  }, [initialTermId, isOpen]);

  useEffect(() => {
    if (!isOpen || !selectedId) return;
    const node = document.querySelector(`[data-term-id="${selectedId}"]`);
    node?.scrollIntoView({ block: "nearest" });
  }, [isOpen, selectedId]);

  const filtered = useMemo(() => {
    return GLOSSARY_LIST.filter((item) => {
      const fieldOk = field === "all" || item.field === field;
      const q = query.trim();
      const textOk =
        !q ||
        item.titleKo.includes(q) ||
        item.term.toLowerCase().includes(q.toLowerCase()) ||
        item.definition.includes(q);
      return fieldOk && textOk;
    });
  }, [field, query]);

  const current = selectedId
    ? GLOSSARY_LIST.find((item) => item.id === selectedId)
    : undefined;

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
      data-testid="glossary-backdrop"
      onMouseDown={(event) => event.stopPropagation()}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        event.stopPropagation();
        onClose();
      }}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl bg-[#091124] border border-cyan-500/30 overflow-hidden flex flex-col max-h-[85vh]"
        onMouseDown={(event) => event.stopPropagation()}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-amber-400" />
            <div>
              <h3 className="text-sm font-bold text-white">전시 용어사전</h3>
              <p className="text-[10px] font-mono text-slate-400">
                인구 · 복지 · 환경 · AI · 재정
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-5 py-3 border-b border-slate-800 space-y-2">
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800">
            <Search className="w-4 h-4 text-slate-500" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="용어 검색"
              className="flex-1 bg-transparent text-sm text-white outline-none"
            />
          </div>
          <div className="flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => setField("all")}
              className={`px-2 py-1 rounded-lg text-[10px] font-mono cursor-pointer ${
                field === "all"
                  ? "bg-cyan-900 text-cyan-100"
                  : "bg-slate-900 text-slate-400"
              }`}
            >
              전체
            </button>
            {GLOSSARY_FIELDS.map((name) => (
              <button
                key={name}
                type="button"
                onClick={() => setField(name)}
                className={`px-2 py-1 rounded-lg text-[10px] font-mono cursor-pointer ${
                  field === name
                    ? "bg-cyan-900 text-cyan-100"
                    : "bg-slate-900 text-slate-400"
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        <div className="p-5 overflow-y-auto flex-1 flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-5/12 space-y-1 overflow-y-auto max-h-64 md:max-h-none">
            {filtered.map((item) => (
              <button
                key={item.id}
                data-term-id={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`w-full px-3 py-2 rounded-xl text-xs text-left cursor-pointer ${
                  item.id === selectedId
                    ? "bg-cyan-500/20 text-cyan-200 border border-cyan-500/40"
                    : "text-slate-400 border border-transparent hover:bg-slate-900"
                }`}
              >
                {item.titleKo}
              </button>
            ))}
            {filtered.length === 0 && (
              <p className="text-xs text-slate-500">검색 결과가 없습니다.</p>
            )}
          </div>
          <div className="w-full md:w-7/12 rounded-xl bg-slate-900/80 border border-slate-800 p-5">
            {current ? (
              <>
                <div className="text-[10px] font-mono text-cyan-400 mb-1">
                  {current.field} · {current.term}
                </div>
                <h4 className="text-lg font-bold text-white mb-3">
                  {current.titleKo}
                </h4>
                <p className="text-xs text-cyan-100 leading-relaxed mb-3">
                  {current.definition}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {current.docDetails}
                </p>
                {current.exhibitContext && (
                  <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                    {current.exhibitContext}
                  </p>
                )}
                <div className="mt-4 text-[10px] font-mono text-slate-500">
                  관련 자료 {current.pages}쪽
                </div>
              </>
            ) : (
              <p className="text-sm text-amber-100">
                {missingId
                  ? "연결할 용어 설명을 찾지 못했습니다."
                  : "용어를 선택해 주세요."}
              </p>
            )}
          </div>
        </div>
        <div className="px-5 py-3 border-t border-slate-800 text-[10px] text-slate-500 leading-relaxed">
          {MUSEUM_SPACE_GUIDE.civicNote}
        </div>
      </div>
    </div>
  );
};

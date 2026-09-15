import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { INDICATOR_META, IndicatorId, Indicators, RoundId, getPolicy, presentPolicy } from "../../data/civicLab/model";
import {
  allVillageSrcs,
  FACILITY_LABELS,
  VILLAGE_BASE,
  ZONE_ARROW_ANCHOR,
  ZONE_PLOTS,
  zoneSrc,
} from "../../data/civicLab/villageAssets";
import {
  OPS_LABEL,
  ZONE_META,
  ZoneId,
  ZoneStep,
  deriveVillageView,
  stepsFromPicks,
  villageChangeNotes,
  villageFeedback,
} from "../../data/civicLab/villageView";

export type CivicCityMode = "idle" | "round" | "result";
type RevealPhase = "before" | "focus" | "done";

interface CivicCityProps {
  indicators: Indicators;
  before?: Indicators;
  picks: string[];
  lastPick?: string;
  mode?: CivicCityMode;
  currentRound?: RoundId;
}

function priorPicks(picks: string[], round?: RoundId) {
  if (round === undefined) return picks.slice(0, Math.max(0, picks.length - 1));
  return picks.slice(0, round - 1);
}

function signed(n: number) {
  if (n > 0) return `+${n}`;
  return `${n}`;
}

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function CivicCity({
  indicators,
  before,
  picks,
  lastPick,
  mode = "idle",
  currentRound,
}: CivicCityProps) {
  const [compareStart, setCompareStart] = useState(false);
  const [reveal, setReveal] = useState<RevealPhase>("done");
  useEffect(() => {
    for (const src of allVillageSrcs()) {
      const img = new Image();
      img.src = src;
    }
  }, []);

  const previous = priorPicks(picks, currentRound);
  const liveView = deriveVillageView(picks, previous);
  const prevSteps = stepsFromPicks(previous);
  const notes = villageChangeNotes(picks, previous);
  const pickKey = picks.join("|");

  useEffect(() => {
    if (mode === "idle" || notes.length === 0) {
      setReveal("done");
      return;
    }
    if (prefersReducedMotion()) {
      setReveal("done");
      return;
    }
    setReveal("before");
    const focusAt = window.setTimeout(() => setReveal("focus"), 520);
    const doneAt = window.setTimeout(() => setReveal("done"), 1500);
    return () => {
      window.clearTimeout(focusAt);
      window.clearTimeout(doneAt);
    };
  }, [pickKey, mode, notes.length]);

  const shownPicks = compareStart ? [] : picks;
  const shownPrev = compareStart ? [] : previous;
  const settled = deriveVillageView(shownPicks, shownPrev);
  const display =
    !compareStart && reveal === "before" && notes.length > 0
      ? { ...prevSteps, changed: liveView.changed }
      : settled;
  const lastRaw = lastPick ? getPolicy(lastPick) : undefined;
  const last = lastRaw ? presentPolicy(lastRaw, previous) : undefined;
  const reason = villageFeedback(picks, previous);
  const showNotes = !compareStart && mode !== "idle" && notes.length > 0 && reveal !== "done";

  return (
    <div className="space-y-3" data-testid="civic-city">
      <figure
        className="relative min-h-0"
        data-testid="civic-village"
        data-care-step={display.care}
        data-work-step={display.work}
        data-commons-step={display.commons}
        data-care-ops={settled.careOps}
        data-work-ops={settled.workOps}
        data-commons-ops={settled.commonsOps}
        data-later={settled.later}
        data-coffer={settled.coffer}
        data-reveal={reveal}
      >
        <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-[#071018] aspect-[16/9]">
          <img
            src={VILLAGE_BASE}
            alt="도로로 이어진 하나의 마을"
            width={1280}
            height={720}
            className="absolute inset-0 h-full w-full object-contain"
          />
          {(Object.keys(ZONE_PLOTS) as ZoneId[]).map((id) => (
            <ZonePlate
              key={id}
              id={id}
              step={display[id]}
              highlight={
                mode !== "result" &&
                reveal === "focus" &&
                liveView.changed.includes(id)
              }
            />
          ))}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            {FACILITY_LABELS.map((label) => (
              <span
                key={label.text}
                className="absolute -translate-x-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded-md bg-slate-950/70 text-[9px] sm:text-[10px] font-semibold tracking-wide text-cyan-50 border border-white/15"
                style={{ left: label.x, top: label.y }}
              >
                {label.text}
              </span>
            ))}
          </div>
          {!compareStart &&
            notes.map((note) => {
              const anchor = ZONE_ARROW_ANCHOR[note.zone];
              return (
                <div
                  key={note.zone}
                  className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  style={{ left: anchor.left, top: anchor.top }}
                  data-testid={`zone-arrow-${note.zone}`}
                  data-change={note.better ? "up" : "down"}
                >
                  <span className="sr-only">
                    {ZONE_META[note.zone].label} {note.better ? "좋아짐" : "나빠짐"}
                  </span>
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-full border shadow-md ${
                      note.better
                        ? "border-emerald-300/80 bg-emerald-950/85 text-emerald-300"
                        : "border-rose-300/80 bg-rose-950/85 text-rose-300"
                    }`}
                    aria-hidden="true"
                    title={note.better ? "좋아짐" : "나빠짐"}
                  >
                    {note.better ? (
                      <ArrowUp className="h-4 w-4" strokeWidth={2.6} />
                    ) : (
                      <ArrowDown className="h-4 w-4" strokeWidth={2.6} />
                    )}
                  </span>
                </div>
              );
            })}
          {showNotes && (
            <div
              className="absolute inset-x-2 bottom-2 flex flex-wrap gap-1.5 justify-center pointer-events-none"
              data-testid="village-change-notes"
            >
              {notes.map((note) => (
                <span
                  key={note.zone}
                  className={`px-2 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold ${
                    note.better
                      ? "bg-cyan-950/85 text-cyan-50 border border-cyan-400/40"
                      : "bg-slate-950/85 text-amber-50 border border-amber-400/40"
                  }`}
                >
                  {note.text}
                </span>
              ))}
            </div>
          )}
        </div>
      </figure>

      <div className="hidden md:grid grid-cols-3 sm:grid-cols-5 gap-1.5 text-[10px] text-slate-300">
        {(Object.keys(ZONE_META) as ZoneId[]).map((id) => {
          const note = notes.find((item) => item.zone === id);
          return (
            <div
              key={id}
              className="rounded-lg border border-slate-800 bg-slate-950/60 px-2 py-1.5"
            >
              <p className="font-bold text-white flex items-center gap-1">
                {ZONE_META[id].label}
                {note && !compareStart && (
                  <span
                    className={note.better ? "text-emerald-300" : "text-rose-300"}
                    aria-label={note.better ? "좋아짐" : "나빠짐"}
                  >
                    {note.better ? "↑" : "↓"}
                  </span>
                )}
              </p>
              <p>시설 단계 {signed(settled[id])}</p>
              <p className="text-slate-400">
                {OPS_LABEL[id === "care" ? settled.careOps : id === "work" ? settled.workOps : settled.commonsOps]}
              </p>
            </div>
          );
        })}
        <div className="rounded-lg border border-slate-800 bg-slate-950/60 px-2 py-1.5">
          <p className="font-bold text-white">나라 곳간</p>
          <p>{settled.coffer}</p>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-950/60 px-2 py-1.5">
          <p className="font-bold text-white">나중에 갚을 짐</p>
          <p>{settled.later}</p>
        </div>
      </div>

      {mode === "result" && (
        <button
          type="button"
          data-testid="village-compare"
          onClick={() => setCompareStart((v) => !v)}
          className="px-3 py-1.5 rounded-lg border border-cyan-700/50 text-xs text-cyan-100 cursor-pointer"
        >
          {compareStart ? "현재 모습 보기" : "처음 모습과 비교"}
        </button>
      )}

      {last && mode !== "idle" && !compareStart && (
        <div
          className="hidden md:block rounded-xl border border-cyan-700/40 bg-cyan-950/35 px-3 py-2.5 space-y-2"
          data-testid="civic-delta"
        >
          <p className="text-[10px] font-mono uppercase tracking-wider text-cyan-300/80">
            직전 선택으로 바뀐 사항
          </p>
          <p className="text-xs sm:text-sm text-cyan-50 leading-relaxed">
            <strong className="text-white">{last.title}</strong>
            {" — "}
            {reason}
          </p>
          {before && (
            <div className="flex flex-wrap gap-1.5">
              {(Object.keys(INDICATOR_META) as IndicatorId[]).map((id) => {
                const diff = indicators[id] - before[id];
                if (diff === 0) return null;
                return (
                  <span
                    key={id}
                    className="px-2 py-0.5 rounded-full bg-slate-950/70 text-[10px] font-mono text-slate-100"
                  >
                    {INDICATOR_META[id].label} {signed(diff)}
                  </span>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ZonePlate({
  id,
  step,
  highlight,
}: {
  id: ZoneId;
  step: ZoneStep;
  highlight: boolean;
}) {
  const plot = ZONE_PLOTS[id];
  return (
    <>
      {step !== 0 && (
        <img
          src={zoneSrc(id, step)}
          alt=""
          width={1280}
          height={720}
          data-zone={id}
          data-step={step}
          className="absolute inset-0 h-full w-full object-contain"
          style={{ clipPath: plot }}
        />
      )}
      {highlight && (
        <div
          className="absolute inset-0 village-zone-focus"
          data-zone-focus={id}
          style={{ clipPath: plot }}
        />
      )}
    </>
  );
}

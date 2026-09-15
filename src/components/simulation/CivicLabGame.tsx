import React, { useEffect, useMemo, useState } from "react";
import { ArrowLeft, RotateCcw, X } from "lucide-react";
import {
  BASELINE,
  GOALS,
  GoalId,
  INDICATOR_META,
  IndicatorId,
  PolicyDef,
  RoundId,
  TOTAL_ROUNDS,
  clearFromRound,
  computeState,
  exclusiveRoundPick,
  endingReport,
  getPolicy,
  goalFit,
  describeOutcome,
  optionsForRound,
  presentPolicy,
  roundBrief,
  ROUND_PHASE,
  deltaFromBaseline,
} from "../../data/civicLab/model";
import { C } from "../../data/citations";
import { CivicCity } from "./CivicCity";

type Step =
  | "intro"
  | "lesson"
  | "goal"
  | "round1"
  | "round2"
  | "round3"
  | "round4"
  | "round5"
  | "round6"
  | "result";

const STEPS: Step[] = [
  "intro",
  "lesson",
  "goal",
  "round1",
  "round2",
  "round3",
  "round4",
  "round5",
  "round6",
  "result",
];

const ROUND_STEPS: Step[] = [
  "round1",
  "round2",
  "round3",
  "round4",
  "round5",
  "round6",
];

interface CivicLabGameProps {
  isOpen: boolean;
  onClose: () => void;
  onBrowseHalls: () => void;
}

function MiniBar({
  id,
  value,
  before,
}: {
  id: IndicatorId;
  value: number;
  before?: number;
}) {
  const meta = INDICATOR_META[id];
  const tone = meta.invert
    ? value > 62
      ? "bg-rose-400"
      : "bg-amber-300"
    : value >= 55
      ? "bg-emerald-400"
      : "bg-cyan-400";
  return (
    <div>
      <div className="flex justify-between text-[10px] mb-0.5">
        <span className="text-slate-300">{meta.label}</span>
        <span className="font-mono text-slate-500">
          {before !== undefined && before !== value ? `${before}→` : ""}
          {value}
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
        <div className={`h-full ${tone}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function roundFromStep(step: Step): RoundId | undefined {
  if (!step.startsWith("round")) return undefined;
  return Number(step.replace("round", "")) as RoundId;
}

export const CivicLabGame: React.FC<CivicLabGameProps> = ({
  isOpen,
  onClose,
  onBrowseHalls,
}) => {
  const [step, setStep] = useState<Step>("intro");
  const [goal, setGoal] = useState<GoalId | null>(null);
  const [picks, setPicks] = useState<string[]>([]);

  useEffect(() => {
    if (!isOpen) {
      setStep("intro");
      setGoal(null);
      setPicks([]);
      return;
    }
    const query = new URLSearchParams(window.location.search);
    const raw = query.get("picks");
    if (!raw) return;
    const next = raw.split(",").map((id) => id.trim()).filter(Boolean);
    setPicks(next);
    const requested = query.get("step");
    if (requested && STEPS.includes(requested as Step)) {
      setStep(requested as Step);
    } else if (next.length >= TOTAL_ROUNDS) {
      setStep("result");
    } else {
      setStep(`round${next.length + 1}` as Step);
    }
  }, [isOpen]);

  const currentRound = roundFromStep(step);
  const cityMode =
    step === "result" ? "result" : currentRound ? "round" : "idle";
  const { indicators, conflicts } = useMemo(() => computeState(picks), [picks]);
  const beforePick = useMemo(() => {
    const prior =
      currentRound === undefined
        ? picks.slice(0, -1)
        : picks.slice(0, currentRound - 1);
    return prior.length === 0 ? BASELINE : computeState(prior).indicators;
  }, [picks, currentRound]);

  if (!isOpen) return null;

  const idx = STEPS.indexOf(step);
  const reset = () => {
    setStep("intro");
    setGoal(null);
    setPicks([]);
  };

  const choose = (id: string, round: RoundId) =>
    setPicks((prev) => exclusiveRoundPick(prev, id, round));

  const renderRound = (round: RoundId) => {
    const history = picks.slice(0, round - 1);
    const options = optionsForRound(round, picks).map((item) =>
      presentPolicy(item, history),
    );
    const selected = picks[round - 1];
    const brief = roundBrief(round, picks);
    const phase = ROUND_PHASE[round];
    return (
      <div className="space-y-3">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <div>
            <p
              className="text-[11px] font-mono text-cyan-300"
              data-testid="round-counter"
            >
              현재 라운드 {round} / {TOTAL_ROUNDS}
            </p>
            <h3 className="text-lg font-black text-white">{brief.title}</h3>
            <p className="text-[11px] text-slate-500 mt-0.5">{phase.label}</p>
          </div>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">{brief.body}</p>
        <p className="text-[11px] text-slate-500">
          아래 숫자와 마을 모습은 게임 안 가정입니다. 국가 전망치가 아닙니다.
        </p>
        <PickHistory picks={picks} currentRound={round} />
        <div className="grid sm:grid-cols-3 gap-2">
          {options.map((item) => (
            <PolicyCard
              key={item.id}
              policy={item}
              active={selected === item.id}
              onPick={() => choose(item.id, round)}
            />
          ))}
        </div>
        {conflicts.length > 0 && selected && (
          <div className="text-xs text-amber-100 bg-amber-950/30 border border-amber-700/40 rounded-xl p-3 space-y-1">
            {conflicts.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        )}
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="px-3 py-2 rounded-lg border border-slate-700 text-xs text-slate-300 cursor-pointer"
            onClick={() => setPicks((prev) => clearFromRound(prev, round))}
          >
            이 단계 선택 취소
          </button>
          <button
            type="button"
            disabled={!selected}
            className="px-4 py-2 rounded-lg bg-cyan-500 disabled:bg-slate-800 disabled:text-slate-500 text-slate-950 font-bold text-sm cursor-pointer"
            onClick={() => setStep(STEPS[idx + 1])}
          >
            {round === TOTAL_ROUNDS ? "결과 보기" : "다음 라운드"}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-[60] bg-[#040814] overflow-y-auto">
      <div className="min-h-full max-w-5xl mx-auto px-4 py-4 sm:py-6">
        <div className="flex items-center justify-between mb-3">
          <button
            type="button"
            onClick={() => (idx === 0 ? onClose() : setStep(STEPS[idx - 1]))}
            className="flex items-center gap-1 text-xs text-slate-400 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            {idx === 0 ? "전시로" : "이전"}
          </button>
          <span className="text-[11px] font-mono text-cyan-300">
            {currentRound
              ? `현재 라운드 ${currentRound} / ${TOTAL_ROUNDS}`
              : step === "result"
                ? `현재 라운드 ${TOTAL_ROUNDS} / ${TOTAL_ROUNDS}`
                : `나라살림게임 · ${idx + 1}/${STEPS.length}`}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white cursor-pointer"
            aria-label="게임 닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <CivicCity
          indicators={step === "intro" || step === "lesson" ? BASELINE : indicators}
          before={beforePick}
          picks={step === "intro" || step === "lesson" ? [] : picks}
          lastPick={
            step === "intro" || step === "lesson"
              ? undefined
              : picks[picks.length - 1]
          }
          mode={cityMode}
          currentRound={currentRound}
        />

        {step !== "intro" && step !== "lesson" && step !== "result" && (
          <div className="mt-3 mb-4 grid grid-cols-2 sm:grid-cols-5 gap-2">
            {(Object.keys(INDICATOR_META) as IndicatorId[]).map((id) => (
              <MiniBar
                key={id}
                id={id}
                value={indicators[id]}
                before={ROUND_STEPS.includes(step) ? beforePick[id] : undefined}
              />
            ))}
          </div>
        )}

        <div className="mt-4">
          {step === "intro" && (
            <div className="space-y-3">
              <h2 className="text-2xl font-black text-white">당신이 살림을 맡았습니다</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                위 도시는 교육용 가상 살림입니다. 여섯 라운드 동안 세금, 투자,
                운영, 부담을 고릅니다. 앞선 선택이 다음 선택지를 바꿉니다. 한
                조합이 모든 사람을 만족시키지는 않습니다.
              </p>
              <button
                type="button"
                onClick={() => setStep("lesson")}
                className="w-full py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold cursor-pointer"
              >
                도시 흐름 보기
              </button>
            </div>
          )}

          {step === "lesson" && (
            <div className="space-y-3">
              <h2 className="text-xl font-black text-white">돈은 이렇게 움직입니다</h2>
              <ul className="text-sm text-slate-300 space-y-2 leading-relaxed">
                <li>세금이 곳간으로 들어오면 창과 서비스가 유지됩니다.</li>
                <li>곳간에서 돌봄과 일자리로 나가면 병원·학교·이동이 살아납니다.</li>
                <li>지금 덜 걷거나 더 쓰면, 나중에 갚을 짐이 커질 수 있습니다.</li>
                <li>같은 투자를 반복하기보다, 운영·접근성·다른 분야 배분이 이어집니다.</li>
              </ul>
              <button
                type="button"
                onClick={() => setStep("goal")}
                className="w-full py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold cursor-pointer"
              >
                내가 지킬 것을 고르기
              </button>
            </div>
          )}

          {step === "goal" && (
            <div className="space-y-3">
              <h2 className="text-xl font-black text-white">무엇을 먼저 지킬까요?</h2>
              <div className="grid sm:grid-cols-2 gap-2">
                {GOALS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setGoal(item.id)}
                    className={`text-left p-3 rounded-xl border cursor-pointer ${
                      goal === item.id
                        ? "border-cyan-400 bg-cyan-950/40"
                        : "border-slate-800 bg-slate-950"
                    }`}
                  >
                    <div className="font-bold text-white">{item.name}</div>
                    <p className="text-xs text-slate-400 mt-1">{item.ask}</p>
                  </button>
                ))}
              </div>
              <button
                type="button"
                disabled={!goal}
                onClick={() => setStep("round1")}
                className="w-full py-3 rounded-xl bg-cyan-500 disabled:bg-slate-800 text-slate-950 font-bold cursor-pointer"
              >
                첫 선택으로
              </button>
            </div>
          )}

          {step === "round1" && renderRound(1)}
          {step === "round2" && renderRound(2)}
          {step === "round3" && renderRound(3)}
          {step === "round4" && renderRound(4)}
          {step === "round5" && renderRound(5)}
          {step === "round6" && renderRound(6)}

          {step === "result" && goal && (
            <ResultView
              goal={goal}
              picks={picks}
              onReplay={reset}
              onBrowseHalls={onBrowseHalls}
            />
          )}
          {step === "result" && !goal && (
            <ResultView
              goal="balance"
              picks={picks}
              onReplay={reset}
              onBrowseHalls={onBrowseHalls}
            />
          )}
        </div>
      </div>
    </div>
  );
};

function PickHistory({
  picks,
  currentRound,
}: {
  picks: string[];
  currentRound: RoundId;
}) {
  if (picks.length === 0) return null;
  return (
    <ol
      className="flex flex-wrap gap-1.5"
      data-testid="pick-history"
    >
      {picks.map((id, index) => {
        const policy = getPolicy(id);
        if (!policy) return null;
        const current = index + 1 === currentRound;
        return (
          <li
            key={`${id}-${index}`}
            className={`px-2 py-1 rounded-full text-[10px] border ${
              current
                ? "border-cyan-400 bg-cyan-950/50 text-cyan-50"
                : "border-slate-700 bg-slate-950 text-slate-300"
            }`}
          >
            {index + 1}. {policy.title}
          </li>
        );
      })}
    </ol>
  );
}

function PolicyCard({
  policy,
  active,
  onPick,
}: {
  policy: PolicyDef;
  active: boolean;
  onPick: () => void;
}) {
  return (
    <button
      type="button"
      data-policy-id={policy.id}
      onClick={onPick}
      className={`text-left p-3 rounded-xl border cursor-pointer ${
        active ? "border-cyan-400 bg-cyan-950/50" : "border-slate-800 bg-slate-950"
      }`}
    >
      <div className="font-bold text-white text-sm mb-1">{policy.title}</div>
      <p className="text-[11px] text-slate-300 leading-relaxed">{policy.what}</p>
      <p className="text-[10px] text-cyan-200/90 mt-2">기대: {policy.nowEffect}</p>
      <p className="text-[10px] text-amber-200/90 mt-1">부담: {policy.laterEffect}</p>
    </button>
  );
}

function ResultView({
  goal,
  picks,
  onReplay,
  onBrowseHalls,
}: {
  goal: GoalId;
  picks: string[];
  onReplay: () => void;
  onBrowseHalls: () => void;
}) {
  const { indicators, conflicts } = computeState(picks);
  const fit = goalFit(goal, indicators);
  const d = deltaFromBaseline(indicators);
  const goalName = GOALS.find((g) => g.id === goal)?.name;
  const report = endingReport(picks);
  return (
    <div className="space-y-3">
      <p className="text-[11px] font-mono text-cyan-300">현재 라운드 {TOTAL_ROUNDS} / {TOTAL_ROUNDS} · 결과</p>
      <h2 className="text-xl font-black text-white">당신이 만든 살림</h2>
      <p className="text-sm text-cyan-100">
        목표 ‘{goalName}’ — {fit.why}
      </p>
      <PickHistory picks={picks} currentRound={TOTAL_ROUNDS} />
      <div className="grid sm:grid-cols-3 gap-2 text-xs">
        <ResultColumn title="발전한 부분" lines={report.grew} tone="cyan" />
        <ResultColumn title="남은 문제" lines={report.remain} tone="amber" />
        <ResultColumn title="재정 부담" lines={report.burden} tone="rose" />
      </div>
      <ul className="text-sm text-slate-300 space-y-1.5 list-disc list-inside">
        {describeOutcome(indicators).map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
      {conflicts.length > 0 && (
        <div className="text-sm text-amber-100 bg-amber-950/30 border border-amber-700/40 rounded-xl p-3 space-y-1">
          {conflicts.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      )}
      <p className="text-xs text-slate-400">
        생활 {signed(d.life)} · 활력 {signed(d.work)} · 곳간 {signed(d.coffer)} ·
        다음 세대 {signed(d.later)}
      </p>
      <p className="text-[11px] text-slate-500">
        위 비교는 게임 안 가상 살림입니다. 국가채무비율이나 공식 전망치가 아닙니다.
      </p>
      <div className="flex flex-col sm:flex-row gap-2">
        <button
          type="button"
          onClick={onReplay}
          className="flex-1 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold cursor-pointer inline-flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          다른 선택으로 다시 해보기
        </button>
        <button
          type="button"
          onClick={onBrowseHalls}
          className="flex-1 py-3 rounded-xl border border-slate-600 text-slate-200 cursor-pointer"
        >
          다른 전시관 둘러보기
        </button>
      </div>
      <div className="text-[11px] text-slate-500 space-y-1">
        <p>실제 살림 숫자는 이 게임 밖에서도 찾아볼 수 있습니다. 체험을 대신하지는 않습니다.</p>
        <p>
          <a
            href={C.open_fiscal.url}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-slate-200"
          >
            열린재정
          </a>
          {" · "}
          <a
            href={C.my_budget.url}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-slate-200"
          >
            국민참여예산
          </a>
          {" · "}
          <a
            href={C.peri_game.url ?? "https://perikorea.org/"}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-slate-200"
          >
            PERI 나라살림게임
          </a>
        </p>
      </div>
    </div>
  );
}

function ResultColumn({
  title,
  lines,
  tone,
}: {
  title: string;
  lines: string[];
  tone: "cyan" | "amber" | "rose";
}) {
  const border =
    tone === "cyan"
      ? "border-cyan-700/40 bg-cyan-950/20"
      : tone === "amber"
        ? "border-amber-700/40 bg-amber-950/20"
        : "border-rose-700/40 bg-rose-950/20";
  return (
    <section className={`rounded-xl border p-3 space-y-1.5 ${border}`}>
      <h3 className="font-bold text-white">{title}</h3>
      {lines.map((line) => (
        <p key={line} className="text-slate-300 leading-relaxed">
          {line}
        </p>
      ))}
    </section>
  );
}

function signed(n: number) {
  if (n > 0) return `+${n}`;
  return `${n}`;
}

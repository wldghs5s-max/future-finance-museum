import { computeState, getPolicy } from "./model";

export type ZoneId = "care" | "work" | "commons";
export type ZoneStep = -3 | -2 | -1 | 0 | 1 | 2 | 3;
export type OpsTone = "thin" | "steady" | "staffed";

export interface VillageView {
  care: ZoneStep;
  work: ZoneStep;
  commons: ZoneStep;
  careOps: OpsTone;
  workOps: OpsTone;
  commonsOps: OpsTone;
  coffer: number;
  later: number;
  changed: ZoneId[];
  opsChanged: ZoneId[];
  holdNote?: string;
}

function clampStep(n: number): ZoneStep {
  return Math.max(-3, Math.min(3, n)) as ZoneStep;
}

/**
 * 시각 단계: 누적 점수 2점당 1단계.
 * 한 번의 투자로 ±3에 닿지 않고, 6라운드 집중 시에만 끝에 최대에 가깝게 한다.
 */
export function scoreToStep(score: number): ZoneStep {
  if (score >= 6) return 3;
  if (score >= 4) return 2;
  if (score >= 2) return 1;
  if (score <= -6) return -3;
  if (score <= -4) return -2;
  if (score <= -2) return -1;
  return 0;
}

export function opsFromScore(score: number): OpsTone {
  if (score >= 2) return "staffed";
  if (score <= -2) return "thin";
  return "steady";
}

export const OPS_LABEL: Record<OpsTone, string> = {
  staffed: "운영 여유",
  steady: "운영 보통",
  thin: "운영 빠듯",
};

export function visualScores(picks: string[]): Record<ZoneId, number> {
  const scores: Record<ZoneId, number> = { care: 0, work: 0, commons: 0 };
  for (const id of picks) {
    const policy = getPolicy(id);
    if (!policy) continue;
    scores.care += policy.visual.care ?? 0;
    scores.work += policy.visual.work ?? 0;
    scores.commons += policy.visual.commons ?? 0;
  }
  return scores;
}

export function opsScores(picks: string[]): Record<ZoneId, number> {
  const scores: Record<ZoneId, number> = { care: 0, work: 0, commons: 0 };
  for (const id of picks) {
    const policy = getPolicy(id);
    if (!policy) continue;
    scores.care += policy.ops.care ?? 0;
    scores.work += policy.ops.work ?? 0;
    scores.commons += policy.ops.commons ?? 0;
  }
  return scores;
}

/**
 * 교육용 시각 단계. 공식 예측이 아니다.
 * 지표를 6으로 나누지 않고, 정책의 시설 압력 점수를 쌓아 -3~+3으로 바꾼다.
 */
export function stepsFromPicks(picks: string[]): Pick<
  VillageView,
  "care" | "work" | "commons" | "careOps" | "workOps" | "commonsOps" | "coffer" | "later"
> {
  const { indicators } = computeState(picks);
  const visual = visualScores(picks);
  const ops = opsScores(picks);
  return {
    care: clampStep(scoreToStep(visual.care)),
    work: clampStep(scoreToStep(visual.work)),
    commons: clampStep(scoreToStep(visual.commons)),
    careOps: opsFromScore(ops.care),
    workOps: opsFromScore(ops.work),
    commonsOps: opsFromScore(ops.commons),
    coffer: indicators.coffer,
    later: indicators.later,
  };
}

export function deriveVillageView(
  picks: string[],
  previousPicks: string[] = [],
): VillageView {
  const now = stepsFromPicks(picks);
  const prev = stepsFromPicks(previousPicks);
  const changed: ZoneId[] = [];
  const opsChanged: ZoneId[] = [];
  if (now.care !== prev.care) changed.push("care");
  if (now.work !== prev.work) changed.push("work");
  if (now.commons !== prev.commons) changed.push("commons");
  if (now.careOps !== prev.careOps) opsChanged.push("care");
  if (now.workOps !== prev.workOps) opsChanged.push("work");
  if (now.commonsOps !== prev.commonsOps) opsChanged.push("commons");

  const last = picks[picks.length - 1];
  const lastPolicy = last ? getPolicy(last) : undefined;
  const holdNote =
    lastPolicy && changed.length === 0
      ? `건물 규모는 그대로입니다. ${lastPolicy.afterWhy}`
      : undefined;

  return { ...now, changed, opsChanged, holdNote };
}

export function villageFeedback(
  picks: string[],
  previousPicks: string[] = [],
): string {
  const last = picks[picks.length - 1];
  const policy = last ? getPolicy(last) : undefined;
  const view = deriveVillageView(picks, previousPicks);
  const prev = stepsFromPicks(previousPicks);
  if (!policy) return "아직 선택한 정책이 없습니다.";

  const bits: string[] = [];
  if (view.changed.includes("care")) {
    bits.push(
      view.care > prev.care
        ? "생활·돌봄 시설이 한 단계 커졌습니다"
        : "생활·돌봄 시설 규모가 한 단계 줄었습니다",
    );
  } else if (view.opsChanged.includes("care")) {
    bits.push(
      view.careOps === "staffed"
        ? "돌봄 건물은 같고 운영이 두터워졌습니다"
        : view.careOps === "thin"
          ? "돌봄 건물은 같고 운영이 빠듯해졌습니다"
          : "돌봄 운영 상태가 달라졌습니다",
    );
  }
  if (view.changed.includes("work")) {
    bits.push(
      view.work > prev.work
        ? "배움·일자리 시설이 한 단계 커졌습니다"
        : "학교·작업장 규모가 한 단계 줄었습니다",
    );
  } else if (view.opsChanged.includes("work")) {
    bits.push(
      view.workOps === "staffed"
        ? "학교·작업장 건물은 같고 운영이 두터워졌습니다"
        : view.workOps === "thin"
          ? "학교·작업장 건물은 같고 운영이 빠듯해졌습니다"
          : "배움 쪽 운영 상태가 달라졌습니다",
    );
  }
  if (view.changed.includes("commons")) {
    bits.push(
      view.commons > prev.commons
        ? "공원·공동 기반이 정비되었습니다"
        : "공동 기반의 유지가 줄었습니다",
    );
  } else if (view.opsChanged.includes("commons")) {
    bits.push("공동 공간 유지 상태가 달라졌습니다");
  }

  if (bits.length === 0) return `${policy.title} — ${policy.afterWhy}`;
  return `${bits.join(". ")}. ${policy.afterWhy}`;
}

export const ZONE_META: Record<ZoneId, { label: string; hint: string }> = {
  care: { label: "생활·돌봄", hint: "주거, 병원, 돌봄 공간" },
  work: { label: "배움·일자리", hint: "학교, 상점, 작업장" },
  commons: { label: "공동 기반·미래", hint: "공원, 유지보수, 다음 세대를 위한 여지" },
};

export interface VillageChangeNote {
  zone: ZoneId;
  better: boolean;
  text: string;
}

/** 그림에서 달라진 시설·운영만 짧게 알린다. 계산을 바꾸지 않는다. */
export function villageChangeNotes(
  picks: string[],
  previousPicks: string[] = [],
): VillageChangeNote[] {
  const now = stepsFromPicks(picks);
  const prev = stepsFromPicks(previousPicks);
  const notes: VillageChangeNote[] = [];
  if (now.care !== prev.care) {
    notes.push({
      zone: "care",
      better: now.care > prev.care,
      text: now.care > prev.care ? "돌봄·의료 공간 확대" : "돌봄 공간 규모 축소",
    });
  } else if (now.careOps !== prev.careOps) {
    notes.push({
      zone: "care",
      better: now.careOps === "staffed" || prev.careOps === "thin",
      text: now.careOps === "staffed" ? "돌봄 운영 보강" : now.careOps === "thin" ? "돌봄 운영 축소" : "돌봄 운영 조정",
    });
  }
  if (now.work !== prev.work) {
    notes.push({
      zone: "work",
      better: now.work > prev.work,
      text: now.work > prev.work ? "학교 시설 확장" : "교실·작업 공간 축소",
    });
  } else if (now.workOps !== prev.workOps) {
    notes.push({
      zone: "work",
      better: now.workOps === "staffed" || prev.workOps === "thin",
      text: now.workOps === "staffed" ? "배움 운영 보강" : now.workOps === "thin" ? "배움 운영 축소" : "배움 운영 조정",
    });
  }
  if (now.commons !== prev.commons) {
    notes.push({
      zone: "commons",
      better: now.commons > prev.commons,
      text: now.commons > prev.commons ? "공원·보행로 정비" : "공동 공간 유지 축소",
    });
  } else if (now.commonsOps !== prev.commonsOps) {
    notes.push({
      zone: "commons",
      better: now.commonsOps === "staffed" || prev.commonsOps === "thin",
      text: now.commonsOps === "thin" ? "공동 유지 축소" : "공동 유지 조정",
    });
  }
  return notes;
}

export type IndicatorId = "coffer" | "life" | "work" | "later" | "fair";
export type ZoneVisualId = "care" | "work" | "commons";
export type RoundId = 1 | 2 | 3 | 4 | 5 | 6;

export const TOTAL_ROUNDS = 6;

export interface Indicators {
  coffer: number;
  life: number;
  work: number;
  later: number;
  fair: number;
}

export const INDICATOR_META: Record<
  IndicatorId,
  { label: string; hint: string; invert?: boolean }
> = {
  coffer: { label: "나라 곳간", hint: "올해 쓸 수 있는 살림" },
  life: { label: "생활 안정", hint: "돌봄·복지 체감" },
  work: { label: "일자리·활력", hint: "경제 활동의 여유" },
  later: {
    label: "다음 세대 부담",
    hint: "나중에 갚아야 할 짐",
    invert: true,
  },
  fair: { label: "부담의 나눔", hint: "누가 비용을 나누는가" },
};

export const BASELINE: Indicators = {
  coffer: 48,
  life: 42,
  work: 52,
  later: 56,
  fair: 44,
};

export type GoalId = "life" | "work" | "later" | "balance";

export const GOALS: { id: GoalId; name: string; ask: string }[] = [
  { id: "life", name: "생활 지키기", ask: "아픈 사람과 돌봄이 필요한 사람을 먼저 생각합니다." },
  { id: "work", name: "활력 살리기", ask: "일자리를 만들고 경제가 돌아가게 합니다." },
  { id: "later", name: "다음 세대 배려", ask: "나중에 갚을 짐을 늘리지 않으려 합니다." },
  { id: "balance", name: "고르게 버티기", ask: "한쪽으로 치우치지 않고 버팁니다." },
];

export const ROUND_PHASE: Record<
  RoundId,
  { label: string; ask: string }
> = {
  1: { label: "마을 읽기", ask: "세금을 어떻게 할까요?" },
  2: { label: "우선순위", ask: "어디에 먼저 투자할까요?" },
  3: { label: "운영과 공백", ask: "앞선 투자를 어떻게 이어갈까요?" },
  4: { label: "성과와 부담", ask: "생긴 성과와 빈칸에 어떻게 대응할까요?" },
  5: { label: "도약 또는 보완", ask: "더 키울까요, 빈쪽을 메울까요?" },
  6: { label: "마무리", ask: "이 마을의 살림을 어떻게 정리할까요?" },
};

export interface PolicyDef {
  id: string;
  title: string;
  what: string;
  whoBenefits: string;
  whoPays: string;
  nowEffect: string;
  laterEffect: string;
  afterWhy: string;
  delta: Partial<Indicators>;
  visual: Partial<Record<ZoneVisualId, number>>;
  ops: Partial<Record<ZoneVisualId, number>>;
  tags: string[];
}

function p(def: PolicyDef): PolicyDef {
  return def;
}

export const POLICIES: PolicyDef[] = [
  p({
    id: "tax_up",
    title: "세금 조금 더 걷기",
    what: "소득세·법인세 부담을 늘려 곳간을 채웁니다.",
    whoBenefits: "공공 서비스를 유지하려는 쪽",
    whoPays: "일하는 사람과 기업",
    nowEffect: "당장 쓸 돈이 늘어 이후 투자 여지가 생깁니다.",
    laterEffect: "가계·상점 활동은 눌리고, 활력 지표가 떨어집니다.",
    afterWhy: "세입이 늘자 공공 곳간은 두터워졌고, 상점 쪽 여유는 줄었습니다.",
    delta: { coffer: 12, life: 2, work: -6, later: -5, fair: 6 },
    visual: { work: -2 },
    ops: { work: -1 },
    tags: ["tax_up"],
  }),
  p({
    id: "tax_down",
    title: "세금 크게 낮추기",
    what: "세율을 낮춰 가계와 기업의 손에 돈을 남깁니다.",
    whoBenefits: "납세자와 투자하는 기업",
    whoPays: "공공 서비스와 다음 세대",
    nowEffect: "상점과 작업장은 당장 숨통이 트입니다.",
    laterEffect: "곳간이 비면 이후 서비스와 미래 부담이 흔들립니다.",
    afterWhy: "세금을 낮춘 만큼 상점 쪽은 살아났고, 공공이 쓸 돈은 줄었습니다.",
    delta: { coffer: -14, life: 2, work: 9, later: 12, fair: -8 },
    visual: { work: 2 },
    ops: { work: 1, commons: -1 },
    tags: ["tax_down"],
  }),
  p({
    id: "tax_hold",
    title: "지금 세율 유지",
    what: "세금을 크게 건드리지 않습니다.",
    whoBenefits: "급격한 변화를 피하고 싶은 사람",
    whoPays: "늘어나는 돌봄·노후 비용을 나중으로 미룹니다.",
    nowEffect: "마을 모습은 거의 그대로입니다.",
    laterEffect: "지출이 늘면 곳간은 천천히 줄어 이후 선택이 빡빡해집니다.",
    afterWhy: "세율을 건드리지 않아 건물과 운영은 출발점과 같습니다. 다음 투자에서 결이 갈립니다.",
    delta: { coffer: -3, later: 5, work: 1 },
    visual: {},
    ops: {},
    tags: ["tax_hold"],
  }),
  p({
    id: "spend_care",
    title: "돌봄과 노후 지원 늘리기",
    what: "복지·돌봄에 살림을 더 씁니다.",
    whoBenefits: "고령층, 아픈 사람, 가족 돌봄을 하던 사람",
    whoPays: "세금 또는 미래의 빚",
    nowEffect: "생활·돌봄 공간이 눈에 띄게 나아집니다.",
    laterEffect: "매년 나가는 돈이 커져 곳간을 압박합니다.",
    afterWhy: "돌봄센터와 의료 쪽을 먼저 손봤습니다. 학교·공원은 이번 라운드에서 그대로입니다.",
    delta: { life: 10, coffer: -10, later: 5, work: -2, fair: 4 },
    visual: { care: 2 },
    ops: { care: 1 },
    tags: ["care"],
  }),
  p({
    id: "spend_future",
    title: "일자리·배움에 투자하기",
    what: "교육·기술·일자리에 살림을 돌립니다.",
    whoBenefits: "일할 세대와 지역 산업",
    whoPays: "당장 돌봄을 기다리는 사람",
    nowEffect: "학교·작업장 쪽이 살아납니다.",
    laterEffect: "돌봄 서비스는 덜 늘고, 곳간은 줄어듭니다.",
    afterWhy: "배움·일자리 쪽을 먼저 키웠습니다. 돌봄 공간은 이번엔 그대로입니다.",
    delta: { work: 9, later: -6, coffer: -9, life: -3, fair: 2 },
    visual: { work: 1 },
    ops: { work: 1 },
    tags: ["work"],
  }),
  p({
    id: "spend_hold",
    title: "지출 크게 늘리지 않기",
    what: "새로운 큰 사업을 열지 않습니다.",
    whoBenefits: "곳간을 지키려는 쪽",
    whoPays: "지원이 더디게 늘어나는 사람",
    nowEffect: "살림은 버티지만 필요한 서비스는 쌓입니다.",
    laterEffect: "돌봄·배움 공백이 커지면 이후 한 번에 메우기 어려워집니다.",
    afterWhy: "새 시설을 열지 않아 마을 외형은 유지됩니다. 운영 여유는 조금 줄었습니다.",
    delta: { coffer: 5, life: -4, later: 2, work: -2 },
    visual: {},
    ops: { care: -1, work: -1, commons: -1 },
    tags: ["hold"],
  }),
  p({
    id: "care_staff",
    title: "돌봄 인력·운영시간 늘리기",
    what: "이미 손본 돌봄 시설에 사람과 야간 운영을 보탭니다.",
    whoBenefits: "시설을 더 오래 써야 하는 가족",
    whoPays: "곳간과 다른 분야의 몫",
    nowEffect: "건물 규모보다 운영이 두터워집니다.",
    laterEffect: "인건비가 매년 나가 곳간이 빠듯해집니다.",
    afterWhy: "돌봄센터 건물은 같은 자리입니다. 사람이 늘고 문이 더 오래 열립니다.",
    delta: { life: 8, coffer: -9, later: 3, work: -1, fair: 3 },
    visual: { care: 1 },
    ops: { care: 2 },
    tags: ["care", "ops"],
  }),
  p({
    id: "care_access",
    title: "경사로·이동 지원으로 접근성 높이기",
    what: "돌봄·의료로 가는 길과 셔틀을 보강합니다.",
    whoBenefits: "이동이 어려운 주민",
    whoPays: "공사비와 운영비",
    nowEffect: "시설을 실제로 쓰는 사람이 늘어납니다.",
    laterEffect: "유지비가 남고, 배움 쪽 예산은 밀립니다.",
    afterWhy: "돌봄 부지에 접근로와 마당이 넓어졌습니다. 학교가 커진 것은 아닙니다.",
    delta: { life: 7, fair: 6, coffer: -8, work: -2, later: 2 },
    visual: { care: 2 },
    ops: { care: 1 },
    tags: ["care", "access"],
  }),
  p({
    id: "pivot_work",
    title: "돌봄은 유지하고 배움 쪽으로 돌리기",
    what: "돌봄 확장은 멈추고, 비어 있는 학교·작업장에 예산을 옮깁니다.",
    whoBenefits: "일할 세대와 학생",
    whoPays: "돌봄 대기자와 곳간",
    nowEffect: "배움·일자리 쪽이 따라오기 시작합니다.",
    laterEffect: "돌봄 운영은 늘어나지 않고, 두 곳을 동시에 키우기는 버겁습니다.",
    afterWhy: "돌봄은 지금 규모를 유지하고, 학교·작업장 쪽을 손보기 시작했습니다.",
    delta: { work: 8, life: -2, coffer: -8, later: 2, fair: 1 },
    visual: { work: 2 },
    ops: { work: 1, care: -1 },
    tags: ["work", "pivot"],
  }),
  p({
    id: "work_staff",
    title: "학교·작업장 운영과 강사 확보",
    what: "새로 연 배움·일자리 공간에 사람과 프로그램을 채웁니다.",
    whoBenefits: "학생과 훈련생",
    whoPays: "곳간과 돌봄 대기",
    nowEffect: "건물보다 수업·작업이 살아납니다.",
    laterEffect: "강사·운영비가 고정으로 나갑니다.",
    afterWhy: "학교와 작업장 외형은 크게 안 바뀌고, 안에서 돌아가는 일이 늘었습니다.",
    delta: { work: 8, coffer: -8, life: -2, later: 2, fair: 2 },
    visual: { work: 1 },
    ops: { work: 2 },
    tags: ["work", "ops"],
  }),
  p({
    id: "work_link",
    title: "학교와 작업장을 한 과정으로 잇기",
    what: "교실과 작업장을 이어 현장 배움을 만듭니다.",
    whoBenefits: "취업을 준비하는 사람",
    whoPays: "연계 운영비",
    nowEffect: "배움과 일자리가 한 덩어리로 보입니다.",
    laterEffect: "돌봄 쪽은 그대로이고, 곳간은 줄어듭니다.",
    afterWhy: "학교와 작업장이 길로 이어졌습니다. 돌봄센터를 키운 선택은 아닙니다.",
    delta: { work: 7, later: -3, coffer: -7, life: -2, fair: 2 },
    visual: { work: 2 },
    ops: { work: 1 },
    tags: ["work", "access"],
  }),
  p({
    id: "pivot_care",
    title: "일자리는 유지하고 돌봄으로 돌리기",
    what: "배움 확장은 멈추고, 비어 있는 돌봄에 예산을 옮깁니다.",
    whoBenefits: "돌봄이 필요한 사람과 가족",
    whoPays: "훈련 대기자와 곳간",
    nowEffect: "생활 서비스가 따라오기 시작합니다.",
    laterEffect: "학교·작업장 운영은 늘어나지 않습니다.",
    afterWhy: "배움 쪽은 지금 규모를 유지하고, 돌봄센터를 손보기 시작했습니다.",
    delta: { life: 8, work: -2, coffer: -8, later: 2, fair: 3 },
    visual: { care: 2 },
    ops: { care: 1, work: -1 },
    tags: ["care", "pivot"],
  }),
  p({
    id: "catchup_care",
    title: "미뤄 둔 돌봄부터 손보기",
    what: "아껴 둔 예산을 생활·돌봄 공백을 메우는 데 씁니다.",
    whoBenefits: "서비스를 기다리던 사람",
    whoPays: "곳간의 여유",
    nowEffect: "뒤처졌던 돌봄 공간이 따라옵니다.",
    laterEffect: "한 번에 벌충하면 곳간이 빨리 줄고, 배움은 또 밀립니다.",
    afterWhy: "지출을 참았다가 돌봄 쪽을 뒤늦게 열었습니다.",
    delta: { life: 9, coffer: -9, work: -2, later: 3, fair: 3 },
    visual: { care: 2 },
    ops: { care: 1 },
    tags: ["care"],
  }),
  p({
    id: "catchup_work",
    title: "미뤄 둔 배움·일자리부터 손보기",
    what: "아껴 둔 예산을 학교·작업장 공백을 메우는 데 씁니다.",
    whoBenefits: "학생과 일할 세대",
    whoPays: "곳간과 돌봄 대기",
    nowEffect: "뒤처졌던 배움 공간이 따라옵니다.",
    laterEffect: "돌봄 공백은 남고, 곳간은 줄어듭니다.",
    afterWhy: "지출을 참았다가 학교·작업장 쪽을 뒤늦게 열었습니다.",
    delta: { work: 9, coffer: -9, life: -3, later: -2, fair: 1 },
    visual: { work: 2 },
    ops: { work: 1 },
    tags: ["work"],
  }),
  p({
    id: "keep_saving",
    title: "계속 아껴 곳간 지키기",
    what: "서비스를 더 열지 않고 남은 돈을 붙듭니다.",
    whoBenefits: "다음 세대와 곳간을 걱정하는 쪽",
    whoPays: "지금 지원이 필요한 사람",
    nowEffect: "곳간 숫자는 버팁니다.",
    laterEffect: "운영이 빠듯해지고 불만이 쌓입니다.",
    afterWhy: "새 건물은 안 생겼습니다. 기존 시설의 유지·운영이 더 빠듯해졌습니다.",
    delta: { coffer: 8, later: -4, life: -5, work: -4, fair: -3 },
    visual: { commons: -1 },
    ops: { care: -2, work: -2, commons: -2 },
    tags: ["hold", "repair"],
  }),
  p({
    id: "care_copay",
    title: "돌봄 이용자가 비용 일부 나누기",
    what: "서비스는 유지하되, 이용하는 사람이 일부를 부담합니다.",
    whoBenefits: "곳간을 맞추려는 쪽",
    whoPays: "돌봄을 쓰는 가구",
    nowEffect: "운영비 구멍은 줄어듭니다.",
    laterEffect: "형편이 어려운 사람은 이용이 주춤할 수 있습니다.",
    afterWhy: "돌봄센터 건물은 그대로입니다. 이용 부담이 늘며 곳간은 조금 회복됩니다.",
    delta: { coffer: 7, fair: -7, life: -3, later: -3 },
    visual: {},
    ops: { care: -1 },
    tags: ["care", "copay"],
  }),
  p({
    id: "care_debt",
    title: "돌봄 운영 부족분은 뒤로 넘기기",
    what: "지금 운영을 줄이지 않고, 모자란 돈은 나중에 갚습니다.",
    whoBenefits: "지금 돌봄을 쓰는 사람",
    whoPays: "다음 세대",
    nowEffect: "서비스는 끊기지 않습니다.",
    laterEffect: "나중에 갚을 짐이 뚜렷이 커집니다.",
    afterWhy: "돌봄 운영은 유지됩니다. 부족한 돈은 미래로 넘어가 건물 쇠퇴로 그리지 않습니다.",
    delta: { later: 11, life: 4, coffer: -4, fair: -4 },
    visual: {},
    ops: { care: 1 },
    tags: ["care", "debt"],
  }),
  p({
    id: "care_to_work",
    title: "돌봄 성과를 배움 보완으로 돌리기",
    what: "돌봄은 지금 규모로 두고, 비어 있는 학교·작업장을 보강합니다.",
    whoBenefits: "학생과 일할 세대",
    whoPays: "추가 돌봄을 기다리던 사람",
    nowEffect: "한쪽으로 치우친 투자가 조금 고르게 집니다.",
    laterEffect: "돌봄을 더 키우지는 못하고, 곳간은 또 줄어듭니다.",
    afterWhy: "돌봄은 유지하고 배움 쪽 공백을 메우기 시작했습니다.",
    delta: { work: 8, life: -2, coffer: -8, later: 2, fair: 2 },
    visual: { work: 2 },
    ops: { work: 1, care: -1 },
    tags: ["work", "pivot"],
  }),
  p({
    id: "work_copay",
    title: "학습·훈련 비용 일부 부담",
    what: "프로그램은 유지하되, 참여하는 사람이 일부를 냅니다.",
    whoBenefits: "곳간을 맞추려는 쪽",
    whoPays: "학생·훈련생 가구",
    nowEffect: "운영비 구멍은 줄어듭니다.",
    laterEffect: "형편이 어려운 참여는 줄어들 수 있습니다.",
    afterWhy: "학교·작업장 규모는 그대로입니다. 참여 부담이 늘며 곳간이 조금 회복됩니다.",
    delta: { coffer: 7, fair: -6, work: -2, later: -3 },
    visual: {},
    ops: { work: -1 },
    tags: ["work", "copay"],
  }),
  p({
    id: "work_debt",
    title: "직업훈련 재원을 뒤로 넘기기",
    what: "지금 프로그램을 줄이지 않고, 모자란 돈은 나중에 갚습니다.",
    whoBenefits: "지금 배우는 사람",
    whoPays: "다음 세대",
    nowEffect: "수업과 작업은 이어집니다.",
    laterEffect: "나중에 갚을 짐이 커집니다.",
    afterWhy: "학교·작업장 운영은 유지됩니다. 부족한 돈은 미래 부담으로만 쌓입니다.",
    delta: { later: 11, work: 4, coffer: -4, fair: -3 },
    visual: {},
    ops: { work: 1 },
    tags: ["work", "debt"],
  }),
  p({
    id: "work_to_care",
    title: "일자리 성과를 돌봄 보완으로 돌리기",
    what: "배움은 지금 규모로 두고, 비어 있는 돌봄을 보강합니다.",
    whoBenefits: "돌봄이 필요한 사람",
    whoPays: "추가 훈련을 기다리던 사람",
    nowEffect: "치우친 투자가 조금 고르게 집니다.",
    laterEffect: "학교를 더 키우지는 못하고, 곳간은 줄어듭니다.",
    afterWhy: "배움은 유지하고 돌봄 쪽 공백을 메우기 시작했습니다.",
    delta: { life: 8, work: -2, coffer: -8, later: 2, fair: 3 },
    visual: { care: 2 },
    ops: { care: 1, work: -1 },
    tags: ["care", "pivot"],
  }),
  p({
    id: "thaw_care",
    title: "곳간을 열어 돌봄에 쓰기",
    what: "아껴 둔 돈을 생활·돌봄 공백을 여는 데 씁니다.",
    whoBenefits: "서비스를 기다리던 사람",
    whoPays: "곳간의 여유",
    nowEffect: "돌봄 공간이 뒤늦게 열립니다.",
    laterEffect: "쌓아 둔 여유가 한 번에 줄고, 배움은 또 밀릴 수 있습니다.",
    afterWhy: "곳간을 풀어 돌봄센터를 열었습니다. 아껴 온 대가가 시설로 바뀝니다.",
    delta: { life: 10, coffer: -11, work: -2, later: 3, fair: 4 },
    visual: { care: 2 },
    ops: { care: 1 },
    tags: ["care"],
  }),
  p({
    id: "thaw_work",
    title: "곳간을 열어 배움에 쓰기",
    what: "아껴 둔 돈을 학교·작업장 공백을 여는 데 씁니다.",
    whoBenefits: "학생과 일할 세대",
    whoPays: "곳간의 여유",
    nowEffect: "배움 공간이 뒤늦게 열립니다.",
    laterEffect: "쌓아 둔 여유가 줄고, 돌봄 공백은 남을 수 있습니다.",
    afterWhy: "곳간을 풀어 학교·작업장을 열었습니다.",
    delta: { work: 10, coffer: -11, life: -3, later: -2, fair: 1 },
    visual: { work: 2 },
    ops: { work: 1 },
    tags: ["work"],
  }),
  p({
    id: "keep_lid",
    title: "씀씀이 한도를 더 조이기",
    what: "새로 쓸 수 있는 돈을 줄여 빚 늘어남을 막습니다.",
    whoBenefits: "다음 세대",
    whoPays: "지금 서비스를 늘리려던 사람",
    nowEffect: "곳간은 버티고 미래 부담은 눌립니다.",
    laterEffect: "운영이 빠듯해지고 활력도 함께 눌립니다.",
    afterWhy: "새 공사는 멈췄습니다. 공원·공동 기반의 유지가 줄어 보입니다.",
    delta: { later: -8, coffer: 7, life: -5, work: -5, fair: 2 },
    visual: { commons: -2 },
    ops: { care: -1, work: -1, commons: -2 },
    tags: ["hold", "repair"],
  }),
  p({
    id: "hold_both",
    title: "양쪽 시설 운영만 유지하기",
    what: "돌봄과 배움을 더 키우지 않고, 지금 문을 닫지 않을 운영비만 댑니다.",
    whoBenefits: "이미 열린 서비스를 쓰는 사람",
    whoPays: "곳간",
    nowEffect: "건물 규모는 그대로이고 운영은 버팁니다.",
    laterEffect: "확장 기회는 미뤄지고, 곳간은 천천히 줄어듭니다.",
    afterWhy: "어느 쪽도 증축하지 않았습니다. 이미 열린 시설의 불만만 겨우 막습니다.",
    delta: { coffer: -7, life: 2, work: 2, later: 3 },
    visual: {},
    ops: { care: 1, work: 1 },
    tags: ["ops"],
  }),
  p({
    id: "deepen_work",
    title: "새로 튼 배움 쪽을 더 키우기",
    what: "방향을 튼 학교·작업장에 한 번 더 투자합니다.",
    whoBenefits: "학생과 훈련생",
    whoPays: "돌봄 대기와 곳간",
    nowEffect: "배움 공간이 한 단계 커집니다.",
    laterEffect: "돌봄은 제자리이고 재원 부담이 남습니다.",
    afterWhy: "방향을 바꾼 배움 쪽이 실제로 커졌습니다. 돌봄 증축은 아닙니다.",
    delta: { work: 8, coffer: -8, life: -2, later: 2 },
    visual: { work: 2 },
    ops: { work: 1 },
    tags: ["work", "expand"],
  }),
  p({
    id: "deepen_care",
    title: "새로 튼 돌봄 쪽을 더 키우기",
    what: "방향을 튼 돌봄센터에 한 번 더 투자합니다.",
    whoBenefits: "돌봄이 필요한 사람",
    whoPays: "훈련 대기와 곳간",
    nowEffect: "돌봄 공간이 한 단계 커집니다.",
    laterEffect: "배움은 제자리이고 재원 부담이 남습니다.",
    afterWhy: "방향을 바꾼 돌봄 쪽이 실제로 커졌습니다. 학교 증축은 아닙니다.",
    delta: { life: 8, coffer: -8, work: -2, later: 3 },
    visual: { care: 2 },
    ops: { care: 1 },
    tags: ["care", "expand"],
  }),
  p({
    id: "debt_bridge",
    title: "부족한 운영비는 뒤로 넘기기",
    what: "돌봄과 배움을 동시에 붙들기 어려운 돈을 빚으로 잇습니다.",
    whoBenefits: "지금 두 서비스를 쓰는 사람",
    whoPays: "다음 세대",
    nowEffect: "당장 문을 닫지는 않습니다.",
    laterEffect: "나중에 갚을 짐이 가팔라집니다.",
    afterWhy: "시설은 유지됩니다. 두 곳을 붙든 비용이 미래 부담으로 쌓입니다.",
    delta: { later: 12, coffer: -3, life: 3, work: 3, fair: -4 },
    visual: {},
    ops: { care: 1, work: 1 },
    tags: ["debt"],
  }),
  p({
    id: "care_expand",
    title: "돌봄센터 증축하기",
    what: "지금까지 밀어 온 생활·돌봄 공간을 한 단계 키웁니다.",
    whoBenefits: "더 많은 돌봄 이용자",
    whoPays: "곳간과 다른 분야",
    nowEffect: "돌봄 시설이 분명하게 커집니다.",
    laterEffect: "운영·부채 압력이 함께 커질 수 있습니다.",
    afterWhy: "같은 돌봄센터가 부지 안에서 확장되었습니다. 다른 자리에 새 마을이 생긴 것은 아닙니다.",
    delta: { life: 9, coffer: -9, later: 4, work: -2, fair: 3 },
    visual: { care: 2 },
    ops: { care: 1 },
    tags: ["care", "expand"],
  }),
  p({
    id: "rebalance_work",
    title: "돌봄 성과를 바탕으로 학교 쪽 보완",
    what: "앞선 돌봄 투자는 유지하고, 비어 있는 배움을 보강합니다.",
    whoBenefits: "학생과 일할 세대",
    whoPays: "추가 돌봄 확장의 기회",
    nowEffect: "치우침이 조금 줄어듭니다.",
    laterEffect: "돌봄을 더 키우지 못하고 곳간은 줄어듭니다.",
    afterWhy: "돌봄은 지금 단계를 유지하고, 학교·작업장이 따라오기 시작했습니다.",
    delta: { work: 8, coffer: -8, life: -1, later: 1, fair: 2 },
    visual: { work: 2 },
    ops: { work: 1 },
    tags: ["work", "pivot"],
  }),
  p({
    id: "work_expand",
    title: "학교·작업장 증축하기",
    what: "지금까지 밀어 온 배움·일자리 공간을 한 단계 키웁니다.",
    whoBenefits: "학생과 지역 산업",
    whoPays: "곳간과 돌봄 대기",
    nowEffect: "학교와 작업장이 분명하게 커집니다.",
    laterEffect: "돌봄 공백과 재원 압력이 남을 수 있습니다.",
    afterWhy: "같은 학교·작업장이 부지 안에서 확장되었습니다.",
    delta: { work: 9, coffer: -9, later: -2, life: -3, fair: 1 },
    visual: { work: 2 },
    ops: { work: 1 },
    tags: ["work", "expand"],
  }),
  p({
    id: "rebalance_care",
    title: "활력을 돌봄 공백 메우기에",
    what: "앞선 배움 투자는 유지하고, 비어 있는 돌봄을 보강합니다.",
    whoBenefits: "돌봄이 필요한 사람",
    whoPays: "추가 일자리 확장의 기회",
    nowEffect: "치우침이 조금 줄어듭니다.",
    laterEffect: "학교를 더 키우지 못하고 곳간은 줄어듭니다.",
    afterWhy: "배움은 지금 단계를 유지하고, 돌봄센터가 따라오기 시작했습니다.",
    delta: { life: 8, coffer: -8, work: -1, later: 2, fair: 3 },
    visual: { care: 2 },
    ops: { care: 1 },
    tags: ["care", "pivot"],
  }),
  p({
    id: "modest_care",
    title: "돌봄을 한 단계 보강",
    what: "어느 쪽도 과하지 않게, 생활 서비스를 조금 늘립니다.",
    whoBenefits: "돌봄이 필요한 사람",
    whoPays: "곳간",
    nowEffect: "돌봄이 조금 나아집니다.",
    laterEffect: "배움을 동시에 키우지는 못합니다.",
    afterWhy: "균형에 가깝던 마을에서 돌봄 쪽만 한 걸음 내디뎠습니다.",
    delta: { life: 7, coffer: -7, later: 2, work: -1, fair: 2 },
    visual: { care: 2 },
    ops: { care: 1 },
    tags: ["care"],
  }),
  p({
    id: "modest_work",
    title: "배움·일자리를 한 단계 보강",
    what: "어느 쪽도 과하지 않게, 학교·작업장을 조금 늘립니다.",
    whoBenefits: "학생과 일할 세대",
    whoPays: "곳간",
    nowEffect: "활력이 조금 나아집니다.",
    laterEffect: "돌봄을 동시에 키우지는 못합니다.",
    afterWhy: "균형에 가깝던 마을에서 배움 쪽만 한 걸음 내디뎠습니다.",
    delta: { work: 7, coffer: -7, later: -2, life: -1, fair: 1 },
    visual: { work: 2 },
    ops: { work: 1 },
    tags: ["work"],
  }),
  p({
    id: "repair_books",
    title: "지출 속도 늦춰 곳간 추스르기",
    what: "확장을 멈추고 빈 곳간과 미래 부담을 먼저 손봅니다.",
    whoBenefits: "다음 세대",
    whoPays: "지금 서비스를 더 쓰려던 사람",
    nowEffect: "곳간과 미래 부담 숫자가 나아집니다.",
    laterEffect: "시설은 커지지 않고 운영은 빠듯해질 수 있습니다.",
    afterWhy: "건물을 더 짓지 않았습니다. 살림 숫자와 운영 여유만 달라집니다.",
    delta: { coffer: 9, later: -7, life: -4, work: -4, fair: 2 },
    visual: {},
    ops: { care: -1, work: -1, commons: -1 },
    tags: ["repair"],
  }),
  p({
    id: "commons_keep",
    title: "공원·유지를 조금 손보며 숨 고르기",
    what: "큰 증축 대신 공동 공간과 유지보수를 챙깁니다.",
    whoBenefits: "마을을 함께 쓰는 사람",
    whoPays: "곳간의 일부",
    nowEffect: "공원이 조금 정비됩니다.",
    laterEffect: "돌봄·학교를 크게 키우지는 못합니다.",
    afterWhy: "공원과 보행로를 손봤습니다. 병원이나 학교를 증축한 선택은 아닙니다.",
    delta: { coffer: -5, later: -2, fair: 3, life: 2, work: 1 },
    visual: { commons: 2 },
    ops: { commons: 1 },
    tags: ["commons"],
  }),
  p({
    id: "finale_care",
    title: "돌봄 쪽으로 마무리",
    what: "마지막 살림을 생활·돌봄에 둡니다.",
    whoBenefits: "돌봄이 필요한 사람",
    whoPays: "곳간·배움·다음 세대 중 일부",
    nowEffect: "돌봄이 한 걸음 더 가거나, 이미 최대면 운영이 두터워집니다.",
    laterEffect: "배움과 곳간은 이 선택에서 밀립니다.",
    afterWhy: "마지막 예산을 돌봄에 쏟았습니다. 학교가 갑자기 커지지는 않습니다.",
    delta: { life: 8, coffer: -8, later: 4, work: -2, fair: 3 },
    visual: { care: 2 },
    ops: { care: 1 },
    tags: ["care", "finale"],
  }),
  p({
    id: "finale_work",
    title: "배움·일자리로 마무리",
    what: "마지막 살림을 학교·작업장에 둡니다.",
    whoBenefits: "일할 세대",
    whoPays: "곳간·돌봄 대기 중 일부",
    nowEffect: "활력이 한 걸음 더 가거나, 이미 최대면 운영이 두터워집니다.",
    laterEffect: "돌봄과 곳간은 이 선택에서 밀립니다.",
    afterWhy: "마지막 예산을 배움·일자리에 쏟았습니다. 돌봄센터가 갑자기 커지지는 않습니다.",
    delta: { work: 8, coffer: -8, later: -2, life: -3, fair: 1 },
    visual: { work: 2 },
    ops: { work: 1 },
    tags: ["work", "finale"],
  }),
  p({
    id: "finale_book",
    title: "곳간과 다음 세대 부담을 추스르기",
    what: "마지막에 확장을 멈추고 살림 숫자를 맞춥니다.",
    whoBenefits: "다음 세대",
    whoPays: "지금 서비스를 더 늘리려던 사람",
    nowEffect: "곳간과 미래 부담이 나아집니다.",
    laterEffect: "마을 외형은 거의 그대로이고 운영은 빠듯해질 수 있습니다.",
    afterWhy: "시설을 더 키우지 않았습니다. 나중에 갚을 짐과 곳간 숫자가 달라집니다.",
    delta: { coffer: 8, later: -8, life: -4, work: -4, fair: 3 },
    visual: {},
    ops: { care: -1, work: -1, commons: -1 },
    tags: ["repair", "finale"],
  }),
];

export const CONFLICTS: { ids: [string, string]; extra: Partial<Indicators>; why: string }[] =
  [
    {
      ids: ["tax_down", "spend_care"],
      extra: { coffer: -6, later: 8 },
      why: "세금을 줄이면서 돌봄을 늘리면 부족한 돈은 미래로 넘어갑니다.",
    },
    {
      ids: ["tax_down", "spend_future"],
      extra: { coffer: -4, later: 5 },
      why: "감세와 미래 투자를 동시에 하면 곳간이 더 빨리 빕니다.",
    },
    {
      ids: ["tax_down", "care_debt"],
      extra: { later: 6, coffer: -3 },
      why: "세금을 낮추고 돌봄 운영을 빚으로 잇면 다음 세대 부담이 가팔라집니다.",
    },
    {
      ids: ["tax_down", "work_debt"],
      extra: { later: 6, coffer: -3 },
      why: "세금을 낮추고 훈련 재원을 뒤로 넘기면 미래 부담이 겹칩니다.",
    },
    {
      ids: ["tax_down", "debt_bridge"],
      extra: { later: 5, coffer: -3 },
      why: "감세 위에 운영 빚을 얹으면 곳간과 미래가 함께 흔들립니다.",
    },
    {
      ids: ["tax_up", "keep_lid"],
      extra: { work: -4 },
      why: "세금을 올리고 씀씀이까지 조이면 경제 활력이 겹쳐 눌립니다.",
    },
    {
      ids: ["tax_up", "finale_book"],
      extra: { work: -3 },
      why: "증세 뒤에 한 번 더 조이면 상점은 더 조용해질 수 있습니다.",
    },
    {
      ids: ["tax_up", "repair_books"],
      extra: { work: -3 },
      why: "세입을 늘린 뒤 지출까지 조이면 활력이 한 번 더 눌립니다.",
    },
    {
      ids: ["spend_care", "keep_lid"],
      extra: { life: -4, fair: -3 },
      why: "돌봄을 열어 놓고 한도를 조이면 운영이 중간에 빠듯해집니다.",
    },
    {
      ids: ["tax_down", "finale_care"],
      extra: { coffer: -4, later: 4 },
      why: "세입을 줄인 채 돌봄으로 마치면 부족한 돈은 미래로 갑니다.",
    },
    {
      ids: ["tax_down", "finale_work"],
      extra: { coffer: -3, later: 3 },
      why: "감세 후 일자리로 마치면 곳간 구멍이 남습니다.",
    },
  ];

export function clampIndicator(n: number): number {
  return Math.max(0, Math.min(100, Math.round(n)));
}

export function getPolicy(id: string): PolicyDef | undefined {
  return POLICIES.find((item) => item.id === id);
}

export function applyDelta(base: Indicators, delta: Partial<Indicators>): Indicators {
  return {
    coffer: clampIndicator(base.coffer + (delta.coffer ?? 0)),
    life: clampIndicator(base.life + (delta.life ?? 0)),
    work: clampIndicator(base.work + (delta.work ?? 0)),
    later: clampIndicator(base.later + (delta.later ?? 0)),
    fair: clampIndicator(base.fair + (delta.fair ?? 0)),
  };
}

export function computeState(selectedIds: string[]): {
  indicators: Indicators;
  conflicts: string[];
} {
  let indicators = { ...BASELINE };
  const conflicts: string[] = [];
  for (const id of selectedIds) {
    const policy = getPolicy(id);
    if (policy) indicators = applyDelta(indicators, policy.delta);
  }
  for (const rule of CONFLICTS) {
    if (selectedIds.includes(rule.ids[0]) && selectedIds.includes(rule.ids[1])) {
      indicators = applyDelta(indicators, rule.extra);
      conflicts.push(rule.why);
    }
  }
  return { indicators, conflicts };
}

export function deltaFromBaseline(now: Indicators): Indicators {
  return {
    coffer: now.coffer - BASELINE.coffer,
    life: now.life - BASELINE.life,
    work: now.work - BASELINE.work,
    later: now.later - BASELINE.later,
    fair: now.fair - BASELINE.fair,
  };
}

export function tagScore(picks: string[], tag: string): number {
  return picks.reduce((sum, id) => {
    const policy = getPolicy(id);
    return policy?.tags.includes(tag) ? sum + 1 : sum;
  }, 0);
}

export function hasPick(picks: string[], id: string): boolean {
  return picks.includes(id);
}

function fiscalThird(picks: string[]): PolicyDef {
  const { indicators } = computeState(picks);
  if (indicators.coffer <= 40 || indicators.later >= 64) {
    return getPolicy("repair_books")!;
  }
  return getPolicy("commons_keep")!;
}

export function optionsForRound(round: RoundId, picks: string[]): PolicyDef[] {
  const history = picks.slice(0, round - 1);
  const byId = (id: string) => getPolicy(id)!;

  if (round === 1) return [byId("tax_up"), byId("tax_down"), byId("tax_hold")];
  if (round === 2) return [byId("spend_care"), byId("spend_future"), byId("spend_hold")];

  if (round === 3) {
    if (hasPick(history, "spend_care")) {
      return [byId("care_staff"), byId("care_access"), byId("pivot_work")];
    }
    if (hasPick(history, "spend_future")) {
      return [byId("work_staff"), byId("work_link"), byId("pivot_care")];
    }
    return [byId("catchup_care"), byId("catchup_work"), byId("keep_saving")];
  }

  if (round === 4) {
    if (hasPick(history, "keep_saving")) {
      return [byId("thaw_care"), byId("thaw_work"), byId("keep_lid")];
    }
    if (hasPick(history, "pivot_work")) {
      return [byId("hold_both"), byId("deepen_work"), byId("debt_bridge")];
    }
    if (hasPick(history, "pivot_care")) {
      return [byId("hold_both"), byId("deepen_care"), byId("debt_bridge")];
    }
    if (hasPick(history, "spend_care") || hasPick(history, "catchup_care")) {
      return [byId("care_copay"), byId("care_debt"), byId("care_to_work")];
    }
    if (hasPick(history, "spend_future") || hasPick(history, "catchup_work")) {
      return [byId("work_copay"), byId("work_debt"), byId("work_to_care")];
    }
    return [byId("thaw_care"), byId("thaw_work"), byId("keep_lid")];
  }

  if (round === 5) {
    const care = tagScore(history, "care");
    const work = tagScore(history, "work");
    const third = fiscalThird(history);
    if (care > work) return [byId("care_expand"), byId("rebalance_work"), third];
    if (work > care) return [byId("work_expand"), byId("rebalance_care"), third];
    return [byId("modest_care"), byId("modest_work"), third];
  }

  return [byId("finale_care"), byId("finale_work"), byId("finale_book")];
}

export function presentPolicy(policy: PolicyDef, picks: string[]): PolicyDef {
  const care = tagScore(picks, "care");
  const work = tagScore(picks, "work");
  if (policy.id === "finale_care") {
    if (care > work) {
      return {
        ...policy,
        title: "밀어 온 돌봄을 한 단계 더",
        what: "이미 손본 생활·돌봄을 마지막에 한 번 더 키웁니다.",
        laterEffect: "배움 공백과 곳간 부담이 남을 수 있습니다.",
      };
    }
    if (care < work) {
      return {
        ...policy,
        title: "비어 있는 돌봄을 보완하며 마무리",
        what: "일자리 쪽에 비해 뒤처진 돌봄을 마지막에 보강합니다.",
        laterEffect: "배움 확장은 여기까지입니다.",
      };
    }
  }
  if (policy.id === "finale_work") {
    if (work > care) {
      return {
        ...policy,
        title: "밀어 온 배움을 한 단계 더",
        what: "이미 손본 학교·작업장을 마지막에 한 번 더 키웁니다.",
        laterEffect: "돌봄 공백과 곳간 부담이 남을 수 있습니다.",
      };
    }
    if (work < care) {
      return {
        ...policy,
        title: "비어 있는 배움을 보완하며 마무리",
        what: "돌봄에 비해 뒤처진 학교·작업장을 마지막에 보강합니다.",
        laterEffect: "돌봄 확장은 여기까지입니다.",
      };
    }
  }
  return policy;
}

export function roundBrief(round: RoundId, picks: string[]): { title: string; body: string } {
  const history = picks.slice(0, round - 1);
  const last = history[history.length - 1];
  const lastPolicy = last ? getPolicy(last) : undefined;
  const { indicators } = computeState(history);
  const phase = ROUND_PHASE[round];

  if (round === 1) {
    return {
      title: phase.ask,
      body: "이 마을은 돌봄센터, 학교, 공원이 한 덩어리로 이어져 있습니다. 지금은 어느 쪽도 과하지 않습니다. 먼저 세입을 정하면 이후 투자 여력이 달라집니다.",
    };
  }
  if (round === 2) {
    return {
      title: phase.ask,
      body: lastPolicy
        ? `${lastPolicy.title} 이후입니다. 곳간 ${indicators.coffer}, 생활 ${indicators.life}, 활력 ${indicators.work}입니다. 돌봄·배움·아껴 두기 중 어디를 먼저 밀어 마을 결이 갈립니다.`
        : phase.ask,
    };
  }
  if (round === 3) {
    return {
      title: phase.ask,
      body: lastPolicy
        ? `${lastPolicy.title}로 우선순위가 정해졌습니다. 같은 정책을 한 번 더 누르는 대신, 운영을 채울지·접근성을 높일지·다른 분야로 돌릴지를 고릅니다.`
        : phase.ask,
    };
  }
  if (round === 4) {
    const tight = indicators.coffer <= 40;
    const heavy = indicators.later >= 64;
    const pressure = tight
      ? "곳간이 빠듯합니다."
      : heavy
        ? "다음 세대 부담이 커지고 있습니다."
        : "운영비와 공백이 동시에 보입니다.";
    return {
      title: phase.ask,
      body: `${pressure} 이용자가 비용을 나눌지, 빚으로 이을지, 비어 있는 쪽으로 돌릴지에 따라 마을과 살림이 갈립니다.`,
    };
  }
  if (round === 5) {
    const care = tagScore(history, "care");
    const work = tagScore(history, "work");
    const tilt =
      care > work
        ? "지금까지는 돌봄 쪽이 앞섭니다."
        : work > care
          ? "지금까지는 배움·일자리 쪽이 앞섭니다."
          : "지금까지는 한쪽으로 크게 치우치지 않았습니다.";
    return {
      title: phase.ask,
      body: `${tilt} 더 키울지, 빈쪽을 메울지, 곳간을 추스를지를 고릅니다.`,
    };
  }
  return {
    title: phase.ask,
    body: `마지막 라운드입니다. 밀어 온 쪽을 한 단계 더 갈지, 비어 있는 쪽을 보완할지, 곳간과 미래 부담을 맞출지 정합니다. 숫자는 게임 안 가정입니다.`,
  };
}

export function goalFit(goal: GoalId, now: Indicators): { ok: boolean; why: string } {
  if (goal === "life") {
    const ok = now.life >= 56 && now.later < 74;
    return {
      ok,
      why: ok
        ? "생활 안정이 나아졌고, 미래 부담이 극단으로 치닫지는 않았습니다."
        : "돌봄은 늘었을 수 있으나 곳간이나 미래 부담이 발목을 잡습니다.",
    };
  }
  if (goal === "work") {
    const ok = now.work >= 58 && now.coffer >= 28;
    return {
      ok,
      why: ok
        ? "활력은 살아 있고 곳간도 바닥나지는 않았습니다."
        : "활력을 살리려다 곳간이 비거나 일자리가 눌렸습니다.",
    };
  }
  if (goal === "later") {
    const ok = now.later <= 52 && now.coffer >= 36;
    return {
      ok,
      why: ok
        ? "다음 세대 부담을 낮추면서 곳간을 어느 정도 지켰습니다."
        : "미래 부담이 여전히 크거나 곳간이 약합니다.",
    };
  }
  const spread =
    Math.max(now.coffer, now.life, now.work, 100 - now.later, now.fair) -
    Math.min(now.coffer, now.life, now.work, 100 - now.later, now.fair);
  const ok = spread <= 42 && now.later < 68 && now.coffer >= 26;
  return {
    ok,
    why: ok
      ? "한 지표만 치솟지 않고 버텼습니다."
      : "어느 한쪽이 크게 기울었습니다. 다른 조합을 시험해 보세요.",
  };
}

export function describeOutcome(now: Indicators): string[] {
  const d = deltaFromBaseline(now);
  const lines: string[] = [];
  if (d.life >= 8) lines.push("돌봄과 생활 안정은 시작보다 나아졌습니다.");
  else if (d.life <= -6) lines.push("생활 서비스는 시작보다 빠듯해졌습니다.");
  if (d.work >= 8) lines.push("일자리·활력은 숨통이 트였습니다.");
  else if (d.work <= -6) lines.push("경제 활력은 시작보다 눌렸습니다.");
  if (d.coffer >= 8) lines.push("나라 곳간은 여유가 생겼습니다.");
  else if (d.coffer <= -8) lines.push("곳간은 눈에 띄게 줄었습니다.");
  if (d.later <= -6) lines.push("다음 세대가 짊어질 짐은 조금 가벼워졌습니다.");
  else if (d.later >= 8) lines.push("다음 세대 부담은 커졌습니다.");
  if (d.fair >= 6) lines.push("비용을 나누는 폭은 넓어졌습니다.");
  else if (d.fair <= -8) lines.push("부담이 일부 계층·지역에 더 쏠렸습니다.");
  if (lines.length === 0) {
    lines.push("지표는 크게 흔들리지 않았습니다. 다른 선택을 겹치면 결이 달라집니다.");
  }
  return lines;
}

export function endingReport(picks: string[]): {
  grew: string[];
  remain: string[];
  burden: string[];
} {
  const { indicators, conflicts } = computeState(picks);
  const d = deltaFromBaseline(indicators);
  const grew: string[] = [];
  const remain: string[] = [];
  const burden: string[] = [];

  if (d.life >= 6) grew.push("생활·돌봄 체감이 시작보다 나아졌습니다.");
  if (d.work >= 6) grew.push("배움·일자리 활력이 시작보다 나아졌습니다.");
  if (d.coffer >= 6) grew.push("나라 곳간에 여유가 생겼습니다.");
  if (grew.length === 0) grew.push("한 분야를 크게 키우기보다 출발점에 가까운 마을입니다.");

  if (d.life <= 2) remain.push("돌봄·생활 서비스는 아직 빠듯합니다.");
  if (d.work <= 2) remain.push("학교·작업장 쪽 여력은 아직 얇습니다.");
  if (Math.abs(d.life - d.work) >= 10) {
    remain.push("돌봄과 배움 중 한쪽이 다른 쪽보다 많이 앞섭니다.");
  }
  if (remain.length === 0) remain.push("눈에 띄는 공백은 줄었지만, 운영비는 매년 다시 결정해야 합니다.");

  if (d.later >= 6) burden.push("다음 세대가 갚을 짐이 시작보다 커졌습니다.");
  else if (d.later <= -6) burden.push("미래 부담은 시작보다 줄었습니다. 그 대가로 지금 쓸 돈은 줄었을 수 있습니다.");
  else burden.push("미래 부담은 극단까지 가지 않았습니다.");
  if (d.coffer <= -8) burden.push("곳간이 눈에 띄게 줄어, 다음 해 운신의 폭이 좁습니다.");
  for (const line of conflicts) burden.push(line);

  return { grew, remain, burden };
}

export function exclusiveRoundPick(
  current: string[],
  incoming: string,
  round: RoundId,
): string[] {
  return [...current.slice(0, round - 1), incoming];
}

export function removePolicy(current: string[], id: string): string[] {
  return current.filter((item) => item !== id);
}

export function clearFromRound(current: string[], round: RoundId): string[] {
  return current.slice(0, round - 1);
}

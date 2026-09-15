export type HallDirectionId =
  | "hall01"
  | "hall02"
  | "hall03"
  | "hall04"
  | "hall05"
  | "hall06";

export type InspectExhibitFn = (exhibitId: string, directionId?: string) => void;

export interface HallDirectionItem {
  id: string;
  title: string;
  blurb?: string;
  sourcePages: string;
  exhibitIds: string[];
  stance: "proposal" | "in_force" | "mixed";
}

export interface HallDirectionGroup {
  id: string;
  label: string;
  items: HallDirectionItem[];
}

export interface HallDirectionSet {
  id: HallDirectionId;
  openingQuestion: string;
  closingTitle: string;
  closingLead: string;
  closingExhibitId: string | null;
  firstExhibitId: string;
  groups: HallDirectionGroup[];
}

export const HALL_DIRECTIONS: Record<HallDirectionId, HallDirectionSet> = {
  hall01: {
    id: "hall01",
    openingQuestion: "인구가 줄어드는 사회, 무엇을 바꿔야 할까요?",
    closingTitle: "작아져도 이어갈 사회",
    closingLead:
      "인구가 줄어도 생활을 지킬 수 있도록 도시와 돌봄, 재정을 함께 바꿔야 합니다.",
    closingExhibitId: "exhibit_1_choices",
    firstExhibitId: "exhibit_1d",
    groups: [
      {
        id: "redesign",
        label: "사회를 다시 짜기",
        items: [
          {
            id: "h1-resilience",
            title: "작지만 지속가능한 사회",
            sourcePages: "17",
            exhibitIds: ["exhibit_1d", "exhibit_1h"],
            stance: "proposal",
          },
        ],
      },
      {
        id: "care",
        label: "돌봄을 나누기",
        items: [
          {
            id: "h1-service",
            title: "필요에 맞춘 돌봄",
            sourcePages: "17",
            exhibitIds: ["exhibit_1g"],
            stance: "proposal",
          },
          {
            id: "h1-single",
            title: "혼자 살아도 이어지는 연결망",
            sourcePages: "13-14, 17",
            exhibitIds: ["exhibit_1g"],
            stance: "proposal",
          },
        ],
      },
      {
        id: "policy",
        label: "사람과 살림을 같이 보기",
        items: [
          {
            id: "h1-pop-spend",
            title: "인구정책과 재정의 연결",
            sourcePages: "17",
            exhibitIds: ["exhibit_1e", "exhibit_1a"],
            stance: "proposal",
          },
          {
            id: "h1-region",
            title: "지역 거점과 생활 기반",
            sourcePages: "15, 17",
            exhibitIds: ["exhibit_1f", "exhibit_1h"],
            stance: "mixed",
          },
        ],
      },
    ],
  },
  hall02: {
    id: "hall02",
    openingQuestion: "오래 사는 시대의 생활을 어떻게 지킬까요?",
    closingTitle: "생활을 지키는 여섯 갈래",
    closingLead: "개별 제도를 따로 손보기보다, 복지와 연금을 한 체계로 다시 짜야 합니다.",
    closingExhibitId: "exhibit_2_choices",
    firstExhibitId: "exhibit_2d",
    groups: [
      {
        id: "pension",
        label: "연금의 역할",
        items: [
          {
            id: "h2-auto",
            title: "자동안정화 장치",
            sourcePages: "33, 36",
            exhibitIds: ["exhibit_2a", "exhibit_2b", "exhibit_2c"],
            stance: "proposal",
          },
          {
            id: "h2-roles",
            title: "기초·국민·퇴직의 역할",
            sourcePages: "27, 36",
            exhibitIds: ["exhibit_2c", "exhibit_2f"],
            stance: "proposal",
          },
          {
            id: "h2-annuity",
            title: "퇴직연금의 연금화",
            sourcePages: "27, 36",
            exhibitIds: ["exhibit_2c"],
            stance: "proposal",
          },
        ],
      },
      {
        id: "health",
        label: "의료와 추계",
        items: [
          {
            id: "h2-nhis",
            title: "건강보험 지출관리",
            sourcePages: "29-31, 36",
            exhibitIds: ["exhibit_2e"],
            stance: "proposal",
          },
          {
            id: "h2-integrate",
            title: "통합 사회보장 추계",
            sourcePages: "36",
            exhibitIds: ["exhibit_2a", "exhibit_2d"],
            stance: "proposal",
          },
        ],
      },
      {
        id: "birth",
        label: "저출생과의 연결",
        items: [
          {
            id: "h2-lowbirth",
            title: "저출생과 복지 재정",
            sourcePages: "36",
            exhibitIds: ["exhibit_2d", "exhibit_2f"],
            stance: "proposal",
          },
        ],
      },
    ],
  },
  hall03: {
    id: "hall03",
    openingQuestion: "기후에 대응하는 비용을 어떻게 마련할까요?",
    closingTitle: "기후와 살림을 같이 보는 길",
    closingLead: "감축과 적응, 산업과 재정을 한 살림으로 맞춰야 합니다.",
    closingExhibitId: "exhibit_3_choices",
    firstExhibitId: "exhibit_3d",
    groups: [
      {
        id: "cut",
        label: "줄이기",
        items: [
          {
            id: "h3-ndc",
            title: "감축 목표의 이행",
            sourcePages: "41-42, 49",
            exhibitIds: ["exhibit_3d", "exhibit_3e"],
            stance: "mixed",
          },
          {
            id: "h3-power",
            title: "무탄소 전력 전환",
            sourcePages: "43-44, 49",
            exhibitIds: ["exhibit_3b"],
            stance: "mixed",
          },
        ],
      },
      {
        id: "trade",
        label: "산업과 국경",
        items: [
          {
            id: "h3-cbam",
            title: "탄소 무역장벽 대응",
            sourcePages: "45, 49",
            exhibitIds: ["exhibit_3c"],
            stance: "proposal",
          },
          {
            id: "h3-ets",
            title: "배출권과 산업 부담",
            sourcePages: "45-46, 49",
            exhibitIds: ["exhibit_3h"],
            stance: "mixed",
          },
        ],
      },
      {
        id: "fund",
        label: "예산과 적응",
        items: [
          {
            id: "h3-fund",
            title: "기후기금의 실효",
            sourcePages: "47, 49",
            exhibitIds: ["exhibit_3f"],
            stance: "mixed",
          },
          {
            id: "h3-adapt",
            title: "적응을 전 부문에",
            sourcePages: "48, 49",
            exhibitIds: ["exhibit_3a", "exhibit_3h"],
            stance: "proposal",
          },
        ],
      },
    ],
  },
  hall04: {
    id: "hall04",
    openingQuestion: "기술 투자를 지속가능한 변화로 연결하려면?",
    closingTitle: "속도와 신중함 사이",
    closingLead: "AI 예산이 커질수록 속도와 검증, 사람과 전력을 같이 봐야 합니다.",
    closingExhibitId: "exhibit_4_choices",
    firstExhibitId: "exhibit_4d",
    groups: [
      {
        id: "trust",
        label: "신뢰",
        items: [
          {
            id: "h4-risk",
            title: "고영향 AI 위험관리",
            sourcePages: "51-52, 69",
            exhibitIds: ["exhibit_4e"],
            stance: "mixed",
          },
        ],
      },
      {
        id: "invest",
        label: "투자 검증",
        items: [
          {
            id: "h4-pima",
            title: "인프라 투자의 검증",
            sourcePages: "55, 69",
            exhibitIds: ["exhibit_4d", "exhibit_4h"],
            stance: "proposal",
          },
          {
            id: "h4-sovereign",
            title: "소버린 AI 지원 방식",
            sourcePages: "59-60, 69",
            exhibitIds: ["exhibit_4a"],
            stance: "mixed",
          },
          {
            id: "h4-perf",
            title: "AI 예산 성과관리",
            sourcePages: "70",
            exhibitIds: ["exhibit_4h", "exhibit_4d"],
            stance: "proposal",
          },
        ],
      },
      {
        id: "people",
        label: "사람과 전력",
        items: [
          {
            id: "h4-youth",
            title: "청년 고용의 비대칭",
            sourcePages: "63-64, 69",
            exhibitIds: ["exhibit_4f", "exhibit_4b"],
            stance: "proposal",
          },
          {
            id: "h4-power",
            title: "전력이라는 병목",
            sourcePages: "65, 69",
            exhibitIds: ["exhibit_4c"],
            stance: "proposal",
          },
        ],
      },
    ],
  },
  hall05: {
    id: "hall05",
    openingQuestion: "미래의 재정 부담을 바꿀 선택은 무엇일까요?",
    closingTitle: "숫자를 바꿀 수 있는 선택",
    closingLead: "전망 숫자는 전제의 합입니다. 지금 선택이 경로를 바꿉니다.",
    closingExhibitId: "exhibit_5_choices",
    firstExhibitId: "exhibit_5d",
    groups: [
      {
        id: "rule",
        label: "원칙과 목표",
        items: [
          {
            id: "h5-rule",
            title: "재정준칙 법제화",
            sourcePages: "81-82, 84",
            exhibitIds: ["exhibit_5c"],
            stance: "proposal",
          },
          {
            id: "h5-debt",
            title: "채무비율 관리 목표",
            sourcePages: "84",
            exhibitIds: ["exhibit_5d", "exhibit_5a"],
            stance: "proposal",
          },
        ],
      },
      {
        id: "structure",
        label: "구조와 성장",
        items: [
          {
            id: "h5-pension",
            title: "연금 구조개혁",
            sourcePages: "84",
            exhibitIds: ["exhibit_5a"],
            stance: "proposal",
          },
          {
            id: "h5-growth",
            title: "성장 기반",
            sourcePages: "84",
            exhibitIds: ["exhibit_5d", "exhibit_5b"],
            stance: "proposal",
          },
        ],
      },
      {
        id: "system",
        label: "전망과 타이밍",
        items: [
          {
            id: "h5-integrate",
            title: "통합 장기전망",
            sourcePages: "84",
            exhibitIds: ["exhibit_5a", "exhibit_5f"],
            stance: "proposal",
          },
          {
            id: "h5-early",
            title: "조기 대응",
            sourcePages: "84",
            exhibitIds: ["exhibit_5d", "exhibit_5a"],
            stance: "proposal",
          },
        ],
      },
    ],
  },
  hall06: {
    id: "hall06",
    openingQuestion: "지금 고른 살림이 다음 세대에 어떤 짐을 남길까요?",
    closingTitle: "선택과 참여",
    closingLead: "지금 고른 살림이 다음 세대에 어떤 짐을 남기는지, 게임에서 직접 가늠합니다.",
    closingExhibitId: null,
    firstExhibitId: "exhibit_6a",
    groups: [
      {
        id: "play",
        label: "체험에서",
        items: [
          {
            id: "h6-equity",
            title: "세대 간 형평",
            blurb: "미래 세대 부담을 선택 지표로 드러냅니다. PYI는 교육 게임의 설명 틀입니다.",
            sourcePages: "88-89, 101",
            exhibitIds: ["exhibit_6b"],
            stance: "mixed",
          },
          {
            id: "h6-tradeoff",
            title: "정책조합의 상충",
            blurb: "감세와 지출 확대를 동시에 밀면 나중에 갚을 짐이 커진다는 관계를 게임으로 봅니다.",
            sourcePages: "90, 101",
            exhibitIds: ["exhibit_6a"],
            stance: "mixed",
          },
          {
            id: "h6-balance",
            title: "균형 있는 조합",
            blurb: "지출 조정과 세입 확충을 한쪽만 보지 말자는 교육 취지입니다. 정답 조합은 없습니다.",
            sourcePages: "101",
            exhibitIds: ["exhibit_6c"],
            stance: "proposal",
          },
        ],
      },
      {
        id: "civic",
        label: "체험 바깥에서",
        items: [
          {
            id: "h6-path",
            title: "실제 재정정보와 참여",
            blurb: "열린재정·국민참여예산은 보조 경로입니다. 외부 사이트가 이 관 체험을 대신하지 않습니다.",
            sourcePages: "93, 101, 104",
            exhibitIds: ["exhibit_6d"],
            stance: "in_force",
          },
          {
            id: "h6-update",
            title: "콘텐츠 갱신",
            blurb: "최신 통계를 반영해 시뮬레이션을 갱신하라는 운영 과제입니다. 방문객에게 명령을 내리지 않고, 숫자는 자료 발표 시점 기준임을 알립니다.",
            sourcePages: "101",
            exhibitIds: ["exhibit_6d"],
            stance: "proposal",
          },
          {
            id: "h6-edu",
            title: "체험과 제도의 연결",
            blurb: "국민참여예산 등 실제 제도와 체험 교육을 잇자는 제안입니다.",
            sourcePages: "101",
            exhibitIds: ["exhibit_6d"],
            stance: "proposal",
          },
        ],
      },
    ],
  },
};

export const HALL_OPENING_BY_EXHIBIT: Record<string, string> = Object.fromEntries(
  Object.values(HALL_DIRECTIONS).map((hall) => [hall.firstExhibitId, hall.openingQuestion]),
);

export const DIRECTION_HINT_BY_EXHIBIT: Record<string, string> = {
  exhibit_1d: "줄어든 인구를 ‘위기’가 아닌 새 현실로 보고 시스템을 다시 짜는 이야기입니다.",
  exhibit_1a: "일할 사람이 줄면 부양과 나라살림이 같이 흔들립니다.",
  exhibit_1b: "속도가 빠른 만큼 맞출 시간도 짧습니다.",
  exhibit_1e: "출산과 장수는 지출 조정과 따로 떨어지지 않습니다.",
  exhibit_1f: "지역 거점과 행정 체계를 다시 짜자는 논의로 이어집니다.",
  exhibit_1g: "1인·고령 가구를 돌봄·주거·연결망으로 받치자는 방향입니다.",
  exhibit_1c: "병력과 국방비는 재량 지출이 줄어드는 압력과 만납니다.",
  exhibit_1h: "축소사회에서도 일자리를 재설계하자는 제안과 만납니다.",
  exhibit_2d: "보장과 부담을 한 자리에 두고 봅니다.",
  exhibit_2f: "2025년 개혁은 시행된 제도이고, 자동조정은 남은 과제입니다.",
  exhibit_2e: "건강보험 지출관리와 통합돌봄의 장단점을 같이 둡니다.",
  exhibit_2a: "소진 연도는 전제별로 읽고, 자동조정 제안과 연결합니다.",
  exhibit_2b: "지급보장과 세대 부담은 동시에 남는 쟁점입니다.",
  exhibit_2c: "기초·국민·퇴직의 역할과 퇴직 연금화 제안이 여기서 모입니다.",
  exhibit_3d: "배출을 줄인 뒤에도 이행 체계가 남습니다.",
  exhibit_3e: "부문별 감축 목표는 국가 목표이고, 실행 정교화는 과제입니다.",
  exhibit_3f: "기금 규모와 편성률을 구분해 실효를 묻는 자리입니다.",
  exhibit_3a: "이미 생기는 피해는 적응 재정 이야기입니다.",
  exhibit_3b: "무탄소 전력은 AI 수요와 같은 줄에 놓입니다.",
  exhibit_3c: "탄소 국경 가격은 취약 업종의 청구서가 됩니다.",
  exhibit_3h: "배출권 제도와 적응 재정을 한 전시에서 나눕니다.",
  exhibit_4d: "예산이 늘수록 검증과 성과관리가 과제가 됩니다.",
  exhibit_4e: "고영향 영역에서는 규제와 지원을 같은 속도로 보자는 제안입니다.",
  exhibit_4f: "청년 고용 충격은 성별·세대별로 다릅니다.",
  exhibit_4a: "소버린 AI 지원은 진행 중이고, 지원 방식은 과제로 남습니다.",
  exhibit_4b: "업무가 바뀌면 안전망도 다시 짜야 한다는 연결입니다.",
  exhibit_4c: "전력이 병목이 되면 예산만으로 순위가 바뀌지 않습니다.",
  exhibit_4h: "집행과 중복을 점검하자는 성과관리 방향입니다.",
  exhibit_5d: "인구·성장 가정이 바뀌면 경로가 갈라집니다.",
  exhibit_5e: "법정 교부금은 자동으로 늘고, 학령인구는 줄어듭니다.",
  exhibit_5a: "기관 전망을 한 선으로 잇지 않고 대응 선택을 묻습니다.",
  exhibit_5b: "의무지출이 늘면 재량으로 성장을 받칠 여력이 줄어듭니다.",
  exhibit_5c: "준칙은 제안된 안전장치이며, 경기 대응 제약 논쟁도 같이 둡니다.",
  exhibit_5f: "D1과 D2를 섞지 않고 국제비교를 읽습니다.",
  exhibit_6a: "감세와 지출 확대를 동시에 밀면 나중에 갚을 짐이 커집니다.",
  exhibit_6b: "세대 사이 세금 격차를 선택과 함께 봅니다.",
  exhibit_6c: "한 조합이 모든 사람을 만족시키지는 않습니다.",
  exhibit_6d: "실제 재정정보와 참여 경로는 체험을 대신하지 않습니다.",
};

export function hallOpeningFor(exhibitId: string): string | undefined {
  return HALL_OPENING_BY_EXHIBIT[exhibitId];
}

export function directionHintFor(exhibitId: string): string | undefined {
  return DIRECTION_HINT_BY_EXHIBIT[exhibitId];
}

export function hallSetByClosingId(id: string): HallDirectionSet | undefined {
  return Object.values(HALL_DIRECTIONS).find((hall) => hall.closingExhibitId === id);
}

export function hallDirectionItems(hall: HallDirectionSet): HallDirectionItem[] {
  return hall.groups.flatMap((group) => group.items);
}

export function allDirectionItems(): HallDirectionItem[] {
  return Object.values(HALL_DIRECTIONS).flatMap(hallDirectionItems);
}

export function findDirectionItem(itemId: string): HallDirectionItem | undefined {
  return allDirectionItems().find((item) => item.id === itemId);
}

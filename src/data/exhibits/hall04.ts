import { cite } from "../citations";
import { ex, m, t } from "./build";

const hall = "HALL 04: AI 기술 전시장";

export const hall04Exhibits = {
  exhibit_4d: ex({
    id: "exhibit_4d",
    code: "EXHIBIT 4-D",
    hallName: hall,
    titleKo: "2026 AI 예산의 규모",
    titleEn: "2026 AI BUDGET SCALE",
    category: "예산",
    coreQuestion: "한 해 AI 관련 예산은 얼마나, 몇 개 부처에 흩어져 있는가?",
    summary:
      "2026년 AI 관련 예산은 738개 사업, 9조 9천억 원으로 서술됩니다. 2025년 본예산 3.3조의 약 3배, 41개 부처입니다.",
    kind: "institution_outlook",
    featuredMetrics: [
      m("2026 AI 예산", "9.9조", "738개 사업", "41개 부처", "institution_outlook", { highlight: true, citationId: "nabo_ai_budget" }),
      m("전년 대비", "약 3배", "2025 본예산 3.3조", "", "institution_outlook", { citationId: "nabo_ai_budget" }),
    ],
    causes: ["국정 목표 ‘AI 3대 강국’과 행동계획이 예산을 밀어 올립니다."],
    responses: ["집행·성과 검증과 중복 점검은 옆 전시에서 이어집니다."],
    tradeoffs: [
      t("속도 vs 검증", "예타 면제로 착수가 빨라집니다.", "사후관리와 중복 투자 위험이 커집니다."),
    ],
    sources: cite("nabo_ai_budget", "ai_action"),
    relatedTerms: ["재량지출"],
  }),

  exhibit_4e: ex({
    id: "exhibit_4e",
    code: "EXHIBIT 4-E",
    hallName: hall,
    titleKo: "AI 기본법과 거버넌스",
    titleEn: "AI FRAMEWORK ACT",
    category: "규제",
    coreQuestion: "누가, 어떤 위험 기준으로 AI를 규율하는가?",
    summary:
      "2026년 1월 22일 AI 기본법이 전면 시행되고 국가인공지능전략위원회가 법률기관으로 출범합니다. 고영향 AI(의료·금융·채용·교통 등)에 위험 기반 규제가 적용됩니다.",
    kind: "source_body",
    featuredMetrics: [
      m("기본법 시행", "2026. 1. 22.", "위원회 법률기관, 위원장 대통령", "2026. 7. 제품·서비스 확인 제도", "source_body", { highlight: true, citationId: "ai_action" }),
    ],
    causes: ["확산 속도와 안전·책임 요구가 동시에 커집니다."],
    responses: ["3대 정책축: 혁신 생태계, 범국가 대전환, 글로벌 기본사회 기여."],
    tradeoffs: [
      t("혁신 속도 vs 고영향 규제", "산업 적용을 앞당길 수 있습니다.", "의료·채용 등 오판 비용이 큽니다."),
    ],
    sources: cite("ai_action"),
    relatedTerms: ["고영향 AI"],
  }),

  exhibit_4f: ex({
    id: "exhibit_4f",
    code: "EXHIBIT 4-F",
    hallName: hall,
    titleKo: "청년 고용의 비대칭",
    titleEn: "YOUTH EMPLOYMENT ASYMMETRY",
    category: "노동",
    coreQuestion: "같은 AI 노출이라도 누가 더 먼저 일자리를 잃는가?",
    summary:
      "AI 영향률 +10%p일 때 여성 청년 임금근로 −5.3%p, 남성 청년 −3.3%p로 분석됩니다. 한은은 취업자 약 12%(341만 명)의 대체 가능성을 제시합니다.",
    kind: "institution_outlook",
    featuredMetrics: [
      m("여성 청년", "−5.3%p", "영향률 +10%p 시", "KDI", "institution_outlook", { highlight: true, citationId: "kdi_ai_labor" }),
      m("남성 청년", "−3.3%p", "동일 조건", "", "institution_outlook", { citationId: "kdi_ai_labor" }),
      m("대체 가능성", "약 12%", "341만 명, 한은 인용", "고소득·고학력 노출", "institution_outlook"),
    ],
    causes: ["경직된 노동시장에서는 과도 자동화·채용 축소가 나타날 수 있습니다."],
    responses: [
      "사회안전망 재설계와 노동시장 유연성, 리스킬링 로드맵이 과제로 제시됩니다.",
    ],
    tradeoffs: [
      t("유연성 vs 안전망", "재배치가 빨라질 수 있습니다.", "보호 없이 유연화하면 청년 불안정이 커집니다."),
    ],
    sources: cite("kdi_ai_labor"),
    relatedTerms: ["사회안전망"],
  }),

  exhibit_4a: ex({
    id: "exhibit_4a",
    code: "EXHIBIT 4-A",
    hallName: hall,
    titleKo: "소버린 AI와 국산 반도체",
    titleEn: "SOVEREIGN AI AND CHIPS",
    category: "소버린 AI",
    coreQuestion: "국가가 모델을 직접 갖는다는 것은 무엇을 사는가?",
    summary:
      "K-AI 파운데이션 모델 5개 팀이 선정되었고, 이후 4팀 병렬 운영으로 바뀌었습니다. K-클라우드는 2023~2030년 8,262억 원 규모입니다. 2026년 7월 초과세수 5조 원이 프런티어·소버린 AI에 동원된다고 합니다.",
    kind: "source_body",
    featuredMetrics: [
      m("K-클라우드", "8,262억", "2023~2030", "국산 NPU 3단계", "source_body", { citationId: "kcloud" }),
      m("초과세수", "5조", "2026. 7.", "베라루빈 GPU 약 1만 개·프런티어 모델", "source_body", { highlight: true, citationId: "ai_action" }),
      m("GPU 목표", "5만→20만 장", "2028·2030 과기부 발언", "B200 기준 2026년 3.52만 장 서술", "institution_outlook"),
    ],
    causes: ["해외 모델 접속 차단 사례가 소버린 AI 필요 논거로 언급됩니다."],
    responses: ["데이터센터·전력·냉각 국산화를 병행해야 한다고 합니다."],
    tradeoffs: [
      t("국가 모델 vs 해외 의존", "접속 차단·안보 위험을 줄일 수 있습니다.", "중복 지원과 평가 체계 이완(5팀→4팀 병렬) 비용이 남습니다."),
    ],
    sources: cite("ai_action", "kcloud"),
    relatedTerms: ["소버린 AI"],
  }),

  exhibit_4b: ex({
    id: "exhibit_4b",
    code: "EXHIBIT 4-B",
    hallName: hall,
    titleKo: "직업별 자동화율",
    titleEn: "AUTOMATION BY OCCUPATION",
    category: "노동 전망",
    coreQuestion: "2030년 이후 어떤 업무가 먼저 자동화되는가?",
    summary:
      "KDI는 업무 90% 자동화 가능 일자리 비중이 39%에서 90%로 높아질 수 있다고 봅니다. 주방·세탁·재봉·기계조작은 100%, 변호사는 74%로 예시됩니다.",
    kind: "institution_outlook",
    featuredMetrics: [
      m("90% 자동화 가능 일자리", "39%→90%", "KDI 2030 이후", "", "institution_outlook", { highlight: true, citationId: "kdi_ai_labor" }),
      m("변호사", "74%", "2030 직업 예시", "판·검사 69%, 고위공직·교수 64%", "institution_outlook", { citationId: "kdi_ai_labor" }),
    ],
    causes: ["전문직도 인지 업무 노출이 큽니다."],
    responses: ["직업 전체가 아니라 업무 단위 재설계·재훈련이 과제로 제시됩니다."],
    tradeoffs: [],
    sources: cite("kdi_ai_labor"),
    relatedTerms: ["사회안전망"],
  }),

  exhibit_4c: ex({
    id: "exhibit_4c",
    code: "EXHIBIT 4-C",
    hallName: hall,
    titleKo: "경쟁력 지표와 전력 병목",
    titleEn: "COMPETITIVENESS AND POWER",
    category: "인프라",
    coreQuestion: "특허와 투자 순위만으로 실행력을 말할 수 있는가?",
    summary:
      "인구 10만 명당 AI 특허 14.31건은 1위로 인용됩니다. 2025년 민간투자는 미국 2,859억 달러, 한국 17.8억 달러(12위)입니다. 세계 데이터센터 전력은 2025년 447TWh에서 2030년 1,200TWh+로 늘어난다고 합니다.",
    kind: "institution_outlook",
    featuredMetrics: [
      m("특허 밀도", "14.31건", "인구 10만 명당, 1위", "", "source_body", { highlight: true }),
      m("민간투자 2025", "17.8억$", "미국 2,859억$, 한국 12위", "", "source_body"),
      m("국내 2030 전력", "약 +30%", "수도권 DC는 희소 자산", "원전·SMR 검토", "institution_outlook"),
    ],
    causes: ["컴퓨팅과 전력이 병목이 되면 예산만으로 순위가 바뀌지 않습니다."],
    responses: ["입지·송전·냉각을 AI 투자와 같이 봐야 합니다."],
    tradeoffs: [],
    sources: cite("ai_action", "kcloud"),
    relatedTerms: ["소버린 AI"],
  }),

  exhibit_4h: ex({
    id: "exhibit_4h",
    code: "EXHIBIT 4-H",
    hallName: hall,
    titleKo: "집행 성과와 중복 투자",
    titleEn: "EXECUTION AND DUPLICATION",
    category: "재정 관리",
    coreQuestion: "예산이 늘면 능력이 늘었다고 할 수 있는가?",
    summary:
      "2026년 신규 예타 면제 20개 중 14개가 AI입니다. AI 혁신펀드 목표는 3,000억 원대이나 2026년 1월 결성은 1,770억 원입니다. NABO는 집행·성과 검증, 중복, 국가AI컴퓨팅센터 일정, 예타 면제 사후관리를 건전성 과제로 적습니다.",
    kind: "institution_outlook",
    featuredMetrics: [
      m("예타 면제 중 AI", "14/20", "2026 신규", "", "institution_outlook", { highlight: true, citationId: "nabo_ai_budget" }),
      m("혁신펀드 결성", "1,770억", "목표 3,000억+", "2026. 1.", "institution_outlook", { citationId: "nabo_ai_budget" }),
      m("컴퓨팅 임차", "2조 1천억", "H100급 200→600장, 1~9개월", "", "institution_outlook", { citationId: "nabo_ai_budget" }),
    ],
    causes: ["다부처 738개 사업은 속도만큼 겹치기 쉽습니다."],
    responses: ["착수한 뒤에도 성과를 점검하고 일정을 관리하는 일이 남습니다."],
    tradeoffs: [
      t("예타 면제 vs 사후관리", "착시 없이 빠르게 착수할 수 있습니다.", "검증이 늦으면 중복·미집행이 재정 누수로 남습니다."),
    ],
    sources: cite("nabo_ai_budget"),
    relatedTerms: ["재정 건전성", "재량지출"],
  }),

  exhibit_corridor_04: ex({
    id: "exhibit_corridor_04",
    code: "CORRIDOR 04",
    hallName: "악어의 입 회랑",
    titleKo: "한 도시에 모이는 비용",
    titleEn: "PRESSURES BECOME AN OUTLOOK",
    category: "회랑",
    coreQuestion: "인구·복지·기후·AI를 더하면 어떤 채무 정의로 읽어야 하는가?",
    summary:
      "기술과 공공서비스가 한 도시에 놓이면, 그 비용은 다음 관의 장기 전망으로 모입니다.",
    kind: "source_body",
    featuredMetrics: [],
    causes: [],
    responses: [],
    tradeoffs: [],
    sources: cite("moef_3rd", "nabo_lt_2025", "oecd_korea_2024"),
    relatedTerms: ["국가채무", "일반정부부채"],
  }),
};

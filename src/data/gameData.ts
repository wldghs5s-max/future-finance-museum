import { OfficialScenario, PolicyCard, GlossaryItem } from "../types/museum";

export const BENCHMARK_STABLE_LINE = {
  ratio: 150.0,
  display: "150.0%",
  title: "전문가 안정선 (Benchmark Reference Line)",
  description:
    "재정 전문가들이 제시하는 2055년 국가채무비율의 마지노선입니다. 이 수치 이하로 관리되어야 첫 번째 별(나랏빚 별)을 획득합니다.",
};

export const PYI_BASE_METRIC = {
  raw: 31.8,
  display: "31.8%p",
  title: "PERI-Young 지수 (PYI) 기준값",
  definition:
    "미래 세대(2022년 이후 출생자)의 생애 순조세부담률과 현재 세대 간의 격차(%p)",
};

export const OFFICIAL_SCENARIOS: OfficialScenario[] = [
  {
    id: "worst",
    nameKo: "최악의 시나리오",
    debtRatio2055: { raw: 490.9, display: "490.9%" },
    badge: "국가 파산 위기",
    summary:
      "주요 세금 40% 감세 + 복지·국방·교육 지출 대폭 증액 (포퓰리즘 조합)",
    associatedPolicies: [
      "tax_cut_40",
      "welfare_surge",
      "defense_surge",
      "edu_surge",
    ],
    pyiQualitativeState: {
      status: "극도로 위험",
      statusLevel: "critical",
      childMood: "crying",
      description:
        "미래세대의 생애 소득 절반 이상이 이전 세대의 빚을 갚는 데 소진되는 국가적 재앙 상태입니다.",
    },
    star1Achieved: false,
  },
  {
    id: "status_quo",
    nameKo: "현재 추세 유지",
    debtRatio2055: { raw: 202.0, display: "202.0%" },
    badge: "위험 수준 누적",
    summary:
      "새로운 개혁이나 제도 변화 없이 현행 지출 및 세입 구조를 유지하는 경우",
    associatedPolicies: ["status_quo_maintain"],
    pyiQualitativeState: {
      status: "경고",
      statusLevel: "warning",
      childMood: "worried",
      description:
        "인구 고령화로 인한 의무지출 폭증을 감당하지 못해 미래세대의 순조세부담률 격차가 심화됩니다.",
    },
    star1Achieved: false,
  },
  {
    id: "defense_1",
    nameKo: "방어 시나리오 ①",
    debtRatio2055: { raw: 161.5, display: "161.5%" },
    badge: "지출 구조조정",
    summary: "복지비 10% 증액 + 지방교부세 및 교육교부금 각 10% 삭감",
    associatedPolicies: [
      "welfare_up_10",
      "local_grant_cut_10",
      "edu_grant_cut_10",
    ],
    pyiQualitativeState: {
      status: "주의",
      statusLevel: "caution",
      childMood: "neutral",
      description:
        "법정 교부금 조정을 통해 지출 증가세를 억제하였으나, 여전히 안정선(150%)에는 미치지 못합니다.",
    },
    star1Achieved: false,
  },
  {
    id: "defense_2",
    nameKo: "방어 시나리오 ②",
    debtRatio2055: { raw: 135.1, display: "135.1%" },
    badge: "안정 목표 달성",
    summary:
      "방어 ①(복지 10% 증액 + 지방·교육교부금 각 10% 삭감) + 소득세 및 법인세 각 10%p 증세",
    associatedPolicies: [
      "welfare_up_10",
      "local_grant_cut_10",
      "edu_grant_cut_10",
      "tax_raise_10p",
    ],
    pyiQualitativeState: {
      status: "안정",
      statusLevel: "stable",
      childMood: "happy",
      description:
        "과감한 세입 확충과 지출 개혁으로 2055년 국가채무비율을 전문가 안정선(150%) 이하인 135.1%로 방어했습니다.",
    },
    star1Achieved: true,
  },
];

export const POLICY_CARDS: PolicyCard[] = [
  {
    id: "tax_cut_40",
    category: "세입",
    title: "주요 세금 40% 대규모 감세",
    description:
      "소득세, 법인세 등 주요 국세를 일괄 40% 감세합니다. (최악 시나리오의 핵심 요소)",
    docReference: "최악의 시나리오 세입 요인",
  },
  {
    id: "tax_raise_10p",
    category: "세입",
    title: "소득세 및 법인세 각 10%p 증세",
    description:
      "취약해진 세입 기반을 확충하기 위해 직접세를 각 10%p 상향 조정합니다.",
    docReference: "방어 시나리오 ② 세입 요인",
  },
  {
    id: "welfare_surge",
    category: "복지·연금",
    title: "복지 지출 대폭 증액 (무분별 확대)",
    description:
      "재원 대책 없이 현금성 복지 및 사회보장 급여를 대규모로 신설·확대합니다.",
    docReference: "최악의 시나리오 지출 요인",
  },
  {
    id: "welfare_up_10",
    category: "복지·연금",
    title: "복지비 10% 필수 완충 증액",
    description:
      "초고령사회 진입에 따른 기초 돌봄과 취약계층 필수 복지 예산을 10% 증액합니다.",
    docReference: "방어 시나리오 ①·② 공통 요인",
  },
  {
    id: "local_grant_cut_10",
    category: "지방재정",
    title: "지방교부세 10% 지출 구조조정",
    description:
      "내국세의 19.24%가 법적으로 자동 배분되는 의무지출 비율을 검토하여 10% 삭감 조정합니다.",
    docReference: "방어 시나리오 ①·② 공통 요인",
  },
  {
    id: "edu_grant_cut_10",
    category: "지방재정",
    title: "지방교육재정교부금 10% 삭감",
    description:
      "학령인구 급감 추세를 반영해 내국세의 20.79%가 자동 배분되는 교육교부금을 10% 삭감 조정합니다.",
    docReference: "방어 시나리오 ①·② 공통 요인",
  },
  {
    id: "defense_surge",
    category: "재량지출",
    title: "국방 지출 무조건적 대폭 증액",
    description:
      "병력 자원 감소 대책 없이 인건비 및 재래식 군비 지출을 포퓰리즘적으로 증액합니다.",
    docReference: "최악의 시나리오 지출 요인",
  },
  {
    id: "edu_surge",
    category: "재량지출",
    title: "교육 지출 대폭 증액",
    description:
      "학생 수 감소에도 불구하고 교육 인프라 예산을 무차별 확대 편성합니다.",
    docReference: "최악의 시나리오 지출 요인",
  },
  {
    id: "status_quo_maintain",
    category: "복지·연금",
    title: "제도 변화 없는 현행 지출 유지",
    description:
      "추가적인 세제 개편이나 의무지출 구조조정 없이 현재 제도를 관성적으로 유지합니다.",
    docReference: "현재 추세 유지 시나리오 기준",
  },
  {
    id: "auto_stabilizer",
    category: "복지·연금",
    title: "연금 자동안정화장치 도입",
    description:
      "인구·경제 변수 변동 시 연금액과 수급연령이 사전에 정해진 수식에 따라 자동 조정되도록 합니다.",
    docReference: "핵심 재정 용어 정의",
  },
  {
    id: "tax_credit_reform",
    category: "세입",
    title: "소득공제의 세액공제 전면 전환",
    description:
      "과세표준 자체를 낮추는 소득공제를 줄이고 산출세액에서 직접 차감하는 세액공제로 전환해 과세 형평성을 제고합니다.",
    docReference: "핵심 재정 용어 정의",
  },
  {
    id: "health_insurance_reform",
    category: "복지·연금",
    title: "건강보험 지출 효율화",
    description:
      "2029년 준비금 소진을 막기 위해 과다 의료 이용을 억제하고 보험료율 12% 폭증을 방어합니다.",
    docReference: "Section II 건강보험 위기 지표",
  },
  {
    id: "climate_fund_efficiency",
    category: "재량지출",
    title: "기후대응기금 편성률 제고 및 효율화",
    description:
      "5개년 계획 대비 74.2%에 머물고 있는 기후대응기금의 실효성을 높이고 녹색 전환에 집중 투자합니다.",
    docReference: "Section III 기후대응기금",
  },
  {
    id: "ai_infrastructure_priority",
    category: "재량지출",
    title: "국가 AI 인프라 우선 투자",
    description:
      "차세대 GPU 인프라 확충 및 파운데이션 모델 개발 등 미래 생산성 증대를 위한 전략 지출을 집중합니다.",
    docReference: "Section IV AI 예산 및 GPU",
  },
  {
    id: "fiscal_rule_60_3",
    category: "재량지출",
    title: "재정준칙 (60-3 원칙) 법제화",
    description:
      "관리재정수지 적자를 GDP 3% 이내로 관리하고, 국가채무비율 60% 초과 시 2%로 축소하는 원칙을 강제합니다.",
    docReference: "Section V 재정준칙",
  },
];

export const GLOSSARY_LIST: GlossaryItem[] = [
  {
    term: "PERI-Young Index",
    titleKo: "PERI-Young 지수 (PYI)",
    definition:
      "미래 세대(2022년 이후 출생자)의 생애 순조세부담률과 현재 세대 간의 격차(%p)를 측정한 지표입니다.",
    docDetails:
      "기준값은 31.8%p이며, 이 수치가 높아질수록 미래 세대가 태어나서 감당해야 할 세금과 사회보험료 부담이 기성세대보다 가혹해짐을 의미합니다.",
  },
  {
    term: "Mandatory Spending",
    titleKo: "의무지출",
    definition:
      "법률에 따라 지출 의무가 발생하고 지출 규모가 법령에 의해 결정되는 예산입니다.",
    docDetails:
      "국민연금, 건강보험, 기초연금 및 지방교부세(내국세의 19.24%), 지방교육재정교부금(내국세의 20.79%)이 대표적이며, 2072년에는 총지출의 64.3%(GDP 대비 21.6%)까지 폭증합니다.",
  },
  {
    term: "Discretionary Spending",
    titleKo: "재량지출",
    definition:
      "정부와 국회가 정책적 의지에 따라 대상과 규모를 통제하고 조정할 수 있는 예산입니다.",
    docDetails:
      "국방, R&D, 산업 지원, SOC, 외교 등이 포함되며, 고령화로 의무지출이 급증할수록 미래 혁신을 위한 재량지출이 압박을 받게 됩니다.",
  },
  {
    term: "Deduction vs Credit",
    titleKo: "소득공제 vs 세액공제",
    definition: "세금을 감면하는 두 가지 핵심 세법 방식의 차이입니다.",
    docDetails:
      "소득공제는 세금을 매기는 기준인 과세표준 금액 자체를 낮추는 방식(고소득자에게 유리할 수 있음)이며, 세액공제는 산출된 최종 세액에서 일정 금액을 직접 깎아주는 방식입니다.",
  },
  {
    term: "Automatic Stabilizer",
    titleKo: "자동안정화장치",
    definition:
      "인구구조나 경제 여건 변화에 따라 연금 급여액과 수급 개시 연령이 사전 산식에 의해 자동으로 조정되는 기제입니다.",
    docDetails:
      "정치적 갈등 없이 연금 기금의 지속가능성을 사전에 방어하기 위해 OECD 다수 선진국에서 도입하고 있는 핵심 재정 안전장치입니다.",
  },
];

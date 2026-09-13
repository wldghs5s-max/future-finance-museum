// 4대 공식 시나리오 및 15개 정책 물리 스위치 랙 공통 데이터셋 (PERI 나라살림게임 모델 기반)

export interface ScenarioConfig {
  id: string;
  name: string;
  debtRatio: string;
  debtRatioNum: number;
  passed: boolean;
  pyiEffect: string;
  pyiStatus: string;
  pyiState: "happy" | "neutral" | "worried" | "crying";
  summary: string;
  tag: string;
  policies: string[];
  stars: { debt: boolean; future: boolean; goal: boolean };
}

export const OFFICIAL_PRESETS: Record<string, ScenarioConfig> = {
  defense_2: {
    id: "defense_2",
    name: "방어 시나리오 ② (권고안)",
    debtRatio: "135.1%",
    debtRatioNum: 135.1,
    passed: true,
    pyiEffect: "-8.4%p 하향",
    pyiStatus: "안정 (미래세대 부담 경감)",
    pyiState: "happy",
    summary:
      "방어 ①(복지 10% 완충 + 교부금 10% 삭감) + 직접세(소득세·법인세) 각 10%p 증세 결합",
    tag: "150% 안정선 통과",
    policies: [
      "welfare_up_10",
      "local_grant_cut_10",
      "edu_grant_cut_10",
      "tax_raise_10p",
    ],
    stars: { debt: true, future: true, goal: true },
  },
  defense_1: {
    id: "defense_1",
    name: "방어 시나리오 ①",
    debtRatio: "161.5%",
    debtRatioNum: 161.5,
    passed: false,
    pyiEffect: "+12.1%p 증가",
    pyiStatus: "주의 (부담 증가)",
    pyiState: "neutral",
    summary: "복지비 10% 증액 + 지방교부세 및 교육교부금 각 10% 삭감",
    tag: "지출 구조조정",
    policies: ["welfare_up_10", "local_grant_cut_10", "edu_grant_cut_10"],
    stars: { debt: false, future: false, goal: true },
  },
  status_quo: {
    id: "status_quo",
    name: "현행 유지 시나리오",
    debtRatio: "202.0%",
    debtRatioNum: 202.0,
    passed: false,
    pyiEffect: "31.8%p (기준값 유지)",
    pyiStatus: "경고 (지속적 악화)",
    pyiState: "worried",
    summary: "제도 개혁 없이 현행 법률 및 재정 지출 관성 지속",
    tag: "안정선 52%p 초과",
    policies: ["status_quo_maintain"],
    stars: { debt: false, future: false, goal: false },
  },
  worst: {
    id: "worst",
    name: "최악의 시나리오 (포퓰리즘)",
    debtRatio: "490.9%",
    debtRatioNum: 490.9,
    passed: false,
    pyiEffect: "+42.5%p 폭증",
    pyiStatus: "극도로 위험 (국가 부도)",
    pyiState: "crying",
    summary: "주요 세금 40% 감세 + 복지·국방·교육 지출 대폭 증액",
    tag: "국가 부도 위험",
    policies: ["tax_cut_40", "welfare_surge", "defense_surge", "edu_surge"],
    stars: { debt: false, future: false, goal: false },
  },
};

export interface PolicyRackItem {
  id: string;
  title: string;
  officialBadge: string;
  note: string;
}

export interface PolicyRackModule {
  moduleCode: string;
  moduleTitle: string;
  borderClass: string;
  headerBg: string;
  items: PolicyRackItem[];
}

export const POLICY_RACKS: PolicyRackModule[] = [
  {
    moduleCode: "RACK-01",
    moduleTitle: "세제 및 세입 구조 랙 (Tax & Revenue)",
    borderClass: "border-amber-500/30",
    headerBg: "bg-amber-950/40 text-amber-300",
    items: [
      {
        id: "tax_raise_10p",
        title: "소득세·법인세 각 10%p 증세",
        officialBadge: "방어② 핵심 요인",
        note: "직접세 확충을 통한 재정 적자 방어선 구축",
      },
      {
        id: "tax_cut_40",
        title: "주요 세금 40% 대규모 감세",
        officialBadge: "최악 시나리오 요인",
        note: "세수 기반 붕괴 및 재정 파탄 초래",
      },
      {
        id: "tax_credit_reform",
        title: "소득공제 → 세액공제 전면 전환",
        officialBadge: "과세형평 제고",
        note: "고소득층 감면 억제 및 세원 투명화",
      },
    ],
  },
  {
    moduleCode: "RACK-02",
    moduleTitle: "복지 및 연금 지출 랙 (Welfare & Pension)",
    borderClass: "border-sky-500/30",
    headerBg: "bg-sky-950/40 text-sky-300",
    items: [
      {
        id: "welfare_up_10",
        title: "복지비 10% 필수 완충 증액",
        officialBadge: "방어①·② 공통 요인",
        note: "초고령사회 진입에 따른 필수 복지 예산 확보",
      },
      {
        id: "welfare_surge",
        title: "복지 지출 대폭 증액 (무분별 확대)",
        officialBadge: "최악 시나리오 요인",
        note: "재원 없는 선심성 현금 복지 급증",
      },
      {
        id: "status_quo_maintain",
        title: "제도 변화 없는 현행 지출 유지",
        officialBadge: "현행 유지 기준",
        note: "의무지출 자동 증가세를 관성적으로 방치",
      },
      {
        id: "auto_stabilizer",
        title: "연금 자동안정화장치 법제화",
        officialBadge: "거시재정 안전",
        note: "인구·경제 변수 연동 수급액 자동 조정",
      },
      {
        id: "health_insurance_reform",
        title: "건강보험 지출 효율화",
        officialBadge: "2029 고갈 방어",
        note: "과다 의료 이용 억제 및 보험료율 폭증 억제",
      },
    ],
  },
  {
    moduleCode: "RACK-03",
    moduleTitle: "지방 및 교육 법정 교부금 랙 (Statutory Grants)",
    borderClass: "border-rose-500/30",
    headerBg: "bg-rose-950/40 text-rose-300",
    items: [
      {
        id: "local_grant_cut_10",
        title: "지방교부세 10% 지출 구조조정",
        officialBadge: "방어①·② 공통 요인",
        note: "내국세 19.24% 법정 자동 연동 비율 재검토",
      },
      {
        id: "edu_grant_cut_10",
        title: "지방교육재정교부금 10% 삭감",
        officialBadge: "방어①·② 공통 요인",
        note: "학령인구 급감 추세 반영 20.79% 연동 축소",
      },
    ],
  },
  {
    moduleCode: "RACK-04",
    moduleTitle: "재량 및 미래 투자 랙 (Future & Discretionary)",
    borderClass: "border-emerald-500/30",
    headerBg: "bg-emerald-950/40 text-emerald-300",
    items: [
      {
        id: "defense_surge",
        title: "국방비 무조건적 대폭 증액",
        officialBadge: "최악 시나리오 요인",
        note: "병력자원 축소 미반영 무차별 군비 증액",
      },
      {
        id: "edu_surge",
        title: "교육 지출 무조건적 대폭 증액",
        officialBadge: "최악 시나리오 요인",
        note: "학생수 반토막 추세 무시 예산 확대",
      },
      {
        id: "fiscal_rule_60_3",
        title: "60-3 재정준칙 법제화",
        officialBadge: "재정건전성",
        note: "적자 3% 이내, 채무 60% 초과 시 적자 2% 강제",
      },
      {
        id: "ai_infrastructure_priority",
        title: "국가 AI 인프라 우선 집중 투자",
        officialBadge: "생산성 혁신",
        note: "GPU 20만 장 확보 및 파운데이션 모델 투자",
      },
      {
        id: "climate_fund_efficiency",
        title: "기후대응기금 편성률 제고",
        officialBadge: "녹색 전환",
        note: "5개년 계획 74.2% 편성률 한계 돌파",
      },
    ],
  },
];

export function checkScenarioMatch(
  selected: Set<string>,
): ScenarioConfig | null {
  for (const key of Object.keys(OFFICIAL_PRESETS)) {
    const scenario = OFFICIAL_PRESETS[key];
    if (scenario.policies.length === selected.size) {
      const allIncluded = scenario.policies.every((p) => selected.has(p));
      if (allIncluded) return scenario;
    }
  }
  return null;
}

// ==========================================================
// SIMULATION RESULT & EXPERIENTIAL EVALUATION MODEL
// ==========================================================

export type SimulationMode = "OFFICIAL" | "AI_EXPERIENCE";

export interface SimulationResult {
  mode: SimulationMode;

  // 1. 공식 시나리오 일치 시에만 존재하는 정부·연구기관 공인 데이터 (STRICT: 그 외 미제공)
  officialScenarioId?: string;
  officialName?: string;
  officialDebtRatio?: string;
  officialDebtRatioNum?: number;
  officialPassed?: boolean;
  officialPyiEffect?: string;
  officialPyiStatus?: string;
  officialSummary?: string;
  officialTag?: string;

  // 2. AI 가상 체험 평가 지표 (게임/전시 체험을 위한 가상 평가이며 실제 경제 전망치 아님)
  soundnessScore: number; // 재정 건전성 (0~100)
  futureReliefScore: number; // 미래세대 부담 완화 (0~100)
  welfareScore: number; // 복지 지속가능성 (0~100)
  innovationScore: number; // 성장·혁신 여력 (0~100)
  overallScore: number; // 종합 리더십 점수 (0~100)
  leadershipGrade: "S" | "A" | "B" | "C" | "D" | "F";
  leadershipTitle: string;
  evaluationComment: string;

  // 3. 캐릭터 표정 및 3성 달성 판정
  pyiState: "happy" | "neutral" | "worried" | "crying";
  stars: { debt: boolean; future: boolean; goal: boolean };
}

export function computeSimulationResult(
  selected: Set<string>,
): SimulationResult {
  const matched = checkScenarioMatch(selected);

  // [MODE A] 공식 4대 시나리오와 일치할 때: 정부·연구기관 공인 공식 데이터 반환
  if (matched) {
    if (matched.id === "defense_2") {
      return {
        mode: "OFFICIAL",
        officialScenarioId: "defense_2",
        officialName: matched.name,
        officialDebtRatio: matched.debtRatio,
        officialDebtRatioNum: matched.debtRatioNum,
        officialPassed: true,
        officialPyiEffect: matched.pyiEffect,
        officialPyiStatus: matched.pyiStatus,
        officialSummary: matched.summary,
        officialTag: matched.tag,
        soundnessScore: 95,
        futureReliefScore: 92,
        welfareScore: 85,
        innovationScore: 80,
        overallScore: 89,
        leadershipGrade: "A",
        leadershipTitle: "공식 권고안: 지속가능 균형 개혁가",
        evaluationComment:
          "복지 10% 완충과 교부금 10% 삭감, 직접세 각 10%p 증세를 결합하여 전문가 안정선(150%) 통과와 미래세대 부담 경감을 공식 검증한 권고 조합입니다.",
        pyiState: "happy",
        stars: { debt: true, future: true, goal: true },
      };
    } else if (matched.id === "defense_1") {
      return {
        mode: "OFFICIAL",
        officialScenarioId: "defense_1",
        officialName: matched.name,
        officialDebtRatio: matched.debtRatio,
        officialDebtRatioNum: matched.debtRatioNum,
        officialPassed: false,
        officialPyiEffect: matched.pyiEffect,
        officialPyiStatus: matched.pyiStatus,
        officialSummary: matched.summary,
        officialTag: matched.tag,
        soundnessScore: 78,
        futureReliefScore: 60,
        welfareScore: 82,
        innovationScore: 70,
        overallScore: 73,
        leadershipGrade: "B",
        leadershipTitle: "공식 1차 방어선: 지출 구조조정형",
        evaluationComment:
          "지방교부세와 교육교부금을 각 10% 삭감하여 급격한 지출 폭증을 방어했으나 세입 확충이 없어 안정선 150%에는 미치지 못합니다.",
        pyiState: "neutral",
        stars: { debt: false, future: false, goal: true },
      };
    } else if (matched.id === "status_quo") {
      return {
        mode: "OFFICIAL",
        officialScenarioId: "status_quo",
        officialName: matched.name,
        officialDebtRatio: matched.debtRatio,
        officialDebtRatioNum: matched.debtRatioNum,
        officialPassed: false,
        officialPyiEffect: matched.pyiEffect,
        officialPyiStatus: matched.pyiStatus,
        officialSummary: matched.summary,
        officialTag: matched.tag,
        soundnessScore: 50,
        futureReliefScore: 40,
        welfareScore: 58,
        innovationScore: 45,
        overallScore: 49,
        leadershipGrade: "D",
        leadershipTitle: "공식 기준선: 개혁 지연 현상유지형",
        evaluationComment:
          "제도 개혁 없이 현행 법률 및 지출 관성을 유지할 경우 2055년 국가채무비율이 202.0%에 달해 국가 신인도 위험이 누적됩니다.",
        pyiState: "worried",
        stars: { debt: false, future: false, goal: false },
      };
    } else {
      // worst
      return {
        mode: "OFFICIAL",
        officialScenarioId: "worst",
        officialName: matched.name,
        officialDebtRatio: matched.debtRatio,
        officialDebtRatioNum: matched.debtRatioNum,
        officialPassed: false,
        officialPyiEffect: matched.pyiEffect,
        officialPyiStatus: matched.pyiStatus,
        officialSummary: matched.summary,
        officialTag: matched.tag,
        soundnessScore: 12,
        futureReliefScore: 8,
        welfareScore: 32,
        innovationScore: 18,
        overallScore: 17,
        leadershipGrade: "F",
        leadershipTitle: "공식 위험선: 포퓰리즘 재정 파탄형",
        evaluationComment:
          "세금 40% 감세와 지출 무차별 폭증이 결합되어 2055년 국가 부도(채무비율 490.9%)와 미래세대 빚 폭탄을 초래하는 파멸적 조합입니다.",
        pyiState: "crying",
        stars: { debt: false, future: false, goal: false },
      };
    }
  }

  // [MODE B] AI 가상 체험 모델 (15개 정책 자유 조합 시)
  // 중요: 공식 국가채무비율(%)과 PYI(%p)는 일절 임의 추정/계산하지 않음 (Undefined 유지)
  let soundness = 50;
  let futureRelief = 45;
  let welfare = 50;
  let innovation = 45;

  if (selected.has("tax_raise_10p")) {
    soundness += 25;
    futureRelief += 20;
    welfare += 10;
    innovation -= 5;
  }
  if (selected.has("tax_cut_40")) {
    soundness -= 45;
    futureRelief -= 40;
    welfare -= 25;
    innovation += 15;
  }
  if (selected.has("tax_credit_reform")) {
    soundness += 12;
    futureRelief += 12;
    welfare += 8;
    innovation += 5;
  }
  if (selected.has("welfare_up_10")) {
    welfare += 22;
    soundness -= 10;
    futureRelief -= 5;
    innovation += 5;
  }
  if (selected.has("welfare_surge")) {
    welfare += 15;
    soundness -= 40;
    futureRelief -= 35;
    innovation -= 15;
  }
  if (selected.has("auto_stabilizer")) {
    soundness += 18;
    futureRelief += 22;
    welfare += 10;
    innovation += 6;
  }
  if (selected.has("health_insurance_reform")) {
    soundness += 14;
    futureRelief += 12;
    welfare += 16;
    innovation += 5;
  }
  if (selected.has("local_grant_cut_10")) {
    soundness += 18;
    futureRelief += 15;
    welfare -= 6;
    innovation += 10;
  }
  if (selected.has("edu_grant_cut_10")) {
    soundness += 20;
    futureRelief += 18;
    welfare -= 6;
    innovation += 12;
  }
  if (selected.has("defense_surge")) {
    soundness -= 20;
    futureRelief -= 16;
    welfare -= 10;
    innovation += 10;
  }
  if (selected.has("edu_surge")) {
    soundness -= 18;
    futureRelief -= 14;
    welfare += 8;
    innovation += 14;
  }
  if (selected.has("fiscal_rule_60_3")) {
    soundness += 24;
    futureRelief += 18;
    welfare -= 2;
    innovation += 8;
  }
  if (selected.has("ai_infrastructure_priority")) {
    innovation += 38;
    soundness -= 4;
    futureRelief += 10;
    welfare += 6;
  }
  if (selected.has("climate_fund_efficiency")) {
    innovation += 26;
    soundness += 6;
    futureRelief += 8;
    welfare += 8;
  }

  // 0~100 점수 범위 클램핑
  soundness = Math.max(5, Math.min(100, soundness));
  futureRelief = Math.max(5, Math.min(100, futureRelief));
  welfare = Math.max(5, Math.min(100, welfare));
  innovation = Math.max(5, Math.min(100, innovation));

  const overallScore = Math.round(
    soundness * 0.35 + futureRelief * 0.3 + welfare * 0.2 + innovation * 0.15,
  );

  let leadershipGrade: "S" | "A" | "B" | "C" | "D" | "F" = "C";
  if (overallScore >= 90) leadershipGrade = "S";
  else if (overallScore >= 80) leadershipGrade = "A";
  else if (overallScore >= 70) leadershipGrade = "B";
  else if (overallScore >= 60) leadershipGrade = "C";
  else if (overallScore >= 45) leadershipGrade = "D";
  else leadershipGrade = "F";

  let leadershipTitle = "AI 가상 평가: 과도기적 절충형";
  let evaluationComment =
    "선택하신 정책 조합에 대한 AI 가상 체험 분석 결과입니다.";

  if (overallScore >= 85) {
    leadershipTitle = "AI 가상 평가: 지속가능 균형 리더십";
    evaluationComment =
      "세입 확충과 지출 개혁을 균형 있게 배분하여 재정 건전성과 미래세대 부담 완화가 모두 우수한 가상 평가를 받았습니다.";
  } else if (innovation >= 75 && soundness >= 60) {
    leadershipTitle = "AI 가상 평가: 미래 혁신 주도형";
    evaluationComment =
      "AI 및 기후 인프라 투자를 적극 추진하면서도 일정 수준의 재정 규율을 유지하여 미래 성장 여력이 높게 평가되었습니다.";
  } else if (soundness >= 80) {
    leadershipTitle = "AI 가상 평가: 재정 건전성 집중형";
    evaluationComment =
      "강력한 지출 삭감과 세입 강화로 국가 재정 안정성은 매우 높으나, 복지 수혜층 및 성장 투자와의 조화가 요구됩니다.";
  } else if (welfare >= 75 && soundness < 45) {
    leadershipTitle = "AI 가상 평가: 복지 확대 우선형 (재정 부담 주의)";
    evaluationComment =
      "복지 지출 확대에 비해 재원 조달 수단이 부족하여, 미래세대에 순조세 부담이 전가될 위험이 높은 조합입니다.";
  } else if (soundness < 35) {
    leadershipTitle = "AI 가상 평가: 재정 건전성 취약 경보";
    evaluationComment =
      "감세 및 재량지출 확대가 중첩되어 중장기 재정 지속가능성이 크게 위협받을 수 있는 포퓰리즘성 조합입니다.";
  }

  // 미래세대 캐릭터 표정
  let pyiState: "happy" | "neutral" | "worried" | "crying" = "neutral";
  if (futureRelief >= 75) pyiState = "happy";
  else if (futureRelief >= 55) pyiState = "neutral";
  else if (futureRelief >= 40) pyiState = "worried";
  else pyiState = "crying";

  return {
    mode: "AI_EXPERIENCE",
    soundnessScore: soundness,
    futureReliefScore: futureRelief,
    welfareScore: welfare,
    innovationScore: innovation,
    overallScore,
    leadershipGrade,
    leadershipTitle,
    evaluationComment,
    pyiState,
    stars: {
      debt: soundness >= 75,
      future: futureRelief >= 70,
      goal: selected.size >= 3 && welfare >= 60 && innovation >= 55,
    },
  };
}

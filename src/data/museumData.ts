import {
  SectionMeta,
  DemographyData,
  WelfareData,
  EnvironmentData,
  AiData,
  FiscalData,
} from "../types/museum";

export const MUSEUM_SECTIONS: SectionMeta[] = [
  {
    id: "lobby",
    number: "00",
    code: "LOBBY",
    titleKo: "재정미래관 중앙 로비",
    titleEn: "GRAND LOBBY",
    subtitle: "시공간을 넘어 마주하는 대한민국의 미래 재정 아카이브",
    themeColor: "#00F0FF",
    accentClass: "text-cyan-400 border-cyan-500/30",
    bgGlowClass: "from-cyan-950/40 via-slate-900/60 to-slate-950",
    summary: "미래박물관의 메인 홀에서 6개 핵심 전시관으로 입장하세요.",
  },
  {
    id: "demography",
    number: "01",
    code: "DEMOGRAPHY",
    titleKo: "인구변화로 인한 미래",
    titleEn: "FUTURE OF DEMOGRAPHY",
    subtitle: "데드크로스와 초고령사회, 인구 오너스의 파도",
    themeColor: "#38BDF8",
    accentClass: "text-sky-400 border-sky-500/30",
    bgGlowClass: "from-sky-950/40 via-slate-900/60 to-slate-950",
    summary: "인구 절벽과 2072년 총인구 3,622만 명, 1명이 1명을 부양하는 미래",
  },
  {
    id: "welfare",
    number: "02",
    code: "WELFARE",
    titleKo: "미래의 복지 및 연금",
    titleEn: "WELFARE & PENSION",
    subtitle: "사회보장 지속가능성과 세대 간 연대의 재설계",
    themeColor: "#F59E0B",
    accentClass: "text-amber-400 border-amber-500/30",
    bgGlowClass: "from-amber-950/40 via-slate-900/60 to-slate-950",
    summary:
      "국민연금 3차 개혁과 2065/2069 소진 시점, 2029년 건강보험 준비금 경보",
  },
  {
    id: "environment",
    number: "03",
    code: "ENVIRONMENT",
    titleKo: "미래의 환경 문제",
    titleEn: "ENVIRONMENT & CLIMATE",
    subtitle: "기후위기의 과학적 전망과 무탄소 에너지 전환",
    themeColor: "#10B981",
    accentClass: "text-emerald-400 border-emerald-500/30",
    bgGlowClass: "from-emerald-950/40 via-slate-900/60 to-slate-950",
    summary:
      "폭염일수 8.8일에서 79.5일로, 탄소국경조정제도와 11차 전력수급계획",
  },
  {
    id: "ai",
    number: "04",
    code: "AI & TECH",
    titleKo: "AI 기술이 만들 미래",
    titleEn: "AI & FUTURE LABOR",
    subtitle: "국가 AI 인프라 대전환과 노동시장 자동화 충격",
    themeColor: "#A855F7",
    accentClass: "text-purple-400 border-purple-500/30",
    bgGlowClass: "from-purple-950/40 via-slate-900/60 to-slate-950",
    summary: "2026 AI 예산 9.9조 원, GPU 20만 장 로드맵, 직업 자동화율 100%",
  },
  {
    id: "fiscal",
    number: "05",
    code: "OUTLOOK",
    titleKo: "장기재정전망",
    titleEn: "LONG-TERM FISCAL OUTLOOK",
    subtitle: "악어의 입(수입-지출 격차)과 60-3 재정준칙",
    themeColor: "#F43F5E",
    accentClass: "text-rose-400 border-rose-500/30",
    bgGlowClass: "from-rose-950/40 via-slate-900/60 to-slate-950",
    summary: "2072년 국가채무비율 173%, 의무지출 64.3% 급증에 대응하는 원칙",
  },
  {
    id: "game",
    number: "06",
    code: "SIMULATION",
    titleKo: "나라살림게임",
    titleEn: "FISCAL SIMULATION",
    subtitle: "2055년 대한민국 재정을 직접 설계하고 미래세대를 구하라",
    themeColor: "#00F0FF",
    accentClass: "text-cyan-400 border-cyan-500/30",
    bgGlowClass: "from-cyan-950/40 via-slate-900/60 to-slate-950",
    summary:
      "PERI 개발 모델 기반 3대 승리 별 획득 도전 및 4대 공식 시나리오 탐색",
  },
];

export const DEMOGRAPHY_DATA: DemographyData = {
  deadCross: {
    year: 2020,
    deaths: { raw: 305000, display: "30.5만 명", unit: "명" },
    births: { raw: 272000, display: "27.2만 명", unit: "명" },
    naturalDecrease: { raw: 20000, display: "2만 명", unit: "명" },
    concept:
      "건국 이래 최초 사망자 수가 출생아 수를 초과하며 '인구 보너스'에서 '인구 오너스(Demographic Onus)'로 전환되었습니다.",
  },
  fertilityRate2024: {
    raw: 0.75,
    display: "0.75명",
    unit: "명",
    note: "OECD 평균 절반 미달",
  },
  fertilityLowPoint2025: {
    raw: 0.65,
    display: "0.65명",
    unit: "명",
    note: "2025년 저점 전망",
  },
  fertility2072: {
    raw: 1.08,
    display: "1.08명",
    unit: "명",
    note: "2072년 중위 가정",
  },
  superAgedSociety: {
    year: 2025,
    ratio: { raw: 20.0, display: "20% 돌파", unit: "%" },
    transitionYears: {
      korea: 25,
      japan: 35,
      usa: 94,
      france: 154,
    },
  },
  projectionComparison: {
    indicators: [
      {
        category: "총인구",
        year2024: { raw: 51750000, display: "5,175만 명" },
        year2072: { raw: 36220000, display: "3,622만 명" },
        note: "약 30% 감소 (1977년 수준 회귀)",
      },
      {
        category: "생산연령인구 (15~64세)",
        year2024: { raw: 70.0, display: "70.0% (3,674만 명, 2022)" },
        year2072: { raw: 45.8, display: "45.8% (1,658만 명)" },
        note: "2030년대 연평균 50만 명씩 급감",
      },
      {
        category: "고령인구 (65세 이상)",
        year2024: { raw: 19.9, display: "19.5~19.9%" },
        year2072: { raw: 47.7, display: "47.7%" },
        note: "약 3배 급증",
      },
      {
        category: "유소년인구 (0~14세)",
        year2024: { raw: 11.5, display: "11.5% (2022)" },
        year2072: { raw: 6.6, display: "6.6%" },
        note: "절반 수준 축소",
      },
      {
        category: "합계출산율",
        year2024: { raw: 0.75, display: "0.75명" },
        year2072: { raw: 1.08, display: "1.08명 (중위)" },
        note: "2025년 0.65명 저점 기록",
      },
      {
        category: "노년부양비 (생산 100명당)",
        year2024: { raw: 27.4, display: "27.4명" },
        year2072: { raw: 104.2, display: "104.2명" },
        note: "부양 부담 3.8배 (1명이 1명 이상 부양)",
      },
      {
        category: "총부양비",
        year2024: { raw: 41.0, display: "약 41명" },
        year2072: { raw: 119.0, display: "119명" },
        note: "2072년 OECD 최고 전망",
      },
    ],
  },
  impactSectors: {
    defense: {
      title: "국방 안보",
      male20sTrend: [
        { year: "2000년대", count: { raw: 4500000, display: "450만 명" } },
        { year: "2025년", count: { raw: 3230000, display: "323만 명" } },
        { year: "2072년", count: { raw: 1420000, display: "142만 명" } },
      ],
      impact:
        "상비병력 50만 명 유지가 물리적으로 불가능해지며, 모병제 및 첨단 기술집약군으로의 전면 전환 논의가 본격화됩니다.",
    },
    capitalConcentration: {
      title: "수도권 일극화",
      capitalPopRatio: { raw: 51.0, display: "51%" },
      capitalGrdpRatio: { raw: 52.3, display: "52.3%" },
      depopulationAreas10yChange: { raw: -12.5, display: "-12.5%" },
      uiseongCase: {
        agedRatio: { raw: 47.5, display: "47.5%" },
        elderlyDependency: { raw: 92.1, display: "92.1명" },
      },
    },
    singleHousehold: {
      title: "1인가구 급증과 빈곤",
      trend: [
        {
          year: "2015년",
          ratio: { raw: 27.2, display: "27.2%" },
          count: { raw: 5200000, display: "520만" },
        },
        {
          year: "2024년",
          ratio: { raw: 36.1, display: "36.1%" },
          count: { raw: 8040000, display: "804만" },
        },
        { year: "2052년", ratio: { raw: 41.3, display: "41.3%" } },
      ],
      elderlyPovertyRatio: { raw: 73.0, display: "73%" },
      povertyCriteria:
        "60세 이상 1인가구의 73%가 월소득 200만 원 이하 빈곤층에 머물고 있습니다.",
    },
  },
};

export const WELFARE_DATA: WelfareData = {
  socialExpenditure: {
    timeline: [
      { year: 2024, ratioGdp: { raw: 15.3, display: "15.3%" } },
      { year: 2030, ratioGdp: { raw: 17.2, display: "17.2%" } },
      { year: 2035, ratioGdp: { raw: 18.6, display: "18.6%" } },
      { year: 2040, ratioGdp: { raw: 20.5, display: "20.5%" } },
    ],
    oecd2021Avg: { raw: 22.1, display: "22.1%" },
  },
  nationalBurdenRate: {
    year2023: { raw: 26.9, display: "26.9%" },
    oecdAvg: { raw: 33.7, display: "33.7%" },
  },
  pensionReforms: [
    {
      step: "1차 개혁",
      year: "1998",
      direction: "급여 삭감, 수급연령 상향",
      replacementRate: "70% → 60%",
      contributionRate: "3% → 9%",
      credits: "-",
      guarantee: "명문 규정 없음",
    },
    {
      step: "2차 개혁",
      year: "2007",
      direction: "급여 삭감, 기초노령연금 도입",
      replacementRate: "60% → 40% (2028년까지)",
      contributionRate: "9% 유지",
      credits: "군복무(6개월), 출산(둘째부터)",
      guarantee: "명문 규정 없음",
    },
    {
      step: "3차 개혁",
      year: "2025 통과 / 2026 시행",
      direction: "보험료율·소득대체율 동시 인상",
      replacementRate: "40% → 43% 상향",
      contributionRate: "9% → 13% (매년 0.5%p 단계 인상)",
      credits: "군복무(최대 12개월), 출산(첫째부터 인정, 상한 폐지)",
      guarantee: "법률 명시",
    },
  ],
  fundExhaustion: {
    deficitPostponement: { rawYears: 7, fromYear: 2041, toYear: 2048 },
    exhaustionPostponement: { rawYears: 8, fromYear: 2057, toYear: 2065 },
    withInvestmentReturn2025: {
      returnRate: { raw: 18.82, display: "18.82%" },
      accumulatedFund: { raw: 1458000000000000, display: "1,458조 원" },
      exhaustionYear: 2069,
    },
  },
  pensionDebt: {
    totalDebt: { raw: 6358000000000000, display: "6,358조 원" },
    unfundedDebt: { raw: 1820000000000000, display: "1,820조 원" },
  },
  oecdRealReplacementRanking: [
    { country: "그리스", rate: { raw: 80.8, display: "80.8%" } },
    { country: "이탈리아", rate: { raw: 76.1, display: "76.1%" } },
    { country: "네덜란드", rate: { raw: 74.7, display: "74.7%" } },
    { country: "OECD 평균", rate: { raw: 50.7, display: "50.7%" } },
    {
      country: "대한민국",
      rate: { raw: 31.6, display: "31.6%" },
      detail: "공적 31.2% + 퇴직 0.4% (최하위권)",
    },
  ],
  healthInsurance: {
    rate2024: { raw: 7.09, display: "7.09%" },
    reserveExhaustionYear: 2029,
    requiredRateUnderCurrentSpending: { raw: 12.0, display: "12% 이상" },
    nursingServiceCost: {
      raw: "1.07조~1.58조 원",
      display: "연간 1.07조~1.58조 원",
    },
    sicknessAllowance: "2022년부터 지자체 시범사업 진행 중",
  },
};

export const ENVIRONMENT_DATA: EnvironmentData = {
  climateComparison: {
    current: {
      stage: "current",
      name: "현재 기준",
      period: "현재",
      tempRise: { raw: 0.0, display: "기준 (0.0°C)" },
      heatwaveDays: { raw: 8.8, display: "8.8일" },
      description: "연간 폭염일수 8.8일 수준의 현재 한반도 기후 조건입니다.",
    },
    ssp126: {
      stage: "ssp126",
      name: "저탄소 시나리오 (SSP1-2.6)",
      period: "2081~2100년",
      tempRise: { raw: 2.3, display: "+2.3°C" },
      heatwaveDays: { raw: 24.2, display: "24.2일" },
      description:
        "적극적인 탄소 감축 정책이 성공할 경우 폭염일수는 24.2일 수준으로 억제됩니다.",
    },
    ssp585: {
      stage: "ssp585",
      name: "고탄소 시나리오 (SSP5-8.5)",
      period: "2081~2100년",
      tempRise: { raw: 7.0, display: "+7.0°C" },
      heatwaveDays: { raw: 79.5, display: "79.5일" },
      disasterDamageMax: {
        raw: 11479400000000,
        display: "최대 11조 4,794억 원",
      },
      description:
        "현재 배출 추세가 지속될 경우 연간 폭염일수가 79.5일로 현재 대비 9배 급증하며 천문학적 재난 피해가 발생합니다.",
    },
    comparisonNote:
      "현재 8.8일 대비 고탄소 시나리오에서 9배 급증 (SSP1-2.6 24.2일 vs SSP5-8.5 79.5일)",
  },
  disasterDamageMax: { raw: 11479400000000, display: "11조 4,794억 원" },
  typhoonRusaComparison:
    "2002년 태풍 루사 피해(7.9조 원)의 1.4배에 달하는 연간 피해액 추정",
  ndc2035: {
    targetRange: "2018년 대비 53~61% 감축",
    baseYear: 2018,
    powerSectorTarget: { raw: 69.0, display: "69% 감축" },
    industrySectorTarget: { raw: 24.0, display: "24% 감축" },
  },
  ghgEmissions: {
    peak2018: { raw: 742.3, display: "742.3백만 톤 (정점)" },
    year2023: { raw: 624.2, display: "624.2백만 톤" },
    year2024Tentative: { raw: 691.6, display: "691.6백만 톤 (잠정)" },
  },
  carbonFreePower11thPlan: {
    timeline: [
      {
        year: 2023,
        carbonFreeTotal: { raw: 39.1, display: "39.1%" },
        nuclear: { raw: 30.0, display: "약 30%" },
        renewable: { raw: 9.1, display: "약 9.1%" },
      },
      {
        year: 2030,
        carbonFreeTotal: { raw: 53.0, display: "53.0%" },
        nuclear: { raw: 31.8, display: "31.8%" },
        renewable: { raw: 18.8, display: "18.8%" },
      },
      {
        year: 2038,
        carbonFreeTotal: { raw: 70.7, display: "70.7%" },
        nuclear: { raw: 35.2, display: "35.2%" },
        renewable: { raw: 29.2, display: "29.2%" },
      },
    ],
  },
  tradeBarriersAndFinance: {
    cbam: {
      totalEuExport: { raw: 68100000000, display: "681억 달러" },
      cbamTargetExport: { raw: 5100000000, display: "51억 달러" },
      targetShare: { raw: 7.5, display: "7.5%" },
      steelShare: { raw: 89.3, display: "89.3%" },
      steelAmount: { raw: 4500000000, display: "45억 달러" },
      aluminumShare: { raw: 10.6, display: "10.6%" },
      aluminumAmount: { raw: 540000000, display: "5.4억 달러" },
      annualBurden25y: { raw: 300000000000, display: "연평균 약 3,000억 원" },
    },
    climateFund: {
      year2025: { raw: 2621700000000, display: "2조 6,217억 원" },
      year2026: { raw: 2905700000000, display: "2조 9,057억 원" },
      fiveYearPlanTotal: { raw: 89900000000000, display: "89.9조 원" },
      actualBudgetRate: { raw: 74.2, display: "74.2%" },
    },
  },
};

export const AI_DATA: AiData = {
  governanceAndBudget: {
    actEnacted: "2024년 12월 제정",
    actEnforced:
      "2026년 1월 22일 전면 시행 (고영향 AI 위험기반 규제 및 투명성 의무 도입)",
    budget2026: { raw: 9900000000000, display: "9.9조 원" },
    ministriesCount: 41,
    projectsCount: 738,
    budgetShareOfTotalGovSpending: { raw: 1.4, display: "1.4%" },
    totalGovSpending: { raw: 728000000000000, display: "728조 원" },
    ministryAllocation: [
      { ministry: "과기정통부", share: { raw: 51, display: "51%" } },
      { ministry: "산업부", share: { raw: 17, display: "17%" } },
      { ministry: "중기부", share: { raw: 9, display: "9%" } },
      { ministry: "기타 부처", share: { raw: 23, display: "23%" } },
    ],
  },
  gpuInfrastructure: {
    b200Current: { raw: 35200, display: "3.52만 장" },
    target2028: { raw: 50000, display: "5만 장 조기 달성" },
    target2030: { raw: 200000, display: "20만 장" },
    privateInvestmentTarget: { raw: 550000000000000, display: "550조 원 유치" },
    excessTaxRevenueInput: {
      amount: { raw: 5000000000000, display: "5조 원 투입" },
      date: "2026년 7월",
      gpuAcquisition: { raw: 10000, display: "차세대 GPU 1만 개" },
      modelTarget: "독자 프런티어 파운데이션 모델 개발",
    },
  },
  laborImpact: {
    automationRateKdi2030: [
      { job: "주방장·세탁원", rate: { raw: 100, display: "100%" } },
      { job: "변호사", rate: { raw: 74, display: "74%" } },
      { job: "판·검사", rate: { raw: 69, display: "69%" } },
      {
        job: "국회의원·고위공무원·대학교수",
        rate: { raw: 64, display: "64%" },
      },
    ],
    youthEmploymentImpact: {
      exposureIncrease: "AI 영향률 10%p 상승 시",
      maleYouthDecrease: { raw: -3.3, display: "-3.3%p" },
      femaleYouthDecrease: { raw: -5.3, display: "-5.3%p" },
    },
  },
  globalIndex2026Hud: [
    {
      indicator: "AI 특허 밀도",
      rankDisplay: "세계 1위",
      rawValue: "14.31건",
      context: "글로벌 최고 수준의 원천 특허 집중도 보유",
    },
    {
      indicator: "AI 확산 순위",
      rankDisplay: "세계 18위",
      rawValue: "18위",
      context: "산업 및 사회 전반의 AI 적용 속도",
    },
    {
      indicator: "민간투자 규모",
      rankDisplay: "세계 12위",
      rawValue: "미국의 2.1%",
      context: "미국 대비 민간 투자 유치 격차 상존",
    },
    {
      indicator: "인재 순유입",
      rankDisplay: "세계 35위",
      rawValue: "35위",
      context: "핵심 AI 두뇌 인재의 해외 유출 방지 및 유입 과제",
    },
  ],
};

export const FISCAL_DATA: FiscalData = {
  debtRatiosTimeline: [
    {
      year: "2026년",
      ratio: { raw: 51.6, display: "51.6%" },
      amount: { raw: 1415000000000000, display: "1,415조 원" },
      agency: "정부 공식 예산안",
    },
    {
      year: "2029년",
      ratio: { raw: 58.0, display: "58.0%" },
      amount: { raw: 1789000000000000, display: "1,789조 원" },
      agency: "중기재정계획",
    },
    {
      year: "2065년",
      ratio: { raw: 156.3, display: "156.3%" },
      rangeNote: "시나리오별 133.0% ~ 173.4%",
      agency: "기획재정부 장기전망",
    },
    {
      year: "2072년",
      ratio: { raw: 173.0, display: "173.0%" },
      amount: { raw: 7303000000000000, display: "7,303조 원" },
      agency: "국회예산정책처 (NABO)",
    },
  ],
  potentialGrowthTimeline: [
    {
      year: "2026년",
      rateDisplay: "1.6%",
      rawNote: "1.6%",
      agency: "정부 공식 전망",
    },
    {
      year: "2029년",
      rateDisplay: "1%대 초반",
      rawNote: "1%대 초반",
      agency: "중기 성장 전망",
    },
    {
      year: "2065년",
      rateDisplay: "0.1% ~ -0.3%",
      rawNote: "0.1% ~ -0.3% (2040년대 KDI)",
      agency: "KDI 경제전망",
    },
    {
      year: "2072년",
      rateDisplay: "0.3%",
      rawNote: "0.3%",
      agency: "국회예산정책처 (NABO)",
    },
  ],
  mandatorySpending: {
    year2026: { raw: 54.4, display: "54.4%" },
    year2072: { raw: 64.3, display: "64.3%" },
    year2072GdpRatio: { raw: 21.6, display: "GDP 대비 21.6%" },
  },
  crocodileJaws: {
    startYear: 2026,
    endYear: 2065,
    revenueChange: {
      from: { raw: 24.5, display: "24.5%" },
      to: { raw: 22.0, display: "22.0%" },
    },
    expenditureChange: {
      from: { raw: 25.5, display: "25.5%" },
      to: { raw: 33.6, display: "33.6%" },
    },
    fiveYearOutlookJump:
      "2020년 전망(2060년 79.7%) 대비 불과 5년 만에 2065년 전망치(156.3%)가 약 2배 폭증했습니다.",
  },
  fiscalRule603: {
    title: "재정준칙 60-3 원칙",
    deficitLimitNormal: { raw: 3.0, display: "GDP 3% 이내" },
    debtThreshold: { raw: 60.0, display: "국가채무비율 60%" },
    deficitLimitTight: { raw: 2.0, display: "적자 한도 2%로 축소" },
    statusNote:
      "재정의 지속가능성을 담보하기 위한 핵심 준칙이나 국회에서 4년째 법제화 계류 중입니다.",
  },
};

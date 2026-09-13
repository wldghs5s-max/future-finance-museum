export type SectionId =
  | "lobby"
  | "demography"
  | "welfare"
  | "environment"
  | "ai"
  | "fiscal"
  | "game";

export interface SectionMeta {
  id: SectionId;
  number: string;
  code: string;
  titleKo: string;
  titleEn: string;
  subtitle: string;
  themeColor: string;
  accentClass: string;
  bgGlowClass: string;
  summary: string;
}

export interface MetricItem<T = number | string> {
  raw: T;
  display: string;
  unit?: string;
  note?: string;
  description?: string;
  sourceNote?: string;
}

// Section I: Demography
export interface DemographyData {
  deadCross: {
    year: number;
    deaths: MetricItem<number>;
    births: MetricItem<number>;
    naturalDecrease: MetricItem<number>;
    concept: string;
  };
  fertilityRate2024: MetricItem<number>;
  fertilityLowPoint2025: MetricItem<number>;
  fertility2072: MetricItem<number>;
  superAgedSociety: {
    year: number;
    ratio: MetricItem<number>;
    transitionYears: {
      korea: number;
      japan: number;
      usa: number;
      france: number;
    };
  };
  projectionComparison: {
    indicators: {
      category: string;
      year2024: MetricItem;
      year2072: MetricItem;
      note: string;
    }[];
  };
  impactSectors: {
    defense: {
      title: string;
      male20sTrend: { year: string; count: MetricItem<number> }[];
      impact: string;
    };
    capitalConcentration: {
      title: string;
      capitalPopRatio: MetricItem<number>;
      capitalGrdpRatio: MetricItem<number>;
      depopulationAreas10yChange: MetricItem<number>;
      uiseongCase: {
        agedRatio: MetricItem<number>;
        elderlyDependency: MetricItem<number>;
      };
    };
    singleHousehold: {
      title: string;
      trend: {
        year: string;
        ratio: MetricItem<number>;
        count?: MetricItem<number>;
      }[];
      elderlyPovertyRatio: MetricItem<number>;
      povertyCriteria: string;
    };
  };
}

// Section II: Welfare
export interface WelfareData {
  socialExpenditure: {
    timeline: { year: number; ratioGdp: MetricItem<number> }[];
    oecd2021Avg: MetricItem<number>;
  };
  nationalBurdenRate: {
    year2023: MetricItem<number>;
    oecdAvg: MetricItem<number>;
  };
  pensionReforms: {
    step: string;
    year: string;
    direction: string;
    replacementRate: string;
    contributionRate: string;
    credits: string;
    guarantee: string;
  }[];
  fundExhaustion: {
    deficitPostponement: { rawYears: 7; fromYear: 2041; toYear: 2048 };
    exhaustionPostponement: { rawYears: 8; fromYear: 2057; toYear: 2065 };
    withInvestmentReturn2025: {
      returnRate: MetricItem<number>;
      accumulatedFund: MetricItem<number>;
      exhaustionYear: number;
    };
  };
  pensionDebt: {
    totalDebt: MetricItem<number>;
    unfundedDebt: MetricItem<number>;
  };
  oecdRealReplacementRanking: {
    country: string;
    rate: MetricItem<number>;
    detail?: string;
  }[];
  healthInsurance: {
    rate2024: MetricItem<number>;
    reserveExhaustionYear: number;
    requiredRateUnderCurrentSpending: MetricItem<number>;
    nursingServiceCost: MetricItem<string>;
    sicknessAllowance: string;
  };
}

// Section III: Environment
export interface ClimatePoint {
  stage: "current" | "ssp126" | "ssp585";
  name: string;
  period: string;
  tempRise: MetricItem<number>;
  heatwaveDays: MetricItem<number>;
  disasterDamageMax?: MetricItem<number>;
  description: string;
}

export interface EnvironmentData {
  climateComparison: {
    current: ClimatePoint;
    ssp126: ClimatePoint;
    ssp585: ClimatePoint;
    comparisonNote: string;
  };
  disasterDamageMax: MetricItem<number>;
  typhoonRusaComparison: string;
  ndc2035: {
    targetRange: string;
    baseYear: number;
    powerSectorTarget: MetricItem<number>;
    industrySectorTarget: MetricItem<number>;
  };
  ghgEmissions: {
    peak2018: MetricItem<number>;
    year2023: MetricItem<number>;
    year2024Tentative: MetricItem<number>;
  };
  carbonFreePower11thPlan: {
    timeline: {
      year: number;
      carbonFreeTotal: MetricItem<number>;
      nuclear: MetricItem<number>;
      renewable: MetricItem<number>;
    }[];
  };
  tradeBarriersAndFinance: {
    cbam: {
      totalEuExport: MetricItem<number>;
      cbamTargetExport: MetricItem<number>;
      targetShare: MetricItem<number>;
      steelShare: MetricItem<number>;
      steelAmount: MetricItem<number>;
      aluminumShare: MetricItem<number>;
      aluminumAmount: MetricItem<number>;
      annualBurden25y: MetricItem<number>;
    };
    climateFund: {
      year2025: MetricItem<number>;
      year2026: MetricItem<number>;
      fiveYearPlanTotal: MetricItem<number>;
      actualBudgetRate: MetricItem<number>;
    };
  };
}

// Section IV: AI
export interface AiData {
  governanceAndBudget: {
    actEnacted: string;
    actEnforced: string;
    budget2026: MetricItem<number>;
    ministriesCount: number;
    projectsCount: number;
    budgetShareOfTotalGovSpending: MetricItem<number>;
    totalGovSpending: MetricItem<number>;
    ministryAllocation: { ministry: string; share: MetricItem<number> }[];
  };
  gpuInfrastructure: {
    b200Current: MetricItem<number>;
    target2028: MetricItem<number>;
    target2030: MetricItem<number>;
    privateInvestmentTarget: MetricItem<number>;
    excessTaxRevenueInput: {
      amount: MetricItem<number>;
      date: string;
      gpuAcquisition: MetricItem<number>;
      modelTarget: string;
    };
  };
  laborImpact: {
    automationRateKdi2030: { job: string; rate: MetricItem<number> }[];
    youthEmploymentImpact: {
      exposureIncrease: string;
      maleYouthDecrease: MetricItem<number>;
      femaleYouthDecrease: MetricItem<number>;
    };
  };
  globalIndex2026Hud: {
    indicator: string;
    rankDisplay: string;
    rawValue?: string | number;
    context: string;
  }[];
}

// Section V: Fiscal Outlook
export interface FiscalData {
  debtRatiosTimeline: {
    year: string;
    ratio: MetricItem<number>;
    amount?: MetricItem<number>;
    agency: string;
    rangeNote?: string;
  }[];
  potentialGrowthTimeline: {
    year: string;
    rateDisplay: string;
    rawNote: string;
    agency: string;
  }[];
  mandatorySpending: {
    year2026: MetricItem<number>;
    year2072: MetricItem<number>;
    year2072GdpRatio: MetricItem<number>;
  };
  crocodileJaws: {
    startYear: 2026;
    endYear: 2065;
    revenueChange: { from: MetricItem<number>; to: MetricItem<number> };
    expenditureChange: { from: MetricItem<number>; to: MetricItem<number> };
    fiveYearOutlookJump: string;
  };
  fiscalRule603: {
    title: string;
    deficitLimitNormal: MetricItem<number>;
    debtThreshold: MetricItem<number>;
    deficitLimitTight: MetricItem<number>;
    statusNote: string;
  };
}

// Section VI: Fiscal Game
export type OfficialScenarioId =
  | "worst"
  | "status_quo"
  | "defense_1"
  | "defense_2";

export interface OfficialScenario {
  id: OfficialScenarioId;
  nameKo: string;
  debtRatio2055: MetricItem<number>;
  badge: string;
  summary: string;
  associatedPolicies: string[];
  pyiQualitativeState: {
    status: "극도로 위험" | "경고" | "주의" | "안정";
    statusLevel: "critical" | "warning" | "caution" | "stable";
    childMood: "crying" | "worried" | "neutral" | "happy";
    description: string;
  };
  star1Achieved: boolean; // Debt <= 150%
}

export interface PolicyCard {
  id: string;
  category: "세입" | "복지·연금" | "지방재정" | "재량지출";
  title: string;
  description: string;
  docReference: string;
}

export interface GlossaryItem {
  term: string;
  titleKo: string;
  definition: string;
  docDetails: string;
}

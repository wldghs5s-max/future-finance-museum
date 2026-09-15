export const PDF_SOURCE_FILE = "재정미래관pdf.pdf";

export type VisualKind = "chart_image" | "table_crop" | "labeled_chart";

export interface LabeledPoint {
  name: string;
  value: number;
  display: string;
}

export interface VisualAsset {
  id: string;
  kind: VisualKind;
  src?: string;
  title: string;
  page: number;
  exhibitIds: string[];
  hall: string;
  sourceCaption: string;
  chartNote?: string;
  labeledSeries?: { key: string; label: string; color: string; points: LabeledPoint[] }[];
}

export const VISUAL_ASSETS: VisualAsset[] = [
  {
    id: "pop_outlook",
    kind: "labeled_chart",
    src: "/exhibits/p003-population-outlook.jpg",
    title: "대한민국 총인구 추이 전망(2022~2072)",
    page: 3,
    exhibitIds: ["exhibit_1a"],
    hall: "인구변화관",
    sourceCaption:
      "국가데이터처, 「장래인구추계: 2022~2072년」 보도자료(2023. 12. 14.)",
    chartNote: "차트에 적힌 값만 사용. 중간 연도는 추정하지 않음.",
    labeledSeries: [
      {
        key: "pop",
        label: "총인구(만 명)",
        color: "#38bdf8",
        points: [
          { name: "2022", value: 5167, display: "5,167만 명" },
          { name: "2030", value: 5131, display: "5,131만 명" },
          { name: "2072", value: 3622, display: "3,622만 명" },
        ],
      },
    ],
  },
  {
    id: "age_structure",
    kind: "labeled_chart",
    src: "/exhibits/p004-age-structure.jpg",
    title: "연령계층별 인구구조 변화: 2022년 vs 2072년",
    page: 4,
    exhibitIds: ["exhibit_1a", "exhibit_1b"],
    hall: "인구변화관",
    sourceCaption: "국가데이터처 장래인구추계 본문 수치(2022·2072)",
    chartNote: "막대는 2022년과 2072년 연령 구성입니다.",
    labeledSeries: [
      {
        key: "y2022",
        label: "2022년",
        color: "#1e3a8a",
        points: [
          { name: "0~14세", value: 11.5, display: "11.5%" },
          { name: "15~64세", value: 71.1, display: "71.1%" },
          { name: "65세+", value: 17.4, display: "17.4%" },
        ],
      },
      {
        key: "y2072",
        label: "2072년",
        color: "#f59e0b",
        points: [
          { name: "0~14세", value: 6.6, display: "6.6%" },
          { name: "15~64세", value: 45.8, display: "45.8%" },
          { name: "65세+", value: 47.7, display: "47.7%" },
        ],
      },
    ],
  },
  {
    id: "pop_table",
    kind: "table_crop",
    src: "/exhibits/p004-pop-compare-table.png",
    title: "2024년과 2072년 인구지표 비교 표 (4~5쪽)",
    page: 4,
    exhibitIds: ["exhibit_1a"],
    hall: "인구변화관",
    sourceCaption: "장래인구추계·국회예산정책처 기준이 표에 병기됨",
  },
  {
    id: "pop_table_p5",
    kind: "table_crop",
    src: "/exhibits/p005-pop-compare-table.png",
    title: "2024년과 2072년 인구지표 비교 표 (5쪽 이어짐)",
    page: 5,
    exhibitIds: ["exhibit_1a"],
    hall: "인구변화관",
    sourceCaption:
      "국가데이터처 장래인구추계 보도자료(2023. 12. 14.) · 민보경 외 국회미래연구원",
  },
  {
    id: "dependency",
    kind: "labeled_chart",
    src: "/exhibits/p005-dependency.jpg",
    title: "노년부양비·총부양비 변화: 2024년 vs 2072년",
    page: 5,
    exhibitIds: ["exhibit_1a"],
    hall: "인구변화관",
    sourceCaption: "국가데이터처, 장래인구추계 2022~2072",
    labeledSeries: [
      {
        key: "y2024",
        label: "2024년",
        color: "#1e3a8a",
        points: [
          { name: "노년부양비", value: 27.4, display: "27.4명" },
          { name: "총부양비", value: 41, display: "약 41명" },
        ],
      },
      {
        key: "y2072",
        label: "2072년",
        color: "#f59e0b",
        points: [
          { name: "노년부양비", value: 104.2, display: "104.2명" },
          { name: "총부양비", value: 119, display: "119명" },
        ],
      },
    ],
  },
  {
    id: "household",
    kind: "labeled_chart",
    src: "/exhibits/p013-single-household.jpg",
    title: "전체 가구 대비 1인가구 비중 변화(2015~2052)",
    page: 13,
    exhibitIds: ["exhibit_1g"],
    hall: "인구변화관",
    sourceCaption: "민보경 외, 국회미래연구원 Ⅳ (2025. 12.)",
    labeledSeries: [
      {
        key: "share",
        label: "1인가구 비율",
        color: "#f59e0b",
        points: [
          { name: "2015", value: 27.2, display: "27.2%" },
          { name: "2024", value: 36.1, display: "36.1%" },
          { name: "2052", value: 41.3, display: "41.3%" },
        ],
      },
    ],
  },
  {
    id: "welfare_spend",
    kind: "labeled_chart",
    src: "/exhibits/p023-welfare-spending.jpg",
    title: "사회복지 지출 GDP 대비 전망 (한국 vs OECD 평균)",
    page: 23,
    exhibitIds: ["exhibit_2d"],
    hall: "복지·연금관",
    sourceCaption: "보건복지부 사회보장위원회, 제5차 사회보장 재정추계(안) (24.11)",
    chartNote: "OECD 평균 막대는 2021년 값. 한국 시계열과 같은 연도가 아님.",
    labeledSeries: [
      {
        key: "kr",
        label: "한국",
        color: "#1e3a8a",
        points: [
          { name: "2024", value: 15.3, display: "15.3%" },
          { name: "2030", value: 17.2, display: "17.2%" },
          { name: "2035", value: 18.6, display: "18.6%" },
          { name: "2040", value: 20.5, display: "20.5%" },
        ],
      },
      {
        key: "oecd",
        label: "OECD 평균 (2021년, 한국 시계열과 연도 다름)",
        color: "#d97706",
        points: [{ name: "2021", value: 22.1, display: "22.1%" }],
      },
    ],
  },
  {
    id: "welfare_table",
    kind: "table_crop",
    src: "/exhibits/p023-welfare-table.png",
    title: "사회복지지출·국민부담률 전망 표",
    page: 23,
    exhibitIds: ["exhibit_2d"],
    hall: "복지·연금관",
    sourceCaption: "보건복지부 사회보장위원회, 제5차 사회보장 재정추계(안) (24.11)",
  },
  {
    id: "pension_reform_table",
    kind: "table_crop",
    src: "/exhibits/p025-reform-tables.png",
    title: "2025 국민연금법 개정 전후 및 기금 추이 표",
    page: 25,
    exhibitIds: ["exhibit_2f", "exhibit_2a"],
    hall: "복지·연금관",
    sourceCaption: "국민연금법; NABO 개정 분석(2025. 6.)",
  },
  {
    id: "pension_reforms",
    kind: "chart_image",
    src: "/exhibits/p028-pension-reforms.jpg",
    title: "세 차례 국민연금 개혁 비교",
    page: 28,
    exhibitIds: ["exhibit_2b"],
    hall: "복지·연금관",
    sourceCaption: "최성은 외, KIPF 연보 25-09",
    chartNote: "차트에 적힌 값만 사용. 중간 연도는 없음.",
    labeledSeries: [
      {
        key: "repl_before",
        label: "명목소득대체율 · 개혁 전",
        color: "#93c5fd",
        points: [
          { name: "1차(1998)", value: 70, display: "70%" },
          { name: "2차(2007)", value: 60, display: "60%" },
          { name: "3차(2025)", value: 40, display: "40%" },
        ],
      },
      {
        key: "repl_after",
        label: "명목소득대체율 · 개혁 후",
        color: "#1e3a8a",
        points: [
          { name: "1차(1998)", value: 60, display: "60%" },
          { name: "2차(2007)", value: 40, display: "40%" },
          { name: "3차(2025)", value: 43, display: "43%" },
        ],
      },
      {
        key: "rate_before",
        label: "보험료율 · 개혁 전",
        color: "#fed7aa",
        points: [
          { name: "1차(1998)", value: 3, display: "3%" },
          { name: "2차(2007)", value: 9, display: "9%" },
          { name: "3차(2025)", value: 9, display: "9%" },
        ],
      },
      {
        key: "rate_after",
        label: "보험료율 · 개혁 후",
        color: "#c2410c",
        points: [
          { name: "1차(1998)", value: 9, display: "9%" },
          { name: "2차(2007)", value: 9, display: "9%" },
          { name: "3차(2025)", value: 13, display: "13%" },
        ],
      },
    ],
  },
  {
    id: "oecd_replacement",
    kind: "chart_image",
    src: "/exhibits/p034-oecd-replacement.jpg",
    title: "OECD 국가별 노후소득 합계 대체율 비교",
    page: 34,
    exhibitIds: ["exhibit_2c"],
    hall: "복지·연금관",
    sourceCaption: "OECD Pensions at a Glance 2023",
    chartNote: "합계 대체율. 공적/퇴직 분해는 표 크롭을 함께 둠.",
  },
  {
    id: "oecd_table",
    kind: "table_crop",
    src: "/exhibits/p034-oecd-table.png",
    title: "OECD 국가별 공적·퇴직·합계 대체율 표",
    page: 34,
    exhibitIds: ["exhibit_2c"],
    hall: "복지·연금관",
    sourceCaption: "OECD Pensions at a Glance 2023",
  },
  {
    id: "climate_ssp",
    kind: "chart_image",
    src: "/exhibits/p040-climate-ssp.jpg",
    title: "21세기 말 한반도 기후변화 시나리오",
    page: 40,
    exhibitIds: ["exhibit_3a"],
    hall: "환경관",
    sourceCaption: "기후에너지환경부, 한국 기후위기 평가보고서 2025",
  },
  {
    id: "ssp_table",
    kind: "table_crop",
    src: "/exhibits/p040-ssp-table.png",
    title: "21세기 말 한반도 기후변화 전망 표 (SSP)",
    page: 40,
    exhibitIds: ["exhibit_3a"],
    hall: "환경관",
    sourceCaption: "기후에너지환경부, 한국 기후위기 평가보고서 2025 (2025. 9. 18.)",
  },
  {
    id: "ndc_compare",
    kind: "chart_image",
    src: "/exhibits/p042-ndc-compare.jpg",
    title: "주요국 2035 NDC 비교",
    page: 42,
    exhibitIds: ["exhibit_3e"],
    hall: "환경관",
    sourceCaption: "한국일보 2025. 11. 10. 인용 표·차트",
    chartNote:
      "표는 구간(한국 53~61%). 차트 막대는 구간 중간값으로 그려져 있음. 중간값을 확정 목표로 쓰지 않음.",
  },
  {
    id: "ndc_table",
    kind: "table_crop",
    src: "/exhibits/p042-ndc-table.png",
    title: "주요국 2035 NDC 표",
    page: 42,
    exhibitIds: ["exhibit_3e"],
    hall: "환경관",
    sourceCaption: "한국일보 2025. 11. 10.",
  },
  {
    id: "ghg_trend",
    kind: "chart_image",
    src: "/exhibits/p043-ghg-trend.jpg",
    title: "한국 온실가스 배출량 추이(2018~2024)",
    page: 43,
    exhibitIds: ["exhibit_3d"],
    hall: "환경관",
    sourceCaption: "정책브리핑 2024. 9. 12. / 2025. 8. 20.",
    chartNote:
      "차트 표기: 2018 742.3백만톤, 2023 624.2백만톤, 2024 691.6백만톤. 본문 ‘약 2% 감소’·‘2018~2024 약 9,389만 톤’과 끝점 차가 다름. 반등 해석을 추가하지 않음.",
    labeledSeries: [
      {
        key: "ghg",
        label: "차트에 찍힌 배출량(백만톤 CO2eq)",
        color: "#0f766e",
        points: [
          { name: "2018", value: 742.3, display: "742.3백만톤" },
          { name: "2023", value: 624.2, display: "624.2백만톤" },
          { name: "2024", value: 691.6, display: "691.6백만톤" },
        ],
      },
    ],
  },
  {
    id: "carbon_free_table_p43",
    kind: "table_crop",
    src: "/exhibits/p043-044-power-table.png",
    title: "무탄소 발전 비율 전환 목표 표 (43쪽)",
    page: 43,
    exhibitIds: ["exhibit_3b"],
    hall: "환경관",
    sourceCaption: "산업부, 제11차 전력수급기본계획 (2025. 2. 21.)",
  },
  {
    id: "carbon_free",
    kind: "labeled_chart",
    src: "/exhibits/p044-carbon-free-power.jpg",
    title: "무탄소 발전 비중 전환 목표(2023~2038)",
    page: 44,
    exhibitIds: ["exhibit_3b"],
    hall: "환경관",
    sourceCaption: "산업부, 제11차 전력수급기본계획 (2025. 2. 21.)",
    chartNote: "원전·재생 2023년 값은 표에 없음. 만들지 않음.",
    labeledSeries: [
      {
        key: "cf",
        label: "무탄소 발전 비중",
        color: "#10b981",
        points: [
          { name: "2023", value: 39.1, display: "39.1%" },
          { name: "2030", value: 53.0, display: "53.0%" },
          { name: "2038", value: 70.7, display: "70.7%" },
        ],
      },
    ],
  },
  {
    id: "power_mix_table",
    kind: "table_crop",
    src: "/exhibits/p044-power-table.png",
    title: "원전·재생에너지 발전 비중 표 (44쪽)",
    page: 44,
    exhibitIds: ["exhibit_3b"],
    hall: "환경관",
    sourceCaption:
      "산업부, 제11차 전력수급기본계획. 2023년 원전·재생 칸은 표에 ‘-’.",
  },
  {
    id: "automation",
    kind: "labeled_chart",
    src: "/exhibits/p062-automation.jpg",
    title: "직업별 업무 자동화 가능 비율 전망(2030년)",
    page: 62,
    exhibitIds: ["exhibit_4b"],
    hall: "AI관",
    sourceCaption: "KDI, 인공지능으로 인한 노동시장의 변화와 정책 방향 (2025. 7. 15.)",
    labeledSeries: [
      {
        key: "auto",
        label: "자동화 가능 비율",
        color: "#a855f7",
        points: [
          { name: "주방·세탁 등", value: 100, display: "100%" },
          { name: "판·검사", value: 69, display: "69%" },
          { name: "변호사", value: 74, display: "74%" },
          { name: "고위공직·교수", value: 64, display: "64%" },
        ],
      },
    ],
  },
  {
    id: "automation_table",
    kind: "table_crop",
    src: "/exhibits/p062-automation-table.png",
    title: "직업별 업무 자동화 가능 비율 표",
    page: 62,
    exhibitIds: ["exhibit_4b"],
    hall: "AI관",
    sourceCaption: "KDI, 인공지능으로 인한 노동시장의 변화와 정책 방향 (2025. 7. 15.)",
  },
  {
    id: "nabo_outlook",
    kind: "labeled_chart",
    src: "/exhibits/p009-nabo-outlook.jpg",
    title: "NABO 장기재정전망: 국가채무·수입·지출 비율(2025~2072)",
    page: 9,
    exhibitIds: ["exhibit_5a"],
    hall: "장기재정전망관",
    sourceCaption: "NABO 장기재정전망 2025~2072 (2025. 2. 21.) · 현행 제도 유지",
    chartNote: "기재부·OECD 전망과 한 선으로 잇지 않음.",
    labeledSeries: [
      {
        key: "debt",
        label: "국가채무비율",
        color: "#f43f5e",
        points: [
          { name: "2025", value: 47.8, display: "47.8%" },
          { name: "2030", value: 55.3, display: "55.3%" },
          { name: "2040", value: 80.3, display: "80.3%" },
          { name: "2050", value: 107.7, display: "107.7%" },
          { name: "2060", value: 136.0, display: "136.0%" },
          { name: "2072", value: 173.0, display: "173.0%" },
        ],
      },
    ],
  },
  {
    id: "nabo_table",
    kind: "table_crop",
    src: "/exhibits/p009-nabo-table.png",
    title: "NABO 장기재정전망 핵심 지표 표",
    page: 9,
    exhibitIds: ["exhibit_5a"],
    hall: "장기재정전망관",
    sourceCaption: "NABO 장기재정전망 2025~2072 (2025. 2. 21.) · 현행 제도 유지",
  },
  {
    id: "moef_scenarios",
    kind: "labeled_chart",
    src: "/exhibits/p010-moef-scenarios.jpg",
    title: "기재부 제3차 장기재정전망 시나리오별 2065년 국가채무비율",
    page: 10,
    exhibitIds: ["exhibit_5d"],
    hall: "장기재정전망관",
    sourceCaption: "기획재정부, 제3차 장기재정전망(2025~2065) (2025. 9. 3.)",
    labeledSeries: [
      {
        key: "s",
        label: "2065 국가채무비율",
        color: "#f43f5e",
        points: [
          { name: "성장대응", value: 133.0, display: "133.0%" },
          { name: "인구대응", value: 144.7, display: "144.7%" },
          { name: "기준", value: 156.3, display: "156.3%" },
          { name: "인구악화", value: 169.6, display: "169.6%" },
          { name: "성장악화", value: 173.4, display: "173.4%" },
        ],
      },
    ],
  },
  {
    id: "moef_table",
    kind: "table_crop",
    src: "/exhibits/p010-moef-table.png",
    title: "기재부 제3차 장기재정전망 시나리오 표",
    page: 10,
    exhibitIds: ["exhibit_5d"],
    hall: "장기재정전망관",
    sourceCaption: "기획재정부, 제3차 장기재정전망(2025~2065) (2025. 9. 3.)",
  },
  {
    id: "outlook_table",
    kind: "table_crop",
    src: "/exhibits/p073-outlook-table.png",
    title: "장기재정전망 핵심 지표 표 (73쪽)",
    page: 73,
    exhibitIds: ["exhibit_5a", "exhibit_2a"],
    hall: "장기재정전망관",
    sourceCaption:
      "기획재정부 장기재정전망 표. 국민연금 소진을 2071년(2025년 개정 반영, 보건복지부)으로 적음.",
  },
  {
    id: "fiscal_rule_table",
    kind: "table_crop",
    src: "/exhibits/p081-fiscal-rule-tables.png",
    title: "한국형 재정준칙안·주요국 비교 표",
    page: 81,
    exhibitIds: ["exhibit_5c"],
    hall: "장기재정전망관",
    sourceCaption: "기획재정부 재정준칙 카드뉴스 (2023. 1. 31.)",
  },
  {
    id: "cbam_share",
    kind: "labeled_chart",
    src: "/exhibits/p045-cbam-share.jpg",
    title: "CBAM 대상 품목별 한국의 대EU 수출 비중",
    page: 45,
    exhibitIds: ["exhibit_3c"],
    hall: "환경관",
    sourceCaption: "국가기후위기대응위원회 등, EU CBAM 도입 자료",
    labeledSeries: [
      {
        key: "share",
        label: "대상 수출 비중",
        color: "#1e3a8a",
        points: [
          { name: "철강", value: 89.3, display: "89.3%" },
          { name: "알루미늄", value: 10.6, display: "10.6%" },
          { name: "기타", value: 0.1, display: "0.1%" },
        ],
      },
    ],
  },
  {
    id: "pyi_cases",
    kind: "labeled_chart",
    src: "/exhibits/p089-pyi-cases.jpg",
    title: "PERI-Young 지수(PYI) 변화 시뮬레이션",
    page: 89,
    exhibitIds: ["exhibit_6b"],
    hall: "나라살림게임",
    sourceCaption: "네이트뉴스 나라살림게임 소개(2025. 3. 3.) 인근 차트",
    chartNote:
      "막대 값은 31.8 / 33.4 / 28.5%p입니다. 교육 게임 소개 자료입니다.",
    labeledSeries: [
      {
        key: "pyi",
        label: "PYI(%p)",
        color: "#22d3ee",
        points: [
          { name: "2022년 기준", value: 31.8, display: "31.8%p" },
          { name: "복지 +10% (30년 뒤)", value: 33.4, display: "33.4%p" },
          { name: "교부금 −10% 병행 (30년 뒤)", value: 28.5, display: "28.5%p" },
        ],
      },
    ],
  },
  {
    id: "game_cases",
    kind: "labeled_chart",
    src: "/exhibits/p090-game-cases.jpg",
    title: "지출조정·증세 단계별 국가채무비율(2055년)",
    page: 90,
    exhibitIds: ["exhibit_6a"],
    hall: "나라살림게임",
    sourceCaption: "중앙일보 기자 플레이 보도 (2025. 3. 24.)",
    chartNote:
      "보도 차트에 현행 추세 202%가 표기되어 있습니다. PERI 사전 설명의 180%와는 다른 출처입니다.",
    labeledSeries: [
      {
        key: "debt",
        label: "2055 국가채무비율",
        color: "#22d3ee",
        points: [
          { name: "현행 추세", value: 202, display: "202%" },
          { name: "방어 ①", value: 161.5, display: "161.5%" },
          { name: "방어 ②", value: 135.1, display: "135.1%" },
        ],
      },
    ],
  },
];

export function visualsForExhibit(exhibitId: string): VisualAsset[] {
  return VISUAL_ASSETS.filter((item) => item.exhibitIds.includes(exhibitId));
}

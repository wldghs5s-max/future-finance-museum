import { cite } from "../citations";
import { ex, m, t } from "./build";

const hall = "HALL 03: 환경 문제 전시장";

export const hall03Exhibits = {
  exhibit_3d: ex({
    id: "exhibit_3d",
    code: "EXHIBIT 3-D",
    hallName: hall,
    titleKo: "온실가스, 줄어든 뒤의 숙제",
    titleEn: "GREENHOUSE GAS, THE WORK AHEAD",
    category: "배출량",
    coreQuestion: "공기를 덜 더럽히면 산업과 살림은 어떻게 달라질까요?",
    summary:
      "국가 온실가스 차트에는 2018년 742.3백만톤, 2023년 624.2백만톤, 2024년 691.6백만톤이 찍혀 있습니다. 정점 이후에도 배출량은 남아 있고, 감축 목표는 전력과 산업에 다른 무게로 얹힙니다.",
    kind: "institution_outlook",
    featuredMetrics: [
      m("2018년", "742.3백만톤", "국가 차트 표기", "정점으로 소개됨", "institution_outlook", { citationId: "korea_ghg_2024" }),
      m("2023년", "624.2백만톤", "전년 대비 −4.4%", "6억 2,420만 t", "institution_outlook", { citationId: "korea_ghg_2024" }),
      m("2024년", "691.6백만톤", "국가 차트 표기", "6억 9,158만 t", "institution_outlook", { highlight: true, citationId: "korea_ghg_2024" }),
    ],
    causes: ["산업과 전력이 배출의 큰 몫을 차지합니다."],
    responses: ["감축 목표와 기후 예산은 옆 전시에서 이어집니다."],
    tradeoffs: [],
    sources: cite("korea_ghg_2024"),
    relatedTerms: ["NDC", "K-ETS"],
  }),

  exhibit_3e: ex({
    id: "exhibit_3e",
    code: "EXHIBIT 3-E",
    hallName: hall,
    titleKo: "2030·2035 감축 목표",
    titleEn: "NDC TARGETS",
    category: "감축",
    coreQuestion: "감축 목표는 어느 부문에 더 많이 얹히는가?",
    summary:
      "2030년 목표는 2018년 대비 40%, 2035 NDC는 53~61%입니다. 전력 69%, 산업 24%가 부문 목표로 인용됩니다.",
    kind: "institution_outlook",
    featuredMetrics: [
      m("2030 NDC", "2018 대비 40%", "국가 목표", "", "institution_outlook", { highlight: true }),
      m("2035 NDC", "53~61%", "COP30 관련 서술", "기업 규제 하한 53%", "institution_outlook"),
      m("부문 목표", "전력 69% / 산업 24%", "국가 감축 목표", "산업 부담과 연결", "institution_outlook"),
    ],
    causes: ["잔여 감축량 약 2억 200만 t이 과제로 남습니다."],
    responses: ["감축과 적응은 같은 전시에서 구분해서 봅니다."],
    tradeoffs: [
      t("전력 vs 산업 감축", "전력 감축 폭이 큽니다.", "산업 24%는 무역·고용과 직접 맞닿습니다."),
    ],
    sources: cite("korea_ghg_2024"),
    relatedTerms: ["NDC"],
  }),

  exhibit_3f: ex({
    id: "exhibit_3f",
    code: "EXHIBIT 3-F",
    hallName: hall,
    titleKo: "기후 재정과 편성률",
    titleEn: "CLIMATE BUDGET EXECUTION",
    category: "기후 재정",
    coreQuestion: "계획 금액과 실제 편성은 얼마나 떨어져 있는가?",
    summary:
      "기후대응기금 2026 운용 규모는 2조 9,057억 원입니다. 2023~2027 탄소중립·녹색 89.9조 계획 대비 2025 편성률은 74.2%입니다.",
    kind: "institution_outlook",
    featuredMetrics: [
      m("기금 2026", "2조 9,057억", "전년 +10.8%", "2022년 설치", "institution_outlook", { citationId: "climate_fund" }),
      m("5개년 편성률", "74.2%", "89.9조 계획 대비 2025", "명목 기후 재정 약 35조, 관련성 낮은 사업 혼재 지적", "institution_outlook", { highlight: true, citationId: "climate_fund" }),
    ],
    causes: ["기후 예산 안에 관련성이 낮은 사업이 섞여 있다는 지적이 있습니다."],
    responses: ["집행·성과를 계획 총액과 분리해 보라는 취지입니다."],
    tradeoffs: [
      t("총액 확대 vs 사업 정비", "예산 규모는 의지를 보여 줍니다.", "관련 낮은 사업이 섞이면 실효가 흐려집니다."),
    ],
    sources: cite("climate_fund"),
    relatedTerms: ["기후대응기금"],
  }),

  exhibit_3a: ex({
    id: "exhibit_3a",
    code: "EXHIBIT 3-A",
    hallName: hall,
    titleKo: "기후 전망과 재난 피해",
    titleEn: "CLIMATE OUTLOOK AND DISASTER COST",
    category: "적응 배경",
    coreQuestion: "감축과 별개로, 이미 발생하는 피해는 얼마인가?",
    summary:
      "기후를 반영한 재난 피해는 최대 연 11조 4,794억 원(2019년 가격)으로 추정됩니다. 2002년 루사 피해 7조 9,891억 원의 1.4배입니다.",
    kind: "institution_outlook",
    featuredMetrics: [
      m("재난 피해 최대", "연 11.5조", "11조 4,794억 원, 2019년 가격", "NABO 2020. 3.", "institution_outlook", { highlight: true }),
      m("폭염일", "8.8→24.2~79.5일", "2081~2100 시나리오 범위", "기온 +2.3~+7.0℃", "institution_outlook"),
    ],
    causes: ["한반도 온난화와 해양 고수온 피해가 인접 쪽에 적혀 있습니다."],
    responses: ["적응 재정은 감축 목표와 다른 예산 논리입니다."],
    tradeoffs: [],
    sources: cite("adapt_plan"),
    relatedTerms: ["적응 재정"],
  }),

  exhibit_3b: ex({
    id: "exhibit_3b",
    code: "EXHIBIT 3-B",
    hallName: hall,
    titleKo: "AI 전력과 무탄소 발전",
    titleEn: "AI POWER AND CARBON-FREE MIX",
    category: "전력",
    coreQuestion: "AI·반도체 수요와 무탄소 목표는 어떻게 연결되는가?",
    summary:
      "제11차 전력수급기본계획은 AI·반도체 수요로 연 1.8%, 2038년 129.3GW를 전망합니다. 무탄소 발전 비율은 2023년 39.1% → 2030년 53.0% → 2038년 70.7%입니다.",
    kind: "institution_outlook",
    featuredMetrics: [
      m("2038 수요", "129.3GW", "연 1.8% 증가", "11차 전기본 2024~2038", "institution_outlook", { citationId: "motie_11th" }),
      m("무탄소 2038", "70.7%", "2023 39.1% → 2030 53.0%", "원전 31.8/35.2%, 재생 18.8/29.2%(2030/2038)", "institution_outlook", { highlight: true, citationId: "motie_11th" }),
    ],
    causes: ["전력 수요 증가가 감축 목표와 동시에 걸립니다."],
    responses: ["원전·재생의 비중 조합이 표로 제시됩니다."],
    tradeoffs: [
      t("수요 증가 vs 감축", "AI·반도체는 성장 동력으로 제시됩니다.", "전력·냉각·입지가 탄소 목표와 경합합니다."),
    ],
    sources: cite("motie_11th"),
    relatedTerms: ["무탄소 발전"],
  }),

  exhibit_3c: ex({
    id: "exhibit_3c",
    code: "EXHIBIT 3-C",
    hallName: hall,
    titleKo: "CBAM과 산업 대응 비용",
    titleEn: "CBAM AND COMPLIANCE COST",
    category: "무역·산업",
    coreQuestion: "국경 탄소 가격은 누구에게 청구서가 되는가?",
    summary:
      "대EU 수출 681억 달러 중 CBAM 대상은 51억 달러(7.5%)입니다. 2026~2050년 연평균 약 3,000억 원이 대응 비용으로 추정됩니다.",
    kind: "institution_outlook",
    featuredMetrics: [
      m("CBAM 대상 수출", "51억$", "대EU 681억$의 7.5%", "철강 89.3%, 알루미늄 10.6%", "source_body", { highlight: true, citationId: "cbam" }),
      m("25년 연평균 비용", "약 3,000억", "2026~2050", "배출집약도 ±5% → 비용 ∓10.5~11.0%", "institution_outlook", { citationId: "cbam" }),
    ],
    causes: ["2026년부터 EU CBAM 신고·인증이 시작됩니다."],
    responses: ["배출 집약도를 낮추는 투자가 비용 민감도로 제시됩니다."],
    tradeoffs: [
      t("수출 경쟁력 vs 감축 투자", "집약도 개선은 청구서를 줄입니다.", "단기 설비 전환 비용이 큽니다."),
    ],
    sources: cite("cbam"),
    relatedTerms: ["CBAM", "K-ETS"],
  }),

  exhibit_3h: ex({
    id: "exhibit_3h",
    code: "EXHIBIT 3-H",
    hallName: hall,
    titleKo: "배출권거래제와 적응 재정",
    titleEn: "K-ETS AND ADAPTATION FINANCE",
    category: "감축·적응",
    coreQuestion: "가격으로 줄이는 것과 피해에 적응하는 재정은 같은가?",
    summary:
      "K-ETS 제4차 계획(2026~2030)은 772개 업체, 할당 23억 6,299만 톤입니다. 발전 유상할당은 2026년 15%에서 2030년 50%로 늘어납니다. 적응은 제4차 국가 기후위기 적응 대책에서 국토·복지·농수산·보건 재정 과제로 적힙니다.",
    kind: "source_body",
    featuredMetrics: [
      m("제4차 할당", "23.6억 t", "772개 업체, 2026~2030", "K-ETS 2015~", "source_body", { highlight: true, citationId: "kets_4th" }),
      m("발전 유상할당", "15%→50%", "2026→2030", "산업 재정 부담 완화 방안이 과제로 남음", "source_body", { citationId: "kets_4th" }),
    ],
    causes: ["유상할당 확대는 탄소 가격을 높이지만 산업 부담을 키웁니다."],
    responses: [
      "감축(배출 가격·NDC)과 적응(재난·취약계층)을 한 재정계획 안에서 구분해 설계하라고 합니다.",
    ],
    tradeoffs: [
      t("유상할당 확대 vs 산업 부담", "감축 유인이 커집니다.", "전력·제조 원가와 일자리에 전가될 수 있습니다."),
      t("감축 vs 적응", "감축은 장기 피해를 줄입니다.", "이미 발생하는 재난에는 적응 예산이 따로 필요합니다."),
    ],
    sources: cite("kets_4th", "adapt_plan"),
    relatedTerms: ["K-ETS", "적응 재정", "기후대응기금"],
  }),

  exhibit_corridor_03: ex({
    id: "exhibit_corridor_03",
    code: "CORRIDOR 03",
    hallName: "AI 회랑",
    titleKo: "전기가 계산으로 가는 길",
    titleEn: "FROM POWER TO SOVEREIGN AI",
    category: "회랑",
    coreQuestion: "전기가 부족하면 AI 투자 예산은 어디로 가는가?",
    summary:
      "불을 밝히고 기계를 돌리는 전기가 데이터센터와 AI 투자로 이어집니다.",
    kind: "source_body",
    featuredMetrics: [],
    causes: [],
    responses: [],
    tradeoffs: [],
    sources: cite("motie_11th", "ai_action"),
    relatedTerms: ["소버린 AI"],
  }),
};

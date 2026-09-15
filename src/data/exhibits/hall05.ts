import { cite } from "../citations";
import { ex, m, t } from "./build";

const hall = "HALL 05: 장기재정전망 전시장";

export const hall05Exhibits = {
  exhibit_5a: ex({
    id: "exhibit_5a",
    code: "EXHIBIT 5-A",
    hallName: hall,
    titleKo: "기관별 전망 — 한 선으로 잇지 않기",
    titleEn: "SEPARATE FORECASTS",
    category: "전망 비교",
    coreQuestion: "173%, 156.3%, 154.0%는 같은 길의 다른 지점인가?",
    summary:
      "아닙니다. 목표 연도, 채무 정의, 시나리오가 다릅니다. 기재부 2065 국가채무비율, NABO 2072 국가채무, OECD 2060 일반정부부채(D2)를 하나의 연속선으로 연결하지 않습니다.",
    kind: "institution_outlook",
    featuredMetrics: [
      m("NABO 2072", "173.0%", "현행 법·제도 유지, 국가채무/GDP", "2025년 47.8%에서 상승하는 경로로 서술", "institution_outlook", { highlight: true, citationId: "nabo_lt_2025" }),
      m("기재부 2065 기준", "156.3%", "낙관 133.0% ~ 비관 173.4%", "제3차 장기재정전망, 국가채무비율", "institution_outlook", { highlight: true, citationId: "moef_3rd" }),
      m("OECD 2060 D2", "154.0%", "구조개혁 시 64.5%, 격차 약 90%p", "일반정부부채", "institution_outlook", { citationId: "oecd_korea_2024" }),
      m("단기 기재부", "2026 51.6% / 2029 58.0%", "국가채무비율", "2072 경로와 잇지 않음", "institution_outlook", { citationId: "moef_3rd" }),
    ],
    causes: [
      "2020년 전망의 2060년 79.7%와 2025년 전망의 2065년 156.3%는 전제와 시점이 다른 재추계입니다.",
    ],
    responses: ["표로 나란히 두고 기관·연도·정의를 읽습니다."],
    tradeoffs: [],
    comparison: {
      caption: "서로 다른 전망입니다. 연결하지 않습니다.",
      headers: ["기관", "목표연도", "지표", "핵심 값"],
      rows: [
        { label: "기재부", values: ["2065", "국가채무비율", "133.0~173.4 (기준 156.3)"] },
        { label: "NABO", values: ["2072", "국가채무/GDP", "173.0, 제도 유지"] },
        { label: "OECD", values: ["2060", "D2", "154.0 / 개혁 64.5"] },
      ],
    },
    sources: cite("moef_3rd", "nabo_lt_2025", "oecd_korea_2024"),
    relatedTerms: ["국가채무", "일반정부부채", "재정 지속가능성"],
  }),

  exhibit_5b: ex({
    id: "exhibit_5b",
    code: "EXHIBIT 5-B",
    hallName: hall,
    titleKo: "수입과 지출이 벌어지는 구조",
    titleEn: "REVENUE VS EXPENDITURE GAP",
    category: "수지",
    coreQuestion: "의무지출이 커지면 재량 여력은 어디로 가는가?",
    summary:
      "NABO는 통합수지가 2025년 −1.0에서 2072년 −11.6으로 벌어진다고 합니다. 의무지출은 2072년 총지출의 64.3%(GDP 대비 21.6%)까지 늘어난다는 서술이 용어 설명에 등장합니다.",
    kind: "institution_outlook",
    featuredMetrics: [
      m("통합수지", "−1.0→−11.6", "2025→2072, NABO", "현행 제도 유지", "institution_outlook", { citationId: "nabo_lt_2025" }),
    ],
    causes: ["인구·복지 압력이 지출을 자동으로 올립니다."],
    responses: ["구조개혁 여부에 따라 OECD D2 경로가 크게 달라집니다."],
    tradeoffs: [
      t("의무 보장 vs 재량 투자", "연금·교부금은 예측 가능성을 줍니다.", "AI·기후·국방 같은 재량 지출이 밀립니다."),
    ],
    sources: cite("nabo_lt_2025"),
    relatedTerms: ["의무지출", "재량지출", "관리재정수지"],
  }),

  exhibit_5c: ex({
    id: "exhibit_5c",
    code: "EXHIBIT 5-C",
    hallName: hall,
    titleKo: "재정준칙의 필요와 제약",
    titleEn: "FISCAL RULES AND CONSTRAINTS",
    category: "재정준칙",
    coreQuestion: "준칙은 안전장치인가, 경기 대응의 족쇄인가?",
    summary:
      "재정준칙 도입국은 105~106개국, OECD 38개국 중 미도입은 한국과 튀르키예로 적힙니다. 2022년 60-3 원칙(채무 60% 이하 시 적자 3%, 초과 시 2%)은 4년 넘게 법제화되지 못했습니다.",
    kind: "source_body",
    featuredMetrics: [
      m("60-3 원칙", "적자 3% / 2%", "채무비율 60% 기준", "법제화 미완", "source_body", { highlight: true, citationId: "fiscal_rule" }),
      m("OECD 미도입", "한국·튀르키예", "38개국 중", "", "source_body", { citationId: "fiscal_rule" }),
    ],
    causes: ["장기 경로가 가팔라지면서 사전 안전장치 요구가 커집니다."],
    responses: [
      "김태일은 미리 안전장치를 두자고 하고, 나원준은 경기 위축 때 건전성 집착이 역효과를 낼 수 있다고 합니다.",
    ],
    tradeoffs: [
      t("준칙 vs 경기 대응", "호황 때 방만을 줄일 수 있습니다.", "불황 때 지출을 줄이면 경기가 더 움츠러들 수 있습니다."),
    ],
    sources: cite("fiscal_rule"),
    relatedTerms: ["재정준칙", "재정 건전성"],
  }),

  exhibit_5d: ex({
    id: "exhibit_5d",
    code: "EXHIBIT 5-D",
    hallName: hall,
    titleKo: "기재부 5 시나리오",
    titleEn: "MOEF FIVE SCENARIOS",
    category: "시나리오",
    coreQuestion: "인구와 성장 가정이 바뀌면 2065년은 얼마나 갈라지는가?",
    summary:
      "기재부 2065 국가채무비율은 ①156.3% ②144.7% ③169.6% ④133.0% ⑤173.4%입니다. 인구 대응 144.7%와 인구 악화 169.6%의 격차는 약 25%p입니다.",
    kind: "institution_outlook",
    featuredMetrics: [
      m("기준", "156.3%", "시나리오 ①", "2065 국가채무비율", "institution_outlook", { citationId: "moef_3rd" }),
      m("낙관~비관", "133.0~173.4%", "④~⑤", "인구악화 시 2045년 100% 초과 서술", "institution_outlook", { highlight: true, citationId: "moef_3rd" }),
      m("인구 대응 vs 악화", "144.7 vs 169.6", "약 25%p", "", "institution_outlook", { citationId: "moef_3rd" }),
    ],
    causes: ["합계출산율 등 인구 가정이 경로를 가릅니다."],
    responses: ["지출 절감 민감도(2065 138.7%→105.4%)는 별도 인용으로 둡니다."],
    tradeoffs: [],
    sources: cite("moef_3rd"),
    relatedTerms: ["국가채무"],
  }),

  exhibit_5e: ex({
    id: "exhibit_5e",
    code: "EXHIBIT 5-E",
    hallName: hall,
    titleKo: "법정 교부금 자동 배분",
    titleEn: "STATUTORY GRANTS",
    category: "의무지출",
    coreQuestion: "내국세가 늘면 지방·교육 교부금은 왜 같이 늘까?",
    summary:
      "지방교부세는 내국세의 19.24%, 지방교육재정교부금은 20.79%가 법적으로 자동 배분됩니다. 학령인구 감소와 자동 증가가 어긋난다는 문제 제기가 게임·복지 논의로 이어집니다.",
    kind: "source_body",
    featuredMetrics: [
      m("지방교부세", "내국세 19.24%", "법정 연동", "", "source_body", { highlight: true }),
      m("교육교부금", "내국세 20.79%", "법정 연동", "학령인구 감소와 긴장", "source_body", { highlight: true }),
    ],
    causes: ["세입이 늘수록 의무 이전도 늘습니다."],
    responses: ["나라살림게임 언론 사례는 교부금 10% 조정을 실험합니다. 공식 처방이 아닙니다."],
    tradeoffs: [
      t("자동 보장 vs 구조조정", "지방·교육 재원의 예측 가능성이 큽니다.", "학령·인구 변화와 어긋나면 비효율이 고정됩니다."),
    ],
    sources: cite("peri_glossary", "press_joongang"),
    relatedTerms: ["지방교부세", "지방교육재정교부금", "내국세"],
  }),

  exhibit_5f: ex({
    id: "exhibit_5f",
    code: "EXHIBIT 5-F",
    hallName: hall,
    titleKo: "D1·D2와 국제비교",
    titleEn: "D1 VS D2 AND IMF COMPARISON",
    category: "부채 정의",
    coreQuestion: "‘한국의 빚이 낮다’는 말은 어떤 지표의 이야기인가?",
    summary:
      "국가채무(D1)는 중앙·지방 채무 중심입니다. 일반정부부채(D2)는 비영리 공공기관을 포함합니다. IMF 인용 2026년 한국 일반정부 총부채는 GDP 54.4%, 순부채 10.3%입니다. 일본 204.4%는 국제비교이지 한국 전망이 아닙니다.",
    kind: "institution_outlook",
    featuredMetrics: [
      m("한국 총부채 2026", "54.4%", "IMF, 일반정부", "G20 선진 평균 118.9%", "institution_outlook", { highlight: true, citationId: "imf_fm_2026" }),
      m("한국 순부채", "10.3%", "G20 89.6%", "", "institution_outlook", { citationId: "imf_fm_2026" }),
      m("일본 총부채", "204.4%", "IMF 2026 국제비교", "한국 전망이 아니라 다른 나라 숫자", "institution_outlook", { citationId: "imf_fm_2026" }),
    ],
    causes: ["국내 토론은 D1, 국제비교는 D2를 쓰는 경우가 많습니다."],
    responses: ["지표를 밝히지 않은 채 ‘낮다/높다’를 단정하지 않습니다."],
    tradeoffs: [],
    sources: cite("imf_fm_2026", "oecd_korea_2024"),
    relatedTerms: ["국가채무", "일반정부부채"],
  }),

  exhibit_corridor_05: ex({
    id: "exhibit_corridor_05",
    code: "CORRIDOR 05",
    hallName: "시뮬레이션 게이트",
    titleKo: "맡을 도시가 준비되어 있습니다",
    titleEn: "FROM OUTLOOK TO CHOICE",
    category: "회랑",
    coreQuestion: "전망을 읽은 뒤, 직접 선택해 볼 수 있을까?",
    summary:
      "다음 방에서 이 미니어처 도시의 살림을 직접 맡아 봅니다. 여섯 라운드 동안 변화를 확인하는 연습입니다.",
    kind: "peri_game_rule",
    featuredMetrics: [],
    causes: [],
    responses: [],
    tradeoffs: [],
    sources: cite("peri_game", "closing"),
    relatedTerms: ["PERI-Young 지수"],
  }),
};

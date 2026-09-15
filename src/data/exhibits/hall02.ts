import { cite } from "../citations";
import { ex, m, t } from "./build";

const hall = "HALL 02: 복지 및 연금 전시장";

export const hall02Exhibits = {
  exhibit_2d: ex({
    id: "exhibit_2d",
    code: "EXHIBIT 2-D",
    hallName: hall,
    titleKo: "복지지출과 국민부담률",
    titleEn: "WELFARE SPENDING AND TAX BURDEN",
    category: "복지 규모",
    coreQuestion: "지출은 얼마나 늘고, 부담은 어디에 서 있는가?",
    summary:
      "사회복지지출/GDP는 2024년 15.3%에서 2040년 20.5%로 늘어날 전망입니다. 2023년 국민부담률 26.9%는 OECD 33.7%보다 낮습니다.",
    kind: "institution_outlook",
    featuredMetrics: [
      m("복지지출/GDP 2024", "15.3%", "제5차 사회보장 재정추계(안)", "2030 17.2% … 2040 20.5%", "institution_outlook", { highlight: true }),
      m("증가율 비교", "12.3% vs 5.7%", "10년 증가율, 한국 vs OECD", "복지지출이 더 빨리 늘었습니다", "institution_outlook"),
      m("국민부담률 2023", "26.9%", "OECD 33.7%", "부담과 지출을 같이 보라는 취지", "source_body", { citationId: "mohw_socx" }),
      m("공공복지 2021", "337.4조", "GDP 대비 15.2%", "OECD 비교 34/38위 서술", "source_body", { citationId: "mohw_socx" }),
    ],
    causes: ["고령화와 제도 확대가 지출 증가 속도로 나타납니다."],
    responses: ["보장을 늘리는 일과 부담을 나누는 일을 함께 봐야 합니다."],
    tradeoffs: [
      t("보장 확대 vs 부담 인상", "낮은 부담률은 가계 여력을 남깁니다.", "지출 확대를 세금·보험료 없이 유지하기 어렵습니다."),
    ],
    sources: cite("mohw_socx", "ssc_3rd"),
    relatedTerms: ["국민부담률", "의무지출"],
  }),

  exhibit_2f: ex({
    id: "exhibit_2f",
    code: "EXHIBIT 2-F",
    hallName: hall,
    titleKo: "2025 개혁의 크레딧과 지급보장",
    titleEn: "2025 REFORM CREDITS",
    category: "연금 개혁",
    coreQuestion: "2025년 개혁은 무엇을 바꾸고 무엇을 남겼는가?",
    summary:
      "보험료율 9%→13%, 명목 소득대체율 40%→43%의 ‘더 내고 더 받는’ 3차 개혁입니다. 군복무 크레딧 12개월, 출산 크레딧 확대, 국가 지급보장이 법에 명시됐습니다.",
    kind: "source_body",
    featuredMetrics: [
      m("보험료율", "9%→13%", "2025. 3. 개혁", "18년 만의 제도 개정으로 서술", "source_body", { highlight: true, citationId: "nabo_pension_reform" }),
      m("명목 대체율", "40%→43%", "가입기간 등에 따라 실질은 OECD 미달 가능", "35쪽", "source_body", { citationId: "kipf_pension_2509" }),
    ],
    causes: ["세대 간 부담·수급 형평성 쟁점은 남는다고 합니다."],
    responses: ["크레딧 확대는 군복무·출산 공백을 가입기간으로 보전합니다."],
    tradeoffs: [
      t("더 내고 더 받기", "명목 급여와 가입 공백 보전이 커집니다.", "보험료 부담과 미적립부채 논점은 남습니다."),
    ],
    sources: cite("nabo_pension_reform", "kipf_pension_2509"),
    relatedTerms: ["보험료율", "소득대체율", "국가 지급보장"],
  }),

  exhibit_2e: ex({
    id: "exhibit_2e",
    code: "EXHIBIT 2-E",
    hallName: hall,
    titleKo: "통합돌봄과 건보 재정",
    titleEn: "INTEGRATED CARE AND HEALTH INSURANCE",
    category: "돌봄·건강보험",
    coreQuestion: "돌봄을 사회화하면 가계와 재정은 어떻게 나뉘는가?",
    summary:
      "간호·간병통합의 추가 건보 재정은 2024년 최소 1.07조~최대 1.58조 원으로 추정됩니다. 건보료율은 2024년 7.09%, 준비금은 2029년경 소진 전망이 인용됩니다.",
    kind: "institution_outlook",
    featuredMetrics: [
      m("간호·간병 추가 재정", "1.07~1.58조", "2024년", "가족 노동공급 감소를 일부 완화, 완전 상쇄 아님", "institution_outlook", { highlight: true, citationId: "kipf_care" }),
      m("건보료율 2024", "7.09%", "지출 유지 시 12%+ 필요 인용", "준비금 2029경 소진 전망", "institution_outlook"),
    ],
    causes: ["1인가구·고령화로 공적 돌봄 수요가 커집니다."],
    responses: [
      "제3차 사회보장기본계획 수정은 지역사회통합돌봄을 중점 과제로 둡니다.",
      "상병수당은 복지 효과와 도덕적 해이·재정부담이 함께 언급됩니다.",
    ],
    tradeoffs: [
      t("급여 확대 vs 보험료", "가계 돌봄 부담을 덜 수 있습니다.", "보험료 인상은 임금 하락 압력으로 이어질 수 있다는 시뮬레이션이 인용됩니다."),
    ],
    sources: cite("kipf_care", "ssc_3rd"),
    relatedTerms: ["건강보험", "장기요양", "지역사회통합돌봄"],
  }),

  exhibit_2a: ex({
    id: "exhibit_2a",
    code: "EXHIBIT 2-A",
    hallName: hall,
    titleKo: "기금 소진 시점 — 전망을 나누어 읽기",
    titleEn: "DEPLETION YEARS, THREE OUTLOOKS",
    category: "연금 전망",
    coreQuestion: "‘몇 년에 소진되는가’는 어떤 전제의 숫자인가?",
    summary:
      "같은 ‘소진 연도’라도 현행법 전망, 개혁 반영 전망, 운용실적 반영 전망이 다릅니다. 임의로 한 해로 통일하지 않습니다.",
    kind: "institution_outlook",
    featuredMetrics: [
      m("NABO 현행법", "2057 소진", "적자 전환 2040(정점 2039)", "2025~2072 전망, 개혁 전 맥락", "institution_outlook", { citationId: "nabo_lt_2025" }),
      m("2025 개혁 효과", "2057→2065", "적자 2041→2048 (+7년), 소진 +8년", "NABO 개정 분석 2025. 6.", "institution_outlook", { highlight: true, citationId: "nabo_pension_reform" }),
      m("2026 수정전망", "2069 소진", "적자 전환 2050", "운용실적 반영, 2025 전망 대비 소진 +4년", "institution_outlook", { highlight: true, citationId: "nabo_focus_165" }),
      m("수익률 민감도", "+1%p", "적자 +10년, 소진 +12년", "평균 수익률 4.6% 가정", "institution_outlook", { citationId: "nabo_focus_165" }),
    ],
    causes: [
      "2025년 운용 수익률 18.82%, 적립금 2025말 1,458조·2026. 3. 1,526조가 수정전망에 반영됐습니다.",
      "소진 연도는 개혁을 넣었는지, 운용 실적을 반영했는지에 따라 달라집니다.",
    ],
    responses: [
      "자동안정화장치 도입 시 충당부채/GDP가 더 낮아지는 추정치(79.2%)가 제시됩니다.",
    ],
    tradeoffs: [
      t("운용수익 vs 제도 변수", "수익률 개선은 소진을 늦춥니다.", "보험료·급여·인구 가정이 바뀌면 시점도 바뀝니다."),
    ],
    comparison: {
      caption: "소진 연도는 전제별로 병기합니다.",
      headers: ["전제", "적자 전환", "기금 소진"],
      rows: [
        { label: "NABO 현행법", values: ["2040", "2057"] },
        { label: "2025 개혁 효과", values: ["2048", "2065"] },
        { label: "2026 운용실적 반영", values: ["2050", "2069"] },
      ],
    },
    sources: cite("nabo_lt_2025", "nabo_pension_reform", "nabo_focus_165"),
    relatedTerms: ["연금재정 안정성", "자동안정화장치", "PERI-Young 지수"],
  }),

  exhibit_2b: ex({
    id: "exhibit_2b",
    code: "EXHIBIT 2-B",
    hallName: hall,
    titleKo: "연금부채와 세대 간 부담",
    titleEn: "PENSION LIABILITY AND GENERATIONS",
    category: "연금 재정",
    coreQuestion: "적립금이 늘어난 뒤에도 남는 부담은 무엇인가?",
    summary:
      "연금부채 6,358조 원, 미적립부채 1,820조 원이 인용됩니다. 수익비가 1보다 크고 생애 순조세 부담이 음(−)인 분석이 함께 제시됩니다.",
    kind: "institution_outlook",
    featuredMetrics: [
      m("연금부채", "6,358조", "NABO 2025. 6.", "미적립부채 1,820조", "institution_outlook", { highlight: true, citationId: "nabo_pension_reform" }),
      m("충당부채/GDP", "100.8%→86.9%", "자동안정화 시 79.2%", "개혁·장치 효과 추정치", "institution_outlook", { citationId: "nabo_pension_reform" }),
    ],
    causes: ["국가 지급보장 명문화와 세대 형평 논의가 같이 등장합니다."],
    responses: ["자동안정화는 정치 주기와 거리를 두는 자동 조정으로 소개됩니다."],
    tradeoffs: [
      t("지급보장 vs 세대 형평", "수급 신뢰를 법에 명시합니다.", "미래 세대 순부담이 커질 수 있다는 분석이 남습니다."),
    ],
    sources: cite("nabo_pension_reform"),
    relatedTerms: ["순조세부담", "세대 간 회계", "자동안정화장치"],
  }),

  exhibit_2c: ex({
    id: "exhibit_2c",
    code: "EXHIBIT 2-C",
    hallName: hall,
    titleKo: "다층 보장과 해외 개혁",
    titleEn: "MULTI-PILLAR AND OVERSEAS REFORM",
    category: "노후소득",
    coreQuestion: "공적연금만으로 노후소득을 채울 수 있는가?",
    summary:
      "기초연금 소득대체율은 약 12%입니다. 퇴직연금을 연금화하면 소득대체율 +16%p로 추정됩니다. OECD 기준 한국 공적 31.2%, 퇴직 포함 31.6%이며 OECD 합계 50.7%입니다.",
    kind: "source_body",
    featuredMetrics: [
      m("기초연금 대체율", "약 12%", "KIPF 연보 25-09", "노인 약 10%는 국민기초생활", "source_body", { citationId: "kipf_pension_2509" }),
      m("퇴직연금 연금화", "+16%p", "추정", "일시금→연금 유인", "institution_outlook", { highlight: true, citationId: "kipf_pension_2509" }),
      m("OECD 대체율", "31.6% vs 50.7%", "한국 퇴직 포함 vs OECD 합계", "공적만 31.2%", "source_body", { citationId: "oecd_pag_2023" }),
    ],
    causes: ["명목 43% 인상 후에도 가입기간 때문에 실질은 OECD에 못 미칠 수 있습니다."],
    responses: [
      "다층체계(기초·퇴직·사적·국민연금), 기금화, 자동안정화, 재정계산 통합이 과제로 제시됩니다.",
      "스웨덴 NDC·자동균형, 독일 sustainability factor가 유럽 개혁 사례로 소개됩니다.",
    ],
    tradeoffs: [
      t("공적 확대 vs 퇴직 연금화", "공적 급여를 올리면 노후 최저선이 뚜렷해집니다.", "보험료·국가 부채 압력이 커집니다. 연금화는 개인 유동성을 줄입니다."),
    ],
    comparison: {
      caption: "해외 사례는 제도 원리 참고입니다.",
      headers: ["국가·장치", "요지", "쪽"],
      rows: [
        { label: "스웨덴", values: ["NDC·자동균형", "33"] },
        { label: "독일", values: ["sustainability factor", "33"] },
      ],
    },
    sources: cite("kipf_pension_2509", "oecd_pag_2023"),
    relatedTerms: ["기초연금", "소득대체율", "자동안정화장치"],
  }),

  exhibit_corridor_02: ex({
    id: "exhibit_corridor_02",
    code: "CORRIDOR 02",
    hallName: "기후 회랑",
    titleKo: "집과 녹지가 만나는 곳",
    titleEn: "FROM WELFARE TO CLIMATE FINANCE",
    category: "회랑",
    coreQuestion: "의무지출이 커질 때 기후 대응 예산은 어디서 오는가?",
    summary:
      "집이 있고 몸이 편해야 공원이 의미가 됩니다. 돌봄에 쓰는 돈과 기후 대응은 같은 살림에서 만납니다.",
    kind: "source_body",
    featuredMetrics: [],
    causes: [],
    responses: [],
    tradeoffs: [],
    sources: cite("closing"),
    relatedTerms: ["기후대응기금", "의무지출"],
  }),
};

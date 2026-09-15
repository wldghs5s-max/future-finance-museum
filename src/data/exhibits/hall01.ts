import { cite } from "../citations";
import { ex, m, t } from "./build";

const hall = "HALL 01: 인구변화 전시장";

export const hall01Exhibits = {
  exhibit_1d: ex({
    id: "exhibit_1d",
    code: "EXHIBIT 1-D",
    hallName: hall,
    titleKo: "2020 인구 데드크로스",
    titleEn: "2020 POPULATION DEAD CROSS",
    category: "인구 전환",
    coreQuestion: "인구 증가 시대는 언제, 어떤 숫자로 끝났는가?",
    summary:
      "2020년 출생아 수는 약 27만 2천 명, 사망자 수는 30만 5천 명으로 총인구가 전년 대비 약 2만 명 감소했습니다. 인구가 보탬이 되던 시대에서, 부양 부담이 커지는 시대로 넘어간 상징적인 해로 읽힙니다.",
    kind: "source_body",
    featuredMetrics: [
      m("2020 출생아", "약 27.2만", "약 27만 2천 명", "통계 작성 이래 최초 30만 선 붕괴", "source_body", { highlight: true, citationId: "nafi_pop_1" }),
      m("2020 사망자", "30.5만", "30만 5천 명", "출생아 수를 처음으로 추월", "source_body", { highlight: true, citationId: "nafi_pop_1" }),
      m("총인구 변화", "약 −2만", "전년 대비 약 2만 명 감소", "건국 이래 첫 자연감소로 서술", "source_body", { citationId: "nafi_pop_1" }),
    ],
    causes: [
      "저출산과 사망 증가가 겹치며 자연감소가 시작됐습니다.",
      "숫자만의 변화가 아닙니다. 일자리, 지역, 나라살림, 사회보장이 한꺼번에 흔들릴 수 있습니다.",
    ],
    responses: [
      "전시는 인구감소를 일시 위기가 아닌 축소사회(뉴노멀)로 받아들이고 시스템을 재설계하자는 문제의식을 따릅니다.",
    ],
    tradeoffs: [
      t("양적 성장 vs 질적 지속", "성장 전제 제도를 유지하면 익숙합니다.", "인구감소·초고령 현실과 어긋납니다."),
    ],
    sources: cite("nafi_pop_1"),
    relatedTerms: ["노년부양비", "학령인구"],
  }),

  exhibit_1a: ex({
    id: "exhibit_1a",
    code: "EXHIBIT 1-A",
    hallName: hall,
    titleKo: "2072년, 일할 사람과 부양 부담",
    titleEn: "WHO WORKS, WHO IS SUPPORTED",
    category: "인구통계",
    coreQuestion: "일하는 사람이 줄면 누가 더 많이 부양하게 될까요?",
    summary:
      "총인구는 2024년 5,175만 명에서 2072년 3,622만 명으로 줄어 1977년 수준으로 돌아간다고 합니다. 15~64세 인구는 2022년 3,674만 명에서 2072년 1,658만 명으로 줄고, 생산연령 100명당 고령자는 2024년 27.4명에서 2072년 104.2명으로 늘어날 전망입니다.",
    kind: "institution_outlook",
    featuredMetrics: [
      m("총인구 2024→2072", "5,175만→3,622만", "약 30% 감소, 1977년 수준", "장래인구추계", "institution_outlook", { highlight: true, citationId: "kostat_2022_2072" }),
      m("15~64세 인구", "3,674만→1,658만", "2022년 → 2072년", "일할 세대의 규모", "institution_outlook", { highlight: true, citationId: "kostat_2022_2072" }),
      m("노년부양비", "27.4→104.2", "2024년 27.4명 → 2072년 104.2명", "생산연령 100명당 고령인구", "institution_outlook", { highlight: true, citationId: "kostat_2022_2072" }),
      m("고령인구 비율", "17.4%→47.7%", "2022년 → 2072년", "65세 이상", "institution_outlook", { citationId: "kostat_2022_2072" }),
    ],
    causes: [
      "저출산과 장수화가 동시에 진행되며 피라미드가 역전됩니다.",
      "학령인구(6~21세)는 2022년 750만 명에서 2040년까지 337만 명이 줄어들 전망입니다.",
    ],
    responses: [
      "연금·건강보험처럼 세대가 서로를 떠받치는 제도와, 줄어드는 학교에 맞춘 재설계가 과제로 남습니다.",
    ],
    tradeoffs: [
      t("전국 평균 vs 지역", "평균 지표로 전체 흐름을 볼 수 있습니다.", "시군구 단위에서는 이미 초고령 지역사회가 진행 중입니다."),
    ],
    comparison: {
      caption:
        "2072년 15~64세 비율은 본문 45.8%(2022년 71.1%에서), 표는 47.6%(국회예산정책처)로 다르게 적혀 있어 한 줄로 비교하지 않습니다. 이 전시는 사람 수와 부양비로 변화를 봅니다.",
      headers: ["항목", "값", "기간"],
      rows: [
        { label: "15~64세 인구", values: ["3,674만 → 1,658만", "2022→2072"] },
        { label: "노년부양비", values: ["27.4명 → 104.2명", "2024→2072"] },
        { label: "총인구", values: ["5,175만 → 3,622만", "2024→2072"] },
      ],
    },
    sources: cite("kostat_2022_2072", "nafi_pop_1"),
    relatedTerms: ["노년부양비", "학령인구", "GDP"],
  }),

  exhibit_1b: ex({
    id: "exhibit_1b",
    code: "EXHIBIT 1-B",
    hallName: hall,
    titleKo: "초고령사회 25년",
    titleEn: "25 YEARS TO SUPER-AGED",
    category: "고령화 속도",
    coreQuestion: "한국은 얼마나 빨리 초고령사회에 들어섰는가?",
    summary:
      "한국은 고령화사회(65세 이상 7%)에서 초고령사회(20%)로 가는 데 25년(2000→2025)이 걸린 것으로 추산됩니다. 프랑스 154년, 미국 94년, 일본 35년보다 짧습니다.",
    kind: "source_body",
    featuredMetrics: [
      m("한국", "25년", "2000→2025", "2025년 65세 이상 20% 초과로 서술", "source_body", { highlight: true, citationId: "kostat_world_2024" }),
      m("일본", "35년", "국제비교", "", "source_body", { citationId: "kostat_world_2024" }),
      m("미국", "94년", "국제비교", "", "source_body", { citationId: "kostat_world_2024" }),
      m("프랑스", "154년", "국제비교", "", "source_body", { citationId: "kostat_world_2024" }),
    ],
    causes: [
      "세계 고령인구 구성비는 2024년 10.2%에서 2072년 20.3%로 완만히 오르는 반면, 한국은 19.2%에서 47.7%로 급증할 전망입니다.",
    ],
    responses: [
      "속도가 빠른 만큼 연금과 의료를 맞출 시간이 짧습니다.",
    ],
    tradeoffs: [],
    sources: cite("kostat_world_2024"),
    relatedTerms: ["노년부양비"],
  }),

  exhibit_1e: ex({
    id: "exhibit_1e",
    code: "EXHIBIT 1-E",
    hallName: hall,
    titleKo: "합계출산율과 장수화",
    titleEn: "FERTILITY AND LONGEVITY",
    category: "출산율",
    coreQuestion: "출산율과 기대수명은 어떻게 동시에 움직였는가?",
    summary:
      "합계출산율은 1970년 4.53명에서 2024년 0.75명으로 줄었습니다. 2023년 0.72명은 세계 평균 2.25명보다 1.53명 낮고, 2022년 기대수명 82.7세는 세계 평균 72.6세보다 10.1세 높습니다.",
    kind: "source_body",
    featuredMetrics: [
      m("2024 합계출산율", "0.75명", "OECD 평균의 절반에 미치지 못한다고 서술", "세계 최저 수준으로 적음", "source_body", { highlight: true, citationId: "nafi_pop_1" }),
      m("2023 국제비교", "0.72 vs 2.25", "한국 0.72명, 세계 평균 2.25명", "차이 1.53명", "source_body", { citationId: "kostat_world_2024" }),
      m("2072 중위가정", "1.08명", "장래 추계 표", "2025년 0.65명까지 저점 전망이 표에 병기", "institution_outlook", { citationId: "kostat_2022_2072" }),
    ],
    causes: ["저출산과 장수화가 겹치며 부양 구조가 바뀝니다."],
    responses: ["현금 수당만이 아니라 일자리, 주거, 지역 구조를 함께 봐야 합니다."],
    tradeoffs: [],
    sources: cite("nafi_pop_1", "kostat_world_2024", "kostat_2022_2072"),
    relatedTerms: ["학령인구"],
  }),

  exhibit_1f: ex({
    id: "exhibit_1f",
    code: "EXHIBIT 1-F",
    hallName: hall,
    titleKo: "지역 편차와 인프라 재설계",
    titleEn: "REGIONAL GAP AND REDESIGN",
    category: "지역·인프라",
    coreQuestion: "전국 평균 뒤에서 어떤 지역이 먼저 초고령 사회가 되었는가?",
    summary:
      "2024년 시군구 고령비율 격차는 약 4배 이상이며 의성군은 47.5%, 노년부양비 92.1입니다. 2025년 9월 수도권 인구 비중은 51%, 인구감소지역 89곳은 10년 증감 −12.5%입니다.",
    kind: "source_body",
    featuredMetrics: [
      m("의성군 고령비율", "47.5%", "2024년, 전국 최고로 서술", "노년부양비 92.1", "source_body", { highlight: true, citationId: "nafi_pop_1" }),
      m("수도권 인구", "51%", "2025. 9.", "GRDP 수도권 52.3%", "source_body", { citationId: "nafi_region" }),
      m("89개 인구감소지역", "−12.5%", "10년 증감 (전국 −1.1%)", "청년 15.5%, 65세 이상 35%", "source_body", { citationId: "nafi_region" }),
    ],
    causes: [
      "수도권 일극과 지방 고령 편중이 겹칩니다.",
      "학령인구 감소는 교육 인프라 구조조정을 과제로 만듭니다.",
    ],
    responses: [
      "2025년 1월 행정체제 개편안은 광역·시군구 통합과 비수도권 거점을 논의합니다.",
      "국회입법조사처는 특별지방자치단체·광역연합을 거론합니다.",
      "라이프치히·도야마 사례는 옆 전시에서 이어서 봅니다.",
    ],
    tradeoffs: [
      t("거점 집중 vs 전 지역 유지", "집약하면 행정·복지 효율을 지킬 수 있습니다.", "축소 지역의 접근성과 정체성 비용이 남습니다."),
    ],
    sources: cite("nafi_pop_1", "nafi_region"),
    relatedTerms: ["지방교부세", "학령인구"],
  }),

  exhibit_1g: ex({
    id: "exhibit_1g",
    code: "EXHIBIT 1-G",
    hallName: hall,
    titleKo: "1인가구와 돌봄 공백",
    titleEn: "SINGLE HOUSEHOLDS AND CARE GAP",
    category: "가구·돌봄",
    coreQuestion: "가족이 줄어들면 누가 돌보는가?",
    summary:
      "1인가구는 2015년 520.3만(27.2%)에서 2024년 804.5만(36.1%)으로 늘었고 2052년 41.3%로 전망됩니다. 1인가구 내 50세 이상은 2023년 51.5%에서 2072년 77.1%로 높아집니다.",
    kind: "source_body",
    featuredMetrics: [
      m("1인가구 2024", "804.5만", "가구 중 36.1%", "2015년 520.3만·27.2%에서 +54.6%", "source_body", { highlight: true, citationId: "nafi_household" }),
      m("2052 전망", "41.3%", "1인가구 비율", "공적 돌봄 의존 구조화와 연결", "institution_outlook", { citationId: "nafi_household" }),
      m("60세+ 1인 소득", "73%", "월소득 200만 원 이하", "평균 가처분소득 2,348만 원(다인가구의 58%)", "source_body", { citationId: "nafi_household" }),
      m("간호·간병 추가 재정", "1.07~1.58조", "2024년 건보 추가 재정", "입원 시 가족 노동공급 감소", "institution_outlook", { citationId: "kipf_care" }),
    ],
    causes: [
      "배우자 사망 등이 1인가구 형성 이유로 제시됩니다.",
      "부양 가족 없는 고령 1인가구 증가는 공적 돌봄 의존을 구조적으로 높입니다.",
    ],
    responses: [
      "아픈 정도와 돌봄 필요에 따라 서비스를 나누고, 주거와 이웃 연결망을 함께 살리는 방향이 제시됩니다.",
      "통합돌봄은 복지관에서 이어서 다룹니다.",
    ],
    tradeoffs: [
      t("가족 돌봄 vs 공적 돌봄", "공적 서비스는 노동시장 이탈을 일부 완화합니다.", "건강보험 재정과 인력이 더 필요하며, 가족 부담이 완전히 사라지지는 않습니다."),
    ],
    sources: cite("nafi_household", "kipf_care"),
    relatedTerms: ["장기요양", "국민기초생활보장", "지역사회통합돌봄"],
  }),

  exhibit_1c: ex({
    id: "exhibit_1c",
    code: "EXHIBIT 1-C",
    hallName: hall,
    titleKo: "징병제와 병력 자원",
    titleEn: "CONSCRIPTION SUSTAINABILITY",
    category: "국방",
    coreQuestion: "20대 남성 인구가 줄면 현 병력 규모는 유지되는가?",
    summary:
      "20대 남성 인구는 2010년 364만 명, 2025년 323만 명에서 2030년 200만 명대, 2072년 약 142만 명으로 줄어들 전망입니다. 현역 판정률을 모두 올려도 지금 병력 규모를 유지하기는 어렵다는 분석이 있습니다.",
    kind: "source_body",
    featuredMetrics: [
      m("20대 남성 2025", "323만", "2010년 364만 명", "2000년대 450만 명대에서 감소", "source_body", { citationId: "nafi_pop_1" }),
      m("20대 남성 2072", "약 142만", "장래 전망", "상비병력 50만 명 수준 유지 어려움으로 서술", "institution_outlook", { highlight: true, citationId: "nafi_pop_1" }),
    ],
    causes: [
      "현역 판정률을 올려 양을 확보하는 방식은 병력의 질과 양 사이 딜레마를 낳는다고 합니다.",
    ],
    responses: [
      "모병제 전환, 병력의 과학화·기술집약화, 예비전력 재설계가 논의 과제로 제시됩니다.",
    ],
    tradeoffs: [
      t("판정률 상향 vs 기술집약", "단기 병력 수를 지킬 수 있습니다.", "질 저하와 지속 불가능성 논란이 남습니다."),
    ],
    sources: cite("nafi_pop_1"),
    relatedTerms: ["국방비", "재량지출"],
  }),

  exhibit_1h: ex({
    id: "exhibit_1h",
    code: "EXHIBIT 1-H",
    hallName: hall,
    titleKo: "노동·산업 변화와 축소사회",
    titleEn: "LABOUR, INDUSTRY, SHRINKING SOCIETY",
    category: "노동·축소사회",
    coreQuestion: "인구가 줄어도 일자리는 늘었는가, 앞으로는 어떻게 재설계하는가?",
    summary:
      "2019~2024년 경제활동인구는 121만 명, 취업자는 145만 명 늘었습니다. 장기적으로 총취업자는 2030년대 초 정점 후 2072년 2024년의 64.0% 수준으로 줄어들 전망입니다.",
    kind: "source_body",
    featuredMetrics: [
      m("2019~2024 취업자", "+145만", "경제활동인구 +121만", "고령·여성·고학력 참여 확대", "source_body", { citationId: "nafi_labor" }),
      m("여성 고용률 2024", "54.7%", "2020년 대비 +7.7%p", "남성 +0.1%p", "source_body", { citationId: "nafi_labor" }),
      m("2072 취업자 전망", "2024년의 64.0%", "2030년대 초 정점 후 감소", "허가형 외", "institution_outlook", { highlight: true, citationId: "nafi_labor" }),
      m("보건복지 취업 비율", "6.8%→10.3%", "최근 10년", "도소매 14.6%→11.2%", "source_body", { citationId: "nafi_labor" }),
    ],
    causes: [
      "중위 임금 일자리 감소와 AI 노출(30~54세 중년층)이 변곡점으로 지목됩니다.",
      "OECD 38국 분석에서는 고령인구가 1%p 늘면 제조 부가가치 비율이 0.7%p, 성장률이 0.3%p 낮아지는 관계가 소개됩니다.",
      "농림어업 65세 이상 종사 비율 71.9%는 산업별 인력 재배치 과제를 보여 줍니다.",
    ],
    responses: [
      "축소사회 담론은 복원력, 자원 분배 최적화, 지역 거버넌스·인프라 재구축을 방향으로 제시합니다.",
      "라이프치히는 폐건물 재활용·도심 녹지화로 축소 공간을 재구성한 사례로, 도야마는 주거·상업·복지를 모은 compact city로 소개됩니다.",
    ],
    tradeoffs: [
      t("성장 회복 vs 작지만 지속", "성장 회복을 목표로 두면 익숙한 정책 문법을 쓸 수 있습니다.", "회복이 어렵고 불평등이 커질 수 있다는 경고도 함께 있습니다."),
    ],
    comparison: {
      caption: "해외 사례는 정답 처방이 아니라 질적 전환의 참고입니다.",
      headers: ["사례", "초점", "관련 쪽"],
      rows: [
        { label: "라이프치히", values: ["폐건물 재활용·도심 녹지", "15쪽"] },
        { label: "도야마", values: ["집약형 compact city", "15쪽"] },
      ],
    },
    sources: cite("nafi_labor", "nafi_pop_1", "oecd_korea_2024"),
    relatedTerms: ["재량지출", "의무지출"],
  }),

  exhibit_corridor_01: ex({
    id: "exhibit_corridor_01",
    code: "CORRIDOR 01",
    hallName: "세대 연대의 회랑",
    titleKo: "함께 쓰는 동네",
    titleEn: "FROM DEMOGRAPHY TO WELFARE",
    category: "회랑",
    coreQuestion: "부양비가 바뀌면 어떤 제도가 먼저 흔들리는가?",
    summary:
      "나이가 다른 이웃이 한 동네에서 학교와 병원을 나눕니다. 부양이 커지면 복지와 연금이 먼저 흔들립니다.",
    kind: "source_body",
    featuredMetrics: [
      m("연결 지표", "27.4→104.2", "노년부양비 2024→2072", "복지관에서 전망을 구분해서 봅니다", "institution_outlook"),
    ],
    causes: [],
    responses: [],
    tradeoffs: [],
    sources: cite("kostat_2022_2072"),
    relatedTerms: ["노년부양비", "국민연금"],
  }),
};

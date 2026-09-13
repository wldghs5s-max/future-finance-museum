import { ExhibitDetailData } from "../components/walkthrough/ExhibitDetailDrawer";

export const EXHIBIT_DETAILS_MAP: Record<string, ExhibitDetailData> = {
  // ==========================================================
  // GRAND LOBBY
  // ==========================================================
  exhibit_lobby_intro: {
    id: "exhibit_lobby_intro",
    code: "INTRO 00",
    hallName: "재정미래관 중앙 로비",
    titleKo: "재정미래박물관 건립 취지 및 전시 철학",
    titleEn: "MUSEUM PHILOSOPHY & VISION FOR FUTURE KOREA",
    category: "건립취지",
    summary:
      "초저출생, 초고령화, 기후위기, AI 기술 대전환 등 복합 위기에 직면한 대한민국의 장기 재정 위기를 국민 누구나 체감할 수 있도록 구성된 미래 가상 박물관입니다.",
    sourceDoc: "재정미래박물관 헌장 (future_finance_doc.md)",
    officialMetrics: [
      {
        label: "기준 전망 연도",
        raw: "2024년 ~ 2072년",
        display: "2024-2072",
        highlight: true,
        description: "향후 50년 간의 거시경제 및 재정 궤적",
      },
      {
        label: "데이터 무결성",
        raw: "정부 및 국책 연구기관 공식 보고서 100% 반영",
        display: "검증 완료",
        description: "통계 왜곡 없는 단일 진실 공급원 원칙",
      },
    ],
    detailedAnalysis: [
      "국가재정은 단순한 숫자의 집합이 아니라 우리 아이들과 청년들이 살아갈 미래의 터전입니다.",
      "수입(세수)은 줄고 의무지출(복지·연금)은 폭증하는 '악어의 입' 구조를 타개하기 위해 세대 간 상생과 합의가 절실합니다.",
    ],
    policyImplication:
      "정파와 세대를 초월한 장기재정건전성 확보와 지속가능한 재정 개혁의 공감대를 형성하는 것이 본 박물관의 사명입니다.",
  },

  exhibit_lobby_monument: {
    id: "exhibit_lobby_monument",
    code: "MONUMENT 00",
    hallName: "재정미래관 중앙 로비",
    titleKo: "국가재정 미래를 상징하는 중앙 조형물",
    titleEn: "CENTRAL FISCAL MONUMENT OF THE REPUBLIC OF KOREA",
    category: "건축상징물",
    summary:
      "과거와 현재, 미래세대를 잇는 지속가능한 국가재정의 균형과 연대를 형상화한 박물관 중앙의 설치 예술 조형물입니다.",
    sourceDoc: "재정미래박물관 공간 건축 기획서",
    officialMetrics: [
      {
        label: "박물관 전시 테마",
        raw: "인구, 복지, 기후, AI, 장기재정 6대 영역",
        display: "6대 전시관",
        highlight: true,
        description: "대한민국 미래 50년을 좌우할 핵심 재정 축",
      },
      {
        label: "데이터 기준선",
        raw: "2026 ~ 2072 장기재정 및 인구추계",
        display: "2026-2072",
        description: "기획재정부, KDI, PERI, 국회예산정책처 공식 보고서 기반",
      },
    ],
    detailedAnalysis: [
      "본 조형물은 임의의 경제 지표나 특정 연도를 가리키는 수치가 아닌, 국가재정의 영속성과 책임성을 나타내는 건축적 상징물입니다.",
      "조형물 중심부에서 뿜어져 나오는 푸른빛은 세대 간 신뢰를 상징하며, 이를 둘러싼 6개 기둥은 각각의 전시관을 의미합니다.",
    ],
    policyImplication:
      "국가재정은 현세대의 편익뿐만 아니라 아직 태어나지 않은 미래세대의 삶까지 지탱해야 하는 가장 근본적인 사회적 계약입니다.",
  },

  exhibit_lobby_directory: {
    id: "exhibit_lobby_directory",
    code: "GUIDE 00",
    hallName: "재정미래관 중앙 로비",
    titleKo: "6대 미래 전시관 관람 안내 및 공간 구조",
    titleEn: "EXHIBITION DIRECTORY & SPATIAL GUIDE",
    category: "전시안내",
    summary:
      "인구변화관부터 복지·연금관, 환경문제관, AI기술관, 장기재정전망관, 그리고 참여형 시뮬레이션 랩까지 이어지는 전체 관람 로드맵입니다.",
    sourceDoc: "재정미래박물관 층별 전시 안내서",
    officialMetrics: [
      {
        label: "전시관 수",
        raw: "6개 전시관 + 5개 전이 회랑 + 종료 라운지",
        display: "총 14개 주요 공간",
        highlight: true,
        description: "각 주제별 물리적 깊이를 가진 독립 전시장",
      },
      {
        label: "체험 시스템",
        raw: "나라살림게임 4대 공식 시나리오 시뮬레이터",
        display: "정책 시뮬레이션 랩",
        description: "직접 미래 재정을 선택하고 2055년 결과를 검증",
      },
    ],
    detailedAnalysis: [
      "HALL 01(인구): 2072 장래인구추계, 25년 초고령사회, 국방/수도권/1인가구",
      "HALL 02(복지·연금): 국민연금 2065/2069 소진, OECD 소득대체율 31.6%, 건보 2029 고갈",
      "HALL 03(환경): 기후 3단계 시나리오, 11차 전기본 무탄소 70.7%, EU CBAM",
      "HALL 04(AI): GPU 20만 장 인프라, KDI 2030 직업 자동화율, 4대 지표 순위 월",
      "HALL 05(재정전망): 2072 채무비율 173%, 악어의 입 거대 조형물, 60-3 재정준칙",
      "HALL 06(시뮬레이션): 2055 채무비율 4대 시나리오 및 PERI-Young 지수",
    ],
    policyImplication:
      "마우스 휠을 내려 전방의 게이트를 통과하며 6대 전시관을 순차적으로 탐험해보세요.",
  },

  // ==========================================================
  // HALL 01: DEMOGRAPHY
  // ==========================================================
  exhibit_1d: {
    id: "exhibit_1d",
    code: "EXHIBIT 1-D",
    hallName: "HALL 01: 인구변화 전시장",
    titleKo: "2020 인구 데드크로스 역사 기념비",
    titleEn: "2020 POPULATION DEAD-CROSS MONUMENT",
    category: "역사분기점",
    summary:
      "대한민국 건국 이래 최초로 사망자 수가 출생아 수를 추월하며 인구 자연감소가 시작된 역사적 분기점입니다. 인구 보너스 시대가 끝나고 인구 오너스(Demographic Onus)의 시대가 도래했습니다.",
    sourceDoc: "통계청 인구동향조사 & future_finance_doc.md",
    officialMetrics: [
      {
        label: "2020년 사망자 수",
        raw: "30.5만 명",
        display: "30.5만 명",
        highlight: true,
        description: "사상 최초로 연간 사망자 수가 출생아 수를 역전",
      },
      {
        label: "2020년 출생아 수",
        raw: "27.2만 명",
        display: "27.2만 명",
        description: "연간 출생아 30만 명 선 붕괴",
      },
      {
        label: "총인구 자연감소폭",
        raw: "-2만 명 (2020년 건국 이래 최초)",
        display: "-2만 명",
        highlight: true,
        description: "자연증가율의 마이너스 전환 공식화",
      },
      {
        label: "시대적 패러다임 전환",
        raw: "인구 보너스 → 인구 오너스(Onus)",
        display: "인구 오너스 전환",
        description: "부양할 인구가 일하는 인구를 압도하는 구조적 위험",
      },
    ],
    detailedAnalysis: [
      "1960~80년대 고도성장을 견인했던 '풍부한 청장년 노동력(인구 보너스)'이 완전히 소멸되었습니다.",
      "2020년을 기점으로 생산연령인구 감소와 고령층 부양 부담이 본격화되는 '인구 오너스' 단계로 진입했습니다.",
      "조세와 사회보험료를 납부하는 세원은 급감하고 복지와 의료를 수급하는 인구는 급증하는 재정 구조적 불균형이 시작되었습니다.",
    ],
    policyImplication:
      "인구 자연감소를 상수로 둔 국가 재정체계 재설계와 사회보험의 지속가능성 개혁이 국가적 생존 과제로 부상했습니다.",
  },

  exhibit_1a: {
    id: "exhibit_1a",
    code: "EXHIBIT 1-A",
    hallName: "HALL 01: 인구변화 전시장",
    titleKo: "2072 장래인구추계 대형 인포그래픽 월",
    titleEn: "2072 POPULATION PROJECTION INFOGRAPHIC WALL",
    category: "인구통계",
    summary:
      "2024년 5,175만 명인 대한민국 총인구는 2072년 3,622만 명으로 급감(1977년 수준 회귀)하며, 전체 인구의 47.7%가 65세 이상 고령층으로 채워집니다.",
    sourceDoc: "통계청 2072 장래인구추계 (future_finance_doc.md)",
    officialMetrics: [
      {
        label: "총인구 감소폭",
        raw: "5,175만 명 → 3,622만 명 (약 30% 감소)",
        display: "3,622만 명 (▼30%)",
        highlight: true,
        description: "1977년 인구 수준으로 회귀하며 총인구 1,553만 명 증발",
      },
      {
        label: "65세 이상 고령인구 비중",
        raw: "19.5~19.9%(2024) → 47.7%(2072)",
        display: "47.7% (약 3배)",
        highlight: true,
        description: "전체 인구 2명 중 1명이 노인인 세계 최고 수준 초고령 사회",
      },
      {
        label: "생산연령인구 (15~64세)",
        raw: "70.0%(3,674만 명, 2022) → 45.8%(1,658만 명)",
        display: "45.8% (1,658만)",
        description: "2030년대 연평균 50만 명씩 생산인구 급감",
      },
      {
        label: "유소년 인구 (0~14세)",
        raw: "11.5%(2022) → 6.6%(2072)",
        display: "6.6% (반토막)",
        description: "미래세대의 급격한 단절로 학교 및 보육 인프라 붕괴",
      },
      {
        label: "노년부양비 (생산 100명당)",
        raw: "27.4명(2024) → 104.2명(2072)",
        display: "104.2명 (3.8배)",
        highlight: true,
        description: "일하는 사람 1명이 노인 1명 이상을 전담 부양하는 구조",
      },
      {
        label: "총부양비",
        raw: "약 41명(2024) → 119명(2072)",
        display: "119명 (OECD 최고)",
        description: "2072년 기준 OECD 국가 중 가장 높은 부양 부담",
      },
    ],
    detailedAnalysis: [
      "생산연령인구 100명이 부양해야 할 노인 수(노년부양비)가 2024년 27.4명에서 2072년 104.2명으로 3.8배 폭증합니다.",
      "일하는 사람 1명이 노인 1명 이상을 부양하는 역피라미드형 인구 구조가 고착화되어 조세 기반이 급격히 붕괴됩니다.",
      "학령인구 소멸로 인해 교육재정교부금 배분 왜곡과 지방 거점 대학 소멸이 가속화됩니다.",
    ],
    policyImplication:
      "인구 감소에 비례한 정부 행정 조직 슬림화, 교육교부금 산정 방식 개편, 생산연령인구 확충을 위한 제도적 혁신이 필요합니다.",
  },

  exhibit_1b: {
    id: "exhibit_1b",
    code: "EXHIBIT 1-B",
    hallName: "HALL 01: 인구변화 전시장",
    titleKo: "초고령사회 25년 도달 타임 필러",
    titleEn: "SUPER-AGED SOCIETY 25-YEAR TIME PILLAR",
    category: "인구속도",
    summary:
      "고령화사회(7%)에서 초고령사회(20%)로 진입하는 데 단 25년 소요되어 2025년 대한민국은 공식 초고령사회로 진입했습니다. 이는 전 세계에서 유례가 없는 최단기 기록입니다.",
    sourceDoc:
      "행정안전부 주민등록인구통계 & OECD 고령화 통계 (future_finance_doc.md)",
    officialMetrics: [
      {
        label: "대한민국 도달 소요기간",
        raw: "25년 (고령화 7% → 초고령 20% 돌파)",
        display: "단 25년 (세계 최단기)",
        highlight: true,
        description: "2025년 65세 이상 인구 비중 20% 돌파 완료",
      },
      {
        label: "일본 소요기간",
        raw: "35년",
        display: "35년",
        description: "초고령화의 대명사 일본보다 10년 빠른 압축 고령화",
      },
      {
        label: "미국 소요기간",
        raw: "94년",
        display: "94년",
        description: "안정적 이민 유입으로 완만한 고령화 진행",
      },
      {
        label: "프랑스 소요기간",
        raw: "154년",
        display: "154년",
        description: "1세기 반에 걸쳐 완만하게 사회 시스템 정비",
      },
    ],
    detailedAnalysis: [
      "프랑스는 154년, 미국은 94년, 일본은 35년에 걸쳐 연금과 의료 인프라를 정비했으나, 한국은 불과 25년 만에 초고령사회로 돌입했습니다.",
      "압축적 고령화로 인해 국민연금, 건강보험, 노인장기요양보험 등 사회보장 기금의 지출 폭증 속도를 제도 개혁 속도가 따라가지 못하고 있습니다.",
    ],
    policyImplication:
      "사회보장 재정 파탄을 방지하기 위한 연금 수급 개시 연령 상향과 자동재정안정화장치 도입 논의를 지체할 수 없습니다.",
  },

  exhibit_1e: {
    id: "exhibit_1e",
    code: "EXHIBIT 1-E",
    hallName: "HALL 01: 인구변화 전시장",
    titleKo: "합계출산율 추이 쇼케이스",
    titleEn: "TOTAL FERTILITY RATE TRAJECTORY SHOWCASE",
    category: "출산율",
    summary:
      "대한민국의 합계출산율은 2024년 0.75명으로 OECD 평균의 절반에도 미치지 못하며, 2025년 0.65명으로 사상 최저점을 기록한 후 2072년 1.08명(중위 추계)에 머물 것으로 전망됩니다.",
    sourceDoc: "통계청 장래인구추계 (future_finance_doc.md)",
    officialMetrics: [
      {
        label: "2024년 합계출산율",
        raw: "0.75명",
        display: "0.75명",
        highlight: true,
        description: "OECD 회원국 평균(1.5명 내외)의 절반 미달",
      },
      {
        label: "2025년 최저 저점",
        raw: "0.65명",
        display: "0.65명 (사상 최저 저점)",
        highlight: true,
        description: "대한민국 통계 작성 이래 최저 기록",
      },
      {
        label: "2072년 중위 가정",
        raw: "1.08명",
        display: "1.08명 (중위 추계)",
        description: "장기 인구 대체선(2.1명)의 절반 수준에 불과",
      },
    ],
    detailedAnalysis: [
      "합계출산율이 0.7명대 이하로 추락하면서 향후 2030년대 이후 노동시장에 신규 진입하는 청년 인구가 급격히 축소됩니다.",
      "정부의 막대한 저출생 대응 예산 투입에도 불구하고 주거, 일자리, 양육비용의 구조적 문제로 인해 출산율 반등이 극히 완만할 것으로 예상됩니다.",
    ],
    policyImplication:
      "단편적인 현금성 수당 지급을 넘어 노동시장 이중구조 해소와 수도권 과밀 완화 등 구조적 해법이 요구됩니다.",
  },

  exhibit_1f: {
    id: "exhibit_1f",
    code: "EXHIBIT 1-F",
    hallName: "HALL 01: 인구변화 전시장",
    titleKo: "89개 소멸지역 및 수도권 일극화 지도",
    titleEn: "89 DEPOPULATED REGIONS & METROPOLITAN MONOPOLY MAP",
    category: "지역소멸",
    summary:
      "전체 국토 면적의 11.8%에 불과한 수도권이 전체 인구의 51%, GRDP의 52.3%를 독점하고 있으며, 전국 89개 인구감소지역은 최근 10년간 인구가 12.5% 급감했습니다.",
    sourceDoc:
      "행정안전부 인구감소지역 고시 & 통계청 지역소득 (future_finance_doc.md)",
    officialMetrics: [
      {
        label: "수도권 인구 비중",
        raw: "51.0%",
        display: "51.0%",
        highlight: true,
        description: "국토의 11.8% 공간에 인구 과반 초밀집",
      },
      {
        label: "수도권 GRDP 비중",
        raw: "52.3%",
        display: "52.3%",
        highlight: true,
        description: "경제력과 기업 본사의 수도권 편중 심화",
      },
      {
        label: "89개 인구감소지역 증감률",
        raw: "10년간 -12.5%",
        display: "-12.5% (10년간 급감)",
        description: "지방 소멸 위험 지역의 인구 공동화 현상",
      },
      {
        label: "경북 의성군 (대표 소멸지)",
        raw: "고령인구 47.5%, 노년부양비 92.1",
        display: "고령 47.5% / 부양비 92.1",
        description: "청년층 유출로 초고령화가 극한에 달한 지방 현장",
      },
    ],
    detailedAnalysis: [
      "지방 인구 소멸은 단순한 지역의 위기가 아니라, 수도권의 극심한 과밀과 주거비 상승을 유발하여 청년들의 결혼과 출산을 포기하게 만드는 악순환의 진원지입니다.",
      "경북 의성 등 소멸위험 지역은 생산활동 인구가 없어 자체 지방세 수입으로 공무원 인건비조차 충당하지 못하는 지자체가 급증하고 있습니다.",
    ],
    policyImplication:
      "지방교부세의 단순 보전식 배분을 지양하고, 거점 도시 중심의 메가시티 통합과 지역 균형발전 투자가 시급합니다.",
  },

  exhibit_1g: {
    id: "exhibit_1g",
    code: "EXHIBIT 1-G",
    hallName: "HALL 01: 인구변화 전시장",
    titleKo: "노인 1인가구 빈곤 실태 월",
    titleEn: "ELDERLY SINGLE-PERSON HOUSEHOLD POVERTY WALL",
    category: "사회복지",
    summary:
      "1인가구 비중은 2015년 27.2%(520만)에서 2024년 36.1%(804만), 2052년 41.3%까지 치솟으며, 60세 이상 1인가구의 73%가 월소득 200만 원 이하의 극심한 빈곤선에 놓여있습니다.",
    sourceDoc:
      "통계청 가계금융복지조사 & 인구주택총조사 (future_finance_doc.md)",
    officialMetrics: [
      {
        label: "1인가구 비중 추이",
        raw: "2015년 27.2%(520만) → 2024년 36.1%(804만) → 2052년 41.3%",
        display: "27.2% → 36.1% → 41.3%",
        highlight: true,
        description: "전체 10가구 중 4가구가 1인가구로 재편",
      },
      {
        label: "60세 이상 1인가구 빈곤 비중",
        raw: "73.0% (월소득 200만 원 이하)",
        display: "73.0% (월 200만원 이하)",
        highlight: true,
        description: "노인 1인가구 4명 중 3명이 절대적 빈곤 상태",
      },
      {
        label: "2024년 1인가구 수",
        raw: "804만 가구 (36.1%)",
        display: "804만 가구 돌파",
        description: "독거노인 돌봄 및 사회복지 안전망 재정 수요 급증",
      },
    ],
    detailedAnalysis: [
      "핵가족화를 넘어 '1인 가구화'가 급진전되면서 가족 내 부양 기능이 완전히 붕괴되었습니다.",
      "특히 60세 이상 독거노인의 73%가 최저생계비 수준인 월소득 200만 원 이하에 머물고 있어 기초연금과 기초생활보장 생계급여의 막대한 추가 재정 투입이 불가피합니다.",
    ],
    policyImplication:
      "공공 돌봄 인프라 확충과 노인 일자리 사업 내실화, 빈곤 독거노인을 겨냥한 핀셋형 기초보장 강화가 필요합니다.",
  },

  exhibit_1c: {
    id: "exhibit_1c",
    code: "EXHIBIT 1-C",
    hallName: "HALL 01: 인구변화 전시장",
    titleKo: "국방 안보 인력 급감 키오스크",
    titleEn: "DEFENSE MANPOWER CRISIS INTERACTIVE KIOSK",
    category: "국방안보",
    summary:
      "20대 남성 인구가 2000년대 450만 명에서 2025년 323만 명, 2072년 142만 명으로 급감함에 따라 현재의 상비병력 50만 명 유지가 물리적으로 불가능해집니다.",
    sourceDoc: "국방부 국방백서 & 통계청 인구추계 (future_finance_doc.md)",
    officialMetrics: [
      {
        label: "20대 남성 인구 (2000년대)",
        raw: "450만 명",
        display: "450만 명",
        description: "상비병력 60만 대군을 유지하던 청년 인구 기반",
      },
      {
        label: "20대 남성 인구 (2025년)",
        raw: "323만 명",
        display: "323만 명 (▼127만)",
        description: "상비병력 50만 명 유지 한계선 직면",
      },
      {
        label: "20대 남성 인구 (2072년 전망)",
        raw: "142만 명",
        display: "142만 명 (▼68%)",
        highlight: true,
        description: "징집 자원 3분의 1 토막으로 징병제 유지 불가능",
      },
      {
        label: "국방 전환 방향",
        raw: "모병제 및 기술집약 AI 과학군 전환 논의",
        display: "모병제 & 과학군 전환",
        highlight: true,
        description: "유무인 복합 체계 구축을 위한 막대한 국방 R&D 투자 요구",
      },
    ],
    detailedAnalysis: [
      "현역 징집 대상인 20대 남성 인구가 급감함에 따라 현재의 징병 중심 군 구조는 유지가 불가능합니다.",
      "상비병력 감축에 대응하기 위해 유·무인 복합전투체계, 드론 및 AI 과학기술군으로의 전면적 개편과 모병제 단계적 도입이 불가피하며, 이는 막대한 초기 재정 투입을 요구합니다.",
    ],
    policyImplication:
      "병력 유지형 국방비 구조에서 AI·첨단 무기체계 R&D 중심의 스마트 국방 예산으로 재정 체질 개선이 필수적입니다.",
  },

  exhibit_corridor_01: {
    id: "exhibit_corridor_01",
    code: "CORRIDOR 01",
    hallName: "세대·복지 회랑 (복도 01)",
    titleKo: "세대·복지 회랑 안내 사이니지",
    titleEn: "CORRIDOR 01: WELFARE TRANSIT WAY",
    category: "전이회랑",
    summary:
      "Hall 01(인구)에서 Hall 02(복지 및 연금관)으로 향하는 물리적 전이 복도입니다. 인구 절벽이 복지 재정에 미치는 충격을 전달합니다.",
    sourceDoc: "재정미래박물관 공간 동선 해설",
    officialMetrics: [
      {
        label: "회랑 길이",
        raw: "Z: -4,800px ~ -6,000px (1,200px)",
        display: "1,200px 심도",
        description: "양옆 앰버 톤 벽면 인클로저와 바닥 유도 라이트",
      },
      {
        label: "자동 센서 게이트",
        raw: "Z = -5,950px 접근 시 개방",
        display: "Hall 02 게이트 자동 개폐",
        description: "환경 반응형 슬라이딩 게이트",
      },
    ],
    detailedAnalysis: [
      "일하는 세대의 축소는 즉각적으로 국민연금과 건강보험의 수입 기반 붕괴로 이어집니다.",
      "전방의 Hall 02 게이트를 통과하면 국민연금 소진 듀얼 게이지와 개혁 역사를 만나실 수 있습니다.",
    ],
    policyImplication: "계속 휠을 내려 Hall 02 전시장 안으로 걸어 들어가세요.",
  },

  // ==========================================================
  // HALL 02: WELFARE & PENSION
  // ==========================================================
  exhibit_2d: {
    id: "exhibit_2d",
    code: "EXHIBIT 2-D",
    hallName: "HALL 02: 복지 및 연금 전시장",
    titleKo: "국민부담률 & 사회복지지출 OECD 비교 월",
    titleEn: "NATIONAL TAX BURDEN & SOCIAL SPENDING COMPARISON WALL",
    category: "재정부담",
    summary:
      "대한민국의 국민부담률은 26.9%(2023)로 OECD 평균(33.7%) 대비 낮으나, GDP 대비 사회복지지출은 2024년 15.3%에서 2040년 20.5%로 폭증하여 OECD 평균(22.1%)에 근접하게 됩니다.",
    sourceDoc:
      "OECD Revenue & Social Expenditure Statistics (future_finance_doc.md)",
    officialMetrics: [
      {
        label: "2023년 국민부담률",
        raw: "한국 26.9% vs OECD 평균 33.7%",
        display: "26.9% (OECD 대비 -6.8%p)",
        highlight: true,
        description: "조세 및 사회보장기여금의 명목 부담 수준",
      },
      {
        label: "사회복지지출 (2024년)",
        raw: "15.3% (GDP 대비)",
        display: "15.3%",
        description: "현재 복지 지출 규모",
      },
      {
        label: "사회복지지출 (2040년 전망)",
        raw: "20.5% (GDP 대비)",
        display: "20.5% (OECD 22.1% 근접)",
        highlight: true,
        description: "2030년 17.2% → 2035년 18.6% → 2040년 20.5%로 초고속 상승",
      },
    ],
    detailedAnalysis: [
      "국민부담률은 아직 저부담 상태에 머물러 있으나, 인구 고령화에 따라 의무적으로 지출해야 하는 사회복지 비용은 OECD 선진국 수준으로 급격히 수렴하고 있습니다.",
      "수입(세수)은 정체된 채 지출(복지비)만 OECD 수준에 도달할 경우 재정 수지 적자와 국가채무 증가 속도가 통제 불가능한 수준에 이를 수 있습니다.",
    ],
    policyImplication:
      "중부담-중복지로의 사회적 대타협이나 비효율적 복지 전달체계 구조조정 없이 현재의 저부담 체계를 유지하기는 어렵습니다.",
  },

  exhibit_2f: {
    id: "exhibit_2f",
    code: "EXHIBIT 2-F",
    hallName: "HALL 02: 복지 및 연금 전시장",
    titleKo: "3차 개혁 세부 크레딧 & 국가 지급보장 조형물",
    titleEn: "3RD REFORM SOCIAL CREDITS & STATE GUARANTEE MONUMENT",
    category: "연금개혁",
    summary:
      "제3차 국민연금 개혁을 통해 국가의 연금 지급보장을 법률에 최초로 명문화하였으며, 군복무 크레딧(최대 12개월)과 출산 크레딧(첫째부터 인정, 상한 폐지)을 대폭 확대했습니다.",
    sourceDoc: "보건복지부 국민연금법 개정안 (future_finance_doc.md)",
    officialMetrics: [
      {
        label: "국가 지급보장",
        raw: "국민연금법 명문 규정 신설",
        display: "법률 명문화 완료",
        highlight: true,
        description: "청년세대의 연금 미수급 불안을 법적으로 불식",
      },
      {
        label: "군복무 크레딧",
        raw: "기존 6개월 → 최대 12개월 확대",
        display: "최대 12개월 인정",
        description: "병역 의무 이행에 대한 사회적 보상 및 가입 기간 추가",
      },
      {
        label: "출산 크레딧",
        raw: "기존 둘째부터 → 첫째부터 인정 (상한 폐지)",
        display: "첫째아부터 상한 폐지",
        highlight: true,
        description:
          "저출생 극복을 위한 다자녀 중심에서 모든 출산아 인정으로 개편",
      },
    ],
    detailedAnalysis: [
      "청년층이 국민연금 제도를 불신하는 핵심 요인이었던 '기금 고갈 시 연금을 받지 못할 수 있다'는 공포를 해소하기 위해 국가의 최종 지급 책임을 법에 명시했습니다.",
      "사회적 기여 행위(국방, 출산)에 대해 연금 가입 기간을 인정하는 크레딧 제도를 전면 확대하여 실질 소득대체율 제고를 도모했습니다.",
    ],
    policyImplication:
      "크레딧 확대에 따른 추가 재정 소요는 국민연금 기금이 아닌 일반회계(국고 지원)에서 책임지는 원칙이 정립되어야 합니다.",
  },

  exhibit_2e: {
    id: "exhibit_2e",
    code: "EXHIBIT 2-E",
    hallName: "HALL 02: 복지 및 연금 전시장",
    titleKo: "간호·간병통합서비스 및 신규 복지 소요 전시",
    titleEn: "INTEGRATED NURSING CARE & SICK LEAVE FISCAL DEMAND",
    category: "건보재정",
    summary:
      "초고령사회 간병비 부담 완화를 위한 간호·간병통합서비스 전면 확대는 연간 1.07조~1.58조 원의 건강보험 재정이 추가 소요되며, 아프면 쉴 권리를 보장하는 상병수당 시범사업도 본사업 전환을 앞두고 있습니다.",
    sourceDoc: "국민건강보험공단 & 보건복지부 재정추계 (future_finance_doc.md)",
    officialMetrics: [
      {
        label: "간호·간병통합 추가 소요",
        raw: "연간 1.07조 ~ 1.58조 원",
        display: "연 1.07조 ~ 1.58조 원",
        highlight: true,
        description: "건강보험 재정의 직접적 지출 증가 요인",
      },
      {
        label: "상병수당 제도",
        raw: "2022년부터 지자체 시범사업 진행 중",
        display: "시범사업 단계",
        description: "업무 외 질병·부상 시 치료 기간 동안 소득 보전",
      },
      {
        label: "건강보험 필요 보험료율",
        raw: "현행 지출 유지 시 향후 12% 이상 필요 (2024년 7.09%)",
        display: "12% 이상 요구",
        highlight: true,
        description: "2029년 준비금 고갈 시 보험료율 급등 불가피",
      },
    ],
    detailedAnalysis: [
      "간병 살인과 간병 파산이 사회 문제로 대두되면서 간호·간병통합서비스의 급여화 요구가 높으나, 이는 건보 재정에 막대한 고정 지출을 유발합니다.",
      "상병수당 역시 취약계층 노동자의 생존권을 보장하는 필수 제도이나, 지속가능한 재원 분담 모델(고용보험 vs 건보 vs 일반조세) 설정이 선행되어야 합니다.",
    ],
    policyImplication:
      "필수의료 중심의 수가 체계 개편과 건강보험 국고지원 일몰제 폐지 및 항구적 재정 지원 법제화가 필요합니다.",
  },

  exhibit_2a: {
    id: "exhibit_2a",
    code: "EXHIBIT 2-A",
    hallName: "HALL 02: 복지 및 연금 전시장",
    titleKo: "국민연금 기금 소진 듀얼 게이지 월",
    titleEn: "NATIONAL PENSION DEPLETION DUAL GAUGE WALL",
    category: "공적연금",
    summary:
      "제3차 국민연금 개혁 통과로 기금 소진 시점이 2057년에서 2065년으로 8년 연장되었으며, 2025년 기금운용 호실적(적립금 1,458조 원 달성) 반영 시 2069년까지 추가 연장됩니다.",
    sourceDoc: "보건복지부 국민연금 종합운용계획 & future_finance_doc.md",
    officialMetrics: [
      {
        label: "개혁 후 기금 소진 시점",
        raw: "2065년 (기존 2057년에서 8년 연기)",
        display: "2065년 (▲8년 연기)",
        highlight: true,
        description: "적자 전환 시점 2041년에서 2048년으로 7년 연기",
      },
      {
        label: "호실적 반영 시 소진 시점",
        raw: "2069년 (수익률 18.82%, 적립금 1,458조 달성)",
        display: "2069년 달성",
        highlight: true,
        description: "2025년 기금운용 수익률 18.82% 호실적 반영",
      },
      {
        label: "총 연금부채 / 미적립부채",
        raw: "총 부채 6,358조 원 / 미적립부채 1,820조 원",
        display: "6,358조 / 1,820조 원",
        description: "미래세대에 전가되는 잠재적 연금 채무 규모",
      },
      {
        label: "보험료율 / 명목소득대체율",
        raw: "보험료율 9%→13%, 소득대체율 40%→43%",
        display: "13% / 43%",
        description: "매년 0.5%p 단계적 보험료율 인상",
      },
    ],
    detailedAnalysis: [
      "2025년 통과된 제3차 개혁은 보험료율을 9%에서 13%로 인상하고 소득대체율을 43%로 상향 조정했습니다.",
      "그러나 2065년 또는 2069년 이후 기금이 소진되면 당해 연도 보험료 수입으로만 연금을 지급해야 하는 '부과방식' 전환 시 필요 보험료율이 30%를 상회하게 됩니다.",
      "기금운용 수익률 제고와 함께 자동안정화장치 도입이 여전히 핵심 쟁점으로 남아있습니다.",
    ],
    policyImplication:
      "기금 소진 시점을 늦추는 모수개혁을 넘어, 출생률과 경제성장률 변동에 연동되는 구조개혁이 필요합니다.",
  },

  exhibit_2b: {
    id: "exhibit_2b",
    code: "EXHIBIT 2-B",
    hallName: "HALL 02: 복지 및 연금 전시장",
    titleKo: "국민연금 1차~3차 개혁 역사 아카이브 패널",
    titleEn: "HISTORICAL ARCHIVE: 1ST TO 3RD PENSION REFORMS",
    category: "연금역사",
    summary:
      "1998년 1차 개혁, 2007년 2차 개혁, 그리고 2025년 통과된 3차 개혁까지의 핵심 지표 변화와 지급보장 명문화 과정을 비교 전시합니다.",
    sourceDoc: "국회예산정책처 & 보건복지부 연혁 자료",
    officialMetrics: [
      {
        label: "1차 개혁 (1998)",
        raw: "소득대체율 70%→60%, 보험료율 3%→9%, 수급연령 65세",
        display: "급여 삭감 & 수급연령 상향",
        description: "기금의 장기 재정 안정화를 위한 최초의 대대적 수술",
      },
      {
        label: "2차 개혁 (2007)",
        raw: "소득대체율 60%→40%(2028년까지 단계 인하), 기초노령연금 도입",
        display: "40% 단계 인하 체계 확립",
        description: "군복무(6개월), 출산(둘째부터) 크레딧 제도 신설",
      },
      {
        label: "3차 개혁 (2025/2026)",
        raw: "보험료율 13%, 소득대체율 43%, 국가 지급보장 법률 명시",
        display: "지급보장 명문화 & 13%/43%",
        highlight: true,
        description: "군복무 12개월, 출산 첫째부터 인정 및 상한 폐지",
      },
    ],
    detailedAnalysis: [
      "1차 개혁은 급여 삭감과 수급 개시 연령 상향(60세→65세)을 통해 재정 안정을 꾀했습니다.",
      "2차 개혁은 명목소득대체율을 40%까지 낮추는 대신 사각지대 해소를 위해 기초노령연금을 도입했습니다.",
      "3차 개혁은 청년층의 불신을 해소하기 위해 국가의 연금 지급보장 책임을 법률에 최초로 명문화했습니다.",
    ],
    policyImplication:
      "개혁의 역사는 급여 삭감 중심에서 다층 노후소득보장 체계 구축으로 발전해 왔습니다.",
  },

  exhibit_2c: {
    id: "exhibit_2c",
    code: "EXHIBIT 2-C",
    hallName: "HALL 02: 복지 및 연금 전시장",
    titleKo: "OECD 소득대체율 비교 보드 & 건강보험 경보 챔버",
    titleEn: "OECD REPLACEMENT RATE BOARD & HEALTH INSURANCE ALERT",
    category: "비교통계",
    summary:
      "한국 전체 OECD 소득대체율은 31.6%(공적연금 31.2% + 퇴직연금 0.4%)로 OECD 평균 50.7%에 크게 못 미치며, 건강보험 누적준비금은 2029년 소진이 전망됩니다.",
    sourceDoc: "OECD Pensions at a Glance & 국민건강보험공단 재정전망",
    officialMetrics: [
      {
        label: "한국 전체 소득대체율",
        raw: "31.6% (공적연금 31.2% + 퇴직연금 0.4%)",
        display: "31.6% (OECD 최하위권)",
        highlight: true,
        description: "공적연금 31.2%, 퇴직연금 0.4%로 실질 보장성 취약",
      },
      {
        label: "OECD 평균 소득대체율",
        raw: "50.7% (그리스 80.8%, 이탈리아 76.1%, 네덜란드 74.7%)",
        display: "OECD 평균 50.7%",
        description: "유럽 복지국가 대비 약 20%p 낮은 수준",
      },
      {
        label: "건강보험 준비금 소진 시점",
        raw: "2029년 (현재 보험료율 7.09%)",
        display: "2029년 고갈 전망",
        highlight: true,
        description: "지출 유지 시 향후 보험료율 12% 이상 요구",
      },
      {
        label: "사회복지지출 (GDP 대비)",
        raw: "2024년 15.3% → 2040년 20.5%",
        display: "20.5% (2040년)",
        description: "OECD 평균(22.1%)에 급속히 근접하며 재정 압박 심화",
      },
    ],
    detailedAnalysis: [
      "한국의 실질 연금소득대체율이 낮은 이유는 가입 기간이 짧고 퇴직연금의 연금화 비율이 극히 낮기 때문입니다.",
      "건강보험은 노인 의료비 급증과 간호·간병통합서비스(연 1조~1.58조 원 소요) 확대로 2029년 준비금이 완전히 소진될 위험이 큽니다.",
    ],
    policyImplication:
      "퇴직연금 의무화와 연금 전환 유도, 건강보험 급여 지출 효율화 및 국고지원 체계 개편이 시급합니다.",
  },

  exhibit_corridor_02: {
    id: "exhibit_corridor_02",
    code: "CORRIDOR 02",
    hallName: "기후 회랑 (복도 02)",
    titleKo: "기후 회랑 안내 사이니지",
    titleEn: "CORRIDOR 02: CLIMATE TRANSIT WAY",
    category: "전이회랑",
    summary:
      "복지·연금관을 지나 기후위기와 녹색 전환 재정의 현장인 Hall 03(환경문제관)으로 향하는 에메랄드 앰비언트 회랑입니다.",
    sourceDoc: "재정미래박물관 공간 동선 해설",
    officialMetrics: [
      {
        label: "회랑 길이",
        raw: "Z: -8,800px ~ -10,000px (1,200px)",
        display: "1,200px 심도",
        description: "에메랄드빛 광원과 기후 전환 바닥 라인",
      },
      {
        label: "자동 센서 게이트",
        raw: "Z = -9,950px 접근 시 개방",
        display: "Hall 03 게이트 자동 개폐",
        description: "환경 반응형 슬라이딩 게이트",
      },
    ],
    detailedAnalysis: [
      "인구 고령화로 인한 사회보장비 폭증 속에서도 기후위기 대응을 위한 막대한 녹색 전환 투자가 불가피합니다.",
      "전방의 Hall 03 게이트를 통과하면 한반도 미래 기후 3단계 시나리오와 무탄소 발전 70.7% 타워를 만나실 수 있습니다.",
    ],
    policyImplication: "휠을 내려 Hall 03 전시장 안으로 전진하세요.",
  },

  // ==========================================================
  // HALL 03: ENVIRONMENT & CLIMATE
  // ==========================================================
  exhibit_3d: {
    id: "exhibit_3d",
    code: "EXHIBIT 3-D",
    hallName: "HALL 03: 환경 문제 전시장",
    titleKo: "국가 온실가스 배출량 정점 추이 타임라인",
    titleEn: "NATIONAL GHG EMISSION PEAK TRAJECTORY TIMELINE",
    category: "배출추이",
    summary:
      "대한민국의 온실가스 배출량은 2018년 742.3백만 톤으로 역사적 정점을 기록한 뒤 2023년 624.2백만 톤까지 감축되었으나, 2024년 잠정 691.6백만 톤으로 다시 반등 조짐을 보이고 있습니다.",
    sourceDoc: "환경부 온실가스종합정보센터 (future_finance_doc.md)",
    officialMetrics: [
      {
        label: "2018년 온실가스 정점",
        raw: "742.3백만 톤 (역대 최고 배출)",
        display: "742.3Mt (정점)",
        highlight: true,
        description: "2030 및 2035 NDC 감축 기준 연도",
      },
      {
        label: "2023년 배출량",
        raw: "624.2백만 톤",
        display: "624.2Mt (▼15.9%)",
        description: "석탄발전 축소 및 에너지 효율 개선 효과",
      },
      {
        label: "2024년 잠정 배출량",
        raw: "691.6백만 톤",
        display: "691.6Mt (잠정)",
        highlight: true,
        description: "산업 가동률 회복 및 전력 수요 증가로 인한 반등 경보",
      },
    ],
    detailedAnalysis: [
      "국가 온실가스 배출량이 2018년 정점을 통과했으나, 감축 추세가 구조적으로 안착하지 못하고 경기 변동 및 전력 소비에 따라 흔들리고 있습니다.",
      "2035 NDC(53~61% 감축)를 달성하려면 매년 연평균 2,000만 톤 이상의 급격한 온실가스 순감축이 지속되어야 합니다.",
    ],
    policyImplication:
      "배출권거래제 유상할당 비율 확대와 탄소세 도입 검토 등 가격 기동형 온실가스 감축 정책이 요구됩니다.",
  },

  exhibit_3e: {
    id: "exhibit_3e",
    code: "EXHIBIT 3-E",
    hallName: "HALL 03: 환경 문제 전시장",
    titleKo: "2035 NDC 부문별 감축 목표 쇼케이스",
    titleEn: "2035 NDC SECTORAL REDUCTION TARGET SHOWCASE",
    category: "감축목표",
    summary:
      "대한민국 2035 NDC는 2018년 대비 53~61% 감축을 목표로 하며, 전력 부문은 69% 감축, 산업 부문은 24% 감축을 설정하여 국가 핵심 인프라와 제조업의 전면적 전환을 요구합니다.",
    sourceDoc: "2050 탄소중립녹색성장위원회 (future_finance_doc.md)",
    officialMetrics: [
      {
        label: "2035 NDC 총감축률",
        raw: "2018년 대비 53~61% 감축",
        display: "53~61% 감축",
        highlight: true,
        description: "파리협정에 따른 차기 국가 온실가스 감축 목표",
      },
      {
        label: "전력 부문 감축 목표",
        raw: "69% 감축 (2018년 대비)",
        display: "69% 감축",
        highlight: true,
        description: "석탄화력 전면 폐지 및 무탄소 전원 70.7% 전환",
      },
      {
        label: "산업 부문 감축 목표",
        raw: "24% 감축 (2018년 대비)",
        display: "24% 감축",
        description:
          "수소환원제철, 친환경 나프타 등 천문학적 설비 전환 투자 요구",
      },
    ],
    detailedAnalysis: [
      "전력 부문 69% 감축은 2035년까지 노후 석탄화력발전소를 조기 폐쇄하고 해상풍력과 원전을 신규 배치해야 함을 의미합니다.",
      "산업 부문 24% 감축은 한계 감축 비용이 매우 높은 철강, 석유화학, 시멘트 업종에 막대한 친환경 공정 전환 금융 지원이 동반되어야 달성 가능합니다.",
    ],
    policyImplication:
      "산업계의 전환 리스크를 완화하기 위한 기후대응 녹색보증 및 탄소차액계약제도(CCfD) 도입이 시급합니다.",
  },

  exhibit_3f: {
    id: "exhibit_3f",
    code: "EXHIBIT 3-F",
    hallName: "HALL 03: 환경 문제 전시장",
    titleKo: "기후대응기금 5개년 예산 편성률 모니터",
    titleEn: "CLIMATE RESPONSE FUND 5-YEAR EXECUTION MONITOR",
    category: "기후재정",
    summary:
      "기후대응기금은 2025년 2조 6,217억 원에서 2026년 2조 9,057억 원으로 확대 편성되었으나, 5개년 국가재정계획(89.9조 원) 대비 실제 편성률은 74.2%에 불과하여 재정적 간극이 발생하고 있습니다.",
    sourceDoc: "기획재정부 & 기후에너지환경부 예산안 (future_finance_doc.md)",
    officialMetrics: [
      {
        label: "2025년 기금 규모",
        raw: "2조 6,217억 원",
        display: "2조 6,217억 원",
        description: "기후대응기금 운용 규모",
      },
      {
        label: "2026년 기금 규모",
        raw: "2조 9,057억 원 (기후에너지환경부 직접 운용)",
        display: "2조 9,057억 원",
        highlight: true,
        description: "친환경차 보급 및 에너지 절약 시설 투자",
      },
      {
        label: "5개년 계획 대비 편성률",
        raw: "계획 89.9조 원 대비 실제 74.2%",
        display: "74.2% (재정 갭 발생)",
        highlight: true,
        description: "배출권 수입 감소로 목표치 89.9조 대비 25.8%p 부족",
      },
    ],
    detailedAnalysis: [
      "기후대응기금의 주 수입원인 온실가스 배출권 유상할당 경매 수입이 배출권 가격 하락으로 정체되면서 당초 수립한 5개년 89.9조 원 투자 계획에 큰 차질이 빚어지고 있습니다.",
      "정부의 무탄소 전력망 구축과 산업계 감축 보조금을 차질 없이 집행하기 위해서는 일반회계 전입금 등 고정 수입원 확보가 필수적입니다.",
    ],
    policyImplication:
      "배출권 유상할당 경매 최저가격제 도입과 교통·에너지·환경세의 기후대응기금 법정 전입 비율 상향이 필요합니다.",
  },

  exhibit_3a: {
    id: "exhibit_3a",
    code: "EXHIBIT 3-A",
    hallName: "HALL 03: 환경 문제 전시장",
    titleKo: "한반도 미래 기후 3단계 시나리오 전시 챔버",
    titleEn: "KOREAN PENINSULA 3-STAGE CLIMATE SCENARIO CHAMBER",
    category: "기후전망",
    summary:
      "현재 8.8일인 폭염일수는 저탄소 시나리오(SSP1-2.6)에서 24.2일(+2.3°C), 고탄소 시나리오(SSP5-8.5)에서는 79.5일(+7.0°C)로 9배 폭증하며, 연간 자연재난 피해는 최대 11조 4,794억 원에 달합니다.",
    sourceDoc: "기상청 한반도 기후변화 전망보고서 & future_finance_doc.md",
    officialMetrics: [
      {
        label: "현재 폭염일수",
        raw: "8.8일",
        display: "연간 8.8일",
        description: "대한민국 평년 기준 연간 폭염일수",
      },
      {
        label: "저탄소 시나리오 (SSP1-2.6)",
        raw: "기온 +2.3°C 상승, 폭염일수 24.2일",
        display: "24.2일 (+2.3°C)",
        highlight: true,
        description: "전 지구적 탄소중립 성공 시 전망",
      },
      {
        label: "고탄소 시나리오 (SSP5-8.5)",
        raw: "기온 +7.0°C 상승, 폭염일수 79.5일 (9배)",
        display: "79.5일 (+7.0°C)",
        highlight: true,
        description: "현재 배출 추세 지속 시 여름철 대부분이 폭염",
      },
      {
        label: "연간 자연재난 피해 추정",
        raw: "연간 최대 11조 4,794억 원",
        display: "최대 11조 4,794억 원",
        description: "2002년 태풍 루사(7.9조 원) 피해의 1.4배 규모",
      },
    ],
    detailedAnalysis: [
      "고탄소 배출이 지속될 경우 2081~2100년 한반도는 아열대 기후로 완전히 전환되어 1년 중 80일 가까이 살인적인 폭염이 이어집니다.",
      "자연재해 복구비와 농어업 피해 보상금 등 재난 관련 재정 지출이 급증하여 국가 예산에 막대한 돌발 부담을 주게 됩니다.",
    ],
    policyImplication:
      "선제적인 기후적응 인프라 확충과 방재 예산의 상시화가 재정 파탄을 막는 핵심 열쇠입니다.",
  },

  exhibit_3b: {
    id: "exhibit_3b",
    code: "EXHIBIT 3-B",
    hallName: "HALL 03: 환경 문제 전시장",
    titleKo: "제11차 전기본 무탄소 발전 70.7% 디스플레이 타워",
    titleEn: "11TH BASIC ELECTRICITY PLAN: 70.7% CFE TOWER",
    category: "에너지믹스",
    summary:
      "제11차 전력수급기본계획에 따라 무탄소 발전 비중을 2023년 39.1%에서 2038년 70.7%로 대폭 확대하며, 원자력 35.2%, 신재생에너지 29.2%의 조화로운 포트폴리오를 구축합니다.",
    sourceDoc: "산업통상자원부 제11차 전력수급기본계획 (2024~2038)",
    officialMetrics: [
      {
        label: "2038년 무탄소 발전 목표",
        raw: "2023년 39.1% → 2030년 53.0% → 2038년 70.7%",
        display: "70.7% (2038)",
        highlight: true,
        description: "원전과 신재생의 쌍두마차 무탄소 전환",
      },
      {
        label: "원자력 발전 비중",
        raw: "2030년 31.8% → 2038년 35.2%",
        display: "35.2% (2038)",
        description: "기저부하로서의 원전 확대 및 신규 원전 건설",
      },
      {
        label: "신재생에너지 비중",
        raw: "2030년 18.8% → 2038년 29.2%",
        display: "29.2% (2038)",
        description: "태양광, 해상풍력 등 분산형 재생에너지 보급",
      },
      {
        label: "2035 NDC 감축 목표",
        raw: "2018년 대비 53~61% 감축 (전력 69%, 산업 24%)",
        display: "53~61% 감축",
        description: "국제사회에 공약한 국가 온실가스 감축 목표",
      },
    ],
    detailedAnalysis: [
      "무탄소 전력망 구축을 위해서는 신규 발전원 건설뿐만 아니라 동해안-수도권 송전선로 등 막대한 전력망 인프라 투자(한전 재정 부담)가 수반됩니다.",
      "온실가스 배출량은 2018년 742.3백만 톤으로 정점을 찍은 후 감소세를 유지해야 목표 달성이 가능합니다.",
    ],
    policyImplication:
      "원전과 재생에너지의 상호 보완적 믹스와 함께 송배전망 확충을 위한 정부 재정 지원 방안이 요구됩니다.",
  },

  exhibit_3c: {
    id: "exhibit_3c",
    code: "EXHIBIT 3-C",
    hallName: "HALL 03: 환경 문제 전시장",
    titleKo: "EU CBAM 탄소국경세 충격 및 기후대응기금 운용 월",
    titleEn: "EU CBAM IMPACT & CLIMATE RESPONSE FUND WALL",
    category: "무역장벽",
    summary:
      "EU CBAM 적용으로 한국의 대EU 수출 중 51억 달러(철강 89.3%, 알루미늄 10.6%)가 직접 영향권에 들며 25년간 연평균 약 3,000억 원의 추가 비용이 발생합니다. 2026년 기후대응기금은 2조 9,057억 원으로 편성되었습니다.",
    sourceDoc: "기획재정부 예산안 & 한국은행 CBAM 영향 보고서",
    officialMetrics: [
      {
        label: "EU CBAM 대상 수출액",
        raw: "대EU 수출 681억 달러 중 51억 달러 (7.5%)",
        display: "51억 달러 (7.5%)",
        highlight: true,
        description: "철강 89.3%(45억$), 알루미늄 10.6%(5.4억$)",
      },
      {
        label: "연평균 기업 부담액",
        raw: "25년간 연평균 약 3,000억 원",
        display: "연간 약 3,000억 원",
        description: "탄소국경세 부과로 인한 수출 단가 상승 압박",
      },
      {
        label: "2026 기후대응기금 예산",
        raw: "2025년 2조 6,217억 → 2026년 2조 9,057억 원",
        display: "2조 9,057억 원",
        description: "온실가스 감축설비 지원 및 녹색 금융 출자",
      },
      {
        label: "5개년 재정계획 대비 편성률",
        raw: "계획 89.9조 원 대비 실제 편성률 74.2%",
        display: "74.2% 편성률",
        description: "배출권 유상할당 수입 감소로 재원 조달에 한계 노출",
      },
    ],
    detailedAnalysis: [
      "CBAM은 탄소 배출이 많은 한국 주력 제조업(철강, 알루미늄)에 직접적인 관세 장벽으로 작용합니다.",
      "기후대응기금은 배출권 유상할당 수입을 주요 재원으로 하나, 탄소 가격 변동에 따라 수입이 불안정하여 안정적인 국고 지원이 필요합니다.",
    ],
    policyImplication:
      "국내 탄소배출권 가격 정상화와 저탄소 공정 전환 R&D 지원을 강화해야 합니다.",
  },

  exhibit_corridor_03: {
    id: "exhibit_corridor_03",
    code: "CORRIDOR 03",
    hallName: "AI 회랑 (복도 03)",
    titleKo: "사이버네틱 AI 회랑 안내 사이니지",
    titleEn: "CORRIDOR 03: AI TRANSIT WAY",
    category: "전이회랑",
    summary:
      "환경 문제를 지나 차세대 국가 성장 엔진이자 노동시장 대변혁을 이끄는 Hall 04(AI 기술관)으로 향하는 바이올렛 톤의 데이터 회랑입니다.",
    sourceDoc: "재정미래박물관 공간 동선 해설",
    officialMetrics: [
      {
        label: "회랑 길이",
        raw: "Z: -12,800px ~ -14,000px (1,200px)",
        display: "1,200px 심도",
        description: "퍼플/바이올렛 사이버 데이터 스트림 광원",
      },
      {
        label: "자동 센서 게이트",
        raw: "Z = -13,950px 접근 시 개방",
        display: "Hall 04 게이트 자동 개폐",
        description: "환경 반응형 슬라이딩 게이트",
      },
    ],
    detailedAnalysis: [
      "AI 기술은 생산성 혁신을 통해 세수 확충의 기회가 될 수도 있으나, 화이트칼라 일자리 대체와 전력망 수요 폭증이라는 새로운 재정 과제를 안겨줍니다.",
      "전방의 Hall 04 게이트를 통과하면 정부 AI 예산과 GPU 인프라, KDI 자동화율을 만나실 수 있습니다.",
    ],
    policyImplication: "휠을 내려 Hall 04 전시장 안으로 전진하세요.",
  },

  // ==========================================================
  // HALL 04: AI & FUTURE LABOR
  // ==========================================================
  exhibit_4d: {
    id: "exhibit_4d",
    code: "EXHIBIT 4-D",
    hallName: "HALL 04: AI 기술 전시장",
    titleKo: "41개 부처 AI 예산 배분 인포그래픽 월",
    titleEn: "41-MINISTRY AI BUDGET ALLOCATION INFOGRAPHIC WALL",
    category: "AI예산",
    summary:
      "2026년 대한민국 정부 AI 예산은 9.9조 원(41개 부처, 738개 사업, 정부 총지출 728조 원의 1.4%)으로 편성되었으며, 과기정통부(51%)와 산업부(17%), 중기부(9%) 등에 전략적으로 배분되었습니다.",
    sourceDoc:
      "과학기술정보통신부 2026 AI 예산 분석 보고서 (future_finance_doc.md)",
    officialMetrics: [
      {
        label: "2026년 정부 AI 총예산",
        raw: "9.9조 원 (738개 사업, 41개 부처)",
        display: "9.9조 원 (총지출의 1.4%)",
        highlight: true,
        description: "정부 총지출 728조 원 중 1.4%를 AI에 집중 투자",
      },
      {
        label: "과기정통부 배분 비중",
        raw: "51% (국가 AI 컴퓨팅 및 원천기술)",
        display: "51% (과반 집중)",
        highlight: true,
        description: "GPU 인프라 및 차세대 AI 파운데이션 모델 R&D",
      },
      {
        label: "산업부 / 중기부 비중",
        raw: "산업통상자원부 17%, 중소벤처기업부 9%",
        display: "산업부 17% · 중기부 9%",
        description: "제조업 AX 전환 및 AI 유니콘 스타트업 육성",
      },
      {
        label: "기타 38개 부처 비중",
        raw: "기타 부처 23%",
        display: "기타 23%",
        description: "국방, 교육, 의료, 법무 등 전 공공부문 AI 일상화",
      },
    ],
    detailedAnalysis: [
      "41개 전 부처가 참여하는 738개 사업에 총 9.9조 원이 투입되어 행정, 국방, 보건, 산업 전반의 인공지능 전환(AX)을 추진합니다.",
      "예산의 절반 이상(51%)을 과기정통부에 집중 배치하여 컴퓨팅 파워 부족을 해소하고 국가 AI 컴퓨팅 센터의 운영 기반을 확보합니다.",
    ],
    policyImplication:
      "부처 간 중복 투자를 방지하고 성능 검증 기반의 성과 평가 체계를 구축하여 재정 투자의 효율성을 극대화해야 합니다.",
  },

  exhibit_4e: {
    id: "exhibit_4e",
    code: "EXHIBIT 4-E",
    hallName: "HALL 04: AI 기술 전시장",
    titleKo: "AI 기본법 거버넌스 및 규제 체계도",
    titleEn: "AI FRAMEWORK ACT GOVERNANCE & REGULATORY SCHEME",
    category: "AI법제",
    summary:
      "2024년 12월 국회를 통과하여 2026년 1월 22일 전면 시행된 인공지능 기본법은 고영향 AI에 대한 위험기반 규제와 생성형 AI의 투명성 의무를 체계화했습니다.",
    sourceDoc:
      "대한민국 법률 제20689호 인공지능 발전과 신뢰 기반 조성 등에 관한 기본법 (future_finance_doc.md)",
    officialMetrics: [
      {
        label: "법률 제정 및 시행",
        raw: "2024년 12월 제정, 2026년 1월 22일 전면 시행",
        display: "2026.01.22 전면 시행",
        highlight: true,
        description: "세계에서 선도적으로 AI 기본법 체계 법제화 완료",
      },
      {
        label: "규제 패러다임",
        raw: "고영향 AI 위험기반 규제 및 투명성 의무",
        display: "고영향 위험기반 규제",
        highlight: true,
        description: "국민 생명·안전 직결 고영향 AI에 대한 사전 위험관리",
      },
      {
        label: "거버넌스 체계",
        raw: "대통령 직속 국가AI위원회 & AI안전연구소",
        display: "국가AI위원회 출범",
        description: "민관 합동 콘트롤타워와 안전 검증 전담기구 가동",
      },
    ],
    detailedAnalysis: [
      "AI 기본법은 산업 진흥과 안전 규제의 조화를 목표로 하며, 고영향 AI에 대한 위험 평가 및 설명가능성 의무를 부과합니다.",
      "공공과 민간의 AI 모델에 대한 신뢰성 인증을 위해 AI안전연구소 설립과 운영 예산이 지속적으로 투입됩니다.",
    ],
    policyImplication:
      "과도한 사전 규제로 스타트업의 혁신이 위축되지 않도록 네거티브 규제 원칙을 엄격히 준수해야 합니다.",
  },

  exhibit_4f: {
    id: "exhibit_4f",
    code: "EXHIBIT 4-F",
    hallName: "HALL 04: AI 기술 전시장",
    titleKo: "AI 도입과 청년 고용 비대칭성 충격",
    titleEn: "AI ADOPTION & YOUTH EMPLOYMENT ASYMMETRY SHOCK",
    category: "고용충격",
    summary:
      "KDI 실증 분석에 따르면 산업 내 AI 영향률이 10%p 상승할 때 남성 청년 임금근로는 3.3%p, 여성 청년은 5.3%p 감소하여 청년 엔트리 레벨 일자리에 심각한 진입 장벽을 초래합니다.",
    sourceDoc: "KDI 경제동향 정책분석 (future_finance_doc.md)",
    officialMetrics: [
      {
        label: "AI 영향률 10%p 상승 시",
        raw: "남성 청년 임금근로 -3.3%p 감소",
        display: "남성 청년 -3.3%p",
        highlight: true,
        description: "제조 및 기술 지원 초임 직무 축소",
      },
      {
        label: "여성 청년 충격도",
        raw: "여성 청년 임금근로 -5.3%p 감소",
        display: "여성 청년 -5.3%p (더 큰 충격)",
        highlight: true,
        description: "사무·행정·마케팅 직무의 생성형 AI 직접 대체 영향",
      },
      {
        label: "고용 형태 충격",
        raw: "신규 채용 억제로 인한 청년층 노동시장 진입 지연",
        display: "신규 진입 장벽화",
        description: "경력직 선호 현상 심화 및 청년 실업 장기화 위험",
      },
    ],
    detailedAnalysis: [
      "생성형 AI의 도입은 중장년 숙련 노동자보다 초임 청년 직무(리서치, 서무, 기초 코딩, 고객 대응)를 직접 대체하는 경향이 강합니다.",
      "특히 여성 청년의 진입 비중이 높았던 일반 사무·서비스 분야의 채용 감소가 두드러져 성별 고용 비대칭성을 심화시키고 있습니다.",
    ],
    policyImplication:
      "청년들이 AI를 활용하는 고급 엔지니어로 도약할 수 있도록 직무 전환 교육훈련 재정을 대폭 확충해야 합니다.",
  },

  exhibit_4a: {
    id: "exhibit_4a",
    code: "EXHIBIT 4-A",
    hallName: "HALL 04: AI 기술 전시장",
    titleKo: "정부 AI 예산 및 AI GPU 인프라 확대 타임라인",
    titleEn: "GOVERNMENT AI BUDGET & GPU INFRASTRUCTURE TIMELINE",
    category: "AI인프라",
    summary:
      "2026년 정부 AI 예산은 9.9조 원(정부 총지출의 1.4%)으로 편성되었으며, B200 기준 3.52만 장 확보를 시작으로 2028년 5만 장 조기 달성, 2030년 20만 장 확보 및 민간 550조 원 투자 유치를 목표로 추진됩니다.",
    sourceDoc: "과학기술정보통신부 AI 국가전략 & future_finance_doc.md",
    officialMetrics: [
      {
        label: "2026년 정부 AI 예산",
        raw: "9.9조 원 (41개 부처, 738개 사업)",
        display: "9.9조 원 (총지출의 1.4%)",
        highlight: true,
        description: "과기정통부 51%, 산업부 17%, 중기부 9%, 기타 23%",
      },
      {
        label: "현재 GPU 확보 규모",
        raw: "B200 기준 3.52만 장 확보",
        display: "B200 3.52만 장",
        description: "국가 AI 컴퓨팅 센터 핵심 인프라 구축",
      },
      {
        label: "2028년 조기 달성 목표",
        raw: "5만 장 조기 달성",
        display: "5만 장 조기 확보",
        description: "글로벌 AI 3대 강국(G3) 도약을 위한 컴퓨팅 자원 확충",
      },
      {
        label: "2030년 최종 목표",
        raw: "20만 장 확보 & 민간 550조 원 투자 유치",
        display: "20만 장 / 550조 원",
        highlight: true,
        description: "초거대 독자 파운데이션 모델 및 피지컬 AI 생태계 조성",
      },
    ],
    detailedAnalysis: [
      "AI 기본법이 2024년 12월 제정되어 2026년 1월 22일 전면 시행됨에 따라 고영향 AI 위험기반 규제와 투명성 의무가 도입되었습니다.",
      "GPU 확보 경쟁은 국가 주권과 직결된 사안으로, 정부 재정과 민간 자본을 결합한 대규모 컴퓨팅 펀드가 가동 중입니다.",
    ],
    policyImplication:
      "국가 컴퓨팅 인프라 투자와 전력망 연계를 국가 재정의 중점 투자 분야로 체계화해야 합니다.",
  },

  exhibit_4b: {
    id: "exhibit_4b",
    code: "EXHIBIT 4-B",
    hallName: "HALL 04: AI 기술 전시장",
    titleKo: "KDI 2030 직업별 업무 자동화율 비교 월",
    titleEn: "KDI 2030 JOB AUTOMATION RATE COMPARISON WALL",
    category: "노동시장",
    summary:
      "KDI 분석에 따르면 2030년 주방장·세탁원은 100%, 변호사는 74%, 판·검사는 69%, 국회의원·대학교수는 64%의 업무 자동화 위험에 노출됩니다. AI 영향률 10%p 상승 시 청년 고용이 비대칭적으로 위축됩니다.",
    sourceDoc: "KDI 경제동향 & 노동시장 AI 충격 분석 보고서",
    officialMetrics: [
      {
        label: "단순노무·서비스직",
        raw: "주방장·조리사 100%, 세탁원 100%",
        display: "100% 자동화 위험",
        highlight: true,
        description: "로봇공학과 AI 비전 융합으로 완전 자동화 직면",
      },
      {
        label: "전문 법조직",
        raw: "변호사 74%, 판사·검사 69%",
        display: "변호사 74% / 판검사 69%",
        description: "판례 분석, 서면 작성 등 지식 노동의 급속한 대체",
      },
      {
        label: "고위공직·교수직",
        raw: "국회의원 64%, 고위공무원 64%, 대학교수 64%",
        display: "64% 대체 가능성",
        description: "정책 분석, 입법 보좌, 강의 콘텐츠 생성 자동화",
      },
      {
        label: "청년 고용 비대칭성",
        raw: "AI 10%p 상승 시 남성 청년 -3.3%p, 여성 청년 -5.3%p",
        display: "청년 고용 감소",
        description: "신규 채용 억제로 인한 진입 장벽 심화",
      },
    ],
    detailedAnalysis: [
      "과거 산업혁명과 달리 생성형 AI는 전문직과 화이트칼라 업무를 집중적으로 대체하는 특성을 보입니다.",
      "신규 채용 감소는 청년 실업률 상승과 소득세 납부자 축소로 이어져 국가재정에 이중의 부담을 안겨줍니다.",
    ],
    policyImplication:
      "AI 전환 지원금, 평생직업교육 재정 바우처, 그리고 로봇세 또는 AI 기여금 논의의 제도화가 필요합니다.",
  },

  exhibit_4c: {
    id: "exhibit_4c",
    code: "EXHIBIT 4-C",
    hallName: "HALL 04: AI 기술 전시장",
    titleKo: "글로벌 AI 경쟁력 4대 지표 순위 전시 월",
    titleEn: "GLOBAL AI COMPETITIVENESS 4 CORE METRICS WALL",
    category: "국가경쟁력",
    summary:
      "한국은 AI 특허 밀도에서 세계 1위(14.31건)를 기록하며 기술 잠재력을 입증했으나, AI 확산은 18위, 민간 투자는 12위(미국의 2.1%), 특히 인재 순유입은 35위에 그쳐 심각한 두뇌 유출 문제를 겪고 있습니다.",
    sourceDoc: "스탠퍼드 대학교 AI Index 2026 & future_finance_doc.md",
    officialMetrics: [
      {
        label: "AI 특허 밀도",
        raw: "인구 1만 명당 14.31건 (세계 1위)",
        display: "세계 1위 (14.31건)",
        highlight: true,
        description: "세계 최고 수준의 원천 특허 출원 강국",
      },
      {
        label: "AI 사회적 확산 순위",
        raw: "세계 18위",
        display: "세계 18위",
        description: "기업 및 공공부문의 실질 도입 속도는 중위권",
      },
      {
        label: "민간 투자 규모",
        raw: "세계 12위 (미국의 2.1% 수준)",
        display: "세계 12위 (미국의 2.1%)",
        description: "미국·중국 등 글로벌 빅테크 자본과의 격차",
      },
      {
        label: "AI 인재 순유입 순위",
        raw: "세계 35위 (인재 유출 우려)",
        display: "세계 35위 (순유출)",
        highlight: true,
        description: "고급 AI 연구자의 해외 유출 심화",
      },
    ],
    detailedAnalysis: [
      "한국은 특허와 하드웨어(반도체) 역량은 최상위권이지만 소프트웨어 생태계, 민간 벤처 자본, 그리고 고급 연구 인력 유치에서 약점을 보입니다.",
      "인재 유출은 미래 성장동력 상실로 직결되므로 파격적인 정주 여건과 연구 인프라 지원이 필수적입니다.",
    ],
    policyImplication:
      "국내 유치 AI 연구자에 대한 파격적인 조세 감면과 국가 연구소 연구 자율성 보장 예산이 편성되어야 합니다.",
  },

  exhibit_corridor_04: {
    id: "exhibit_corridor_04",
    code: "CORRIDOR 04",
    hallName: "악어의 입 회랑 (복도 04)",
    titleKo: "악어의 입 회랑 안내 사이니지",
    titleEn: "CORRIDOR 04: FISCAL TRAJECTORY WAY",
    category: "전이회랑",
    summary:
      "수입 하락선과 지출 급증선이 벌어지는 바닥 가이드라인이 표시된 회랑으로, Hall 05(장기재정전망관)으로 향하는 크림슨 레드 톤의 전이 통로입니다.",
    sourceDoc: "재정미래박물관 공간 동선 해설",
    officialMetrics: [
      {
        label: "회랑 길이",
        raw: "Z: -16,800px ~ -18,000px (1,200px)",
        display: "1,200px 심도",
        description: "바닥에 갈라지는 수입 22.0% vs 지출 33.6% 적색 궤적",
      },
      {
        label: "자동 센서 게이트",
        raw: "Z = -17,950px 접근 시 개방",
        display: "Hall 05 게이트 자동 개폐",
        description: "환경 반응형 슬라이딩 게이트",
      },
    ],
    detailedAnalysis: [
      "세수 기반은 줄어드는데 법적 의무지출은 기하급수적으로 늘어나는 '악어의 입' 구조를 바닥 그래픽으로 직접 체감하는 구간입니다.",
      "전방의 Hall 05 게이트를 통과하면 2072 국가채무비율 173% 파노라마와 거대 조형물을 만나실 수 있습니다.",
    ],
    policyImplication: "계속 휠을 내려 Hall 05 전시장 안으로 걸어가세요.",
  },

  // ==========================================================
  // HALL 05: FISCAL OUTLOOK
  // ==========================================================
  exhibit_5a: {
    id: "exhibit_5a",
    code: "EXHIBIT 5-A",
    hallName: "HALL 05: 장기 재정 전망관",
    titleKo: "2026~2072 국가채무비율 대형 파노라마 타임라인",
    titleEn: "2026-2072 NATIONAL DEBT RATIO PANORAMA TIMELINE",
    category: "장기재정",
    summary:
      "국가채무비율은 2026년 51.6%(1,415조 원)에서 2029년 58.0%(1,789조 원), 2065년 156.3%, 그리고 2072년 173.0%(7,303조 원)까지 치솟아 미래세대의 국가 부도 위험을 가리킵니다.",
    sourceDoc: "국회예산정책처 2025~2072 장기재정전망 & 기재부 보고서",
    officialMetrics: [
      {
        label: "2026년 국가채무",
        raw: "51.6% (1,415조 원)",
        display: "51.6% (1,415조)",
        description: "GDP 대비 국가채무비율 50% 돌파",
      },
      {
        label: "2029년 국가채무",
        raw: "58.0% (1,789조 원)",
        display: "58.0% (1,789조)",
        description: "국가채무 1,800조 원 육박",
      },
      {
        label: "2065년 전망 (기재부)",
        raw: "기준 156.3% (시나리오별 133.0~173.4%)",
        display: "156.3%",
        highlight: true,
        description: "2020년 전망(2060년 79.7%) 대비 5년 만에 2배 폭증",
      },
      {
        label: "2072년 전망 (NABO)",
        raw: "173.0% (7,303조 원)",
        display: "173.0% (7,303조)",
        highlight: true,
        description: "OECD 최고 수준의 국가채무비율 기록 전망",
      },
    ],
    detailedAnalysis: [
      "국가채무의 가속화는 복지 분야 의무지출의 자연증가와 인구 감소에 따른 경제성장 둔화가 결합된 결과입니다.",
      "채무비율이 150%를 초과할 경우 국가 신용등급 강등과 외환·금융시장 불안정성이 급격히 고조됩니다.",
    ],
    policyImplication:
      "채무비율을 안정선(150%) 이내로 통제하기 위한 강력한 총량 관리와 조세·지출 개혁이 요구됩니다.",
  },

  exhibit_5b: {
    id: "exhibit_5b",
    code: "EXHIBIT 5-B",
    hallName: "HALL 05: 장기 재정 전망관",
    titleKo: "'악어의 입' 거대 조형물",
    titleEn: "MONUMENT: THE CROCODILE JAW OF NATIONAL FINANCE",
    category: "재정구조",
    summary:
      "총수입 비중은 24.5%에서 22.0%로 하락하는 반면, 총지출 비중은 25.5%에서 33.6%로 급증하며, 2072년 법적 의무지출 비중은 64.3%(GDP 대비 21.6%)에 달해 재정의 자율성이 완전히 마비됩니다.",
    sourceDoc: "국회예산정책처 NABO & future_finance_doc.md",
    officialMetrics: [
      {
        label: "2072 총수입 비중",
        raw: "GDP 대비 24.5% → 22.0% 하락",
        display: "22.0% (하락세)",
        description: "생산연령인구 축소로 세수 기반 침식",
      },
      {
        label: "2072 총지출 비중",
        raw: "GDP 대비 25.5% → 33.6% 급증",
        display: "33.6% (폭증세)",
        highlight: true,
        description: "고령화 관련 연금·의료 지출 폭발",
      },
      {
        label: "2072 의무지출 비중",
        raw: "정부 총지출 중 64.3% (GDP 대비 21.6%)",
        display: "64.3% (의무지출)",
        highlight: true,
        description: "법률상 삭감할 수 없는 고정 지출이 3분의 2 차지",
      },
      {
        label: "악어의 입 격차",
        raw: "수입 대비 지출 초과 11.6%p",
        display: "11.6%p 격차",
        description: "벌어진 입턱 사이로 매년 막대한 적자 국채 발행 불가피",
      },
    ],
    detailedAnalysis: [
      "악어의 입이란 수입 곡선은 아래로 처지고 지출 곡선은 위로 치솟아 마치 악어가 입을 크게 벌린 모양을 빗댄 재정학적 용어입니다.",
      "의무지출 비중이 64.3%까지 치솟으면 국방, 교육, R&D 등 미래를 위한 재량지출 여력이 완전히 박탈당합니다.",
    ],
    policyImplication:
      "지방교부세와 교육교부금의 자동 배분 산식을 뜯어고치고 의무지출 일몰제를 과감히 도입해야 합니다.",
  },

  exhibit_5c: {
    id: "exhibit_5c",
    code: "EXHIBIT 5-C",
    hallName: "HALL 05: 장기 재정 전망관",
    titleKo: "잠재성장률 추이 및 60-3 재정준칙 패널",
    titleEn: "POTENTIAL GDP GROWTH & 60-3 FISCAL RULE PANEL",
    category: "재정준칙",
    summary:
      "대한민국의 잠재성장률은 2026년 1.6%에서 2040년대 0.1% ~ -0.3%(KDI)로 마이너스 진입이 우려되며, 이를 통제하기 위한 '60-3 재정준칙'은 4년째 법제화가 계류 중입니다.",
    sourceDoc: "KDI 장기경제전망 & 기획재정부 재정준칙안",
    officialMetrics: [
      {
        label: "2026년 잠재성장률",
        raw: "1.6%",
        display: "1.6%",
        description: "노동 공급 둔화와 자본 축적 한계",
      },
      {
        label: "2040년대 잠재성장률 (KDI)",
        raw: "0.1% ~ -0.3% (역성장 진입 위험)",
        display: "0.1% ~ -0.3%",
        highlight: true,
        description: "생산인구 급감으로 대한민국 역사상 최초 마이너스 성장",
      },
      {
        label: "2072년 잠재성장률 (NABO)",
        raw: "0.3%",
        display: "0.3%",
        description: "초저성장 기조의 구조적 고착화",
      },
      {
        label: "60-3 재정준칙 핵심",
        raw: "적자비율 3% 이내, 채무 60% 초과 시 적자 2% 한도",
        display: "60-3 준칙 (계류 중)",
        highlight: true,
        description: "국가채무비율 60%와 관리재정수지 적자 3% 엄격 관리",
      },
    ],
    detailedAnalysis: [
      "잠재성장률이 0%대로 추락하면 분모(GDP)가 정체되어 채무비율(채무/GDP)이 더욱 가파르게 상승하는 악순환에 빠집니다.",
      "60-3 재정준칙은 재정 운용의 헌법적 가이드라인 역할을 하지만 정치권의 합의 지연으로 4년째 국회 문턱을 넘지 못하고 있습니다.",
    ],
    policyImplication:
      "여야 합의를 통한 재정준칙의 조속한 법제화와 생산성 향상을 위한 규제 개혁이 시급합니다.",
  },

  exhibit_5d: {
    id: "exhibit_5d",
    code: "EXHIBIT 5-D",
    hallName: "HALL 05: 장기 재정 전망관",
    titleKo: "기재부 2065 vs NABO 2072 장기재정 비교표 월",
    titleEn: "MOEF 2065 VS NABO 2072 FISCAL PROJECTION WALL",
    category: "재정전망비교",
    summary:
      "대한민국 재정의 양대 추계 기관인 기획재정부(2065년 156.3%)와 국회예산정책처(2072년 173.0%)의 공식 장기재정전망치를 단일 비교표로 대조 전시합니다.",
    sourceDoc:
      "기획재정부 장기재정전망 & 국회예산정책처 NABO 2025~2072 장기재정전망 (future_finance_doc.md)",
    officialMetrics: [
      {
        label: "기재부 2065 채무비율",
        raw: "기준 156.3% (시나리오별 133.0~173.4%)",
        display: "기준 156.3%",
        highlight: true,
        description: "2020년 전망(2060년 79.7%) 대비 5년 만에 2배 폭증",
      },
      {
        label: "NABO 2072 채무비율",
        raw: "173.0% (7,303조 원)",
        display: "173.0% (7,303조)",
        highlight: true,
        description: "국내총생산 대비 국가채무 1.7배 초과",
      },
      {
        label: "2040년대 잠재성장률 (KDI)",
        raw: "0.1% ~ -0.3%",
        display: "0.1% ~ -0.3%",
        description: "인구 감소에 따른 사상 최초 역성장 위험",
      },
      {
        label: "NABO 2072 의무지출 비중",
        raw: "64.3% (GDP 대비 21.6%)",
        display: "64.3% (GDP 21.6%)",
        description: "정부 총지출 중 3분의 2가 법적 의무지출로 결박",
      },
    ],
    detailedAnalysis: [
      "기획재정부와 국회예산정책처 모두 고령화와 저출생에 따른 의무지출 폭증으로 채무비율이 150%를 훌쩍 넘어설 것으로 일치된 경고를 보내고 있습니다.",
      "잠재성장률이 0%대로 추락하면 경제 규모의 분모가 늘어나지 않아 국가채무 증가율이 통제 불능 상태에 빠지게 됩니다.",
    ],
    policyImplication:
      "정부와 국회 간 정쟁을 멈추고 객관적 재정 추계를 바탕으로 한 초당적 재정개혁 패키지가 법제화되어야 합니다.",
  },

  exhibit_5e: {
    id: "exhibit_5e",
    code: "EXHIBIT 5-E",
    hallName: "HALL 05: 장기 재정 전망관",
    titleKo: "법정 의무지출 19.24%·20.79% 자동 배분 구조도",
    titleEn: "STATUTORY MANDATORY ALLOCATION STRUCTURE (19.24% / 20.79%)",
    category: "의무지출구조",
    summary:
      "내국세 수입의 19.24%는 지방교부세, 20.79%는 지방교육재정교부금으로 법률상 강제 배분(총 40.03%)되어 학령인구 급감에도 교육교부금이 줄지 않는 구조적 비효율을 고발합니다.",
    sourceDoc: "지방교부세법 & 지방교육재정교부금법 & future_finance_doc.md",
    officialMetrics: [
      {
        label: "지방교부세 법정 배분율",
        raw: "내국세 총액의 19.24%",
        display: "19.24%",
        highlight: true,
        description: "내국세 징수액에 비례하여 지자체로 자동 이전",
      },
      {
        label: "지방교육재정교부금 배분율",
        raw: "내국세 총액의 20.79%",
        display: "20.79%",
        highlight: true,
        description: "학령인구 감소와 무관하게 세수 연동으로 자동 교부",
      },
      {
        label: "내국세 자동 결박 총량",
        raw: "내국세의 40.03%",
        display: "합계 40.03%",
        highlight: true,
        description: "정부 징수 내국세 100원 중 40원이 법에 의해 자동 인출",
      },
      {
        label: "2072 총 의무지출 비중",
        raw: "정부 총지출의 64.3% (GDP 대비 21.6%)",
        display: "총지출의 64.3%",
        description:
          "사회보장 의무지출과 지방교부금이 결합되어 재정 경직성 심화",
      },
    ],
    detailedAnalysis: [
      "1970년대 고도성장기 및 학생 수 급증기에 설계된 법정 연동 비율이 인구 축소사회인 지금까지 유지되고 있습니다.",
      "학령인구는 30년 만에 반토막 났음에도 내국세가 늘어나면 교육교부금이 자동으로 불어나 방만한 적립금이나 현금 살포로 이어지는 문제를 개혁해야 합니다.",
    ],
    policyImplication:
      "내국세 고정 연동 방식을 폐지하고 학생 수 감소 추세 및 지자체 실수요에 연동하는 교부금 산식 전면 개편이 시급합니다.",
  },

  exhibit_corridor_05: {
    id: "exhibit_corridor_05",
    code: "CORRIDOR 05",
    hallName: "시뮬레이션 게이트 회랑 (복도 05)",
    titleKo: "시뮬레이션 게이트 회랑 안내 사이니지",
    titleEn: "CORRIDOR 05: LAB ACCESS WAY",
    category: "전이회랑",
    summary:
      "장기재정전망을 지나 관람객이 직접 정책을 선택하고 2055년 미래 재정을 시뮬레이션하는 Hall 06(나라살림게임 랩)으로 향하는 하이테크 게이트 통로입니다.",
    sourceDoc: "재정미래박물관 공간 동선 해설",
    officialMetrics: [
      {
        label: "회랑 길이",
        raw: "Z: -20,800px ~ -22,000px (1,200px)",
        display: "1,200px 심도",
        description: "사이언 네온 하이테크 랩 유도 라이트",
      },
      {
        label: "자동 센서 게이트",
        raw: "Z = -21,950px 접근 시 개방",
        display: "Hall 06 게이트 자동 개폐",
        description: "환경 반응형 슬라이딩 게이트",
      },
    ],
    detailedAnalysis: [
      "지금까지 살펴본 인구, 복지, 기후, AI, 재정 통계를 바탕으로 관람객 여러분이 직접 재정 책임자가 되어 미래를 결정하는 참여형 연구 랩입니다.",
      "전방의 게이트를 통과하면 4대 공식 시나리오와 15개 정책 선택형 콘솔을 직접 조작하실 수 있습니다.",
    ],
    policyImplication: "휠을 내려 시뮬레이션 랩 안으로 입장하세요.",
  },

  // ==========================================================
  // HALL 06: FISCAL SIMULATION LAB
  // ==========================================================
  exhibit_6a: {
    id: "exhibit_6a",
    code: "CONSOLE 6-A",
    hallName: "HALL 06: 재정 시뮬레이션관 (나라살림게임 랩)",
    titleKo: "2055 국가채무비율 메인 프로젝션 & 150% 안정선",
    titleEn: "2055 DEBT RATIO PROJECTION & 150% SAFETY BENCHMARK",
    category: "시뮬레이션",
    summary:
      "정책평가연구원(PERI) 모델 기반으로 30년 뒤(2055년) 국가채무비율을 예측하며, 현행 유지 시 202.0%에 달합니다. 전문가들은 150.0% 이하를 국가 안정선으로 권고합니다.",
    sourceDoc: "정책평가연구원(PERI) 나라살림게임 모델 (future_finance_doc.md)",
    officialMetrics: [
      {
        label: "현행 유지 시 2055 채무비율",
        raw: "202.0% (제도 변화 없이 현행 추세 지속)",
        display: "202.0% (현행 유지)",
        highlight: true,
        description: "특별한 재정 개혁 없이 현행 복지·조세 제도 지속 시",
      },
      {
        label: "전문가 합의 안정선",
        raw: "150.0% 이하",
        display: "150.0% (안정선)",
        highlight: true,
        description: "국가 신인도와 외환위기 방어를 위한 마지노선",
      },
      {
        label: "시뮬레이션 기간",
        raw: "30년 뒤 (2055년 기준)",
        display: "30년 뒤 (2055)",
        description: "현재 세대가 은퇴하고 청년세대가 주축이 되는 시점",
      },
    ],
    detailedAnalysis: [
      "현행 유지 시 202.0%는 국가채무가 국내총생산의 2배를 넘는다는 뜻으로, 이자 지출만으로도 정부 기능이 마비될 수 있습니다.",
      "콘솔을 통해 복지 지출 삭감, 증세, 교부금 감축 등의 조합을 선택하여 150% 안정선 이하로 진입하는 것이 관람객의 미션입니다.",
    ],
    policyImplication:
      "150% 안정선 달성을 위해서는 인기 없는 세금 인상과 지출 구조조정의 결단이 요구됩니다.",
  },

  exhibit_6b: {
    id: "exhibit_6b",
    code: "SCREEN 6-B",
    hallName: "HALL 06: 재정 시뮬레이션관 (나라살림게임 랩)",
    titleKo: "FUTURE GENERATION SCREEN: 미래세대 부담 연출",
    titleEn: "FUTURE GENERATION SCREEN: PERI-YOUNG INDEX",
    category: "세대부담",
    summary:
      "미래 세대(2022년 이후 출생자)의 생애 순조세부담률과 현재 세대 간 격차를 나타내는 PERI-Young 지수(PYI, 기준 31.8%p)를 실시간 반영하여 미래세대 캐릭터 표정으로 전달합니다.",
    sourceDoc: "PERI 연구보고서 & 미래세대 재정부담 연구",
    officialMetrics: [
      {
        label: "PERI-Young 지수 (PYI) 기준값",
        raw: "31.8%p 격차",
        display: "기준값 31.8%p",
        highlight: true,
        description:
          "2022년 이후 출생자가 현세대보다 31.8%p 더 많은 순세금 부담",
      },
      {
        label: "평가 연출",
        raw: "어린이 표정 (행복 / 중립 / 절망)",
        display: "실시간 캐릭터 반응",
        description: "정책 선택에 따라 미래세대의 삶의 질이 시각화됨",
      },
    ],
    detailedAnalysis: [
      "PYI가 31.8%p라는 것은 미래세대가 평생 벌어들인 소득의 절반 이상을 세금과 사회보험료로 내야 한다는 가혹한 현실을 의미합니다.",
      "지출을 늘리고 빚으로 메꾸는 정책은 당장은 달콤하지만 미래세대 화면의 아이를 절망에 빠뜨립니다.",
    ],
    policyImplication:
      "모든 재정 정책 결정 시 미래세대의 조세 부담을 사전에 검증하는 세대별 회계제도 도입이 필요합니다.",
  },

  exhibit_6c: {
    id: "exhibit_6c",
    code: "TERMINAL 6-C",
    hallName: "HALL 06: 재정 시뮬레이션관 (나라살림게임 랩)",
    titleKo: "15개 정책 선택형 시뮬레이션 콘솔",
    titleEn: "15-POLICY INTERACTIVE SIMULATION CONSOLE",
    category: "정책콘솔",
    summary:
      "독립된 3D 물리 콘솔 오브젝트로 구현된 공식 시뮬레이터입니다. 브루킹스연구소 'The Fiscal Ship'과 PERI 연구에 근거한 4대 공식 시나리오(최악 490.9%, 현행 202.0%, 방어① 161.5%, 방어② 135.1%)를 엄격하게 매핑합니다.",
    sourceDoc: "PERI 나라살림게임 15개 정책 데이터북 (future_finance_doc.md)",
    officialMetrics: [
      {
        label: "최악 시나리오",
        raw: "490.9% (주요 세금 40% 감세 + 복지·국방·교육 대폭 증액 포퓰리즘)",
        display: "490.9% (최악)",
        description: "포퓰리즘 조합 시 2055년 국가 부도 도달",
      },
      {
        label: "현행 유지 시나리오",
        raw: "202.0% (제도 변화 없이 현행 유지)",
        display: "202.0% (현행)",
        description: "개혁 없이 추세 유지 시",
      },
      {
        label: "방어 시나리오 ①",
        raw: "161.5% (복지 10% 증액 + 지방교부세/교육교부금 각 10% 삭감)",
        display: "161.5% (방어①)",
        description: "지출 구조조정을 통한 1차 방어선",
      },
      {
        label: "방어 시나리오 ②",
        raw: "135.1% (방어① + 소득세·법인세 각 10%p 증세)",
        display: "135.1% (안정선 통과)",
        highlight: true,
        description: "증세와 지출 개혁 결합 시 150% 안정선 이하 안착",
      },
    ],
    detailedAnalysis: [
      "본 시뮬레이션 콘솔은 임의의 계산식이나 할루시네이션을 철저히 배제하고, 공식 보고서의 4대 검증 시나리오만을 정확히 연동합니다.",
      "공식 시나리오 외 커스텀 조합을 선택할 경우 '공식 연구원 전망치가 제공되지 않는 조합입니다'라는 명확한 안내를 표기하여 통계적 신뢰성을 담보합니다.",
    ],
    policyImplication:
      "135.1%를 달성하기 위해서는 복지 확대와 더불어 교육교부금 축소, 그리고 소득세·법인세 증세라는 고통 분담이 전제되어야 합니다.",
  },

  exhibit_6d: {
    id: "exhibit_6d",
    code: "REPORT 6-D",
    hallName: "HALL 06: 재정 시뮬레이션관 (나라살림게임 랩)",
    titleKo: "전시 관람 완료 리포트 전광판",
    titleEn: "EXHIBITION COMPLETION REPORT BOARD: 3 STARS",
    category: "종합평가",
    summary:
      "나랏빚 별(150% 이하), 미래세대 별(PYI 하향), 국가목표 별(3대 정책 조합 달성)의 3가지 별 획득 기준을 종합하여 관람객의 미래 재정 리포트를 출력합니다.",
    sourceDoc: "PERI 시뮬레이션 판정 기준서",
    officialMetrics: [
      {
        label: "나랏빚 별 (Debt Star)",
        raw: "2055년 GDP 대비 국가채무비율 150% 이하 달성 여부",
        display: "150% 이하 판정",
        highlight: true,
        description: "안정선 통과 시 별 획득",
      },
      {
        label: "미래세대 별 (Future Star)",
        raw: "PERI-Young 지수(PYI, 기준 31.8%) 하향 달성",
        display: "PYI 하향 판정",
        description: "미래세대 부담 경감 시 별 획득",
      },
      {
        label: "국가 목표 별 (Goal Star)",
        raw: "선택한 3대 정책 조합 일관성 달성",
        display: "정책 균형 판정",
        description: "지속가능한 국가 목표 설정 시 별 획득",
      },
    ],
    detailedAnalysis: [
      "3개의 별을 모두 획득한 관람객은 미래세대에 부끄럽지 않은 균형 잡힌 재정 지도자의 면모를 증명한 것입니다.",
      "리포트 전광판을 확인한 후 전방의 게이트를 통과하여 전시 관람 종료 라운지(Museum Exit)로 이동하세요.",
    ],
    policyImplication:
      "재정의 건전성과 복지의 지속가능성은 양립 불가능한 대립물이 아닌, 정밀한 개혁을 통해 함께 달성해야 할 국가적 과제입니다.",
  },

  // ==========================================================
  // MUSEUM EXIT: SUMMARY LOUNGE
  // ==========================================================
  exhibit_exit_summary: {
    id: "exhibit_exit_summary",
    code: "EXIT SUMMARY",
    hallName: "전시 관람 종료 라운지",
    titleKo: "재정미래박물관 종합 관람 회고 및 데이터 아카이브",
    titleEn: "MUSEUM SUMMARY & OFFICIAL ARCHIVE REFERENCE",
    category: "관람종료",
    summary:
      "인구, 복지·연금, 환경, AI, 장기재정의 5대 핵심 축과 시뮬레이션 랩을 완주하셨습니다. 모든 전시 데이터는 대한민국 정부 및 국책 연구기관의 공식 문헌에 근거합니다.",
    sourceDoc:
      "future_finance_doc.md 단일 진실 공급원 (Single Source of Truth)",
    officialMetrics: [
      {
        label: "관람 완주 구역",
        raw: "14개 주요 공간 (Entrance ~ Exit)",
        display: "14개 공간 완주",
        highlight: true,
        description: "26,500px 심도의 연속 2.5D 공간 보행 완료",
      },
      {
        label: "공식 데이터 출처",
        raw: "통계청, 복지부, 산자부, 과기부, 기재부, KDI, 국회예산정책처, PERI",
        display: "8대 공식 기관 검증",
        description: "어떠한 임의 추정치도 없는 100% 무결성 데이터",
      },
    ],
    detailedAnalysis: [
      "국가재정은 정권이 바뀌어도 흔들리지 않고 미래세대에게 희망을 전급해야 하는 영속적인 약속입니다.",
      "언제든 상단의 'MUSEUM MAP'을 열어 원하는 전시관을 다시 방문하여 상세 데이터를 재검토하실 수 있습니다.",
    ],
    policyImplication:
      "우리의 작은 관심과 합의가 2072년 대한민국의 재정 지속가능성을 결정합니다.",
  },
};

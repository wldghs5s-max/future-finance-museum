export type SpatialZoneId =
  | "lobby"
  | "hall_01"
  | "corridor_01"
  | "hall_02"
  | "corridor_02"
  | "hall_03"
  | "corridor_03"
  | "hall_04"
  | "corridor_04"
  | "hall_05"
  | "corridor_05"
  | "hall_06"
  | "exit";

export interface SpatialZoneMeta {
  id: SpatialZoneId;
  zoneType: "lobby" | "hall" | "corridor" | "exit";
  hallNumber?: string;
  nameKo: string;
  nameEn: string;
  themeColor: string;
  prevZoneId?: SpatialZoneId;
  nextZoneId?: SpatialZoneId;
  description: string;
}

export const SPATIAL_ZONES: SpatialZoneMeta[] = [
  {
    id: "lobby",
    zoneType: "lobby",
    nameKo: "재정미래관 중앙 로비",
    nameEn: "GRAND LOBBY",
    themeColor: "#00F0FF",
    nextZoneId: "hall_01",
    description:
      "국가재정 미래를 상징하는 중앙 조형물과 6대 전시관 입구 사이니지가 위치한 메인 홀",
  },
  {
    id: "hall_01",
    zoneType: "hall",
    hallNumber: "01",
    nameKo: "인구변화 전시장",
    nameEn: "HALL 01: DEMOGRAPHY",
    themeColor: "#38BDF8",
    prevZoneId: "lobby",
    nextZoneId: "corridor_01",
    description:
      "인구 데드크로스와 초고령사회 25년, 2072 장래인구추계 대형 인포그래픽 월",
  },
  {
    id: "corridor_01",
    zoneType: "corridor",
    nameKo: "세대 연대의 회랑 (복도 01)",
    nameEn: "CORRIDOR 01: WELFARE TRANSIT",
    themeColor: "#F59E0B",
    prevZoneId: "hall_01",
    nextZoneId: "hall_02",
    description:
      "인구 절벽을 지나 국민연금과 사회보장 재정 위기를 조망하는 전이 복도",
  },
  {
    id: "hall_02",
    zoneType: "hall",
    hallNumber: "02",
    nameKo: "복지 및 연금 전시장",
    nameEn: "HALL 02: WELFARE & PENSION",
    themeColor: "#F59E0B",
    prevZoneId: "corridor_01",
    nextZoneId: "corridor_02",
    description:
      "국민연금 개혁 타임라인과 2065/2069 소진 시점 듀얼 게이지 월, 건강보험 경보 챔버",
  },
  {
    id: "corridor_02",
    zoneType: "corridor",
    nameKo: "기후위기 온실 회랑 (복도 02)",
    nameEn: "CORRIDOR 02: CLIMATE TRANSIT",
    themeColor: "#10B981",
    prevZoneId: "hall_02",
    nextZoneId: "hall_03",
    description:
      "사회보장 지출 압박을 지나 한반도 기후위기와 탄소 무역장벽으로 이어지는 전이 복도",
  },
  {
    id: "hall_03",
    zoneType: "hall",
    hallNumber: "03",
    nameKo: "환경 문제 전시장",
    nameEn: "HALL 03: ENVIRONMENT & CLIMATE",
    themeColor: "#10B981",
    prevZoneId: "corridor_02",
    nextZoneId: "corridor_03",
    description:
      "한반도 미래 기후 3단계 시나리오 전시 챔버와 제11차 전력수급기본계획 무탄소 발전 디스플레이",
  },
  {
    id: "corridor_03",
    zoneType: "corridor",
    nameKo: "사이버네틱 데이터 회랑 (복도 03)",
    nameEn: "CORRIDOR 03: AI TRANSIT",
    themeColor: "#A855F7",
    prevZoneId: "hall_03",
    nextZoneId: "hall_04",
    description:
      "기후위기에서 인공지능 국가 전략 및 컴퓨팅 인프라로 향하는 미래 회랑",
  },
  {
    id: "hall_04",
    zoneType: "hall",
    hallNumber: "04",
    nameKo: "AI 기술 전시장",
    nameEn: "HALL 04: AI & FUTURE LABOR",
    themeColor: "#A855F7",
    prevZoneId: "corridor_03",
    nextZoneId: "corridor_04",
    description:
      "정부 AI 예산 및 AI GPU 인프라 확대 전시물과 KDI 2030 직업별 업무 자동화율 비교 월",
  },
  {
    id: "corridor_04",
    zoneType: "corridor",
    nameKo: "악어의 입 회랑 (복도 04)",
    nameEn: "CORRIDOR 04: FISCAL TRAJECTORY",
    themeColor: "#F43F5E",
    prevZoneId: "hall_04",
    nextZoneId: "hall_05",
    description:
      "수입 하락선과 지출 급증선이 벌어지는 바닥 가이드라인이 표시된 장기재정 진입 통로",
  },
  {
    id: "hall_05",
    zoneType: "hall",
    hallNumber: "05",
    nameKo: "장기재정전망 전시장",
    nameEn: "HALL 05: FISCAL OUTLOOK",
    themeColor: "#F43F5E",
    prevZoneId: "corridor_04",
    nextZoneId: "corridor_05",
    description:
      "2026~2072 국가채무비율 파노라마 월과 악어의 입 거대 조형물, 60-3 재정준칙 패널",
  },
  {
    id: "corridor_05",
    zoneType: "corridor",
    nameKo: "정책 시뮬레이션 게이트 (복도 05)",
    nameEn: "CORRIDOR 05: LAB ACCESS",
    themeColor: "#00F0FF",
    prevZoneId: "hall_05",
    nextZoneId: "hall_06",
    description:
      "관람객이 직접 정책을 선택하고 미래를 시뮬레이션하는 나라살림게임 랩 입구",
  },
  {
    id: "hall_06",
    zoneType: "hall",
    hallNumber: "06",
    nameKo: "나라살림게임 시뮬레이션 랩",
    nameEn: "HALL 06: FISCAL LAB",
    themeColor: "#00F0FF",
    prevZoneId: "corridor_05",
    nextZoneId: "exit",
    description:
      "4대 공식 시나리오 및 15개 핵심 정책 탐색 터미널, 미래세대 캐릭터 연출 화면",
  },
  {
    id: "exit",
    zoneType: "exit",
    nameKo: "전시 관람 종료 라운지",
    nameEn: "MUSEUM EXIT & SUMMARY",
    themeColor: "#38BDF8",
    prevZoneId: "hall_06",
    description:
      "전체 6개 전시관 관람 성과와 재정미래관 결과 리포트를 확인하고 퇴장하는 라운지",
  },
];

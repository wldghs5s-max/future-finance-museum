export const GAME_CITY_BASE = "/images/museum/game-city-base.jpg";

export interface PolicyScene {
  id: string;
  src: string;
  alt: string;
  intent: string;
  placement: string;
}

export const POLICY_SCENES: Record<string, PolicyScene> = {
  tax_up: {
    id: "tax_up",
    src: "/images/museum/game-tax-up.jpg",
    alt: "공공 보관함에 자원이 모이고 가계와 상점의 남는 몫은 줄어든 모형",
    intent: "공공 예산 보관함 증가, 가계·기업 몫 감소. 선악·행복 단정 없음.",
    placement: "나라살림게임 라운드 1 결과 장면",
  },
  tax_down: {
    id: "tax_down",
    src: "/images/museum/game-tax-down.jpg",
    alt: "가계와 상점은 활발하고 공공 보관함의 여유는 줄어든 모형",
    intent: "가계·상점 활동 증가, 공공 여유 감소.",
    placement: "나라살림게임 라운드 1 결과 장면",
  },
  tax_hold: {
    id: "tax_hold",
    src: "/images/museum/game-tax-hold.jpg",
    alt: "일상은 유지되지만 추가 서비스 칸은 비어 있는 모형",
    intent: "기존 활동 유지, 필요한 서비스에 비해 추가 재원 부족.",
    placement: "나라살림게임 라운드 1 결과 장면",
  },
  spend_care: {
    id: "spend_care",
    src: "/images/museum/game-spend-care.jpg",
    alt: "돌봄 시설과 인력이 늘고 공공 보관함은 줄어든 모형",
    intent: "돌봄 시설·인력 증가, 공공 가용 자원 감소.",
    placement: "나라살림게임 라운드 2 결과 장면",
  },
  spend_future: {
    id: "spend_future",
    src: "/images/museum/game-spend-future.jpg",
    alt: "학교와 작업장은 확장되고 다른 서비스 건물은 그대로인 모형",
    intent: "배움·일자리 확장, 다른 서비스 확장 여력 제한.",
    placement: "나라살림게임 라운드 2 결과 장면",
  },
  spend_hold: {
    id: "spend_hold",
    src: "/images/museum/game-spend-hold.jpg",
    alt: "기존 시설은 유지되고 옆 공터는 비어 있는 모형",
    intent: "기존 시설 유지, 새 지원 공간은 확장되지 않음.",
    placement: "나라살림게임 라운드 2 결과 장면",
  },
  cut_grant: {
    id: "cut_grant",
    src: "/images/museum/game-cut-grant.jpg",
    alt: "중앙 곳간은 차고 지역 학교·서비스는 작아진 모형",
    intent: "중앙 곳간 여유 증가, 지역 학교·서비스 운영 규모 축소.",
    placement: "나라살림게임 라운드 3 결과 장면",
  },
  borrow_keep: {
    id: "borrow_keep",
    src: "/images/museum/game-borrow-keep.jpg",
    alt: "현재 서비스는 켜져 있고 옆으로 넘긴 상환 표식이 쌓인 모형",
    intent: "현재 서비스 유지, 미래로 넘긴 상환 부담 증가.",
    placement: "나라살림게임 라운드 3 결과 장면",
  },
  tighten_rule: {
    id: "tighten_rule",
    src: "/images/museum/game-tighten-rule.jpg",
    alt: "미래 부담 더미는 작고 현재 공사는 멈춰 있는 모형",
    intent: "미래 상환 부담 감소, 현재 시설·활동 제한.",
    placement: "나라살림게임 라운드 3 결과 장면",
  },
};

export function sceneForPolicy(id?: string): PolicyScene | undefined {
  if (!id) return undefined;
  return POLICY_SCENES[id];
}

export function sceneSrcForPolicy(id?: string): string {
  return sceneForPolicy(id)?.src ?? GAME_CITY_BASE;
}

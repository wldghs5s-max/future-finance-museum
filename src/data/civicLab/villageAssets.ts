import type { ZoneId, ZoneStep } from "./villageView";

export const VILLAGE_BASE = "/images/museum/village/village-base.jpg";

export const ZONE_STEPS: ZoneStep[] = [-3, -2, -1, 0, 1, 2, 3];

/**
 * 화면 세로 3등분이 아니라, 기준 마을의 남북 보행로를 따라 잡은 부지.
 * 세 구역의 맞댄 변은 같은 좌표를 써서 겹치거나 틈이 생기지 않게 한다.
 */
export const ZONE_PLOTS: Record<ZoneId, string> = {
  care: "polygon(0% 0%, 37% 0%, 38% 22%, 36% 40%, 32% 86%, 30% 100%, 0% 100%)",
  work: "polygon(37% 0%, 69% 0%, 70% 22%, 68% 40%, 67% 86%, 66% 100%, 30% 100%, 32% 86%, 36% 40%, 38% 22%)",
  commons: "polygon(69% 0%, 100% 0%, 100% 100%, 66% 100%, 67% 86%, 68% 40%, 70% 22%)",
};

export const FACILITY_LABELS: { text: string; x: string; y: string }[] = [
  { text: "돌봄센터", x: "18%", y: "27%" },
  { text: "주거", x: "16%", y: "58%" },
  { text: "학교", x: "48%", y: "22%" },
  { text: "공원", x: "80%", y: "56%" },
];

/** 시설 이름과 겹치지 않는 구역 화살표 위치. */
export const ZONE_ARROW_ANCHOR: Record<ZoneId, { left: string; top: string }> = {
  care: { left: "20%", top: "12%" },
  work: { left: "51%", top: "10%" },
  commons: { left: "84%", top: "14%" },
};

export function zoneSrc(zone: ZoneId, step: ZoneStep): string {
  return `/images/museum/village/${zone}_${step}.jpg`;
}

export function allVillageSrcs(): string[] {
  const srcs = [VILLAGE_BASE];
  for (const zone of ["care", "work", "commons"] as ZoneId[]) {
    for (const step of ZONE_STEPS) srcs.push(zoneSrc(zone, step));
  }
  return srcs;
}

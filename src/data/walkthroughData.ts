import { ExhibitDetailData } from "../types/exhibit";
import { visualsForExhibit } from "./visualAssets";
import { lobbyExhibits } from "./exhibits/lobby";
import { hall01Exhibits } from "./exhibits/hall01";
import { hall02Exhibits } from "./exhibits/hall02";
import { hall03Exhibits } from "./exhibits/hall03";
import { hall04Exhibits } from "./exhibits/hall04";
import { hall05Exhibits } from "./exhibits/hall05";
import { hall06Exhibits } from "./exhibits/hall06";
import { hallChoiceExhibits } from "./exhibits/hallChoices";

export const EXHIBIT_DETAILS_MAP: Record<string, ExhibitDetailData> = {
  ...lobbyExhibits,
  ...hall01Exhibits,
  ...hall02Exhibits,
  ...hall03Exhibits,
  ...hall04Exhibits,
  ...hall05Exhibits,
  ...hall06Exhibits,
  ...hallChoiceExhibits,
};

export function getExhibit(id: string): ExhibitDetailData | undefined {
  return EXHIBIT_DETAILS_MAP[id];
}

export function requireExhibit(id: string): ExhibitDetailData {
  const found = EXHIBIT_DETAILS_MAP[id];
  if (!found) {
    throw new Error(`전시 상세 데이터 없음: ${id}`);
  }
  return found;
}

export function exhibitHasDeepDetail(id: string): boolean {
  if (
    id === "exhibit_lobby_monument" ||
    id === "exhibit_6c" ||
    id.startsWith("exhibit_corridor_")
  ) {
    return false;
  }
  if (id.endsWith("_choices")) return true;
  const exhibit = EXHIBIT_DETAILS_MAP[id];
  if (!exhibit) return false;
  if (exhibit.comparison) return true;
  if (visualsForExhibit(id).length > 0) return true;
  if (exhibit.tradeoffs.length > 0) return true;
  if (exhibit.featuredMetrics.length >= 3) return true;
  if (exhibit.causes.length + exhibit.responses.length >= 3) return true;
  return false;
}

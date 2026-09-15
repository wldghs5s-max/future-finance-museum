export type ContentKind =
  | "source_body"
  | "institution_outlook"
  | "press_game_case"
  | "peri_game_rule"
  | "creative_staging";

export const CONTENT_KIND_LABEL: Record<ContentKind, string> = {
  source_body: "전시 설명",
  institution_outlook: "기관 전망",
  press_game_case: "언론 체험 사례",
  peri_game_rule: "교육 게임 설명",
  creative_staging: "공간 안내",
};

export interface SourceCitation {
  id: string;
  pages: string;
  institution?: string;
  documentName?: string;
  publishedAt?: string;
  url?: string;
  baseYear?: string;
  scenario?: string;
  note?: string;
}

export interface FeaturedMetric {
  label: string;
  display: string;
  raw: string;
  description: string;
  highlight?: boolean;
  kind: ContentKind;
  citationId?: string;
  href?: string;
}

export interface PolicyTradeoff {
  title: string;
  benefit: string;
  cost: string;
}

export interface ComparisonTable {
  headers: string[];
  rows: { label: string; values: string[]; note?: string }[];
  caption?: string;
}

export interface ExhibitDetailData {
  id: string;
  code: string;
  hallName: string;
  titleKo: string;
  titleEn: string;
  category: string;
  coreQuestion: string;
  summary: string;
  kind: ContentKind;
  featuredMetrics: FeaturedMetric[];
  causes: string[];
  responses: string[];
  tradeoffs: PolicyTradeoff[];
  comparison?: ComparisonTable;
  sources: SourceCitation[];
  relatedTerms: string[];
  stagingNote?: string;
}

export const MUSEUM_SPACE_GUIDE = {
  mapZoneCount: 12,
  breakdown: "로비 1 · 전시관 6 · 회랑 5",
  introNote: "입장 영상은 지도 항목이 아닌 오프닝입니다.",
  civicNote:
    "이 전시는 정부 공식 누리집이 아니며, 여러 기관의 공개 자료와 언론 보도를 재구성한 비공식 시민 교육 자료입니다. 수치는 각 자료의 발표 시점 기준이며 이후 달라질 수 있습니다.",
} as const;

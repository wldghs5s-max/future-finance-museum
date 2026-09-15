import {
  ContentKind,
  ExhibitDetailData,
  FeaturedMetric,
  PolicyTradeoff,
  SourceCitation,
} from "../../types/exhibit";

type Input = Omit<ExhibitDetailData, "sources"> & {
  sources: SourceCitation[];
};

export function ex(data: Input): ExhibitDetailData {
  return data;
}

export function m(
  label: string,
  display: string,
  raw: string,
  description: string,
  kind: ContentKind,
  extra?: Partial<FeaturedMetric>,
): FeaturedMetric {
  return { label, display, raw, description, kind, ...extra };
}

export function t(
  title: string,
  benefit: string,
  cost: string,
): PolicyTradeoff {
  return { title, benefit, cost };
}

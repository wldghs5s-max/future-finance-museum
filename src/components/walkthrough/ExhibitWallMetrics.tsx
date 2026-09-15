import React from "react";
import { ExternalLink } from "lucide-react";
import { ExhibitDetailData, FeaturedMetric } from "../../types/exhibit";

interface ExhibitWallMetricsProps {
  exhibit: ExhibitDetailData;
  max?: number;
}

export const ExhibitWallMetrics: React.FC<ExhibitWallMetricsProps> = ({
  exhibit,
  max = 4,
}) => {
  const metrics = exhibit.featuredMetrics.slice(0, max);
  if (metrics.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-2.5 mb-3">
      {metrics.map((metric) => (
        <MetricCard key={metric.label + metric.display} metric={metric} />
      ))}
    </div>
  );
};

function MetricCard({ metric }: { metric: FeaturedMetric }) {
  const body = (
    <>
      <span className="text-[10px] font-mono text-slate-400 block mb-0.5">
        {metric.label}
      </span>
      <div className="text-base sm:text-lg font-mono font-black text-white">
        {metric.display}
      </div>
      <span className="text-[9px] font-mono text-slate-500">
        {metric.raw}
      </span>
      {metric.href && (
        <span className="mt-1.5 inline-flex items-center gap-1 text-[10px] font-mono text-cyan-200">
          <ExternalLink className="w-3 h-3" />
          새 탭에서 열기
        </span>
      )}
    </>
  );
  const className = "p-3 rounded-xl holo-metric";

  if (!metric.href) {
    return <div className={className}>{body}</div>;
  }

  return (
    <a
      href={metric.href}
      target="_blank"
      rel="noopener noreferrer"
      data-testid={`metric-link-${metric.citationId ?? metric.label}`}
      onClick={(event) => event.stopPropagation()}
      className={`${className} block cursor-pointer pointer-events-auto hover:brightness-110`}
    >
      {body}
    </a>
  );
}

export const ExhibitWallHeader: React.FC<{
  exhibit: ExhibitDetailData;
  accentClass?: string;
  hideSummary?: boolean;
}> = ({ exhibit, accentClass = "text-cyan-400", hideSummary = false }) => (
  <>
    <h3 className="text-lg sm:text-xl font-black text-white font-mono mb-1">
      {exhibit.titleKo}
    </h3>
    <p className={`text-[11px] font-sans leading-relaxed mb-2 ${accentClass}`}>
      {exhibit.coreQuestion}
    </p>
    {!hideSummary && (
      <p className="text-xs text-slate-300 font-sans leading-relaxed mb-3">
        {exhibit.summary}
      </p>
    )}
  </>
);

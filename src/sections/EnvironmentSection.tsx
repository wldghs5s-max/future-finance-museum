import React, { useState } from "react";
import { SpatialZoneId } from "../types/spatial";
import { ENVIRONMENT_DATA } from "../data/museumData";
import { ExhibitPlaque } from "../components/spatial/ExhibitPlaque";
import { ComparisonBar } from "../components/common/ComparisonBar";
import { ArrowRight, Footprints, CornerDownLeft } from "lucide-react";

interface EnvironmentSectionProps {
  onNavigate: (zoneId: SpatialZoneId) => void;
}

export const EnvironmentSection: React.FC<EnvironmentSectionProps> = ({
  onNavigate,
}) => {
  const [climateStage, setClimateStage] = useState<
    "current" | "ssp126" | "ssp585"
  >("ssp585");
  const e = ENVIRONMENT_DATA;

  const currentClimate =
    climateStage === "current"
      ? e.climateComparison.current
      : climateStage === "ssp126"
        ? e.climateComparison.ssp126
        : e.climateComparison.ssp585;

  const heatwaveComparisonItems = [
    {
      label: "현재 기준",
      value: e.climateComparison.current.heatwaveDays.raw,
      displayValue: e.climateComparison.current.heatwaveDays.display,
      isHighlight: climateStage === "current",
    },
    {
      label: "저탄소 미래 (SSP1-2.6)",
      value: e.climateComparison.ssp126.heatwaveDays.raw,
      displayValue: e.climateComparison.ssp126.heatwaveDays.display,
      isHighlight: climateStage === "ssp126",
      colorClass: "bg-emerald-500 glow-emerald",
    },
    {
      label: "고탄소 미래 (SSP5-8.5)",
      value: e.climateComparison.ssp585.heatwaveDays.raw,
      displayValue: `${e.climateComparison.ssp585.heatwaveDays.display} (9배 급증)`,
      isHighlight: climateStage === "ssp585",
      colorClass: "bg-rose-500 glow-rose",
    },
  ];

  return (
    <div className="relative min-h-[90vh] py-10 px-4 sm:px-6 lg:px-8 museum-viewport animate-fade-in">
      {/* 1. 전시장 천장 레일 조명 */}
      <div className="absolute top-0 left-0 right-0 h-40 museum-ceiling pointer-events-none opacity-40 light-beam-ceiling" />

      {/* 2. 전시장 입구 아치 사이니지 */}
      <div className="relative z-10 max-w-6xl mx-auto border-b border-emerald-500/25 pb-8 mb-12 text-left">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 tracking-widest uppercase mb-2">
          <span className="px-2.5 py-0.5 rounded bg-emerald-950/80 border border-emerald-800/80">
            HALL 03
          </span>
          <span>ENVIRONMENT & CARBON TRANSITION</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-mono mb-3">
          환경 문제 전시장
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed font-sans">
          기후위기는 환경을 넘어 글로벌 무역 장벽과 국가 재정 복구비의 핵심
          뇌관입니다. 한반도 미래 기후 시나리오 전시 챔버와 제11차
          전력수급계획의 무탄소 에너지 믹스를 실물 전시물로 마주합니다.
        </p>
      </div>

      {/* 3. 전시장 실물 전시물들 */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        {/* EXHIBIT 3-A: 한반도 미래 기후 시나리오 전시 챔버 (수정 지침 준수) */}
        <ExhibitPlaque
          exhibitCode="EXHIBIT 03-A"
          titleKo="한반도 미래 기후 시나리오 전시 챔버 (2081~2100)"
          titleEn="KOREAN PENINSULA FUTURE CLIMATE SCENARIOS CHAMBER"
          primaryLabel="현재 기준 폭염일수"
          primaryValue={e.climateComparison.current.heatwaveDays.display}
          secondaryLabel="선택 시나리오 폭염일수"
          secondaryValue={`${currentClimate.heatwaveDays.display} (기온 ${currentClimate.tempRise.display})`}
          description="임의의 기후 계산을 하지 않고 기상청 및 국립기상과학원의 과학적 전망 시나리오 원본을 전시하는 실물 챔버입니다. 현재 기준과 저탄소(SSP1-2.6), 고탄소(SSP5-8.5)의 3단계 시나리오를 선택하여 온도 상승과 폭염 일수를 관람합니다."
          sourceNote="기상청 기후변화 국가 표준 시나리오 보고서"
          themeColor="#10B981"
        >
          {/* 3단계 시나리오 인터랙티브 선택 버튼 */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <button
              onClick={() => setClimateStage("current")}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono transition cursor-pointer ${
                climateStage === "current"
                  ? "bg-slate-700 text-white font-bold ring-1 ring-white/40"
                  : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              1. 현재 기준 (8.8일 / 기온 +0.0°C)
            </button>

            <button
              onClick={() => setClimateStage("ssp126")}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono transition cursor-pointer ${
                climateStage === "ssp126"
                  ? "bg-emerald-500 text-slate-950 font-bold glow-emerald"
                  : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              2. 저탄소 시나리오 (SSP1-2.6: 24.2일 / 기온 +2.3°C)
            </button>

            <button
              onClick={() => setClimateStage("ssp585")}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono transition cursor-pointer ${
                climateStage === "ssp585"
                  ? "bg-rose-500 text-white font-bold glow-rose"
                  : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              3. 고탄소 시나리오 (SSP5-8.5: 79.5일 / 기온 +7.0°C)
            </button>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed font-sans mb-4 p-4 rounded-xl bg-slate-950/70 border border-slate-800">
            {currentClimate.description}
            {climateStage === "ssp585" && (
              <span className="block mt-2 font-bold text-rose-400 font-mono">
                * 자연재난 피해 추정: 기후변화 영향 반영 시 연간 최대 11조
                4,794억 원 (2002년 태풍 루사 7.9조 원의 1.4배)
              </span>
            )}
          </p>

          <ComparisonBar
            title="폭염일수 3단계 비교 (현재 → 저탄소 → 고탄소)"
            items={heatwaveComparisonItems}
            maxValue={85}
            unit="일"
          />
        </ExhibitPlaque>

        {/* 2단 전시물: 무탄소 발전 로드맵 & EU CBAM/기후대응기금 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* EXHIBIT 3-B: 제11차 전력수급기본계획 무탄소 발전 70.7% 디스플레이 */}
          <div className="lg:col-span-6">
            <ExhibitPlaque
              exhibitCode="EXHIBIT 03-B"
              titleKo="제11차 전력수급기본계획 (2024~2038) 무탄소 발전 디스플레이"
              titleEn="11TH BASIC ELECTRICITY PLAN: 70.7% CARBON-FREE MIX"
              primaryLabel="2023년 무탄소 비중"
              primaryValue={
                e.carbonFreePower11thPlan.timeline[0].carbonFreeTotal.display
              }
              secondaryLabel="2038년 목표 비중"
              secondaryValue={
                e.carbonFreePower11thPlan.timeline[2].carbonFreeTotal.display
              }
              description="2023년 39.1% 수준이던 무탄소 발전 비중을 2030년 53.0%, 2038년 70.7%까지 확대합니다. 원자력(2038년 35.2%)과 재생에너지(2038년 29.2%)의 조화를 통해 청정 전력망을 구축하는 국가 전력 로드맵입니다."
              sourceNote="산업통상자원부 제11차 전력수급기본계획"
              themeColor="#10B981"
            >
              <div className="grid grid-cols-3 gap-2 mt-2">
                {e.carbonFreePower11thPlan.timeline.map((plan, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 text-center"
                  >
                    <span className="text-[10px] font-mono text-slate-400 block">
                      {plan.year}년
                    </span>
                    <span className="text-lg font-mono font-bold text-emerald-400 block">
                      {plan.carbonFreeTotal.display}
                    </span>
                    <span className="text-[9px] text-slate-500 block">
                      원전 {plan.nuclear.display} | 재생{" "}
                      {plan.renewable.display}
                    </span>
                  </div>
                ))}
              </div>
            </ExhibitPlaque>
          </div>

          {/* EXHIBIT 3-C: EU CBAM 탄소국경세 충격 및 기후대응기금 월 */}
          <div className="lg:col-span-6">
            <ExhibitPlaque
              exhibitCode="EXHIBIT 03-C"
              titleKo="EU CBAM 탄소국경세 충격 및 기후대응기금 운용 월"
              titleEn="EU CBAM TRADE BARRIERS & CLIMATE FUND WALL"
              primaryLabel="대EU 대상 수출액"
              primaryValue={
                e.tradeBarriersAndFinance.cbam.cbamTargetExport.display
              }
              secondaryLabel="25년간 연평균 부담"
              secondaryValue={
                e.tradeBarriersAndFinance.cbam.annualBurden25y.display
              }
              description="대EU 수출 681억 달러 중 51억 달러(7.5%, 철강 89.3%/알루미늄 10.6%)가 탄소국경세 부과 대상이며, 25년간 연평균 3,000억 원의 추가 부담이 발생합니다. 반면 기후대응기금의 5개년 계획 대비 편성률은 74.2%에 머물고 있습니다."
              sourceNote="기후에너지환경부 및 대외경제정책연구원"
              themeColor="#10B981"
            >
              <div className="space-y-2 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">2026년 기후대응기금:</span>
                  <span className="text-emerald-400 font-mono font-bold">
                    {e.tradeBarriersAndFinance.climateFund.year2026.display}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">
                    5개년 계획(89.9조) 편성률:
                  </span>
                  <span className="text-amber-400 font-mono font-bold">
                    {
                      e.tradeBarriersAndFinance.climateFund.actualBudgetRate
                        .display
                    }
                  </span>
                </div>
              </div>
            </ExhibitPlaque>
          </div>
        </div>
      </div>

      {/* 4. 전시장 출구: 다음 회랑(Corridor 03)으로 걸어 나가는 이동 게이트 */}
      <div className="relative z-10 max-w-6xl mx-auto mt-16 pt-10 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <button
          onClick={() => {
            onNavigate("hall_02");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-300 transition cursor-pointer"
        >
          <CornerDownLeft className="w-4 h-4 text-cyan-400" />
          <span>이전 전시장 (Hall 02 복지와 연금)으로 돌아가기</span>
        </button>

        <button
          onClick={() => {
            onNavigate("corridor_03");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-emerald-950/70 to-slate-900 border border-emerald-500/40 hover:border-emerald-400 hover:glow-cyan text-left group transition cursor-pointer"
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase">
                EXIT HALL 03 & ENTER CORRIDOR
              </span>
              <Footprints className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition">
              복도를 걸어 Hall 04 (AI 기술)로 이동하기
            </h4>
          </div>
          <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 group-hover:translate-x-1 transition">
            <ArrowRight className="w-5 h-5" />
          </div>
        </button>
      </div>

      {/* 5. 바닥 원근 타일 그리드 */}
      <div className="absolute bottom-0 left-0 right-0 h-48 museum-floor pointer-events-none opacity-40" />
    </div>
  );
};

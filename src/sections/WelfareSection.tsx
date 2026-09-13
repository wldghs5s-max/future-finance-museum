import React from "react";
import { SpatialZoneId } from "../types/spatial";
import { WELFARE_DATA } from "../data/museumData";
import { ExhibitPlaque } from "../components/spatial/ExhibitPlaque";
import { ComparisonBar } from "../components/common/ComparisonBar";
import {
  CheckCircle2,
  ArrowRight,
  Footprints,
  CornerDownLeft,
} from "lucide-react";

interface WelfareSectionProps {
  onNavigate: (zoneId: SpatialZoneId) => void;
}

export const WelfareSection: React.FC<WelfareSectionProps> = ({
  onNavigate,
}) => {
  const w = WELFARE_DATA;

  const oecdItems = w.oecdRealReplacementRanking.map((item) => ({
    label: item.country,
    value: item.rate.raw,
    displayValue: item.rate.display,
    sublabel: item.detail,
    isHighlight: item.country === "대한민국",
    colorClass:
      item.country === "대한민국" ? "bg-rose-500 glow-rose" : undefined,
  }));

  return (
    <div className="relative min-h-[90vh] py-10 px-4 sm:px-6 lg:px-8 museum-viewport animate-fade-in">
      {/* 1. 전시장 천장 레일 조명 */}
      <div className="absolute top-0 left-0 right-0 h-40 museum-ceiling pointer-events-none opacity-40 light-beam-ceiling" />

      {/* 2. 전시장 입구 아치 사이니지 */}
      <div className="relative z-10 max-w-6xl mx-auto border-b border-amber-500/25 pb-8 mb-12 text-left">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-400 tracking-widest uppercase mb-2">
          <span className="px-2.5 py-0.5 rounded bg-amber-950/80 border border-amber-800/80">
            HALL 02
          </span>
          <span>WELFARE & PENSION SUSTAINABILITY</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-mono mb-3">
          복지 및 연금 전시장
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed font-sans">
          초고령사회 도래에 따른 사회복지지출의 폭증과 국민연금 개혁의 역사,
          2065/2069년 소진 시점의 분리 분석, 2029년 건강보험 준비금 고갈 경보를
          실물 패널로 관람합니다.
        </p>
      </div>

      {/* 3. 전시장 실물 전시물들 */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        {/* EXHIBIT 2-A: 국민연금 기금 소진 시점 듀얼 게이지 월 (검토 지침 반영) */}
        <ExhibitPlaque
          exhibitCode="EXHIBIT 02-A"
          titleKo="국민연금 기금 소진 시점 듀얼 게이지 월: 2065 vs 2069"
          titleEn="PENSION FUND EXHAUSTION DUAL GAUGE WALL (REFORM vs INVESTMENT)"
          primaryLabel="기준 A: 제도 개혁 효과"
          primaryValue="2065년 소진 (+8년 연장)"
          secondaryLabel="기준 B: 2025 호실적 추가 반영"
          secondaryValue="2069년까지 연장 (+12년)"
          description="기존 2057년 소진 예정이던 국민연금 기금은 3차 개혁(보험료 13%·소득대체율 43%) 효과로 2065년까지 8년 연장되며, 2025년 기금운용 호실적(수익률 18.82%, 적립금 1,458조)을 추가 반영할 경우 2069년까지 연장됩니다. 두 시점을 명확히 분리하여 전시합니다."
          sourceNote="3차 국민연금 개혁 정부 공식 재정추계 보고서"
          themeColor="#F59E0B"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div className="p-4 rounded-xl bg-slate-950/80 border border-amber-500/30">
              <span className="text-xs font-mono text-amber-400 font-bold block mb-1">
                기준 A: 제도 개혁 (보험료 9%→13%, 소득대체율 43%)
              </span>
              <span className="text-2xl font-mono font-black text-white block mb-1">
                2065년 소진
              </span>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                적자 전환 시점 7년 연기(2041년 → 2048년) 및 기금 소진 시점 8년
                연기(2057년 → 2065년)
              </p>
            </div>

            <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30">
              <span className="text-xs font-mono text-cyan-300 font-bold block mb-1">
                기준 B: 2025 기금운용 호실적 반영
              </span>
              <span className="text-2xl font-mono font-black text-cyan-300 block mb-1">
                2069년까지 연장
              </span>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                연간 운용 수익률 18.82% 달성 및 총 적립금 1,458조 원 돌파 실적
                반영 시 2069년까지 연장
              </p>
            </div>
          </div>
        </ExhibitPlaque>

        {/* EXHIBIT 2-B: 국민연금 개혁 연혁 비교 아카이브 패널 */}
        <ExhibitPlaque
          exhibitCode="EXHIBIT 02-B"
          titleKo="국민연금 1차~3차 개혁 역사 아카이브 패널"
          titleEn="PENSION REFORM HISTORICAL TIMELINE PANEL (1998 / 2007 / 2025)"
          description="1998년 1차 개혁부터 2007년 2차 개혁, 그리고 2025년 통과되어 2026년 시행되는 3차 개혁까지의 명목소득대체율과 보험료율, 군복무·출산 크레딧, 국가 지급보장 법률 명시 변천사입니다."
          sourceNote="보건복지부 국민연금 개혁 공식 문서"
          themeColor="#F59E0B"
        >
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-mono uppercase">
                  <th className="py-2.5 px-3">개혁 단계</th>
                  <th className="py-2.5 px-3">개혁 방향</th>
                  <th className="py-2.5 px-3">명목 소득대체율</th>
                  <th className="py-2.5 px-3">보험료율</th>
                  <th className="py-2.5 px-3">크레딧 지원</th>
                  <th className="py-2.5 px-3">국가 지급보장</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-sans">
                {w.pensionReforms.map((item, idx) => (
                  <tr
                    key={idx}
                    className={
                      idx === 2
                        ? "bg-amber-950/20 font-medium"
                        : "hover:bg-slate-800/30"
                    }
                  >
                    <td className="py-3 px-3 font-bold whitespace-nowrap text-amber-400">
                      {item.step} ({item.year})
                    </td>
                    <td className="py-3 px-3 text-slate-300">
                      {item.direction}
                    </td>
                    <td className="py-3 px-3 font-mono text-slate-200">
                      {item.replacementRate}
                    </td>
                    <td className="py-3 px-3 font-mono font-bold text-amber-300">
                      {item.contributionRate}
                    </td>
                    <td className="py-3 px-3 text-slate-300">{item.credits}</td>
                    <td className="py-3 px-3">
                      {item.guarantee === "법률 명시" ? (
                        <span className="inline-flex items-center gap-1 text-emerald-400 font-bold">
                          <CheckCircle2 className="w-3.5 h-3.5" /> 법률 명시
                        </span>
                      ) : (
                        <span className="text-slate-500">{item.guarantee}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ExhibitPlaque>

        {/* EXHIBIT 2-C: OECD 실질소득대체율 전광판 & 건강보험 경보 챔버 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6">
            <ExhibitPlaque
              exhibitCode="EXHIBIT 02-C (DISPLAY)"
              titleKo="OECD 실질소득대체율 전광판"
              titleEn="OECD REAL PENSION REPLACEMENT RATE BOARD"
              primaryLabel="OECD 평균"
              primaryValue="50.7%"
              secondaryLabel="대한민국 실질소득대체율"
              secondaryValue="31.6% (최하위권)"
              description="한국의 실질소득대체율은 공적 31.2%와 퇴직 0.4%를 합쳐 31.6%에 불과하여 그리스(80.8%), 이탈리아(76.1%), 네덜란드(74.7%) 등 주요국 대비 취약한 노후 소득보장 수준을 보입니다."
              sourceNote="OECD Pensions at a Glance"
              themeColor="#F59E0B"
            >
              <ComparisonBar items={oecdItems} maxValue={100} unit="%" />
            </ExhibitPlaque>
          </div>

          <div className="lg:col-span-6">
            <ExhibitPlaque
              exhibitCode="EXHIBIT 02-C (CHAMBER)"
              titleKo="건강보험 2029년 준비금 고갈 경보 챔버"
              titleEn="HEALTH INSURANCE 2029 DEPLETION WARNING CHAMBER"
              primaryLabel="2024년 보험료율"
              primaryValue="7.09%"
              secondaryLabel="현행 지출 유지 시 필요 요율"
              secondaryValue="12% 이상 필요"
              description="급격한 인구 고령화와 의료 이용 증가로 인해 건강보험 누적준비금은 2029년 전액 소진될 전망이며, 현행 보장성을 유지하려면 보험료율을 12% 이상으로 급격히 인상해야 하는 재정 위기에 직면해 있습니다."
              sourceNote="국회예산정책처 및 건강보험공단 재정전망"
              themeColor="#F43F5E"
            >
              <div className="space-y-2 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">
                    간호·간병통합서비스 추가 소요:
                  </span>
                  <span className="text-white font-mono font-bold">
                    {w.healthInsurance.nursingServiceCost.display}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">상병수당 제도화 추진:</span>
                  <span className="text-slate-300">
                    {w.healthInsurance.sicknessAllowance}
                  </span>
                </div>
              </div>
            </ExhibitPlaque>
          </div>
        </div>
      </div>

      {/* 4. 전시장 출구: 다음 회랑(Corridor 02)으로 걸어 나가는 이동 게이트 */}
      <div className="relative z-10 max-w-6xl mx-auto mt-16 pt-10 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <button
          onClick={() => {
            onNavigate("hall_01");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-300 transition cursor-pointer"
        >
          <CornerDownLeft className="w-4 h-4 text-cyan-400" />
          <span>이전 전시장 (Hall 01 인구)으로 돌아가기</span>
        </button>

        <button
          onClick={() => {
            onNavigate("corridor_02");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-amber-950/70 to-slate-900 border border-amber-500/40 hover:border-amber-400 hover:glow-cyan text-left group transition cursor-pointer"
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase">
                EXIT HALL 02 & ENTER CORRIDOR
              </span>
              <Footprints className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition">
              복도를 걸어 Hall 03 (환경 문제)으로 이동하기
            </h4>
          </div>
          <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 group-hover:translate-x-1 transition">
            <ArrowRight className="w-5 h-5" />
          </div>
        </button>
      </div>

      {/* 5. 바닥 원근 타일 그리드 */}
      <div className="absolute bottom-0 left-0 right-0 h-48 museum-floor pointer-events-none opacity-40" />
    </div>
  );
};

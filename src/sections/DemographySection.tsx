import React, { useState } from "react";
import { SpatialZoneId } from "../types/spatial";
import { DEMOGRAPHY_DATA } from "../data/museumData";
import { ExhibitPlaque } from "../components/spatial/ExhibitPlaque";
import { ComparisonBar } from "../components/common/ComparisonBar";
import {
  Shield,
  MapPin,
  Home,
  ArrowRight,
  Footprints,
  CornerDownLeft,
} from "lucide-react";

interface DemographySectionProps {
  onNavigate: (zoneId: SpatialZoneId) => void;
}

export const DemographySection: React.FC<DemographySectionProps> = ({
  onNavigate,
}) => {
  const [socialChangeTab, setSocialChangeTab] = useState<
    "defense" | "capital" | "single"
  >("defense");
  const d = DEMOGRAPHY_DATA;

  const transitionYearsItems = [
    {
      label: "대한민국",
      value: d.superAgedSociety.transitionYears.korea,
      displayValue: "25년 (세계 최단기)",
      isHighlight: true,
    },
    {
      label: "일본",
      value: d.superAgedSociety.transitionYears.japan,
      displayValue: "35년",
    },
    {
      label: "미국",
      value: d.superAgedSociety.transitionYears.usa,
      displayValue: "94년",
    },
    {
      label: "프랑스",
      value: d.superAgedSociety.transitionYears.france,
      displayValue: "154년",
    },
  ];

  return (
    <div className="relative min-h-[90vh] py-10 px-4 sm:px-6 lg:px-8 museum-viewport animate-fade-in">
      {/* 1. 전시장 천장 레일 조명 및 스포트라이트 */}
      <div className="absolute top-0 left-0 right-0 h-40 museum-ceiling pointer-events-none opacity-40 light-beam-ceiling" />

      {/* 2. 전시장 입구 아치 사이니지 (Hall 01 Entrance Arch) */}
      <div className="relative z-10 max-w-6xl mx-auto border-b border-sky-500/25 pb-8 mb-12 text-left">
        <div className="flex items-center gap-2 text-xs font-mono text-sky-400 tracking-widest uppercase mb-2">
          <span className="px-2.5 py-0.5 rounded bg-sky-950/80 border border-sky-800/80">
            HALL 01
          </span>
          <span>DEMOGRAPHY & POPULATION ARCHIVE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-mono mb-3">
          인구변화 전시장
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed font-sans">
          2020년 대한민국 건국 이래 최초의 인구 데드크로스를 지나,
          생산연령인구의 절벽과 초고령사회가 가져올 국가 재정의 거대한 파도를
          실물 전시물로 조망합니다.
        </p>
      </div>

      {/* 3. 전시장 공간 배치 (물리적 전시물들) */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        {/* EXHIBIT 1-A: 2072 장래인구추계 대형 인포그래픽 월 (메인 벽면 전시물) */}
        <ExhibitPlaque
          exhibitCode="EXHIBIT 01-A"
          titleKo="대한민국 인구의 미래: 장래인구추계 대형 비교 월"
          titleEn="LONG-TERM POPULATION PROJECTION WALL (2024 vs 2072)"
          primaryLabel="2024년 총인구 기준"
          primaryValue={d.projectionComparison.indicators[0].year2024.display}
          secondaryLabel="2072년 총인구 전망"
          secondaryValue={`${d.projectionComparison.indicators[0].year2072.display} (-30%)`}
          description="통계청 공식 장래인구추계 데이터셋을 기반으로 제작된 실물 전시 벽면입니다. 1977년 인구 수준으로의 회귀와 생산연령인구의 급감, 노년부양비의 가파른 수직 상승 궤적을 비교합니다."
          sourceNote="통계청 장래인구추계 공식 데이터 (중위 추계 기준)"
          themeColor="#38BDF8"
        >
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-mono uppercase">
                  <th className="py-2.5 px-3">구분 지표</th>
                  <th className="py-2.5 px-3">2024년 기준</th>
                  <th className="py-2.5 px-3">2072년 전망</th>
                  <th className="py-2.5 px-3">변화 및 시사점</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-sans">
                {d.projectionComparison.indicators.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/40 transition">
                    <td className="py-3 px-3 font-bold text-white whitespace-nowrap">
                      {row.category}
                    </td>
                    <td className="py-3 px-3 text-slate-300 font-mono whitespace-nowrap">
                      {row.year2024.display}
                    </td>
                    <td className="py-3 px-3 text-sky-400 font-mono font-bold whitespace-nowrap">
                      {row.year2072.display}
                    </td>
                    <td className="py-3 px-3 text-slate-400">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ExhibitPlaque>

        {/* 2단 전시물 배치 (좌측: 타임 필러 조형물 / 우측: 인구 데드크로스 아카이브) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* EXHIBIT 1-B: 초고령사회 25년 도달 타임 필러 (조형물) */}
          <div className="lg:col-span-6">
            <ExhibitPlaque
              exhibitCode="EXHIBIT 01-B"
              titleKo="초고령사회 도달 시간 타임 필러"
              titleEn="TIME TO SUPER-AGED SOCIETY (20% POPULATION)"
              primaryLabel="한국 소요 기간"
              primaryValue="25년 (전 세계 최단기)"
              secondaryLabel="2025년 고령인구 비중"
              secondaryValue="20% 돌파"
              description="고령화사회(7%)에서 초고령사회(20%)까지 프랑스가 154년, 미국이 94년, 일본이 35년 걸린 과정을 대한민국은 단 25년 만에 도달했습니다. 사회보장과 연금 제도의 준비 시간을 극단적으로 압축시킨 공간 조형 전시물입니다."
              sourceNote="OECD 및 통계청 고령자 통계"
              themeColor="#38BDF8"
            >
              <ComparisonBar
                items={transitionYearsItems}
                maxValue={160}
                unit="년"
              />
            </ExhibitPlaque>
          </div>

          {/* 인구 데드크로스 및 부양비 전환 패널 */}
          <div className="lg:col-span-6">
            <ExhibitPlaque
              exhibitCode="EXHIBIT 01-C (ARCHIVE)"
              titleKo="2020년 인구 데드크로스와 '인구 오너스'"
              titleEn="DEMOGRAPHIC DEAD CROSS & ONUS SHIFT"
              primaryLabel="사망자 vs 출생아 (2020)"
              primaryValue="사망 30.5만 > 출생 27.2만"
              secondaryLabel="자연감소"
              secondaryValue="-2만 명 (건국 이래 최초)"
              description={d.deadCross.concept}
              sourceNote="통계청 인구동향조사"
              themeColor="#38BDF8"
            >
              <div className="grid grid-cols-2 gap-3 mt-2">
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 block mb-1">
                    2024년 노년부양비
                  </span>
                  <span className="text-xl font-mono font-bold text-white">
                    27.4명
                  </span>
                  <span className="text-[10px] text-slate-500 block mt-1">
                    생산 100명당 고령자
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-sky-950/40 border border-sky-500/30">
                  <span className="text-[10px] font-mono text-sky-300 block mb-1">
                    2072년 노년부양비
                  </span>
                  <span className="text-xl font-mono font-black text-sky-400">
                    104.2명
                  </span>
                  <span className="text-[10px] text-sky-400/80 block mt-1">
                    1명이 1명 이상 부양
                  </span>
                </div>
              </div>
            </ExhibitPlaque>
          </div>
        </div>

        {/* EXHIBIT 1-C: 국방·수도권·1인가구 주요 사회 변화 전시 키오스크 (수정사항 반영) */}
        <ExhibitPlaque
          exhibitCode="EXHIBIT 01-C"
          titleKo="국방·수도권·1인가구 주요 사회 변화 전시 키오스크"
          titleEn="MAJOR SOCIAL TRANSITIONS KIOSK (DEFENSE / CAPITAL / SINGLE-HOUSEHOLD)"
          description="인구 축소가 국방 안보의 병력 자원, 국토 균형 발전, 취약계층 1인가구 빈곤 구조에 미치는 원본 문서의 실증 변화를 터치 스탠드 키오스크 형태로 전시합니다."
          sourceNote="future_finance_doc.md Section I-3 부문별 파급 내용"
          themeColor="#38BDF8"
        >
          {/* 키오스크 터치 탭 */}
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-800">
            <button
              onClick={() => setSocialChangeTab("defense")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-sans transition cursor-pointer ${
                socialChangeTab === "defense"
                  ? "bg-sky-500 text-slate-950 font-bold"
                  : "bg-slate-900 text-slate-400 hover:text-white"
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>1. 국방 안보 변화</span>
            </button>

            <button
              onClick={() => setSocialChangeTab("capital")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-sans transition cursor-pointer ${
                socialChangeTab === "capital"
                  ? "bg-sky-500 text-slate-950 font-bold"
                  : "bg-slate-900 text-slate-400 hover:text-white"
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>2. 수도권 일극화 현상</span>
            </button>

            <button
              onClick={() => setSocialChangeTab("single")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-sans transition cursor-pointer ${
                socialChangeTab === "single"
                  ? "bg-sky-500 text-slate-950 font-bold"
                  : "bg-slate-900 text-slate-400 hover:text-white"
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              <span>3. 1인가구 빈곤 현황</span>
            </button>
          </div>

          {/* 탭 내용 */}
          {socialChangeTab === "defense" && (
            <div className="space-y-3 animate-fade-in">
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {d.impactSectors.defense.impact}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {d.impactSectors.defense.male20sTrend.map((t, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800"
                  >
                    <span className="text-[11px] font-mono text-slate-400 block mb-1">
                      {t.year} 20대 남성
                    </span>
                    <span className="text-xl font-mono font-black text-white">
                      {t.count.display}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {socialChangeTab === "capital" && (
            <div className="space-y-3 animate-fade-in">
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                수도권 인구 비중이 51%, GRDP가 52.3%에 달하는 반면, 89개
                인구감소지역의 10년간 인구증감률은 -12.5%에 이릅니다. 경북
                의성군의 경우 고령인구가 47.5%, 노년부양비가 92.1명에 달합니다.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 block">
                    수도권 인구
                  </span>
                  <span className="text-lg font-mono font-bold text-sky-400">
                    {
                      d.impactSectors.capitalConcentration.capitalPopRatio
                        .display
                    }
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 block">
                    수도권 GRDP
                  </span>
                  <span className="text-lg font-mono font-bold text-white">
                    {
                      d.impactSectors.capitalConcentration.capitalGrdpRatio
                        .display
                    }
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 block">
                    89개 지역 증감률
                  </span>
                  <span className="text-lg font-mono font-bold text-rose-400">
                    {
                      d.impactSectors.capitalConcentration
                        .depopulationAreas10yChange.display
                    }
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 block">
                    의성군 노년부양비
                  </span>
                  <span className="text-lg font-mono font-bold text-amber-400">
                    {
                      d.impactSectors.capitalConcentration.uiseongCase
                        .elderlyDependency.display
                    }
                  </span>
                </div>
              </div>
            </div>
          )}

          {socialChangeTab === "single" && (
            <div className="space-y-3 animate-fade-in">
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {d.impactSectors.singleHousehold.povertyCriteria} 가족 단위
                사회안전망 해체로 인한 복지 재정 지출 압박이 본격화됩니다.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 block">
                    2024년 1인가구
                  </span>
                  <span className="text-xl font-mono font-bold text-white">
                    {d.impactSectors.singleHousehold.trend[1].ratio.display}{" "}
                    (804만)
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 block">
                    2052년 1인가구
                  </span>
                  <span className="text-xl font-mono font-bold text-sky-400">
                    {d.impactSectors.singleHousehold.trend[2].ratio.display}
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 block">
                    60세 이상 빈곤율
                  </span>
                  <span className="text-xl font-mono font-bold text-rose-400">
                    {
                      d.impactSectors.singleHousehold.elderlyPovertyRatio
                        .display
                    }
                  </span>
                </div>
              </div>
            </div>
          )}
        </ExhibitPlaque>
      </div>

      {/* 4. 전시장 출구: 다음 회랑(Corridor 01)으로 걸어 나가는 이동 게이트 */}
      <div className="relative z-10 max-w-6xl mx-auto mt-16 pt-10 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <button
          onClick={() => {
            onNavigate("lobby");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-300 transition cursor-pointer"
        >
          <CornerDownLeft className="w-4 h-4 text-cyan-400" />
          <span>중앙 로비로 돌아가기 (RETURN TO LOBBY)</span>
        </button>

        {/* 복도 01로 이동하는 게이트 버튼 */}
        <button
          onClick={() => {
            onNavigate("corridor_01");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-sky-950/70 to-slate-900 border border-sky-500/40 hover:border-sky-400 hover:glow-cyan text-left group transition cursor-pointer"
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono tracking-widest text-sky-400 uppercase">
                EXIT HALL 01 & ENTER CORRIDOR
              </span>
              <Footprints className="w-3.5 h-3.5 text-sky-400" />
            </div>
            <h4 className="text-sm font-bold text-white group-hover:text-sky-300 transition">
              복도를 걸어 Hall 02 (복지와 연금)로 이동하기
            </h4>
          </div>
          <div className="w-10 h-10 rounded-lg bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-300 group-hover:translate-x-1 transition">
            <ArrowRight className="w-5 h-5" />
          </div>
        </button>
      </div>

      {/* 5. 바닥 원근 타일 그리드 */}
      <div className="absolute bottom-0 left-0 right-0 h-48 museum-floor pointer-events-none opacity-40" />
    </div>
  );
};

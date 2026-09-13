import React, { useState } from "react";
import { SpatialZoneId } from "../types/spatial";
import { FISCAL_DATA } from "../data/museumData";
import { ExhibitPlaque } from "../components/spatial/ExhibitPlaque";
import { ArrowRight, Footprints, CornerDownLeft } from "lucide-react";

interface FiscalOutlookSectionProps {
  onNavigate: (zoneId: SpatialZoneId) => void;
}

export const FiscalOutlookSection: React.FC<FiscalOutlookSectionProps> = ({
  onNavigate,
}) => {
  const [selectedTimelineIndex, setSelectedTimelineIndex] = useState(2);
  const f = FISCAL_DATA;
  const currentTimeline = f.debtRatiosTimeline[selectedTimelineIndex];

  return (
    <div className="relative min-h-[90vh] py-10 px-4 sm:px-6 lg:px-8 museum-viewport animate-fade-in">
      {/* 1. 전시장 천장 레일 조명 */}
      <div className="absolute top-0 left-0 right-0 h-40 museum-ceiling pointer-events-none opacity-40 light-beam-ceiling" />

      {/* 2. 전시장 입구 아치 사이니지 */}
      <div className="relative z-10 max-w-6xl mx-auto border-b border-rose-500/25 pb-8 mb-12 text-left">
        <div className="flex items-center gap-2 text-xs font-mono text-rose-400 tracking-widest uppercase mb-2">
          <span className="px-2.5 py-0.5 rounded bg-rose-950/80 border border-rose-800/80">
            HALL 05
          </span>
          <span>LONG-TERM FISCAL TRAJECTORY</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-mono mb-3">
          장기재정전망 전시장
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed font-sans">
          수입은 줄고 지출은 급증하는 재정 '악어의 입'과 2072년 국가채무비율
          173% 전망, 잠재성장률의 시간축 추이를 실물 전시 파노라마로 마주합니다.
        </p>
      </div>

      {/* 3. 전시장 실물 전시물들 */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        {/* EXHIBIT 5-A: 국가채무비율 파노라마 타임라인 월 (2026 ~ 2072) */}
        <ExhibitPlaque
          exhibitCode="EXHIBIT 05-A"
          titleKo="장단기 국가채무비율 대형 파노라마 타임라인 월"
          titleEn="NATIONAL DEBT-TO-GDP RATIO PANORAMIC TIMELINE WALL (2026 ~ 2072)"
          primaryLabel="선택 연도 국가채무비율"
          primaryValue={`${currentTimeline.ratio.display} (${currentTimeline.year})`}
          secondaryLabel="추계 발표 기관"
          secondaryValue={currentTimeline.agency}
          description="정부 예산안, 중기재정계획, 기획재정부 장기전망, 국회예산정책처(NABO) 공식 데이터를 시간축에 따라 인터랙티브하게 탐색할 수 있는 대형 전광판 파노라마입니다."
          sourceNote="기획재정부 장기재정전망 & 국회예산정책처 장기재정전망"
          themeColor="#F43F5E"
        >
          {/* 연도별 선택 탭 바 */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
            {f.debtRatiosTimeline.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedTimelineIndex(idx)}
                className={`p-3.5 rounded-xl text-left border transition cursor-pointer ${
                  selectedTimelineIndex === idx
                    ? "bg-rose-950/50 border-rose-500/60 glow-rose"
                    : "bg-slate-950/70 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                  <span>{item.year}</span>
                  <span className="text-[10px] text-slate-500">
                    {item.agency}
                  </span>
                </div>
                <div
                  className={`text-xl font-mono font-black ${selectedTimelineIndex === idx ? "text-rose-400" : "text-white"}`}
                >
                  {item.ratio.display}
                </div>
              </button>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300 font-sans leading-relaxed">
            {selectedTimelineIndex === 0 &&
              "2026년 기준 국가채무비율 51.6%(1,415조 원), 의무지출 54.4%, 잠재성장률 1.6% 수준입니다."}
            {selectedTimelineIndex === 1 &&
              "2029년 중기계획 상 채무비율 58.0%(1,789조 원)에 도달하며 재정준칙의 60% 경계선에 접근합니다."}
            {selectedTimelineIndex === 2 &&
              "2065년 기획재정부 기준 156.3%(시나리오별 133.0%~173.4%)로 2020년 전망(79.7%) 대비 5년 만에 2배 폭증했습니다."}
            {selectedTimelineIndex === 3 &&
              "2072년 국회예산정책처(NABO) 추계 기준 173.0%(7,303조 원), 의무지출 비중은 64.3%(GDP의 21.6%)에 도달합니다."}
          </div>
        </ExhibitPlaque>

        {/* 2단 전시물: '악어의 입' 조형물 & 잠재성장률 시간축 차트 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* EXHIBIT 5-B: '악어의 입' 수입 vs 지출 격차 거대 조형 인터페이스 */}
          <div className="lg:col-span-6">
            <ExhibitPlaque
              exhibitCode="EXHIBIT 05-B"
              titleKo="재정 '악어의 입' (Crocodile's Jaws) 거대 조형물"
              titleEn="CROCODILE'S JAWS: REVENUE DROP vs EXPENDITURE SURGE"
              primaryLabel="총수입 비중 변화 (2026→2065)"
              primaryValue={`${f.crocodileJaws.revenueChange.from.display} → ${f.crocodileJaws.revenueChange.to.display}`}
              secondaryLabel="총지출 비중 변화 (2026→2065)"
              secondaryValue={`${f.crocodileJaws.expenditureChange.from.display} → ${f.crocodileJaws.expenditureChange.to.display}`}
              description="생산인구 감소로 총수입 비중은 줄어드는 반면, 고령화 의무지출 폭증으로 총지출 비중은 가파르게 치솟아 거대한 입을 벌리는 악어의 형상을 나타낸 재정 구조 조형물입니다."
              sourceNote="기획재정부 장기재정전망"
              themeColor="#F43F5E"
            >
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300 font-sans leading-relaxed">
                <span className="font-bold text-rose-400 block mb-1">
                  5년 만의 전망치 폭증:
                </span>
                {f.crocodileJaws.fiveYearOutlookJump}
              </div>
            </ExhibitPlaque>
          </div>

          {/* EXHIBIT 5-C: 잠재성장률 시간축 차트 & 60-3 재정준칙 */}
          <div className="lg:col-span-6">
            <ExhibitPlaque
              exhibitCode="EXHIBIT 05-C"
              titleKo="잠재성장률 시간축 추이 및 60-3 재정준칙 패널"
              titleEn="POTENTIAL GROWTH TIMELINE & 60-3 FISCAL RULE PANEL"
              description="단순 감소 곡선이 아닌 원본 문서의 연도별 공식 산출치를 보존한 잠재성장률 시간축과, 국회 법제화 계류 중인 60-3 재정준칙을 전시합니다."
              sourceNote="정부·KDI·NABO 경제전망"
              themeColor="#F43F5E"
            >
              <div className="space-y-2 mb-4">
                {f.potentialGrowthTimeline.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800 flex justify-between items-center text-xs font-mono"
                  >
                    <span className="text-white font-bold">
                      {item.year} ({item.agency})
                    </span>
                    <span className="text-amber-400 font-bold">
                      {item.rateDisplay}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-lg bg-slate-950/50 border border-slate-800 text-xs text-slate-300">
                <span className="font-bold text-cyan-300 block mb-1">
                  재정준칙 60-3 원칙:
                </span>
                관리재정수지 적자 GDP 3% 이내 관리, 국가채무비율 60% 초과 시
                적자 한도 2%로 축소 (4년째 법제화 계류 중)
              </div>
            </ExhibitPlaque>
          </div>
        </div>
      </div>

      {/* 4. 전시장 출구: 다음 회랑(Corridor 05)으로 걸어 나가는 이동 게이트 */}
      <div className="relative z-10 max-w-6xl mx-auto mt-16 pt-10 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <button
          onClick={() => {
            onNavigate("hall_04");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-300 transition cursor-pointer"
        >
          <CornerDownLeft className="w-4 h-4 text-cyan-400" />
          <span>이전 전시장 (Hall 04 AI 기술)으로 돌아가기</span>
        </button>

        <button
          onClick={() => {
            onNavigate("corridor_05");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-rose-950/70 to-slate-900 border border-rose-500/40 hover:border-rose-400 hover:glow-cyan text-left group transition cursor-pointer"
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono tracking-widest text-rose-400 uppercase">
                EXIT HALL 05 & ENTER CORRIDOR
              </span>
              <Footprints className="w-3.5 h-3.5 text-rose-400" />
            </div>
            <h4 className="text-sm font-bold text-white group-hover:text-rose-300 transition">
              복도를 걸어 Hall 06 (나라살림게임 시뮬레이션 랩)으로 이동하기
            </h4>
          </div>
          <div className="w-10 h-10 rounded-lg bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-300 group-hover:translate-x-1 transition">
            <ArrowRight className="w-5 h-5" />
          </div>
        </button>
      </div>

      {/* 5. 바닥 원근 타일 그리드 */}
      <div className="absolute bottom-0 left-0 right-0 h-48 museum-floor pointer-events-none opacity-40" />
    </div>
  );
};

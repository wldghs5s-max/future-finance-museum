import React from "react";
import { SpatialZoneId } from "../types/spatial";
import { AI_DATA } from "../data/museumData";
import { ExhibitPlaque } from "../components/spatial/ExhibitPlaque";
import { ArrowRight, Footprints, CornerDownLeft } from "lucide-react";

interface AiSectionProps {
  onNavigate: (zoneId: SpatialZoneId) => void;
}

export const AiSection: React.FC<AiSectionProps> = ({ onNavigate }) => {
  const ai = AI_DATA;

  return (
    <div className="relative min-h-[90vh] py-10 px-4 sm:px-6 lg:px-8 museum-viewport animate-fade-in">
      {/* 1. 전시장 천장 레일 조명 */}
      <div className="absolute top-0 left-0 right-0 h-40 museum-ceiling pointer-events-none opacity-40 light-beam-ceiling" />

      {/* 2. 전시장 입구 아치 사이니지 */}
      <div className="relative z-10 max-w-6xl mx-auto border-b border-purple-500/25 pb-8 mb-12 text-left">
        <div className="flex items-center gap-2 text-xs font-mono text-purple-400 tracking-widest uppercase mb-2">
          <span className="px-2.5 py-0.5 rounded bg-purple-950/80 border border-purple-800/80">
            HALL 04
          </span>
          <span>AI & FUTURE LABOR ARCHIVE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-mono mb-3">
          AI 기술 전시장
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed font-sans">
          인공지능 대전환의 시대, 정부 AI 예산과 연산 인프라의 단계적 확대
          로드맵, 그리고 노동시장 직업별 업무 자동화의 명암을 실물 전시물로
          관람합니다.
        </p>
      </div>

      {/* 3. 전시장 실물 전시물들 */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        {/* EXHIBIT 4-A: 정부 AI 예산 및 AI GPU 인프라 확대 전시물 (수정 지침 준수) */}
        <ExhibitPlaque
          exhibitCode="EXHIBIT 04-A"
          titleKo="정부 AI 예산 및 AI GPU 인프라 확대 전시물"
          titleEn="GOVERNMENT AI BUDGET & COMPUTING INFRASTRUCTURE EXPANSION"
          primaryLabel="2026년 정부 AI 예산"
          primaryValue={ai.governanceAndBudget.budget2026.display}
          secondaryLabel="현재 B200 GPU 확보량"
          secondaryValue={ai.gpuInfrastructure.b200Current.display}
          description="2026년 정부 총지출의 1.4%(728조 중 9.9조 원, 41개 부처 738개 사업)가 투입되는 AI 국가 전략과, 현재 3.52만 장에서 2028년 5만 장, 2030년 20만 장으로 이어지는 연산 인프라 확대 시간축을 전시합니다."
          sourceNote="과학기술정보통신부 및 기획재정부 2026년 AI 예산안"
          themeColor="#A855F7"
        >
          {/* 시간축에 따른 GPU 인프라 확대 로드맵 패널 */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-purple-500/30 mb-5">
            <span className="text-xs font-mono text-purple-300 uppercase tracking-wider block mb-3 font-bold">
              AI GPU 연산 인프라 단계별 시간축 로드맵:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 text-center">
                <span className="text-[11px] font-mono text-slate-400 block mb-1">
                  현재 (B200 확보)
                </span>
                <span className="text-2xl font-mono font-black text-white">
                  {ai.gpuInfrastructure.b200Current.display}
                </span>
                <span className="text-[10px] text-slate-500 block mt-1">
                  인프라 구축 착수
                </span>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 text-center">
                <span className="text-[11px] font-mono text-slate-400 block mb-1">
                  2028년 (조기 달성)
                </span>
                <span className="text-2xl font-mono font-black text-purple-400">
                  5만 장
                </span>
                <span className="text-[10px] text-purple-400/80 block mt-1">
                  국가 허브 구축
                </span>
              </div>
              <div className="p-3.5 rounded-lg bg-purple-950/40 border border-purple-500/40 text-center">
                <span className="text-[11px] font-mono text-purple-300 block mb-1">
                  2030년 (최종 목표)
                </span>
                <span className="text-2xl font-mono font-black text-cyan-300">
                  20만 장
                </span>
                <span className="text-[10px] text-cyan-400/80 block mt-1">
                  민간 550조 원 투자 연계
                </span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-300 font-sans flex items-center justify-between">
              <span>* 2026년 7월 초과세수 5조 원 투입:</span>
              <span className="text-cyan-300 font-mono font-bold">
                차세대 GPU 1만 개 확보 및 독자 프런티어 모델 개발
              </span>
            </div>
          </div>

          {/* 부처별 예산 배분 비율 */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-slate-400 block mb-1">
              2026년 부처별 AI 예산 배분:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
              {ai.governanceAndBudget.ministryAllocation.map((m, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded bg-slate-950 border border-slate-800 flex justify-between"
                >
                  <span className="text-slate-400">{m.ministry}</span>
                  <span className="text-purple-300 font-bold">
                    {m.share.display}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ExhibitPlaque>

        {/* 2단 전시물: 직업별 업무 자동화율 비교 월 & 글로벌 AI Index */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* EXHIBIT 4-B: KDI 2030 직업별 업무 자동화율 비교 월 (수정 지침 준수) */}
          <div className="lg:col-span-7">
            <ExhibitPlaque
              exhibitCode="EXHIBIT 04-B"
              titleKo="KDI 2030 직업별 업무 자동화율 비교 월"
              titleEn="KDI 2030 JOB AUTOMATION COMPARISON WALL & YOUTH EMPLOYMENT"
              description="한국개발연구원(KDI) 공식 분석에 따른 직업군별 업무 자동화율 비교 전시물입니다. 단순 노무직뿐 아니라 전문·고소득 직군 전반으로 확대되는 자동화 양상을 실물 벽면으로 시각화합니다."
              sourceNote="KDI AI 도입에 따른 고용 구조 변화 보고서"
              themeColor="#A855F7"
            >
              <div className="space-y-2.5 mb-5">
                {ai.laborImpact.automationRateKdi2030.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 flex items-center justify-between"
                  >
                    <span className="text-xs font-bold text-white">
                      {item.job}
                    </span>
                    <span
                      className={`text-base font-mono font-black ${item.rate.raw === 100 ? "text-rose-400" : "text-purple-300"}`}
                    >
                      {item.rate.display}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800 text-xs text-slate-300 font-sans">
                <span className="font-bold text-rose-400 block mb-1">
                  청년 고용 비대칭성 충격:
                </span>
                AI 영향률 10%p 상승 시 남성 청년 임금근로{" "}
                {ai.laborImpact.youthEmploymentImpact.maleYouthDecrease.display}
                , 여성 청년{" "}
                {
                  ai.laborImpact.youthEmploymentImpact.femaleYouthDecrease
                    .display
                }{" "}
                감소
              </div>
            </ExhibitPlaque>
          </div>

          {/* EXHIBIT 4-C: 글로벌 AI Index 2026 세계 순위 4대 HUD 패널 */}
          <div className="lg:col-span-5">
            <ExhibitPlaque
              exhibitCode="EXHIBIT 04-C"
              titleKo="글로벌 AI Index 2026 세계 순위 4대 HUD 패널"
              titleEn="GLOBAL AI INDEX 2026 4-PILLAR RANKING HUD"
              description="한국의 인공지능 원천 기술 집중도와 산업 확산 속도, 민간 투자 유치 격차를 글로벌 순위로 일목요연하게 조망합니다."
              sourceNote="Stanford AI Index 2026 공식 지표"
              themeColor="#A855F7"
            >
              <div className="space-y-2.5">
                {ai.globalIndex2026Hud.map((hud, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 flex items-center justify-between"
                  >
                    <div>
                      <span className="text-xs text-slate-300 font-bold block">
                        {hud.indicator}
                      </span>
                      <span className="text-[10px] text-slate-500">
                        {hud.context}
                      </span>
                    </div>
                    <span
                      className={`text-lg font-mono font-black ${hud.rankDisplay === "세계 1위" ? "text-cyan-300" : "text-purple-300"}`}
                    >
                      {hud.rankDisplay}
                    </span>
                  </div>
                ))}
              </div>
            </ExhibitPlaque>
          </div>
        </div>
      </div>

      {/* 4. 전시장 출구: 다음 회랑(Corridor 04)으로 걸어 나가는 이동 게이트 */}
      <div className="relative z-10 max-w-6xl mx-auto mt-16 pt-10 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <button
          onClick={() => {
            onNavigate("hall_03");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-300 transition cursor-pointer"
        >
          <CornerDownLeft className="w-4 h-4 text-cyan-400" />
          <span>이전 전시장 (Hall 03 환경 문제)으로 돌아가기</span>
        </button>

        <button
          onClick={() => {
            onNavigate("corridor_04");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-purple-950/70 to-slate-900 border border-purple-500/40 hover:border-purple-400 hover:glow-cyan text-left group transition cursor-pointer"
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase">
                EXIT HALL 04 & ENTER CORRIDOR
              </span>
              <Footprints className="w-3.5 h-3.5 text-purple-400" />
            </div>
            <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition">
              복도를 걸어 Hall 05 (장기재정전망)로 이동하기
            </h4>
          </div>
          <div className="w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 group-hover:translate-x-1 transition">
            <ArrowRight className="w-5 h-5" />
          </div>
        </button>
      </div>

      {/* 5. 바닥 원근 타일 그리드 */}
      <div className="absolute bottom-0 left-0 right-0 h-48 museum-floor pointer-events-none opacity-40" />
    </div>
  );
};

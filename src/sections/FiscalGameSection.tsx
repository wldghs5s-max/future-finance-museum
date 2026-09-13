import React, { useState } from "react";
import { SpatialZoneId } from "../types/spatial";
import { OfficialScenarioId } from "../types/museum";
import {
  OFFICIAL_SCENARIOS,
  BENCHMARK_STABLE_LINE,
  PYI_BASE_METRIC,
  POLICY_CARDS,
} from "../data/gameData";
import { ExhibitPlaque } from "../components/spatial/ExhibitPlaque";
import confetti from "canvas-confetti";
import {
  Star,
  Smile,
  Frown,
  Meh,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  BookOpen,
  RefreshCw,
  Info,
  Award,
  ShieldCheck,
  ArrowRight,
  Footprints,
  CornerDownLeft,
} from "lucide-react";

interface FiscalGameSectionProps {
  onNavigate: (zoneId: SpatialZoneId) => void;
  onOpenGlossary: () => void;
}

export const FiscalGameSection: React.FC<FiscalGameSectionProps> = ({
  onNavigate,
  onOpenGlossary,
}) => {
  const [activeScenarioId, setActiveScenarioId] =
    useState<OfficialScenarioId>("defense_2");
  const [selectedPolicies, setSelectedPolicies] = useState<string[]>([
    "welfare_up_10",
    "local_grant_cut_10",
    "edu_grant_cut_10",
    "tax_raise_10p",
  ]);
  const [matchStatus, setMatchStatus] = useState<"matched" | "out_of_range">(
    "matched",
  );

  const activeScenario =
    OFFICIAL_SCENARIOS.find((s) => s.id === activeScenarioId) ||
    OFFICIAL_SCENARIOS[3];

  const togglePolicy = (policyId: string) => {
    let nextSelected: string[];
    if (selectedPolicies.includes(policyId)) {
      nextSelected = selectedPolicies.filter((id) => id !== policyId);
    } else {
      nextSelected = [...selectedPolicies, policyId];
    }
    setSelectedPolicies(nextSelected);

    // 공식 4대 시나리오 정합성 판별
    const matched = OFFICIAL_SCENARIOS.find((s) => {
      if (s.associatedPolicies.length !== nextSelected.length) return false;
      return s.associatedPolicies.every((p) => nextSelected.includes(p));
    });

    if (matched) {
      setActiveScenarioId(matched.id);
      setMatchStatus("matched");
      if (matched.star1Achieved) {
        triggerConfetti();
      }
    } else {
      setMatchStatus("out_of_range");
    }
  };

  const handleSelectOfficialPreset = (scenarioId: OfficialScenarioId) => {
    const target = OFFICIAL_SCENARIOS.find((s) => s.id === scenarioId);
    if (target) {
      setActiveScenarioId(scenarioId);
      setSelectedPolicies([...target.associatedPolicies]);
      setMatchStatus("matched");
      if (target.star1Achieved) {
        triggerConfetti();
      }
    }
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // ignore
    }
  };

  const star1 = matchStatus === "matched" && activeScenario.star1Achieved;
  const star2 =
    matchStatus === "matched" &&
    (activeScenario.id === "defense_1" || activeScenario.id === "defense_2");
  const star3 = matchStatus === "matched" && activeScenario.id === "defense_2";
  const totalStars = [star1, star2, star3].filter(Boolean).length;

  return (
    <div className="relative min-h-[90vh] py-10 px-4 sm:px-6 lg:px-8 museum-viewport animate-fade-in">
      {/* 1. 전시장 천장 레일 조명 */}
      <div className="absolute top-0 left-0 right-0 h-40 museum-ceiling pointer-events-none opacity-40 light-beam-ceiling" />

      {/* 2. 전시장 입구 아치 사이니지 */}
      <div className="relative z-10 max-w-6xl mx-auto border-b border-cyan-500/25 pb-8 mb-10 text-left">
        <div className="flex items-center justify-between gap-4 mb-2">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-widest uppercase">
            <span className="px-2.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/80">
              HALL 06
            </span>
            <span>PARTICIPATORY POLICY SIMULATION LAB</span>
          </div>

          <button
            onClick={onOpenGlossary}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-amber-400 hover:text-white transition cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>재정 용어사전 열기</span>
          </button>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-mono mb-3">
          나라살림게임 시뮬레이션 랩
        </h2>

        {/* 엄격한 교육용 시뮬레이터 원칙 고지 */}
        <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-start gap-3 text-xs text-cyan-200 leading-relaxed font-sans mt-3">
          <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white block mb-0.5 font-bold">
              [전시 안내] 정책평가연구원(PERI) 개발 모델 기반의 교육용 재정 체험
              인터페이스입니다.
            </strong>
            데이터 신뢰성을 위해 임의의 가상 경제 계산식을 적용하지 않습니다.
            공식 4대 시나리오를 구성하는 핵심 정책 패키지를 탐색하여 2055년
            대한민국의 재정 결과를 직접 확인하세요.
          </div>
        </div>
      </div>

      {/* 3. 랩 실물 콘솔 및 뷰어 룸 배치 */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-10">
        {/* 중앙 메인 뷰어 월: 2055 국가채무비율 & 150% 안정선 & 미래세대 캐릭터 연출 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 좌측: 2055 국가채무비율 메인 디스플레이 */}
          <div className="lg:col-span-6">
            <ExhibitPlaque
              exhibitCode="CONSOLE 06-A"
              titleKo="2055년 국가채무비율 메인 프로젝션 월"
              titleEn="2055 DEBT RATIO MAIN PROJECTION WALL & BENCHMARK"
              description="공식 4대 시나리오 정합성에 따라 도출된 2055년 국가채무비율 결과입니다. 전문가 안정선 150%는 시나리오 버튼이 아닌 목표 기준선으로 별도 표시됩니다."
              sourceNote="정책평가연구원(PERI) 2055 재정 시뮬레이션 공식 시나리오"
              themeColor="#00F0FF"
            >
              {matchStatus === "matched" ? (
                <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 mb-4">
                  <span className="text-xs font-mono text-slate-400 block mb-1">
                    선택 공식 시나리오 결과 ({activeScenario.nameKo})
                  </span>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span
                      className={`text-4xl sm:text-5xl font-mono font-black ${
                        activeScenario.debtRatio2055.raw <= 150
                          ? "text-cyan-400 glow-cyan"
                          : "text-rose-400"
                      }`}
                    >
                      {activeScenario.debtRatio2055.display}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {activeScenario.star1Achieved
                        ? "✓ 안정선 방어"
                        : "안정선 초과"}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {activeScenario.summary}
                  </p>
                </div>
              ) : (
                /* 공식 시나리오 범위 밖 조합 안내 (사용자 지침 엄격 준수) */
                <div className="p-5 rounded-xl bg-slate-950 border border-amber-500/40 mb-4">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-1">
                    <AlertCircle className="w-4 h-4" />
                    공식 전망치가 제공되지 않는 조합입니다.
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    데이터 무결성을 위해 임의의 가상 경제 수치를 계산하지
                    않습니다. 하단의{" "}
                    <strong className="text-cyan-300">
                      공식 4대 시나리오 프리셋
                    </strong>
                    을 선택하여 공식 산출치를 관람해주세요.
                  </p>
                </div>
              )}

              {/* 전문가 안정선 (150%) Reference Benchmark Line */}
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400 flex items-center gap-1.5 font-bold">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    {BENCHMARK_STABLE_LINE.title}
                  </span>
                  <span className="text-emerald-400 font-bold">
                    {BENCHMARK_STABLE_LINE.display}
                  </span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      matchStatus === "matched" &&
                      activeScenario.debtRatio2055.raw <= 150
                        ? "bg-emerald-400 glow-emerald"
                        : "bg-rose-500"
                    }`}
                    style={{
                      width:
                        matchStatus === "matched"
                          ? `${Math.min((activeScenario.debtRatio2055.raw / 300) * 100, 100)}%`
                          : "50%",
                    }}
                  />
                </div>
              </div>
            </ExhibitPlaque>
          </div>

          {/* 우측: FUTURE GENERATION SCREEN (미래세대 캐릭터 연출 및 PYI 상태) */}
          <div className="lg:col-span-6">
            <ExhibitPlaque
              exhibitCode="SCREEN 06-B"
              titleKo="FUTURE GENERATION SCREEN: 미래세대 캐릭터 연출 및 PYI 상태"
              titleEn="FUTURE GENERATION CHARACTER VISUAL & QUALITATIVE PYI STATUS"
              description="미래세대 캐릭터의 표정과 감정 애니메이션은 시각적 전시 연출 요소이며 실제 경제지표 계산 결과나 PYI와의 인과관계가 아닙니다. PYI 기준값은 원본 문서에 따른 31.8%p입니다."
              sourceNote="PERI-Young Index 공식 정의 (기준 31.8%p)"
              themeColor="#00F0FF"
            >
              <div className="flex items-center gap-5 p-4 rounded-xl bg-slate-950/80 border border-slate-800 mb-5">
                <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0">
                  {matchStatus !== "matched" ? (
                    <Meh className="w-8 h-8 text-slate-400" />
                  ) : activeScenario.pyiQualitativeState.childMood ===
                    "happy" ? (
                    <Smile className="w-10 h-10 text-emerald-400 animate-bounce" />
                  ) : activeScenario.pyiQualitativeState.childMood ===
                    "neutral" ? (
                    <Meh className="w-10 h-10 text-amber-400" />
                  ) : (
                    <Frown className="w-10 h-10 text-rose-400 animate-pulse" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-mono text-slate-400">
                      PERI-Young 지수 (기준 {PYI_BASE_METRIC.display})
                    </span>
                    {matchStatus === "matched" && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full font-bold bg-cyan-950 text-cyan-300 border border-cyan-700">
                        상태: {activeScenario.pyiQualitativeState.status}
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    미래세대 캐릭터 연출 (시각적 감정 반응)
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {matchStatus === "matched"
                      ? activeScenario.pyiQualitativeState.description
                      : "공식 시나리오를 선택하시면 미래세대의 정성적 조세 부담 상태가 표시됩니다."}
                  </p>
                </div>
              </div>

              {/* 3대 승리 별 달성 트래커 */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div
                  className={`p-2.5 rounded-lg border ${star1 ? "bg-cyan-950/40 border-cyan-500/50 glow-cyan" : "bg-slate-950 border-slate-800 opacity-60"}`}
                >
                  <Star
                    className={`w-4 h-4 mx-auto mb-1 ${star1 ? "text-cyan-400 fill-cyan-400" : "text-slate-600"}`}
                  />
                  <span className="font-bold text-white block text-[11px]">
                    나랏빚 별
                  </span>
                  <span className="text-[9px] text-slate-400">150% 이하</span>
                </div>
                <div
                  className={`p-2.5 rounded-lg border ${star2 ? "bg-amber-950/40 border-amber-500/50 glow-amber" : "bg-slate-950 border-slate-800 opacity-60"}`}
                >
                  <Star
                    className={`w-4 h-4 mx-auto mb-1 ${star2 ? "text-amber-400 fill-amber-400" : "text-slate-600"}`}
                  />
                  <span className="font-bold text-white block text-[11px]">
                    미래세대 별
                  </span>
                  <span className="text-[9px] text-slate-400">부담 완화</span>
                </div>
                <div
                  className={`p-2.5 rounded-lg border ${star3 ? "bg-emerald-950/40 border-emerald-500/50 glow-emerald" : "bg-slate-950 border-slate-800 opacity-60"}`}
                >
                  <Star
                    className={`w-4 h-4 mx-auto mb-1 ${star3 ? "text-emerald-400 fill-emerald-400" : "text-slate-600"}`}
                  />
                  <span className="font-bold text-white block text-[11px]">
                    국가목표 별
                  </span>
                  <span className="text-[9px] text-slate-400">방어 패키지</span>
                </div>
              </div>
            </ExhibitPlaque>
          </div>
        </div>

        {/* 공식 4대 시나리오 프리셋 선택 바 */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-bold">
              OFFICIAL SCENARIO PRESETS (공식 4대 시나리오)
            </span>
            <span className="text-[11px] font-mono text-cyan-400">
              * 150% 안정선은 상단 벤치마크 기준선으로 별도 표시됩니다.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {OFFICIAL_SCENARIOS.map((scen) => {
              const isSelected =
                matchStatus === "matched" && activeScenarioId === scen.id;

              return (
                <button
                  key={scen.id}
                  onClick={() => handleSelectOfficialPreset(scen.id)}
                  className={`p-4 rounded-xl text-left border transition cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-cyan-950/50 border-cyan-400 glow-cyan"
                      : "bg-slate-950/70 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        {scen.badge}
                      </span>
                      {isSelected && (
                        <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      )}
                    </div>
                    <h5 className="text-sm font-bold text-white mb-1">
                      {scen.nameKo}
                    </h5>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-baseline justify-between">
                    <span className="text-[10px] font-mono text-slate-400">
                      2055 채무:
                    </span>
                    <span
                      className={`text-xl font-mono font-black ${scen.star1Achieved ? "text-cyan-400" : "text-slate-200"}`}
                    >
                      {scen.debtRatio2055.display}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 15개 핵심 정책 카드 탐색 터미널 */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                정책 탐색 터미널 콘솔 (15개 정책 카드)
              </h3>
              <p className="text-xs text-slate-400">
                공식 시나리오를 구성하는 정책 조합을 선택하여 탐색해보세요.
                (일치 시에만 공식 수치 표출)
              </p>
            </div>
            <button
              onClick={() => handleSelectOfficialPreset("defense_2")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-xs text-slate-300 hover:text-white border border-slate-700 cursor-pointer self-start sm:self-auto"
            >
              <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
              <span>방어 시나리오 ②로 초기화</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {POLICY_CARDS.map((card) => {
              const isChecked = selectedPolicies.includes(card.id);

              return (
                <div
                  key={card.id}
                  onClick={() => togglePolicy(card.id)}
                  className={`p-4 rounded-xl border transition cursor-pointer select-none flex flex-col justify-between ${
                    isChecked
                      ? "bg-cyan-950/40 border-cyan-500/50 shadow-md shadow-cyan-950/40"
                      : "bg-slate-950/70 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-400 border border-slate-800">
                        {card.category}
                      </span>
                      <div
                        className={`w-4 h-4 rounded border flex items-center justify-center ${
                          isChecked
                            ? "bg-cyan-500 border-cyan-400 text-slate-950"
                            : "border-slate-600"
                        }`}
                      >
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                    </div>

                    <h5 className="text-xs sm:text-sm font-bold text-white mb-1">
                      {card.title}
                    </h5>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-800/80 text-[10px] font-mono text-slate-500">
                    근거: {card.docReference}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 관람 완료 결과 리포트 전광판 */}
        <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-[#071328] to-slate-950 border border-cyan-500/40">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                EXHIBITION COMPLETION REPORT
              </span>
              <h3 className="text-xl md:text-2xl font-black text-white font-mono">
                재정미래관 관람 결과 리포트 전광판
              </h3>
            </div>
            <div className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-bold glow-cyan">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>최종 성과: {totalStars} / 3 STARS</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-xs font-mono text-slate-400 block mb-1">
                선택 시나리오
              </span>
              <span className="text-base font-bold text-white font-sans">
                {matchStatus === "matched"
                  ? activeScenario.nameKo
                  : "공식 범위 외 조합"}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-xs font-mono text-slate-400 block mb-1">
                2055 채무비율 판정
              </span>
              <span
                className={`text-xl font-mono font-black ${star1 ? "text-emerald-400" : "text-amber-400"}`}
              >
                {matchStatus === "matched"
                  ? activeScenario.debtRatio2055.display
                  : "산출 제외"}
              </span>
              <span className="text-[10px] text-slate-500 block mt-0.5">
                {star1 ? "전문가 안정선(150%) 방어 성공" : "안정선(150%) 초과"}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-xs font-mono text-slate-400 block mb-1">
                미래세대 평가
              </span>
              <span className="text-base font-bold text-cyan-300 font-sans">
                {matchStatus === "matched"
                  ? activeScenario.pyiQualitativeState.status
                  : "평가 대기"}
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            재정미래박물관의 6대 전시관 관람과 나라살림게임 시뮬레이션을
            완료하셨습니다. 지속가능한 대한민국을 위한 재정 개혁의 핵심은 조세
            기반 확충과 지출 효율화의 균형 있는 선택에 있습니다.
          </p>
        </div>
      </div>

      {/* 4. 전시장 출구: 박물관 퇴장 라운지로 이동하는 게이트 */}
      <div className="relative z-10 max-w-6xl mx-auto mt-16 pt-10 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <button
          onClick={() => {
            onNavigate("hall_05");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-300 transition cursor-pointer"
        >
          <CornerDownLeft className="w-4 h-4 text-cyan-400" />
          <span>이전 전시장 (Hall 05 장기재정전망)으로 돌아가기</span>
        </button>

        <button
          onClick={() => {
            onNavigate("exit");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-950/80 to-slate-900 border border-cyan-500/40 hover:border-cyan-400 hover:glow-cyan text-left group transition cursor-pointer"
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
                EXIT MUSEUM
              </span>
              <Footprints className="w-3.5 h-3.5 text-cyan-400" />
            </div>
            <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition">
              전시 관람 종료 라운지로 퇴장하기
            </h4>
          </div>
          <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 group-hover:translate-x-1 transition">
            <ArrowRight className="w-5 h-5" />
          </div>
        </button>
      </div>

      {/* 5. 바닥 원근 타일 그리드 */}
      <div className="absolute bottom-0 left-0 right-0 h-48 museum-floor pointer-events-none opacity-40" />
    </div>
  );
};

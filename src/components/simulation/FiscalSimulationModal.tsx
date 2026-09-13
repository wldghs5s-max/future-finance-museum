import React, { useEffect } from "react";
import {
  X,
  Sliders,
  Gamepad2,
  Smile,
  Frown,
  Meh,
  Star,
  RotateCcw,
  Power,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Bot,
  Activity,
  Award,
} from "lucide-react";
import { POLICY_RACKS, SimulationResult } from "../../data/simulationData";

interface FiscalSimulationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPolicies: Set<string>;
  onTogglePolicy: (id: string) => void;
  onApplyPreset: (presetKey: string) => void;
  onClearAll: () => void;
  simulationResult: SimulationResult;
}

export const FiscalSimulationModal: React.FC<FiscalSimulationModalProps> = ({
  isOpen,
  onClose,
  selectedPolicies,
  onTogglePolicy,
  onApplyPreset,
  onClearAll,
  simulationResult,
}) => {
  // ESC 키로 닫기
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isOfficial = simulationResult.mode === "OFFICIAL";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-6xl max-h-[92vh] flex flex-col rounded-3xl border-2 shadow-2xl text-slate-100 overflow-hidden transition-colors duration-500 ${
          isOfficial
            ? "bg-gradient-to-b from-[#08172c] via-[#040e1c] to-[#020712] border-cyan-500/50 shadow-[0_0_80px_rgba(0,240,255,0.25)]"
            : "bg-gradient-to-b from-[#170a2c] via-[#0d051c] to-[#05020c] border-purple-500/50 shadow-[0_0_80px_rgba(168,85,247,0.25)]"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ========================================================
            MODAL HEADER BAR
            ======================================================== */}
        <div
          className={`px-6 py-4 border-b flex flex-wrap items-center justify-between gap-3 shrink-0 ${
            isOfficial
              ? "border-cyan-500/30 bg-[#030d1b]/90"
              : "border-purple-500/30 bg-[#0a0314]/90"
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`p-2 rounded-xl border ${
                isOfficial
                  ? "bg-cyan-950 border-cyan-500/60 shadow-[0_0_15px_rgba(0,240,255,0.3)] text-cyan-400"
                  : "bg-purple-950 border-purple-500/60 shadow-[0_0_15px_rgba(168,85,247,0.3)] text-purple-300"
              }`}
            >
              {isOfficial ? (
                <Sliders className="w-5 h-5" />
              ) : (
                <Bot className="w-5 h-5" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-black text-white font-mono tracking-tight">
                  재정 정책 시뮬레이션 콘솔 조작 모드
                </h3>
                {isOfficial ? (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 border border-emerald-600 text-emerald-300 flex items-center gap-1 font-bold">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    🏛️ 정부·연구기관(PERI) 공식 전망치 연동
                  </span>
                ) : (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 border border-purple-600 text-purple-300 flex items-center gap-1 font-bold animate-pulse">
                    <Sparkles className="w-3 h-3 text-purple-400" />
                    🤖 AI 가상 체험 모드 (체험형 가상 모델)
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400 font-sans">
                {isOfficial
                  ? "공식 연구원(PERI) 공인 4대 시나리오 검증 데이터 세트입니다."
                  : "15개 정책 자유 조합에 따른 관람객 체험형 가상 평가 지표입니다. (실제 경제 전망치 아님)"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClearAll}
              className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono text-slate-400 hover:text-white hover:border-slate-500 transition cursor-pointer flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>전체 리셋</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-400 hover:text-white hover:border-cyan-400 transition cursor-pointer flex items-center gap-1"
              title="전시실로 복귀 (ESC)"
            >
              <X className="w-5 h-5" />
              <span className="text-xs font-mono pr-1 hidden sm:inline">
                전시실 복귀
              </span>
            </button>
          </div>
        </div>

        {/* ========================================================
            QUICK PRESET SELECTOR BAR (4 OFFICIAL SCENARIOS)
            ======================================================== */}
        <div className="px-6 py-3 border-b border-slate-800 bg-[#020914]/80 shrink-0">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-300 font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>PERI 4대 공식 시나리오 프리셋</span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">
              클릭 시 공식 연구원 전망치로 즉시 전환됩니다
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {/* 프리셋 1: 방어 ② */}
            <button
              type="button"
              onClick={() => onApplyPreset("defense_2")}
              className={`p-2.5 rounded-xl border text-left transition cursor-pointer relative overflow-hidden ${
                simulationResult.officialScenarioId === "defense_2"
                  ? "bg-emerald-950/80 border-emerald-400 ring-2 ring-emerald-400/50 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                  : "bg-slate-950/70 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
              }`}
            >
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-xs font-mono font-bold text-emerald-400">
                  방어 시나리오 ②
                </span>
                <span className="text-[9px] px-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-700">
                  공식 권고안
                </span>
              </div>
              <div className="text-base font-mono font-black text-white">
                135.1%
              </div>
              <p className="text-[10px] text-slate-400 truncate mt-0.5">
                복지완충+교부금삭감+증세
              </p>
            </button>

            {/* 프리셋 2: 방어 ① */}
            <button
              type="button"
              onClick={() => onApplyPreset("defense_1")}
              className={`p-2.5 rounded-xl border text-left transition cursor-pointer ${
                simulationResult.officialScenarioId === "defense_1"
                  ? "bg-sky-950/80 border-sky-400 ring-2 ring-sky-400/50 text-white shadow-[0_0_15px_rgba(14,165,233,0.3)]"
                  : "bg-slate-950/70 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
              }`}
            >
              <div className="text-xs font-mono font-bold text-sky-400 mb-0.5">
                방어 시나리오 ①
              </div>
              <div className="text-base font-mono font-black text-white">
                161.5%
              </div>
              <p className="text-[10px] text-slate-400 truncate mt-0.5">
                지방·교육교부금 각 10% 삭감
              </p>
            </button>

            {/* 프리셋 3: 현행 유지 */}
            <button
              type="button"
              onClick={() => onApplyPreset("status_quo")}
              className={`p-2.5 rounded-xl border text-left transition cursor-pointer ${
                simulationResult.officialScenarioId === "status_quo"
                  ? "bg-amber-950/80 border-amber-400 ring-2 ring-amber-400/50 text-white shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                  : "bg-slate-950/70 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
              }`}
            >
              <div className="text-xs font-mono font-bold text-amber-400 mb-0.5">
                현재 추세 유지
              </div>
              <div className="text-base font-mono font-black text-white">
                202.0%
              </div>
              <p className="text-[10px] text-slate-400 truncate mt-0.5">
                제도 개혁 없이 관성 지속
              </p>
            </button>

            {/* 프리셋 4: 최악 */}
            <button
              type="button"
              onClick={() => onApplyPreset("worst")}
              className={`p-2.5 rounded-xl border text-left transition cursor-pointer ${
                simulationResult.officialScenarioId === "worst"
                  ? "bg-rose-950/80 border-rose-400 ring-2 ring-rose-400/50 text-white shadow-[0_0_15px_rgba(244,63,94,0.3)]"
                  : "bg-slate-950/70 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
              }`}
            >
              <div className="text-xs font-mono font-bold text-rose-400 mb-0.5">
                최악의 시나리오
              </div>
              <div className="text-base font-mono font-black text-white">
                490.9%
              </div>
              <p className="text-[10px] text-slate-400 truncate mt-0.5">
                감세 40% + 선심성 지출 폭증
              </p>
            </button>
          </div>
        </div>

        {/* ========================================================
            MAIN BODY: 2-COLUMN COCKPIT (Left: 15 Switches, Right: Dashboard)
            ======================================================== */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT 7 COLS: 15 POLICY PHYSICAL SWITCH RACKS */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-1 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <h4 className="text-sm font-mono font-bold text-white">
                  15개 정책 물리 토글 스위치 랙
                </h4>
              </div>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950 border border-cyan-700 text-cyan-300">
                활성화: {selectedPolicies.size} / 15개 스위치
              </span>
            </div>

            {POLICY_RACKS.map((rack) => (
              <div
                key={rack.moduleCode}
                className={`rounded-2xl border ${rack.borderClass} bg-slate-950/70 overflow-hidden shadow-md`}
              >
                {/* 모듈 타이틀 헤더 */}
                <div
                  className={`px-4 py-2 flex items-center justify-between text-xs font-mono font-bold ${rack.headerBg}`}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-current" />
                    <span>{rack.moduleTitle}</span>
                  </div>
                  <span className="text-[10px] opacity-75 font-mono">
                    {rack.moduleCode}
                  </span>
                </div>

                {/* 모듈 내부 스위치 목록 */}
                <div className="p-2.5 space-y-2">
                  {rack.items.map((item) => {
                    const isOn = selectedPolicies.has(item.id);
                    return (
                      <div
                        key={item.id}
                        onClick={() => onTogglePolicy(item.id)}
                        className={`p-3 rounded-xl border flex items-center justify-between transition-all cursor-pointer select-none ${
                          isOn
                            ? isOfficial
                              ? "bg-slate-900/90 border-cyan-500/70 shadow-[0_0_12px_rgba(0,240,255,0.15)] ring-1 ring-cyan-500/40"
                              : "bg-slate-900/90 border-purple-500/70 shadow-[0_0_12px_rgba(168,85,247,0.15)] ring-1 ring-purple-500/40"
                            : "bg-slate-950/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40"
                        }`}
                      >
                        <div className="flex-1 pr-3">
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className={`text-xs font-mono font-bold ${
                                isOn ? "text-white" : "text-slate-300"
                              }`}
                            >
                              {item.title}
                            </span>
                            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-400">
                              {item.officialBadge}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                            {item.note}
                          </p>
                        </div>

                        {/* 물리적 로커/토글 스위치 비주얼 UI */}
                        <div className="flex items-center gap-2 shrink-0">
                          <span
                            className={`text-[9px] font-mono font-bold uppercase ${
                              isOn
                                ? isOfficial
                                  ? "text-cyan-400"
                                  : "text-purple-400"
                                : "text-slate-600"
                            }`}
                          >
                            {isOn ? "ACTIVE" : "OFF"}
                          </span>
                          <div
                            className={`w-12 h-6.5 rounded-full p-0.5 transition-colors duration-300 relative border ${
                              isOn
                                ? isOfficial
                                  ? "bg-cyan-950 border-cyan-400 shadow-[0_0_12px_#00f0ff]"
                                  : "bg-purple-950 border-purple-400 shadow-[0_0_12px_#c084fc]"
                                : "bg-slate-900 border-slate-700"
                            }`}
                          >
                            <div
                              className={`w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
                                isOn
                                  ? isOfficial
                                    ? "translate-x-5.5 bg-cyan-300 text-slate-950"
                                    : "translate-x-5.5 bg-purple-300 text-slate-950"
                                  : "translate-x-0 bg-slate-600 text-slate-400"
                              }`}
                            >
                              <Power className="w-3 h-3" />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT 5 COLS: DASHBOARD (CLEAR OFFICIAL VS AI EXPERIENTIAL SEPARATION) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="pb-1 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Gamepad2
                  className={`w-4 h-4 ${
                    isOfficial ? "text-cyan-400" : "text-purple-400"
                  }`}
                />
                <h4 className="text-sm font-mono font-bold text-white">
                  {isOfficial
                    ? "공식 연구원 검증 대시보드"
                    : "AI 가상 체험 평가 대시보드"}
                </h4>
              </div>
              <span className="text-xs font-mono text-slate-400">
                {isOfficial ? "PERI 공식 모델" : "체험형 가상 모델"}
              </span>
            </div>

            {/* AI 가상 모드일 때 최상단 필수 안내문 (사용자 지침 엄격 준수) */}
            {!isOfficial && (
              <div className="p-4 rounded-2xl bg-purple-950/40 border-2 border-purple-500/60 shadow-lg text-left">
                <div className="flex items-center gap-2 text-purple-300 font-bold text-xs mb-1.5">
                  <Bot className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>AI 가상 체험 시뮬레이션 안내 (체험형 콘텐츠)</span>
                </div>
                <p className="text-[11px] text-purple-200/90 leading-relaxed font-sans mb-2">
                  본 결과는 관람객이 선택하신 15개 정책의 방향성을 AI 모델로
                  가상 분석한 <strong>체험형 평가 지표</strong>입니다. 실제
                  정부·연구기관의 경제 전망치가 아니며 실제 채무비율을
                  예측하거나 보장하지 않습니다.
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-purple-800/60">
                  <span className="text-[10px] font-mono text-purple-300/70">
                    공식 국가채무비율은 4대 공식 시나리오에서만 확인 가능
                  </span>
                  <button
                    type="button"
                    onClick={() => onApplyPreset("defense_2")}
                    className="px-2 py-0.5 rounded bg-emerald-900/80 border border-emerald-500 text-[10px] font-mono text-emerald-200 hover:bg-emerald-800 transition cursor-pointer flex items-center gap-1"
                  >
                    <span>공식 권고안(135.1%) 보기</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}

            {/* 1. 2055 국가채무비율 슬롯: 공식 모드에서는 공식 수치 / AI 모드에서는 '공식 외 미산출' 명확화 */}
            <div
              className={`p-5 rounded-2xl border shadow-xl ${
                isOfficial
                  ? "bg-slate-950/90 border-cyan-500/40"
                  : "bg-slate-950/90 border-purple-500/30"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-slate-400">
                  2055 국가채무비율 (GDP 대비)
                </span>
                {isOfficial ? (
                  <span
                    className={`text-xs font-mono px-2 py-0.5 rounded border ${
                      simulationResult.officialPassed
                        ? "bg-emerald-950 border-emerald-600 text-emerald-300"
                        : "bg-rose-950 border-rose-600 text-rose-300"
                    }`}
                  >
                    {simulationResult.officialTag}
                  </span>
                ) : (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-400">
                    공식 4대 시나리오 외 미산출
                  </span>
                )}
              </div>

              {isOfficial ? (
                <>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span
                      className={`text-4xl font-mono font-black ${
                        simulationResult.officialPassed
                          ? "text-emerald-400"
                          : "text-rose-400"
                      }`}
                    >
                      {simulationResult.officialDebtRatio}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      / 전문가 안정선 150.0%
                    </span>
                  </div>
                  <div className="h-3 w-full bg-slate-900 rounded-full overflow-hidden relative border border-slate-800">
                    <div
                      className={`h-full transition-all duration-700 ${
                        simulationResult.officialPassed
                          ? "bg-gradient-to-r from-emerald-500 to-teal-400 shadow-[0_0_10px_#10b981]"
                          : "bg-gradient-to-r from-amber-500 to-rose-600 shadow-[0_0_10px_#f43f5e]"
                      }`}
                      style={{
                        width: `${Math.min(
                          100,
                          ((simulationResult.officialDebtRatioNum || 0) /
                            490.9) *
                            100,
                        )}%`,
                      }}
                    />
                    {/* 150% 안정선 마커 */}
                    <div
                      className="absolute top-0 bottom-0 w-1 bg-yellow-400 shadow-[0_0_8px_#facc15]"
                      style={{ left: `${(150.0 / 490.9) * 100}%` }}
                      title="150% 안정선"
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                    <span>0%</span>
                    <span className="text-yellow-400 font-bold">
                      150% 안정선
                    </span>
                    <span>490.9%</span>
                  </div>
                </>
              ) : (
                <div className="py-2.5 px-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-mono font-bold text-slate-300">
                      공식 연구원 전망치 보존
                    </div>
                    <p className="text-[10px] text-slate-500 mt-0.5">
                      임의의 가상 채무비율을 계산하지 않습니다
                    </p>
                  </div>
                  <span className="text-xs font-mono text-purple-400 font-bold">
                    아래 4대 체험 지표 참조
                  </span>
                </div>
              )}
            </div>

            {/* 2. 4대 체험형 평가 지표 (재정 건전성, 미래세대 부담, 복지 지속가능성, 성장 여력) */}
            <div className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800 shadow-xl space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-mono text-slate-300 font-bold flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-purple-400" />
                  <span>4대 정책 영역 체험형 가상 지수</span>
                </span>
                <span className="text-[10px] font-mono text-purple-400">
                  각 0~100점 척도
                </span>
              </div>

              {/* 지표 1: 재정 건전성 */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-slate-300">
                    재정 건전성 (부채 통제력)
                  </span>
                  <span className="font-bold text-cyan-400">
                    {simulationResult.soundnessScore}점
                  </span>
                </div>
                <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-cyan-400 transition-all duration-500"
                    style={{ width: `${simulationResult.soundnessScore}%` }}
                  />
                </div>
              </div>

              {/* 지표 2: 미래세대 부담 완화 */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-slate-300">미래세대 부담 완화</span>
                  <span className="font-bold text-emerald-400">
                    {simulationResult.futureReliefScore}점
                  </span>
                </div>
                <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-400 transition-all duration-500"
                    style={{ width: `${simulationResult.futureReliefScore}%` }}
                  />
                </div>
              </div>

              {/* 지표 3: 복지 지속가능성 */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-slate-300">
                    복지 지속가능성 (사회안전망)
                  </span>
                  <span className="font-bold text-amber-400">
                    {simulationResult.welfareScore}점
                  </span>
                </div>
                <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-400 transition-all duration-500"
                    style={{ width: `${simulationResult.welfareScore}%` }}
                  />
                </div>
              </div>

              {/* 지표 4: 성장·혁신 여력 */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-slate-300">
                    성장·혁신 여력 (AI/기후)
                  </span>
                  <span className="font-bold text-purple-400">
                    {simulationResult.innovationScore}점
                  </span>
                </div>
                <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-purple-400 transition-all duration-500"
                    style={{ width: `${simulationResult.innovationScore}%` }}
                  />
                </div>
              </div>
            </div>

            {/* 3. 종합 재정 리더십 평가 스코어보드 */}
            <div
              className={`p-5 rounded-2xl border shadow-xl ${
                isOfficial
                  ? "bg-slate-950/90 border-cyan-500/40"
                  : "bg-purple-950/30 border-purple-500/40"
              }`}
            >
              <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
                <span className="text-xs font-mono text-slate-300 font-bold flex items-center gap-1.5">
                  <Award
                    className={`w-4 h-4 ${
                      isOfficial ? "text-cyan-400" : "text-purple-400"
                    }`}
                  />
                  <span>종합 재정 리더십 평가</span>
                </span>
                <span
                  className={`text-xs font-mono font-bold px-2 py-0.5 rounded border ${
                    simulationResult.leadershipGrade === "S" ||
                    simulationResult.leadershipGrade === "A"
                      ? "bg-emerald-950 border-emerald-600 text-emerald-300"
                      : simulationResult.leadershipGrade === "B" ||
                          simulationResult.leadershipGrade === "C"
                        ? "bg-amber-950 border-amber-600 text-amber-300"
                        : "bg-rose-950 border-rose-600 text-rose-300"
                  }`}
                >
                  GRADE {simulationResult.leadershipGrade}
                </span>
              </div>

              <div className="flex items-center gap-4 mb-3">
                <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 flex flex-col items-center justify-center shrink-0">
                  <span className="text-[10px] font-mono text-slate-400">
                    종합 점수
                  </span>
                  <span
                    className={`text-xl font-mono font-black ${
                      simulationResult.overallScore >= 80
                        ? "text-emerald-400"
                        : simulationResult.overallScore >= 60
                          ? "text-amber-400"
                          : "text-rose-400"
                    }`}
                  >
                    {simulationResult.overallScore}점
                  </span>
                </div>

                <div className="flex-1">
                  <div className="text-xs font-mono font-bold text-white mb-0.5">
                    {simulationResult.leadershipTitle}
                  </div>
                  <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                    {simulationResult.evaluationComment}
                  </p>
                </div>
              </div>

              {/* 미래세대 캐릭터 표정 연동 */}
              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-700 flex items-center justify-center shrink-0">
                  {simulationResult.pyiState === "happy" ? (
                    <Smile className="w-6 h-6 text-emerald-400 animate-bounce" />
                  ) : simulationResult.pyiState === "crying" ? (
                    <Frown className="w-6 h-6 text-rose-500 animate-pulse" />
                  ) : (
                    <Meh className="w-6 h-6 text-amber-400" />
                  )}
                </div>
                <div className="text-left flex-1">
                  <div className="text-[10px] font-mono text-slate-400">
                    미래세대 캐릭터 반응
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-200">
                    {simulationResult.pyiState === "happy"
                      ? "안도: 미래세대가 부담 경감에 미소 짓습니다."
                      : simulationResult.pyiState === "crying"
                        ? "위기: 미래세대가 가혹한 빚에 오열합니다."
                        : "주의: 지속적인 재정 개혁 검토가 필요합니다."}
                  </span>
                </div>
              </div>
            </div>

            {/* 4. 3 STARS 평가 리포트 */}
            <div className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800 shadow-xl text-center">
              <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
                <span className="text-xs font-mono text-cyan-300 font-bold flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-cyan-400" />
                  <span>3 STARS EVALUATION SYSTEM</span>
                </span>
                <span className="text-[10px] font-mono text-slate-500">
                  {isOfficial ? "공식 판정" : "체험형 가상 판정"}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  <Star
                    className={`w-6 h-6 mx-auto mb-1 ${
                      simulationResult.stars.debt
                        ? "text-yellow-400 fill-yellow-400 animate-pulse"
                        : "text-slate-700"
                    }`}
                  />
                  <span className="text-[11px] font-mono text-slate-200 block font-bold">
                    나랏빚 별
                  </span>
                  <span className="text-[9px] text-slate-400">
                    {simulationResult.stars.debt ? "달성 완료" : "미달"}
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  <Star
                    className={`w-6 h-6 mx-auto mb-1 ${
                      simulationResult.stars.future
                        ? "text-yellow-400 fill-yellow-400 animate-pulse"
                        : "text-slate-700"
                    }`}
                  />
                  <span className="text-[11px] font-mono text-slate-200 block font-bold">
                    미래세대 별
                  </span>
                  <span className="text-[9px] text-slate-400">
                    {simulationResult.stars.future ? "달성 완료" : "미달"}
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  <Star
                    className={`w-6 h-6 mx-auto mb-1 ${
                      simulationResult.stars.goal
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-slate-700"
                    }`}
                  />
                  <span className="text-[11px] font-mono text-slate-200 block font-bold">
                    국가목표 별
                  </span>
                  <span className="text-[9px] text-slate-400">
                    {simulationResult.stars.goal ? "달성 완료" : "미달"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            MODAL FOOTER BAR
            ======================================================== */}
        <div className="px-6 py-3 border-t border-slate-800 bg-[#020813] flex items-center justify-between text-xs font-mono text-slate-500 shrink-0">
          <span>단일 진실 공급원: future_finance_doc.md (Section VI)</span>
          <button
            type="button"
            onClick={onClose}
            className={`px-4 py-1.5 rounded-xl border font-bold cursor-pointer transition ${
              isOfficial
                ? "bg-cyan-950 border-cyan-500/60 text-cyan-300 hover:bg-cyan-900"
                : "bg-purple-950 border-purple-500/60 text-purple-300 hover:bg-purple-900"
            }`}
          >
            전시실로 복귀하기 (ESC)
          </button>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { SpatialExhibitContainer } from "./SpatialExhibitContainer";
import {
  Gamepad2,
  Smile,
  Frown,
  Meh,
  Star,
  Sliders,
  CheckCircle2,
  Bot,
  Play,
  FileText,
} from "lucide-react";
import { SimulationResult } from "../../data/simulationData";

interface Hall06ExhibitsProps {
  cameraZ: number;
  onInspect: (exhibitId: string) => void;
  selectedPolicies: Set<string>;
  simulationResult: SimulationResult;
  onOpenSimulationModal: () => void;
}

export const Hall06Exhibits: React.FC<Hall06ExhibitsProps> = ({
  cameraZ,
  onInspect,
  selectedPolicies,
  simulationResult,
  onOpenSimulationModal,
}) => {
  const isOfficial = simulationResult.mode === "OFFICIAL";

  return (
    <>
      {/* ========================================================
          CONSOLE 6-A: 2055 국가채무비율 메인 프로젝션 & 150% 안정선 (좌측)
          X = -420px, Y = -10px, Z = -22800px, RotY = 16deg, Width = 490px
          ======================================================== */}
      <SpatialExhibitContainer
        x={-420}
        y={-10}
        z={-22800}
        rotateY={16}
        cameraZ={cameraZ}
        width={490}
        title={
          isOfficial
            ? "2055 국가채무비율 메인 프로젝션"
            : "2055 AI 가상 체험 평가 계측기"
        }
        exhibitCode="CONSOLE 6-A"
        onInspect={() => onInspect("exhibit_6a")}
      >
        <div
          className={`p-6 rounded-2xl border-2 shadow-2xl backdrop-blur-md relative transition-colors ${
            isOfficial
              ? "bg-[#041528]/95 border-cyan-500/40 group-hover:border-cyan-400/80"
              : "bg-[#140624]/95 border-purple-500/40 group-hover:border-purple-400/80"
          }`}
        >
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold">
              <Gamepad2
                className={`w-4 h-4 ${
                  isOfficial ? "text-cyan-400" : "text-purple-400"
                }`}
              />
              <span
                className={isOfficial ? "text-cyan-300" : "text-purple-300"}
              >
                {isOfficial
                  ? "2055 FISCAL PROJECTION"
                  : "AI VIRTUAL EVALUATION"}
              </span>
            </div>
            <span className="text-[10px] text-slate-400 font-sans">
              클릭하여 상세 해설
            </span>
          </div>

          <h4 className="text-xl font-black text-white font-mono mb-2">
            {isOfficial
              ? "2055 국가채무비율 & 150% 안정선"
              : "AI 가상 체험: 재정 건전성 평가"}
          </h4>

          <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
            {isOfficial
              ? "정책평가연구원(PERI) 2055 공인 전망 모델입니다. 현행 유지 시 202.0%에 달하며, 전문가 합의 안정선은 150.0% 이하입니다."
              : "선택하신 15개 정책을 분석한 AI 가상 체험 평가입니다. 공식 채무비율(135.1%~490.9%)은 상단 4대 공식 시나리오 프리셋에서 확인하세요."}
          </p>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 mb-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-slate-400">
                {isOfficial ? "선택 시나리오 공식 판정" : "체험형 가상 판정"}
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
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-purple-950/80 border border-purple-600 text-purple-300 flex items-center gap-1 font-bold">
                  <Bot className="w-3 h-3 text-purple-400" />
                  AI 가상 체험 모드
                </span>
              )}
            </div>

            {isOfficial ? (
              <>
                <div className="flex items-baseline gap-2">
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
                    / 150.0% 안정선
                  </span>
                </div>
                <div className="mt-2.5 h-2.5 w-full bg-slate-900 rounded-full overflow-hidden relative border border-slate-800">
                  <div
                    className={`h-full transition-all duration-700 ${
                      simulationResult.officialPassed
                        ? "bg-gradient-to-r from-emerald-500 to-teal-400"
                        : "bg-gradient-to-r from-amber-500 to-rose-600"
                    }`}
                    style={{
                      width: `${Math.min(
                        100,
                        ((simulationResult.officialDebtRatioNum || 0) / 490.9) *
                          100,
                      )}%`,
                    }}
                  />
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-yellow-400 shadow-[0_0_10px_#facc15]"
                    style={{ left: `${(150.0 / 490.9) * 100}%` }}
                    title="150% 안정선"
                  />
                </div>
                <div className="flex justify-between text-[9px] font-mono text-slate-500 mt-1">
                  <span>0%</span>
                  <span className="text-yellow-400 font-bold">
                    150% 마지노선
                  </span>
                  <span>490.9%</span>
                </div>
              </>
            ) : (
              <div className="py-2 text-left">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-mono text-slate-300">
                    재정 건전성 (부채 통제력)
                  </span>
                  <span className="text-lg font-mono font-black text-cyan-400">
                    {simulationResult.soundnessScore}점
                  </span>
                </div>
                <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden mb-2">
                  <div
                    className="h-full bg-cyan-400 transition-all duration-500"
                    style={{ width: `${simulationResult.soundnessScore}%` }}
                  />
                </div>
                <span className="text-[10px] text-purple-300/80 block">
                  공식 국가채무비율은 4대 공식 시나리오에서만 제공됩니다.
                </span>
              </div>
            )}
          </div>

          <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800 flex items-center justify-between">
            <span>
              {isOfficial ? "PERI 미래재정모델 공인" : "체험형 가상 모델"}
            </span>
            <span
              className={`font-bold ${
                isOfficial ? "text-cyan-400" : "text-purple-400"
              }`}
            >
              상세 분석 보기
            </span>
          </div>
        </div>
      </SpatialExhibitContainer>

      {/* ========================================================
          SCREEN 6-B: FUTURE GENERATION SCREEN (미래세대 화면, 우측)
          X = +420px, Y = -10px, Z = -22800px, RotY = -16deg, Width = 490px
          ======================================================== */}
      <SpatialExhibitContainer
        x={420}
        y={-10}
        z={-22800}
        rotateY={-16}
        cameraZ={cameraZ}
        width={490}
        title="FUTURE GENERATION SCREEN: 미래세대 화면"
        exhibitCode="SCREEN 6-B"
        onInspect={() => onInspect("exhibit_6b")}
      >
        <div
          className={`p-6 rounded-2xl border-2 shadow-2xl backdrop-blur-md relative transition-colors ${
            isOfficial
              ? "bg-[#06172d]/95 border-sky-500/40 group-hover:border-sky-400/80"
              : "bg-[#120726]/95 border-purple-500/40 group-hover:border-purple-400/80"
          }`}
        >
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold">
              <Smile
                className={`w-4 h-4 ${
                  isOfficial ? "text-sky-400" : "text-purple-400"
                }`}
              />
              <span className={isOfficial ? "text-sky-300" : "text-purple-300"}>
                FUTURE GENERATION SCREEN
              </span>
            </div>
            <span className="text-[10px] text-slate-400 font-sans">
              클릭하여 상세 해설
            </span>
          </div>

          <h4 className="text-xl font-black text-white font-mono mb-2">
            미래세대 반응 및 순조세부담
          </h4>

          <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
            {isOfficial
              ? "PERI-Young 지수(PYI, 기준값 31.8%p)는 미래세대가 현세대보다 더 짊어져야 할 순조세부담 격차를 나타냅니다."
              : "선택하신 정책에 따른 미래세대 부담 완화도를 AI 모델로 가상 평가하여 표정으로 나타냅니다."}
          </p>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-4 mb-3">
            <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0">
              {simulationResult.pyiState === "happy" ? (
                <Smile className="w-10 h-10 text-emerald-400 animate-bounce" />
              ) : simulationResult.pyiState === "crying" ? (
                <Frown className="w-10 h-10 text-rose-500 animate-pulse" />
              ) : simulationResult.pyiState === "worried" ? (
                <Meh className="w-10 h-10 text-amber-400" />
              ) : (
                <Meh className="w-10 h-10 text-slate-300" />
              )}
            </div>

            <div className="flex-1">
              <div className="text-xs font-mono text-slate-400 mb-0.5">
                {isOfficial ? "미래세대 표정 / PYI 변동" : "미래세대 가상 반응"}
              </div>
              {isOfficial ? (
                <>
                  <div
                    className={`text-lg font-mono font-black ${
                      simulationResult.pyiState === "happy"
                        ? "text-emerald-400"
                        : simulationResult.pyiState === "crying"
                          ? "text-rose-400"
                          : "text-amber-400"
                    }`}
                  >
                    {simulationResult.officialPyiEffect}
                  </div>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    {simulationResult.officialPyiStatus}
                  </span>
                </>
              ) : (
                <>
                  <div className="text-lg font-mono font-black text-purple-300">
                    부담 완화 {simulationResult.futureReliefScore}점
                  </div>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    {simulationResult.pyiState === "happy"
                      ? "미래세대가 부담 경감에 안도합니다."
                      : simulationResult.pyiState === "crying"
                        ? "미래세대가 과중한 빚에 위기를 느낍니다."
                        : "미래세대가 지속적인 개혁을 주시합니다."}
                  </span>
                </>
              )}
            </div>
          </div>

          <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800 flex items-center justify-between">
            <span>
              {isOfficial
                ? "PERI-Young Index (기준 31.8%p)"
                : "체험형 가상 반응"}
            </span>
            <span
              className={`font-bold ${
                isOfficial ? "text-sky-400" : "text-purple-400"
              }`}
            >
              세대별 분석 보기
            </span>
          </div>
        </div>
      </SpatialExhibitContainer>

      {/* ========================================================
          TERMINAL 6-C: 15개 정책 선택형 시뮬레이션 콘솔 키오스크 (중앙 일체형 3D 독립 오브젝트)
          X = 0px, Y = +50px, Z = -23700px, RotY = 0deg, Width = 580px
          ======================================================== */}
      <SpatialExhibitContainer
        x={0}
        y={50}
        z={-23700}
        rotateY={0}
        cameraZ={cameraZ}
        width={580}
        title="15개 정책 시뮬레이션 콘솔"
        exhibitCode="TERMINAL 6-C"
        onInspect={onOpenSimulationModal}
      >
        <div className="relative flex flex-col items-center">
          {/* 상단 콘솔 홀로그램 프로젝터 라이트 */}
          <div
            className={`w-56 h-3 rounded-full blur-[3px] mb-2 ${
              isOfficial
                ? "bg-cyan-400/80 shadow-[0_0_35px_#00f0ff]"
                : "bg-purple-400/80 shadow-[0_0_35px_#a855f7]"
            }`}
          />

          {/* 일체형 독립 3D 물리 콘솔 본체 키오스크 */}
          <div
            onClick={onOpenSimulationModal}
            className={`w-full p-6 rounded-3xl border-4 backdrop-blur-md relative group transition-all cursor-pointer text-center ${
              isOfficial
                ? "bg-gradient-to-b from-[#0a1c33] via-[#040e1c] to-[#02060f] border-cyan-500/50 shadow-[0_0_80px_rgba(0,240,255,0.25)] hover:border-cyan-300"
                : "bg-gradient-to-b from-[#180933] via-[#0b031c] to-[#04010f] border-purple-500/50 shadow-[0_0_80px_rgba(168,85,247,0.25)] hover:border-purple-300"
            }`}
          >
            {/* 콘솔 헤더 바 */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold">
                <Sliders
                  className={`w-4 h-4 ${
                    isOfficial ? "text-cyan-400" : "text-purple-400"
                  }`}
                />
                <span
                  className={isOfficial ? "text-cyan-300" : "text-purple-300"}
                >
                  FISCAL SIMULATION COCKPIT KIOSK
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300">
                스위치 {selectedPolicies.size}/15 활성
              </span>
            </div>

            <h4 className="text-2xl font-black text-white font-mono tracking-tight mb-2">
              15개 정책 선택형 시뮬레이션 콘솔
            </h4>

            <p className="text-xs text-slate-300 font-sans max-w-md mx-auto mb-4 leading-relaxed">
              정책평가연구원(PERI) 모델을 바탕으로 2055년 장기재정과 미래세대의
              부담을 직접 시뮬레이션해보는 인터랙티브 콘솔입니다.
            </p>

            {/* 현재 활성 상태 요약 디스플레이 */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 mb-4 text-left">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-slate-400">
                  현재 연동 상태
                </span>
                {isOfficial ? (
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-950 border border-emerald-600 text-emerald-300 flex items-center gap-1 font-bold">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    🏛️ 공식 연구원 검증 연동
                  </span>
                ) : (
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-purple-950 border border-purple-600 text-purple-300 flex items-center gap-1 font-bold">
                    <Bot className="w-3 h-3 text-purple-400" />
                    🤖 AI 가상 체험 모드
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-mono font-bold text-white">
                    {isOfficial
                      ? simulationResult.officialName
                      : simulationResult.leadershipTitle}
                  </div>
                  <div className="text-[11px] text-slate-400 line-clamp-1">
                    {isOfficial
                      ? simulationResult.officialSummary
                      : simulationResult.evaluationComment}
                  </div>
                </div>
                <div className="text-right pl-3 shrink-0">
                  <div
                    className={`text-2xl font-mono font-black ${
                      isOfficial
                        ? simulationResult.officialPassed
                          ? "text-emerald-400"
                          : "text-rose-400"
                        : "text-purple-300"
                    }`}
                  >
                    {isOfficial
                      ? simulationResult.officialDebtRatio
                      : `${simulationResult.overallScore}점`}
                  </div>
                  <span className="text-[9px] font-mono text-slate-500">
                    {isOfficial ? "2055 채무비율" : "종합 평가 점수"}
                  </span>
                </div>
              </div>
            </div>

            {/* 대형 전용 시뮬레이션 모드 실행 버튼 */}
            <div
              className={`w-full py-3.5 px-4 rounded-2xl font-mono font-black text-sm flex items-center justify-center gap-2 transition-transform group-hover:scale-[1.02] ${
                isOfficial
                  ? "bg-gradient-to-r from-cyan-600 via-sky-500 to-teal-500 text-slate-950 shadow-[0_0_25px_rgba(0,240,255,0.4)]"
                  : "bg-gradient-to-r from-purple-600 via-violet-500 to-fuchsia-500 text-white shadow-[0_0_25px_rgba(168,85,247,0.4)]"
              }`}
            >
              <Play className="w-4 h-4 fill-current" />
              <span>시뮬레이션 조작 모드 실행 (Enter Cockpit)</span>
            </div>

            {/* 하단 캡션 열기 버튼 */}
            <div className="mt-3 pt-2 text-[10px] font-mono text-slate-500 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-slate-400">
                클릭하여 콘솔 풀스크린 조작
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onInspect("exhibit_6c");
                }}
                className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1 cursor-pointer"
              >
                <FileText className="w-3 h-3" />
                <span>해설 데이터북 보기</span>
              </button>
            </div>
          </div>

          {/* 바닥 스탠드 조명 베이스 */}
          <div
            className={`w-96 h-10 rounded-full blur-xl mt-[-5px] ${
              isOfficial ? "bg-cyan-500/20" : "bg-purple-500/20"
            }`}
          />
        </div>
      </SpatialExhibitContainer>

      {/* ========================================================
          REPORT 6-D: 전시 관람 완료 리포트 전광판 (중앙 안쪽)
          X = 0px, Y = 0px, Z = -24600px, RotY = 0deg, Width = 520px
          ======================================================== */}
      <SpatialExhibitContainer
        x={0}
        y={0}
        z={-24600}
        rotateY={0}
        cameraZ={cameraZ}
        width={520}
        title="전시 관람 완료 리포트 전광판"
        exhibitCode="REPORT 6-D"
        onInspect={() => onInspect("exhibit_6d")}
      >
        <div className="p-6 rounded-2xl bg-[#05162a]/95 border-2 border-cyan-500/40 shadow-2xl backdrop-blur-md relative group-hover:border-cyan-400/80 transition-colors text-center">
          <div className="flex items-center justify-between border-b border-cyan-500/30 pb-3 mb-3">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 font-bold">
              <Star className="w-4 h-4 text-cyan-400" />
              <span>FINAL SIMULATION REPORT</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 border border-cyan-600 text-cyan-300">
              {isOfficial ? "공식 3 STARS 판정" : "체험형 가상 3 STARS"}
            </span>
          </div>

          <h4 className="text-lg font-black text-white font-mono tracking-tight mb-2">
            전시 관람 완료 리포트 전광판
          </h4>

          <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
            나랏빚 별, 미래세대 별, 국가목표 별 3가지 별 획득 기준을 종합
            평가합니다.
          </p>

          <div className="grid grid-cols-3 gap-2 mb-4">
            {/* 나랏빚 별 */}
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
              <Star
                className={`w-6 h-6 mx-auto mb-1 ${
                  simulationResult.stars.debt
                    ? "text-yellow-400 fill-yellow-400 animate-pulse"
                    : "text-slate-700"
                }`}
              />
              <span className="text-[11px] font-mono text-slate-300 block font-bold">
                나랏빚 별
              </span>
              <span className="text-[9px] text-slate-400">
                {simulationResult.stars.debt ? "달성 완료" : "미달"}
              </span>
            </div>

            {/* 미래세대 별 */}
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
              <Star
                className={`w-6 h-6 mx-auto mb-1 ${
                  simulationResult.stars.future
                    ? "text-yellow-400 fill-yellow-400 animate-pulse"
                    : "text-slate-700"
                }`}
              />
              <span className="text-[11px] font-mono text-slate-300 block font-bold">
                미래세대 별
              </span>
              <span className="text-[9px] text-slate-400">
                {simulationResult.stars.future ? "달성 완료" : "미달"}
              </span>
            </div>

            {/* 국가목표 별 */}
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
              <Star
                className={`w-6 h-6 mx-auto mb-1 ${
                  simulationResult.stars.goal
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-slate-700"
                }`}
              />
              <span className="text-[11px] font-mono text-slate-300 block font-bold">
                국가목표 별
              </span>
              <span className="text-[9px] text-slate-400">
                {simulationResult.stars.goal ? "달성 완료" : "미달"}
              </span>
            </div>
          </div>

          <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800 flex items-center justify-between">
            <span>PERI 나라살림게임 판정 체계</span>
            <span className="text-cyan-400 font-bold">
              클릭하여 세부 리포트 확인
            </span>
          </div>
        </div>
      </SpatialExhibitContainer>
    </>
  );
};

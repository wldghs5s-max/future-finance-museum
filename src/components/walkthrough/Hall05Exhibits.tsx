import React from "react";
import { SpatialExhibitContainer } from "./SpatialExhibitContainer";
import {
  LineChart,
  Skull,
  Scale,
  ArrowRight,
  Table,
  Layers,
} from "lucide-react";

interface Hall05ExhibitsProps {
  cameraZ: number;
  onInspect: (exhibitId: string) => void;
}

export const Hall05Exhibits: React.FC<Hall05ExhibitsProps> = ({
  cameraZ,
  onInspect,
}) => {
  return (
    <>
      {/* ========================================================
          EXHIBIT 5-D: 기재부 2065 vs NABO 2072 장기재정전망 비교표 월 (좌측 초입)
          X = -460px, Y = -10px, Z = -18400px, RotY = 20deg
          ======================================================== */}
      <SpatialExhibitContainer
        x={-460}
        y={-10}
        z={-18400}
        rotateY={20}
        cameraZ={cameraZ}
        width={490}
        title="기재부 2065 vs NABO 2072 비교표 월"
        exhibitCode="EXHIBIT 5-D"
        onInspect={() => onInspect("exhibit_5d")}
      >
        <div className="p-6 rounded-2xl bg-[#220710]/95 border-2 border-rose-500/50 shadow-2xl backdrop-blur-md relative overflow-hidden group-hover:border-rose-400/80 transition-colors">
          <div className="flex items-center justify-between border-b border-rose-500/30 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-rose-950 border border-rose-600 text-[10px] font-mono font-bold text-rose-300">
                EXHIBIT 5-D
              </span>
              <span className="text-xs font-mono text-slate-300">
                MOEF VS NABO COMPARISON
              </span>
            </div>
            <span className="text-[10px] text-rose-400 font-sans flex items-center gap-1">
              <Table className="w-3.5 h-3.5 text-rose-400" />
              <span>상세 비교 보기</span>
            </span>
          </div>

          <h3 className="text-xl font-black text-white font-mono mb-2">
            기재부 2065 vs NABO 2072 비교표
          </h3>

          <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
            정부(기획재정부)와 국회(예산정책처)의 공식 장기재정전망 수치를 단일
            시야에서 엄밀히 비교합니다.
          </p>

          <div className="space-y-1.5 mb-4 text-xs font-mono">
            <div className="grid grid-cols-3 p-2 rounded-lg bg-slate-950/90 text-slate-400 border border-slate-800 text-[11px] font-bold">
              <span>구분</span>
              <span className="text-center">기재부 (2065)</span>
              <span className="text-right">NABO (2072)</span>
            </div>
            <div className="grid grid-cols-3 p-2 rounded-lg bg-slate-950/60 border border-slate-800/80 items-center">
              <span className="text-slate-300">국가채무비율</span>
              <span className="text-center font-bold text-amber-300">
                기준 156.3%
              </span>
              <span className="text-right font-black text-rose-400">
                173.0% (7,303조)
              </span>
            </div>
            <div className="grid grid-cols-3 p-2 rounded-lg bg-slate-950/60 border border-slate-800/80 items-center">
              <span className="text-slate-300">잠재성장률</span>
              <span className="text-center text-slate-300">0.1% ~ -0.3%</span>
              <span className="text-right font-bold text-slate-200">0.3%</span>
            </div>
            <div className="grid grid-cols-3 p-2 rounded-lg bg-slate-950/60 border border-slate-800/80 items-center">
              <span className="text-slate-300">의무지출 비중</span>
              <span className="text-center text-slate-400">-</span>
              <span className="text-right font-bold text-amber-300">
                64.3% (GDP 21.6%)
              </span>
            </div>
          </div>

          <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800 flex items-center justify-between">
            <span>기재부 2020/2025전망 & NABO 2024</span>
            <span className="text-rose-400 font-bold">전체 비교표 확인</span>
          </div>
        </div>
      </SpatialExhibitContainer>

      {/* ========================================================
          EXHIBIT 5-A: 2026~2072 국가채무비율 대형 파노라마 타임라인 (좌측 중반)
          X = -460px, Y = -20px, Z = -19100px, RotY = 20deg
          ======================================================== */}
      <SpatialExhibitContainer
        x={-460}
        y={-20}
        z={-19100}
        rotateY={20}
        cameraZ={cameraZ}
        width={500}
        title="2026~2072 국가채무비율 파노라마 월"
        exhibitCode="EXHIBIT 5-A"
        onInspect={() => onInspect("exhibit_5a")}
      >
        <div className="p-6 rounded-2xl bg-[#1f060d]/95 border-2 border-rose-500/40 shadow-2xl backdrop-blur-md relative overflow-hidden group-hover:border-rose-400/80 transition-colors">
          <div className="flex items-center justify-between border-b border-rose-500/30 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-rose-950 border border-rose-600 text-[10px] font-mono font-bold text-rose-300">
                EXHIBIT 5-A
              </span>
              <span className="text-xs font-mono text-slate-300">
                DEBT RATIO PANORAMA
              </span>
            </div>
            <span className="text-[10px] text-rose-400 font-sans flex items-center gap-1">
              <LineChart className="w-3.5 h-3.5 text-rose-400" />
              <span>클릭하여 상세 보기</span>
            </span>
          </div>

          <h3 className="text-xl font-black text-white font-mono mb-2">
            2026~2072 국가채무비율 파노라마 월
          </h3>

          <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
            국가채무비율은 2026년 51.6%(1,415조 원)에서 2029년 58.0%, 2065년
            156.3%, 그리고 2072년 173.0%(7,303조 원)까지 폭증합니다.
          </p>

          <div className="grid grid-cols-2 gap-2.5 mb-4">
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 block mb-0.5">
                2026년 국가채무
              </span>
              <div className="text-lg font-mono font-black text-slate-200">
                51.6% (1,415조)
              </div>
              <span className="text-[9px] font-mono text-slate-500">
                50% 공식 돌파
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 block mb-0.5">
                2029년 국가채무
              </span>
              <div className="text-lg font-mono font-black text-amber-400">
                58.0% (1,789조)
              </div>
              <span className="text-[9px] font-mono text-slate-500">
                1,800조 육박
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 block mb-0.5">
                2065년 전망 (기재부)
              </span>
              <div className="text-lg font-mono font-black text-rose-400">
                156.3%
              </div>
              <span className="text-[9px] font-mono text-rose-500">
                시나리오별 133.0~173.4%
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 block mb-0.5">
                2072년 전망 (NABO)
              </span>
              <div className="text-lg font-mono font-black text-rose-500">
                173.0% (7,303조)
              </div>
              <span className="text-[9px] font-mono text-slate-500">
                OECD 최고 수준
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800/80">
            <span>출처: 국회예산정책처 & 기획재정부</span>
            <span className="text-rose-400 font-bold flex items-center gap-1">
              상세 분석 보기 <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </SpatialExhibitContainer>

      {/* ========================================================
          EXHIBIT 5-B: '악어의 입' 거대 조형물 (중앙 독립 조형물)
          수입 22.0% 하락 vs 지출 33.6% 급증, 의무지출 64.3%
          X = 0px, Y = +60px, Z = -19600px, RotY = 0deg
          ======================================================== */}
      <SpatialExhibitContainer
        x={0}
        y={60}
        z={-19600}
        rotateY={0}
        cameraZ={cameraZ}
        width={480}
        title="'악어의 입' 거대 조형물"
        exhibitCode="EXHIBIT 5-B"
        onInspect={() => onInspect("exhibit_5b")}
      >
        <div className="relative flex flex-col items-center">
          <div className="w-40 h-20 rounded-2xl bg-gradient-to-tr from-rose-600/30 via-red-500/20 to-transparent border-2 border-rose-500/60 backdrop-blur-md shadow-[0_0_50px_rgba(244,63,94,0.4)] flex flex-col items-center justify-center relative mb-3">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono font-bold text-rose-400 animate-bounce">
                지출 33.6% ↑
              </span>
              <span className="text-xs font-mono text-slate-500 font-black">
                VS
              </span>
              <span className="text-[11px] font-mono font-bold text-sky-400 animate-pulse">
                수입 22.0% ↓
              </span>
            </div>
            <span className="text-[9px] font-mono text-rose-300 tracking-widest mt-1">
              CROCODILE JAW: 11.6%p GAP
            </span>
          </div>

          <div className="w-full p-6 rounded-2xl bg-gradient-to-b from-[#250810] to-[#0d0205] border-2 border-rose-500/50 shadow-2xl backdrop-blur-md relative group-hover:border-rose-400/80 transition-colors text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-950/80 border border-rose-600 text-[10px] font-mono text-rose-300 mb-2">
              <Skull className="w-3.5 h-3.5 text-rose-400" />
              <span>ARCHITECTURAL MONUMENT</span>
            </div>

            <h4 className="text-lg font-black text-white font-mono tracking-tight mb-2">
              '악어의 입' 거대 조형물
            </h4>

            <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4 text-left">
              총수입은 24.5%에서 22.0%로 주저앉고 총지출은 25.5%에서 33.6%로
              벌어지며, 2072년 의무지출 비중은 64.3%(GDP 대비 21.6%)에 달해 재정
              자율성이 상실됩니다.
            </p>

            <div className="grid grid-cols-2 gap-2 text-left mb-3">
              <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 block">
                  벌어진 입턱 격차
                </span>
                <span className="text-base font-mono font-black text-rose-400">
                  11.6%p 결손
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 block">
                  2072 의무지출 비중
                </span>
                <span className="text-base font-mono font-black text-amber-400">
                  64.3% (3분의 2)
                </span>
              </div>
            </div>

            <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800 flex items-center justify-between">
              <span>국회예산정책처 NABO</span>
              <span className="text-rose-400 font-bold">
                클릭하여 전체 분석 보기
              </span>
            </div>
          </div>
        </div>
      </SpatialExhibitContainer>

      {/* ========================================================
          EXHIBIT 5-E: 법정 의무지출 19.24%·20.79% 자동 배분 구조도 (우측 초입)
          X = +460px, Y = -10px, Z = -18600px, RotY = -20deg
          ======================================================== */}
      <SpatialExhibitContainer
        x={460}
        y={-10}
        z={-18600}
        rotateY={-20}
        cameraZ={cameraZ}
        width={480}
        title="법정 의무지출 자동 배분 구조도"
        exhibitCode="EXHIBIT 5-E"
        onInspect={() => onInspect("exhibit_5e")}
      >
        <div className="p-6 rounded-2xl bg-[#200612]/95 border-2 border-rose-500/50 shadow-2xl backdrop-blur-md relative group-hover:border-rose-400/80 transition-colors">
          <div className="flex items-center justify-between border-b border-rose-500/30 pb-3 mb-3">
            <div className="flex items-center gap-2 text-xs font-mono text-rose-300 font-bold">
              <Layers className="w-4 h-4 text-rose-400" />
              <span>STATUTORY MANDATORY ALLOCATION</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-950 border border-rose-700 text-rose-300">
              내국세 40% 법적 자동 연동
            </span>
          </div>

          <h4 className="text-xl font-black text-white font-mono mb-2">
            법정 의무지출 자동 배분 구조도
          </h4>

          <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
            내국세의 19.24%는 지방교부세로, 20.79%는 지방교육재정교부금으로
            법률에 의해 무조건 자동 배분되어 학생 수 감소에도 예산이 줄지 않는
            경직성을 초래합니다.
          </p>

          <div className="space-y-2 mb-4">
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-300">
                지방교부세 법정 배분율
              </span>
              <span className="text-xs font-mono font-bold text-amber-300">
                내국세 총액의 19.24%
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-300">
                지방교육재정교부금 배분율
              </span>
              <span className="text-xs font-mono font-bold text-rose-400">
                내국세 총액의 20.79%
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-rose-950/30 border border-rose-800/40 flex items-center justify-between">
              <span className="text-xs font-mono text-rose-300">
                법적 자동 결박 총량
              </span>
              <span className="text-xs font-mono font-black text-rose-400">
                내국세의 40.03% 즉시 배분
              </span>
            </div>
          </div>

          <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800 flex items-center justify-between">
            <span>지방교부세법 & 지방교육재정교부금법</span>
            <span className="text-rose-400 font-bold">배분 구조 보기</span>
          </div>
        </div>
      </SpatialExhibitContainer>

      {/* ========================================================
          EXHIBIT 5-C: 잠재성장률 추이 및 60-3 재정준칙 패널 (우측 중반)
          X = +460px, Y = -10px, Z = -20200px, RotY = -20deg
          ======================================================== */}
      <SpatialExhibitContainer
        x={460}
        y={-10}
        z={-20200}
        rotateY={-20}
        cameraZ={cameraZ}
        width={490}
        title="잠재성장률 추이 & 60-3 재정준칙"
        exhibitCode="EXHIBIT 5-C"
        onInspect={() => onInspect("exhibit_5c")}
      >
        <div className="p-6 rounded-2xl bg-[#1d060c]/95 border-2 border-rose-500/40 shadow-2xl backdrop-blur-md relative group-hover:border-rose-400/80 transition-colors">
          <div className="flex items-center justify-between border-b border-rose-500/30 pb-3 mb-3">
            <div className="flex items-center gap-2 text-xs font-mono text-rose-300 font-bold">
              <Scale className="w-4 h-4 text-rose-400" />
              <span>POTENTIAL GDP & FISCAL RULE</span>
            </div>
            <span className="text-[10px] text-rose-400 font-sans">
              클릭하여 상세 보기
            </span>
          </div>

          <h4 className="text-xl font-black text-white font-mono mb-2">
            잠재성장률 추이 & 60-3 재정준칙
          </h4>

          <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
            잠재성장률은 2026년 1.6%에서 2040년대 0.1% ~ -0.3%(KDI)로 마이너스
            진입 위험이 있으며, 60-3 재정준칙은 4년째 계류 중입니다.
          </p>

          <div className="space-y-2 mb-4">
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-slate-300 block">
                  2026년 잠재성장률
                </span>
                <span className="text-[10px] text-slate-500">
                  노동·자본 투입 정체
                </span>
              </div>
              <span className="text-sm font-mono font-bold text-slate-200">
                1.6%
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-rose-950/30 border border-rose-600/40 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-rose-300 block">
                  2040년대 잠재성장률 (KDI)
                </span>
                <span className="text-[10px] text-rose-400">
                  사상 최초 역성장 위험
                </span>
              </div>
              <span className="text-sm font-mono font-bold text-rose-400">
                0.1% ~ -0.3%
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-amber-300 block">
                  60-3 재정준칙 (법제화 계류)
                </span>
                <span className="text-[10px] text-slate-400">
                  적자 3% 이내, 채무 60% 초과 시 2% 통제
                </span>
              </div>
              <span className="text-xs font-mono font-bold text-amber-400">
                4년째 계류
              </span>
            </div>
          </div>

          <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800 flex items-center justify-between">
            <span>KDI 경제전망 & 기재부 준칙안</span>
            <span className="text-rose-400 font-bold">세부 해설 보기</span>
          </div>
        </div>
      </SpatialExhibitContainer>

      {/* ========================================================
          CORRIDOR 05 WALL PLAQUE: 시뮬레이션 게이트 회랑 안내 사이니지
          X = +270px, Z = -21300px, RotY = -10deg, Width = 310px
          ======================================================== */}
      <SpatialExhibitContainer
        x={270}
        y={0}
        z={-21300}
        rotateY={-10}
        cameraZ={cameraZ}
        width={310}
        title="시뮬레이션 게이트 안내 사이니지"
        exhibitCode="CORRIDOR 05"
        onInspect={() => onInspect("exhibit_corridor_05")}
      >
        <div className="p-5 rounded-2xl bg-[#030e1c]/95 border border-cyan-500/40 shadow-xl backdrop-blur-md group-hover:border-cyan-400/80 transition-colors">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
              CORRIDOR 05 TRANSIT
            </span>
            <span className="text-[9px] text-cyan-400/70 font-sans">
              클릭하여 해설 보기
            </span>
          </div>
          <h4 className="text-base font-bold text-white font-mono mb-2">
            정책 시뮬레이션 게이트
          </h4>
          <p className="text-xs text-slate-300 font-sans leading-relaxed">
            관람객이 직접 정책을 선택하고 미래를 시뮬레이션하는 나라살림게임 랩
            입구입니다. 전방의 Hall 06 문으로 전진하세요.
          </p>
        </div>
      </SpatialExhibitContainer>
    </>
  );
};

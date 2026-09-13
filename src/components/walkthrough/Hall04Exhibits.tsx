import React from "react";
import { SpatialExhibitContainer } from "./SpatialExhibitContainer";
import {
  Cpu,
  Bot,
  Award,
  ArrowRight,
  PieChart,
  BookOpen,
  UserX,
} from "lucide-react";

interface Hall04ExhibitsProps {
  cameraZ: number;
  onInspect: (exhibitId: string) => void;
}

export const Hall04Exhibits: React.FC<Hall04ExhibitsProps> = ({
  cameraZ,
  onInspect,
}) => {
  return (
    <>
      {/* ========================================================
          EXHIBIT 4-D: 41개 부처 AI 예산 배분 인포그래픽 월 (좌측 초입)
          X = -460px, Y = -10px, Z = -14400px, RotY = 20deg
          ======================================================== */}
      <SpatialExhibitContainer
        x={-460}
        y={-10}
        z={-14400}
        rotateY={20}
        cameraZ={cameraZ}
        width={480}
        title="41개 부처 AI 예산 배분 인포그래픽 월"
        exhibitCode="EXHIBIT 4-D"
        onInspect={() => onInspect("exhibit_4d")}
      >
        <div className="p-6 rounded-2xl bg-[#160628]/95 border-2 border-purple-500/50 shadow-2xl backdrop-blur-md relative overflow-hidden group-hover:border-purple-400/80 transition-colors">
          <div className="flex items-center justify-between border-b border-purple-500/30 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-purple-950 border border-purple-600 text-[10px] font-mono font-bold text-purple-300">
                EXHIBIT 4-D
              </span>
              <span className="text-xs font-mono text-slate-300">
                BUDGET ALLOCATION
              </span>
            </div>
            <span className="text-[10px] text-purple-400 font-sans flex items-center gap-1">
              <PieChart className="w-3.5 h-3.5 text-purple-400" />
              <span>상세 보기</span>
            </span>
          </div>

          <h3 className="text-xl font-black text-white font-mono mb-2">
            41개 부처 AI 예산 배분 인포그래픽 월
          </h3>

          <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
            2026년 정부 AI 예산 9.9조 원(정부 총지출 728조 원의 1.4%, 738개
            사업)의 부처별 투자 포트폴리오를 분석합니다.
          </p>

          <div className="space-y-2 mb-4">
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-purple-300">
                과기정통부 (R&D 및 컴퓨팅)
              </span>
              <span className="text-xs font-mono font-black text-purple-300">
                51% (과반 집중)
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-300">
                산업통상자원부 (산업 AX)
              </span>
              <span className="text-xs font-mono font-bold text-slate-200">
                17%
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-300">
                중소벤처기업부 (스타트업)
              </span>
              <span className="text-xs font-mono font-bold text-slate-200">
                9%
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">
                기타 38개 부처
              </span>
              <span className="text-xs font-mono text-slate-400">23%</span>
            </div>
          </div>

          <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800 flex items-center justify-between">
            <span>기획재정부 & 과기정통부 예산안</span>
            <span className="text-purple-400 font-bold">부처별 세부 보기</span>
          </div>
        </div>
      </SpatialExhibitContainer>

      {/* ========================================================
          EXHIBIT 4-A: 정부 AI GPU 인프라 확대 타임라인 (좌측 중반)
          X = -460px, Y = -20px, Z = -15100px, RotY = 20deg
          ======================================================== */}
      <SpatialExhibitContainer
        x={-460}
        y={-20}
        z={-15100}
        rotateY={20}
        cameraZ={cameraZ}
        width={500}
        title="정부 AI GPU 인프라 타임라인"
        exhibitCode="EXHIBIT 4-A"
        onInspect={() => onInspect("exhibit_4a")}
      >
        <div className="p-6 rounded-2xl bg-[#140624]/95 border-2 border-purple-500/40 shadow-2xl backdrop-blur-md relative overflow-hidden group-hover:border-purple-400/80 transition-colors">
          <div className="flex items-center justify-between border-b border-purple-500/30 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-purple-950 border border-purple-600 text-[10px] font-mono font-bold text-purple-300">
                EXHIBIT 4-A
              </span>
              <span className="text-xs font-mono text-slate-300">
                AI GPU INFRASTRUCTURE
              </span>
            </div>
            <span className="text-[10px] text-purple-400 font-sans flex items-center gap-1">
              <Cpu className="w-3.5 h-3.5 text-purple-400" />
              <span>클릭하여 상세 보기</span>
            </span>
          </div>

          <h3 className="text-xl font-black text-white font-mono mb-2">
            정부 AI GPU 인프라 확대 타임라인
          </h3>

          <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
            B200 기준 3.52만 장 확보를 시작으로 2028년 5만 장 조기 달성, 2030년
            20만 장 확보 및 민간 550조 원 투자 유치를 추진합니다.
          </p>

          <div className="grid grid-cols-2 gap-2.5 mb-4">
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 block mb-0.5">
                현재 확보 인프라
              </span>
              <div className="text-lg font-mono font-black text-cyan-400">
                B200 3.52만 장
              </div>
              <span className="text-[9px] font-mono text-slate-500">
                국가 AI 컴퓨팅 센터
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 block mb-0.5">
                2028년 조기 목표
              </span>
              <div className="text-lg font-mono font-black text-emerald-400">
                5만 장 확보
              </div>
              <span className="text-[9px] font-mono text-emerald-500">
                글로벌 G3 도약 발판
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 block mb-0.5">
                2030년 최종 인프라
              </span>
              <div className="text-base font-mono font-black text-amber-400">
                20만 장 구축
              </div>
              <span className="text-[9px] font-mono text-slate-500">
                국가 주권 AI 인프라
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 block mb-0.5">
                민간 투자 유치
              </span>
              <div className="text-base font-mono font-black text-purple-300">
                550조 원
              </div>
              <span className="text-[9px] font-mono text-slate-500">
                데이터센터 & 생태계
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800/80">
            <span>출처: 국가인공지능위원회 전략</span>
            <span className="text-purple-400 font-bold flex items-center gap-1">
              상세 분석 보기 <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </SpatialExhibitContainer>

      {/* ========================================================
          EXHIBIT 4-B: KDI 2030 직업별 업무 자동화율 비교 월 (중앙)
          X = +50px, Y = +40px, Z = -15600px, RotY = -10deg
          ======================================================== */}
      <SpatialExhibitContainer
        x={50}
        y={40}
        z={-15600}
        rotateY={-10}
        cameraZ={cameraZ}
        width={460}
        title="KDI 2030 직업별 업무 자동화율 비교 월"
        exhibitCode="EXHIBIT 4-B"
        onInspect={() => onInspect("exhibit_4b")}
      >
        <div className="p-6 rounded-2xl bg-gradient-to-b from-[#16062a] to-[#0a0214] border-2 border-purple-500/50 shadow-2xl backdrop-blur-md relative group-hover:border-purple-400/80 transition-colors">
          <div className="flex items-center justify-between border-b border-purple-500/30 pb-3 mb-3">
            <div className="flex items-center gap-1.5 text-xs font-mono text-purple-300 font-bold">
              <Bot className="w-4 h-4 text-purple-400" />
              <span>LABOR AUTOMATION RISK (KDI)</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 border border-purple-600 text-purple-300">
              2030 노동 충격
            </span>
          </div>

          <h4 className="text-lg font-black text-white font-mono mb-2">
            KDI 2030 직업별 업무 자동화율 비교 월
          </h4>

          <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
            단순 서비스직뿐만 아니라 변호사(74%), 판·검사(69%),
            국회의원·교수(64%) 등 지식 전문직까지 광범위하게 업무 자동화 위험에
            노출됩니다.
          </p>

          <div className="space-y-2 mb-4">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-300 mb-0.5">
                <span>주방장·조리사 / 세탁원</span>
                <span className="text-rose-400 font-bold">
                  100% (완전 대체)
                </span>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-rose-500 rounded-full"
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-300 mb-0.5">
                <span>변호사</span>
                <span className="text-amber-400 font-bold">74%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-400 rounded-full"
                  style={{ width: "74%" }}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-300 mb-0.5">
                <span>판사·검사</span>
                <span className="text-amber-300 font-bold">69%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-300 rounded-full"
                  style={{ width: "69%" }}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-300 mb-0.5">
                <span>국회의원·고위공무원·대학교수</span>
                <span className="text-purple-300 font-bold">64%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-purple-400 rounded-full"
                  style={{ width: "64%" }}
                />
              </div>
            </div>
          </div>

          <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800 flex items-center justify-between">
            <span>KDI 경제동향 분석</span>
            <span className="text-purple-400 font-bold">노동 대체 분석</span>
          </div>
        </div>
      </SpatialExhibitContainer>

      {/* ========================================================
          EXHIBIT 4-E: AI 기본법 규제 체계도 (우측 초입)
          X = +460px, Y = -10px, Z = -14600px, RotY = -20deg
          ======================================================== */}
      <SpatialExhibitContainer
        x={460}
        y={-10}
        z={-14600}
        rotateY={-20}
        cameraZ={cameraZ}
        width={480}
        title="AI 기본법 거버넌스 및 규제 체계도"
        exhibitCode="EXHIBIT 4-E"
        onInspect={() => onInspect("exhibit_4e")}
      >
        <div className="p-6 rounded-2xl bg-[#140626]/95 border-2 border-purple-500/50 shadow-2xl backdrop-blur-md relative group-hover:border-purple-400/80 transition-colors">
          <div className="flex items-center justify-between border-b border-purple-500/30 pb-3 mb-3">
            <div className="flex items-center gap-2 text-xs font-mono text-purple-300 font-bold">
              <BookOpen className="w-4 h-4 text-purple-400" />
              <span>AI FRAMEWORK ACT GOVERNANCE</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 border border-purple-600 text-purple-300">
              2026.01.22 전면 시행
            </span>
          </div>

          <h4 className="text-xl font-black text-white font-mono mb-2">
            AI 기본법 거버넌스 & 규제 체계
          </h4>

          <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
            2024년 12월 국회 제정되어 2026년 1월 22일 전면 시행되는 대한민국
            인공지능 기본법의 고영향 AI 규제 체계와 신뢰성 검증 체계를
            설명합니다.
          </p>

          <div className="space-y-2 mb-4">
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-300">
                제정 및 시행
              </span>
              <span className="text-xs font-mono font-bold text-emerald-400">
                2024.12 제정 → 2026.1.22 시행
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-purple-950/30 border border-purple-800/50 flex items-center justify-between">
              <span className="text-xs font-mono text-purple-300">
                규제 방식
              </span>
              <span className="text-xs font-mono font-bold text-purple-300">
                고영향 AI 위험기반 규제 & 투명성 의무
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-300">
                전담 기구
              </span>
              <span className="text-xs font-mono text-slate-200">
                국가AI위원회 & AI안전연구소
              </span>
            </div>
          </div>

          <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800 flex items-center justify-between">
            <span>대한민국 국회 법률안</span>
            <span className="text-purple-400 font-bold">법제도 세부 보기</span>
          </div>
        </div>
      </SpatialExhibitContainer>

      {/* ========================================================
          EXHIBIT 4-F: 청년 고용 비대칭성 충격 전시 (우측 중반)
          X = +460px, Y = -10px, Z = -15400px, RotY = -20deg
          ======================================================== */}
      <SpatialExhibitContainer
        x={460}
        y={-10}
        z={-15400}
        rotateY={-20}
        cameraZ={cameraZ}
        width={480}
        title="AI 도입과 청년 고용 비대칭성 충격"
        exhibitCode="EXHIBIT 4-F"
        onInspect={() => onInspect("exhibit_4f")}
      >
        <div className="p-6 rounded-2xl bg-[#160620]/95 border-2 border-rose-500/50 shadow-2xl backdrop-blur-md relative group-hover:border-rose-400/80 transition-colors">
          <div className="flex items-center justify-between border-b border-rose-500/30 pb-3 mb-3">
            <div className="flex items-center gap-2 text-xs font-mono text-rose-300 font-bold">
              <UserX className="w-4 h-4 text-rose-400" />
              <span>YOUTH EMPLOYMENT ASYMMETRY</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-950 border border-rose-700 text-rose-300">
              성별 비대칭 충격
            </span>
          </div>

          <h4 className="text-xl font-black text-white font-mono mb-2">
            청년 고용 비대칭성 충격
          </h4>

          <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
            AI 영향률이 10%p 상승할 때 남성 청년 임금근로는 3.3%p, 여성 청년은
            5.3%p 감소하여 청년 엔트리 레벨 일자리에 심각한 진입 장벽을
            초래합니다.
          </p>

          <div className="grid grid-cols-2 gap-2.5 mb-4">
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
              <span className="text-[10px] font-mono text-slate-400 block mb-0.5">
                남성 청년 근로 감소
              </span>
              <div className="text-lg font-mono font-black text-rose-400">
                -3.3%p
              </div>
              <span className="text-[9px] font-mono text-slate-500">
                AI 영향률 10%p 당
              </span>
            </div>
            <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-800/60 text-center">
              <span className="text-[10px] font-mono text-rose-300 block mb-0.5">
                여성 청년 근로 감소
              </span>
              <div className="text-lg font-mono font-black text-rose-300">
                -5.3%p
              </div>
              <span className="text-[9px] font-mono text-rose-400">
                사무직 집중 타격
              </span>
            </div>
          </div>

          <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800 flex items-center justify-between">
            <span>KDI 정책연구 보고서</span>
            <span className="text-rose-400 font-bold">고용 통계 보기</span>
          </div>
        </div>
      </SpatialExhibitContainer>

      {/* ========================================================
          EXHIBIT 4-C: 글로벌 AI 경쟁력 4대 지표 순위 전시 월 (우측 후반)
          X = +460px, Y = -10px, Z = -16300px, RotY = -20deg
          ======================================================== */}
      <SpatialExhibitContainer
        x={460}
        y={-10}
        z={-16300}
        rotateY={-20}
        cameraZ={cameraZ}
        width={490}
        title="글로벌 AI 경쟁력 4대 지표 순위 전시 월"
        exhibitCode="EXHIBIT 4-C"
        onInspect={() => onInspect("exhibit_4c")}
      >
        <div className="p-6 rounded-2xl bg-[#140828]/95 border-2 border-purple-500/40 shadow-2xl backdrop-blur-md relative group-hover:border-purple-400/80 transition-colors">
          <div className="flex items-center justify-between border-b border-purple-500/30 pb-3 mb-3">
            <div className="flex items-center gap-2 text-xs font-mono text-purple-300 font-bold">
              <Award className="w-4 h-4 text-purple-400" />
              <span>GLOBAL AI INDEX 4 CORE METRICS</span>
            </div>
            <span className="text-[10px] text-purple-400 font-sans">
              클릭하여 상세 보기
            </span>
          </div>

          <h4 className="text-xl font-black text-white font-mono mb-2">
            글로벌 AI 경쟁력 4대 지표 순위 전시 월
          </h4>

          <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
            특허 밀도는 세계 1위이지만 민간 투자는 12위, 인재 순유입은 35위에
            그쳐 인프라와 두뇌 유출 방지를 위한 국가적 재정 투자가 요구됩니다.
          </p>

          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 block mb-0.5">
                AI 특허 밀도
              </span>
              <div className="text-lg font-mono font-black text-emerald-400">
                세계 1위
              </div>
              <span className="text-[9px] font-mono text-slate-500">
                1만 명당 14.31건
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 block mb-0.5">
                AI 사회적 확산 순위
              </span>
              <div className="text-lg font-mono font-black text-slate-200">
                세계 18위
              </div>
              <span className="text-[9px] font-mono text-slate-500">
                중위권 수준
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 block mb-0.5">
                민간 투자 규모
              </span>
              <div className="text-lg font-mono font-black text-amber-400">
                세계 12위
              </div>
              <span className="text-[9px] font-mono text-slate-500">
                미국의 2.1% 수준
              </span>
            </div>

            <div className="p-3 rounded-xl bg-rose-950/30 border border-rose-600/40">
              <span className="text-[10px] font-mono text-rose-300 block mb-0.5">
                AI 인재 순유입 순위
              </span>
              <div className="text-lg font-mono font-black text-rose-400">
                세계 35위
              </div>
              <span className="text-[9px] font-mono text-rose-300">
                두뇌 순유출 우려
              </span>
            </div>
          </div>

          <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800 flex items-center justify-between">
            <span>스탠퍼드 대학교 AI Index 2026</span>
            <span className="text-purple-400 font-bold">세부 지표 확인</span>
          </div>
        </div>
      </SpatialExhibitContainer>

      {/* ========================================================
          CORRIDOR 04 WALL PLAQUE: 악어의 입 회랑 안내 사이니지
          X = -270px, Z = -17300px, RotY = 10deg, Width = 310px
          ======================================================== */}
      <SpatialExhibitContainer
        x={-270}
        y={0}
        z={-17300}
        rotateY={10}
        cameraZ={cameraZ}
        width={310}
        title="악어의 입 회랑 안내 사이니지"
        exhibitCode="CORRIDOR 04"
        onInspect={() => onInspect("exhibit_corridor_04")}
      >
        <div className="p-5 rounded-2xl bg-[#160309]/95 border border-rose-500/40 shadow-xl backdrop-blur-md group-hover:border-rose-400/80 transition-colors">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-mono tracking-widest text-rose-400 uppercase">
              CORRIDOR 04 TRANSIT
            </span>
            <span className="text-[9px] text-rose-400/70 font-sans">
              클릭하여 해설 보기
            </span>
          </div>
          <h4 className="text-base font-bold text-white font-mono mb-2">
            악어의 입 회랑
          </h4>
          <p className="text-xs text-slate-300 font-sans leading-relaxed">
            수입 하락선과 지출 급증선이 벌어지는 바닥 가이드라인이 표시된
            장기재정 진입 통로입니다. 전방에 보이는 Hall 05 문으로 전진하세요.
          </p>
        </div>
      </SpatialExhibitContainer>
    </>
  );
};

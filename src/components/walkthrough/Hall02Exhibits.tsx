import React from "react";
import { SpatialExhibitContainer } from "./SpatialExhibitContainer";
import {
  Gauge,
  History,
  AlertTriangle,
  ArrowRight,
  HeartPulse,
  Scale,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

interface Hall02ExhibitsProps {
  cameraZ: number;
  onInspect: (exhibitId: string) => void;
}

export const Hall02Exhibits: React.FC<Hall02ExhibitsProps> = ({
  cameraZ,
  onInspect,
}) => {
  return (
    <>
      {/* ========================================================
          EXHIBIT 2-D: 국민부담률 및 사회복지지출 OECD 비교 월 (좌측 초입)
          X = -460px, Y = -10px, Z = -6400px, RotY = 20deg
          ======================================================== */}
      <SpatialExhibitContainer
        x={-460}
        y={-10}
        z={-6400}
        rotateY={20}
        cameraZ={cameraZ}
        width={480}
        title="국민부담률 & 사회복지지출 OECD 비교 월"
        exhibitCode="EXHIBIT 2-D"
        onInspect={() => onInspect("exhibit_2d")}
      >
        <div className="p-6 rounded-2xl bg-[#1c1104]/95 border-2 border-amber-500/50 shadow-2xl backdrop-blur-md relative overflow-hidden group-hover:border-amber-400/80 transition-colors">
          <div className="flex items-center justify-between border-b border-amber-500/30 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-amber-950 border border-amber-600 text-[10px] font-mono font-bold text-amber-300">
                EXHIBIT 2-D
              </span>
              <span className="text-xs font-mono text-slate-300">
                BURDEN & EXPENDITURE
              </span>
            </div>
            <span className="text-[10px] text-amber-400 font-sans flex items-center gap-1">
              <Scale className="w-3.5 h-3.5 text-amber-400" />
              <span>상세 보기</span>
            </span>
          </div>

          <h3 className="text-xl font-black text-white font-mono mb-2">
            국민부담률 & 사회복지지출 OECD 비교 월
          </h3>

          <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
            한국의 국민부담률은 26.9%(2023)로 OECD 평균(33.7%)보다 낮으나, GDP
            대비 사회복지지출은 2024년 15.3%에서 2040년 20.5%로 OECD 수준에
            급속히 근접합니다.
          </p>

          <div className="space-y-2 mb-4">
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-300">
                2023 국민부담률 비교
              </span>
              <span className="text-xs font-mono font-bold text-amber-300">
                한국 26.9% vs OECD 33.7%
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="flex items-center justify-between text-xs font-mono text-slate-300 mb-1">
                <span>사회복지지출 (GDP 대비)</span>
                <span className="text-amber-400 font-bold">15.3% → 20.5%</span>
              </div>
              <div className="text-[10px] font-mono text-slate-400 grid grid-cols-4 gap-1 text-center">
                <span className="bg-slate-900 py-1 rounded">2024: 15.3%</span>
                <span className="bg-slate-900 py-1 rounded">2030: 17.2%</span>
                <span className="bg-slate-900 py-1 rounded">2035: 18.6%</span>
                <span className="bg-amber-950/60 text-amber-300 py-1 rounded font-bold">
                  2040: 20.5%
                </span>
              </div>
            </div>
          </div>

          <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800 flex items-center justify-between">
            <span>OECD 통계 & future_finance_doc.md</span>
            <span className="text-amber-400 font-bold">지출 추이 분석</span>
          </div>
        </div>
      </SpatialExhibitContainer>

      {/* ========================================================
          EXHIBIT 2-A: 국민연금 기금 소진 듀얼 게이지 월 (좌측 중반)
          X = -460px, Y = -20px, Z = -7100px, RotY = 20deg
          ======================================================== */}
      <SpatialExhibitContainer
        x={-460}
        y={-20}
        z={-7100}
        rotateY={20}
        cameraZ={cameraZ}
        width={500}
        title="국민연금 기금 소진 듀얼 게이지 월"
        exhibitCode="EXHIBIT 2-A"
        onInspect={() => onInspect("exhibit_2a")}
      >
        <div className="p-6 rounded-2xl bg-[#1a1205]/95 border-2 border-amber-500/40 shadow-2xl backdrop-blur-md relative overflow-hidden group-hover:border-amber-400/80 transition-colors">
          <div className="flex items-center justify-between border-b border-amber-500/30 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-amber-950 border border-amber-600 text-[10px] font-mono font-bold text-amber-300">
                EXHIBIT 2-A
              </span>
              <span className="text-xs font-mono text-slate-300">
                DUAL GAUGE WALL
              </span>
            </div>
            <span className="text-[10px] text-amber-400 font-sans flex items-center gap-1">
              <Gauge className="w-3.5 h-3.5 text-amber-400" />
              <span>클릭하여 상세 보기</span>
            </span>
          </div>

          <h3 className="text-xl font-black text-white font-mono mb-2">
            국민연금 기금 소진 듀얼 게이지 월
          </h3>

          <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
            제3차 개혁으로 소진 시점이 2057년에서 2065년으로 8년 연장되었으며,
            2025년 기금운용 호실적(수익률 18.82%, 1,458조 달성) 반영 시
            2069년까지 연장됩니다.
          </p>

          <div className="grid grid-cols-2 gap-2.5 mb-4">
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 block mb-0.5">
                3차 개혁 후 소진 시점
              </span>
              <div className="text-xl font-mono font-black text-amber-400">
                2065년
              </div>
              <span className="text-[9px] font-mono text-emerald-400">
                ▲8년 연기 (적자전환 2048)
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 block mb-0.5">
                2025 호실적 반영 시
              </span>
              <div className="text-xl font-mono font-black text-emerald-400">
                2069년
              </div>
              <span className="text-[9px] font-mono text-slate-500">
                적립금 1,458조 달성
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 block mb-0.5">
                총 연금부채
              </span>
              <div className="text-base font-mono font-black text-rose-400">
                6,358조 원
              </div>
              <span className="text-[9px] font-mono text-slate-500">
                미적립 1,820조 원
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 block mb-0.5">
                보험료율 / 대체율
              </span>
              <div className="text-base font-mono font-black text-sky-400">
                13% / 43%
              </div>
              <span className="text-[9px] font-mono text-slate-500">
                매년 0.5%p 단계 인상
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800/80">
            <span>출처: 보건복지부 국민연금 종합운용계획</span>
            <span className="text-amber-400 font-bold flex items-center gap-1">
              상세 분석 보기 <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </SpatialExhibitContainer>

      {/* ========================================================
          EXHIBIT 2-B: 국민연금 1차~3차 개혁 역사 아카이브 패널 (중앙 좌측 기둥)
          X = -60px, Y = +40px, Z = -7700px, RotY = 8deg
          ======================================================== */}
      <SpatialExhibitContainer
        x={-60}
        y={40}
        z={-7700}
        rotateY={8}
        cameraZ={cameraZ}
        width={450}
        title="국민연금 1~3차 개혁 역사 패널"
        exhibitCode="EXHIBIT 2-B"
        onInspect={() => onInspect("exhibit_2b")}
      >
        <div className="p-6 rounded-2xl bg-gradient-to-b from-[#180f03] to-[#0a0601] border-2 border-amber-500/50 shadow-2xl backdrop-blur-md relative group-hover:border-amber-400/80 transition-colors">
          <div className="flex items-center justify-between border-b border-amber-500/30 pb-3 mb-3">
            <div className="flex items-center gap-1.5 text-xs font-mono text-amber-300 font-bold">
              <History className="w-4 h-4 text-amber-400" />
              <span>REFORM ARCHIVE PANEL</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 border border-amber-600 text-amber-300">
              3대 개혁사
            </span>
          </div>

          <h4 className="text-lg font-black text-white font-mono mb-2">
            국민연금 1차~3차 개혁 역사
          </h4>

          <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
            재정 안정을 위한 급여 삭감에서 다층 보장 및 국가 지급보장 명문화로
            진화해 온 개혁의 발자취를 비교합니다.
          </p>

          <div className="space-y-2 mb-4">
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="flex items-center justify-between text-xs font-mono mb-1">
                <span className="text-amber-300 font-bold">
                  1차 개혁 (1998)
                </span>
                <span className="text-slate-400">급여 삭감·수급연령 상향</span>
              </div>
              <p className="text-[11px] text-slate-400">
                소득대체율 70%→60%, 보험료율 3%→9%, 수급연령 65세
              </p>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="flex items-center justify-between text-xs font-mono mb-1">
                <span className="text-amber-300 font-bold">
                  2차 개혁 (2007)
                </span>
                <span className="text-slate-400">40% 단계 인하 체계</span>
              </div>
              <p className="text-[11px] text-slate-400">
                소득대체율 60%→40%(2028년까지), 기초노령연금 도입
              </p>
            </div>

            <div className="p-2.5 rounded-xl bg-amber-950/40 border border-amber-600/50">
              <div className="flex items-center justify-between text-xs font-mono mb-1">
                <span className="text-emerald-300 font-bold">
                  3차 개혁 (2025 통과)
                </span>
                <span className="text-emerald-400">지급보장 법률 명시</span>
              </div>
              <p className="text-[11px] text-slate-300">
                보험료율 13%, 소득대체율 43%, 군복무·출산 크레딧 대폭 확대
              </p>
            </div>
          </div>

          <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800 flex items-center justify-between">
            <span>국회예산정책처 & 복지부</span>
            <span className="text-amber-400 font-bold">
              클릭하여 전체 연혁 보기
            </span>
          </div>
        </div>
      </SpatialExhibitContainer>

      {/* ========================================================
          EXHIBIT 2-F: 3차 개혁 세부 크레딧 & 국가 지급보장 조형물 (우측 초입)
          X = +460px, Y = -10px, Z = -6600px, RotY = -20deg
          ======================================================== */}
      <SpatialExhibitContainer
        x={460}
        y={-10}
        z={-6600}
        rotateY={-20}
        cameraZ={cameraZ}
        width={480}
        title="3차 개혁 크레딧 & 지급보장 조형물"
        exhibitCode="EXHIBIT 2-F"
        onInspect={() => onInspect("exhibit_2f")}
      >
        <div className="p-6 rounded-2xl bg-[#1a0f05]/95 border-2 border-amber-500/50 shadow-2xl backdrop-blur-md relative group-hover:border-amber-400/80 transition-colors">
          <div className="flex items-center justify-between border-b border-amber-500/30 pb-3 mb-3">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-300 font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>CREDIT EXPANSION & GUARANTEE</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 border border-emerald-600 text-emerald-300">
              법률 지급보장 명문화
            </span>
          </div>

          <h4 className="text-xl font-black text-white font-mono mb-2">
            3차 개혁 크레딧 & 국가 지급보장
          </h4>

          <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
            청년층 불신을 해소하기 위해 국가의 연금 지급보장을 법률에 최초
            명시하고 군복무 및 출산 크레딧을 대폭 확대했습니다.
          </p>

          <div className="space-y-2 mb-4">
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-300">
                군복무 크레딧
              </span>
              <span className="text-xs font-mono font-bold text-amber-300">
                6개월 → 최대 12개월 확대
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-300">
                출산 크레딧
              </span>
              <span className="text-xs font-mono font-bold text-amber-300">
                첫째부터 인정 (상한 폐지)
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-800/50 flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-300">
                국가 지급보장
              </span>
              <span className="text-xs font-mono font-black text-emerald-300">
                국민연금법 명문 규정 신설
              </span>
            </div>
          </div>

          <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800 flex items-center justify-between">
            <span>보건복지부 제3차 국민연금 개혁안</span>
            <span className="text-amber-400 font-bold">크레딧 세부 보기</span>
          </div>
        </div>
      </SpatialExhibitContainer>

      {/* ========================================================
          EXHIBIT 2-E: 간호·간병통합서비스 및 신규 복지 소요 전시 (우측 중반)
          X = +460px, Y = -10px, Z = -7400px, RotY = -20deg
          ======================================================== */}
      <SpatialExhibitContainer
        x={460}
        y={-10}
        z={-7400}
        rotateY={-20}
        cameraZ={cameraZ}
        width={480}
        title="간호간병통합서비스 & 신규 복지 소요 전시"
        exhibitCode="EXHIBIT 2-E"
        onInspect={() => onInspect("exhibit_2e")}
      >
        <div className="p-6 rounded-2xl bg-[#180e06]/95 border-2 border-amber-500/40 shadow-2xl backdrop-blur-md relative group-hover:border-amber-400/80 transition-colors">
          <div className="flex items-center justify-between border-b border-amber-500/30 pb-3 mb-3">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-300 font-bold">
              <Stethoscope className="w-4 h-4 text-sky-400" />
              <span>NEW WELFARE FISCAL DEMAND</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 border border-amber-700 text-amber-300">
              연 1.07조~1.58조 추가
            </span>
          </div>

          <h4 className="text-xl font-black text-white font-mono mb-2">
            간호·간병통합 & 신규 복지 재정 소요
          </h4>

          <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
            초고령사회 간병 파산 방지를 위한 간호·간병통합서비스 확대와 상병수당
            등 신규 복지제도 도입에 따른 건강보험 재정 소요를 분석합니다.
          </p>

          <div className="space-y-2 mb-4">
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-300">
                간호·간병통합서비스
              </span>
              <span className="text-xs font-mono font-bold text-rose-300">
                연간 건보 1.07조~1.58조 원 소요
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-300">
                상병수당 제도
              </span>
              <span className="text-xs font-mono font-bold text-sky-300">
                2022년부터 지자체 시범사업 진행
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-amber-950/30 border border-amber-800/40 flex items-center justify-between">
              <span className="text-xs font-mono text-amber-300">
                건보 재정 압박
              </span>
              <span className="text-xs font-mono text-slate-300">
                현행 지출 시 12% 이상 요율 필요
              </span>
            </div>
          </div>

          <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800 flex items-center justify-between">
            <span>국민건강보험공단 & 복지부</span>
            <span className="text-amber-400 font-bold">
              재정 소요 세부 보기
            </span>
          </div>
        </div>
      </SpatialExhibitContainer>

      {/* ========================================================
          EXHIBIT 2-C: OECD 소득대체율 비교 보드 & 건강보험 경보 챔버 (우측 후반)
          한국 전체 31.6% (공적 31.2% + 퇴직 0.4%) vs OECD 평균 50.7%
          X = +460px, Y = -10px, Z = -8300px, RotY = -20deg
          ======================================================== */}
      <SpatialExhibitContainer
        x={460}
        y={-10}
        z={-8300}
        rotateY={-20}
        cameraZ={cameraZ}
        width={490}
        title="OECD 소득대체율 & 건강보험 경보 챔버"
        exhibitCode="EXHIBIT 2-C"
        onInspect={() => onInspect("exhibit_2c")}
      >
        <div className="p-6 rounded-2xl bg-[#170e04]/95 border-2 border-amber-500/40 shadow-2xl backdrop-blur-md relative group-hover:border-amber-400/80 transition-colors">
          <div className="flex items-center justify-between border-b border-amber-500/30 pb-3 mb-3">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-300 font-bold">
              <AlertTriangle className="w-4 h-4 text-rose-400" />
              <span>OECD COMPARISON & HEALTH ALERT</span>
            </div>
            <span className="text-[10px] text-amber-400 font-sans">
              클릭하여 상세 보기
            </span>
          </div>

          <h4 className="text-xl font-black text-white font-mono mb-2">
            OECD 소득대체율 비교 & 건보 2029 고갈 경보
          </h4>

          <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
            한국 전체 OECD 실질소득대체율은 31.6%로 OECD 평균에 크게 못 미치며,
            건강보험 누적준비금은 2029년 전면 소진될 위기입니다.
          </p>

          <div className="space-y-2 mb-4">
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="flex items-center justify-between text-xs font-mono mb-1">
                <span className="text-rose-400 font-bold">
                  한국 전체 OECD 소득대체율
                </span>
                <span className="text-rose-400 font-bold text-sm">31.6%</span>
              </div>
              <div className="text-[10px] font-mono text-slate-400 flex items-center justify-between mb-2">
                <span>• 공적연금: 31.2%</span>
                <span>• 퇴직연금: 0.4%</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-1 border-t border-slate-800/80">
                <span>OECD 평균 (그리스 80.8%, 이탈리아 76.1%)</span>
                <span className="text-slate-200 font-bold">50.7%</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-rose-950/30 border border-rose-600/40 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <HeartPulse className="w-5 h-5 text-rose-400 animate-pulse" />
                <div>
                  <span className="text-xs font-mono font-bold text-white block">
                    건강보험 누적준비금
                  </span>
                  <span className="text-[10px] text-slate-400">
                    현재 보험료율 7.09%
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono font-bold text-rose-400">
                  2029년 고갈 전망
                </span>
                <span className="text-[10px] text-slate-500 block">
                  향후 12% 이상 필요
                </span>
              </div>
            </div>
          </div>

          <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800 flex items-center justify-between">
            <span>OECD Pensions & 건보공단</span>
            <span className="text-amber-400 font-bold">전체 분석 보기</span>
          </div>
        </div>
      </SpatialExhibitContainer>

      {/* ========================================================
          CORRIDOR 02 WALL PLAQUE: 기후 회랑 안내 사이니지
          X = -270px, Z = -9300px, RotY = 10deg, Width = 310px
          ======================================================== */}
      <SpatialExhibitContainer
        x={-270}
        y={0}
        z={-9300}
        rotateY={10}
        cameraZ={cameraZ}
        width={310}
        title="기후 회랑 안내 사이니지"
        exhibitCode="CORRIDOR 02"
        onInspect={() => onInspect("exhibit_corridor_02")}
      >
        <div className="p-5 rounded-2xl bg-[#02100b]/95 border border-emerald-500/40 shadow-xl backdrop-blur-md group-hover:border-emerald-400/80 transition-colors">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase">
              CORRIDOR 02 TRANSIT
            </span>
            <span className="text-[9px] text-emerald-400/70 font-sans">
              클릭하여 해설 보기
            </span>
          </div>
          <h4 className="text-base font-bold text-white font-mono mb-2">
            기후위기 온실 회랑
          </h4>
          <p className="text-xs text-slate-300 font-sans leading-relaxed">
            사회보장비 폭증을 지나 한반도 기후위기와 탄소국경세 충격을 마주하는
            전이 통로입니다. 전방에 보이는 Hall 03 문으로 전진하세요.
          </p>
        </div>
      </SpatialExhibitContainer>
    </>
  );
};

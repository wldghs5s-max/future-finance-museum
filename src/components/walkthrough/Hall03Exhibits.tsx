import React from "react";
import { SpatialExhibitContainer } from "./SpatialExhibitContainer";
import {
  CloudSunRain,
  Zap,
  Shield,
  Globe2,
  ArrowRight,
  TrendingDown,
  Factory,
  Coins,
} from "lucide-react";

interface Hall03ExhibitsProps {
  cameraZ: number;
  onInspect: (exhibitId: string) => void;
}

export const Hall03Exhibits: React.FC<Hall03ExhibitsProps> = ({
  cameraZ,
  onInspect,
}) => {
  return (
    <>
      {/* ========================================================
          EXHIBIT 3-D: 국가 온실가스 배출량 정점 추이 타임라인 (좌측 초입)
          X = -460px, Y = -10px, Z = -10400px, RotY = 20deg
          ======================================================== */}
      <SpatialExhibitContainer
        x={-460}
        y={-10}
        z={-10400}
        rotateY={20}
        cameraZ={cameraZ}
        width={480}
        title="국가 온실가스 배출량 정점 추이 타임라인"
        exhibitCode="EXHIBIT 3-D"
        onInspect={() => onInspect("exhibit_3d")}
      >
        <div className="p-6 rounded-2xl bg-[#021812]/95 border-2 border-emerald-500/50 shadow-2xl backdrop-blur-md relative overflow-hidden group-hover:border-emerald-400/80 transition-colors">
          <div className="flex items-center justify-between border-b border-emerald-500/30 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-600 text-[10px] font-mono font-bold text-emerald-300">
                EXHIBIT 3-D
              </span>
              <span className="text-xs font-mono text-slate-300">
                EMISSION PEAK TRAJECTORY
              </span>
            </div>
            <span className="text-[10px] text-emerald-400 font-sans flex items-center gap-1">
              <TrendingDown className="w-3.5 h-3.5 text-emerald-400" />
              <span>상세 보기</span>
            </span>
          </div>

          <h3 className="text-xl font-black text-white font-mono mb-2">
            온실가스 배출량 정점 추이 타임라인
          </h3>

          <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
            2018년 742.3백만 톤으로 역사적 정점을 기록한 뒤 2023년 624.2백만
            톤으로 감소했으나 2024년 잠정 691.6백만 톤으로 다시 반등 압박을 받고
            있습니다.
          </p>

          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
              <span className="text-[9px] font-mono text-slate-400 block">
                2018년 정점
              </span>
              <span className="text-base font-mono font-black text-rose-400 block my-0.5">
                742.3Mt
              </span>
              <span className="text-[8px] font-mono text-slate-500">
                역대 최고 배출량
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-center">
              <span className="text-[9px] font-mono text-emerald-300 block">
                2023년
              </span>
              <span className="text-base font-mono font-black text-emerald-400 block my-0.5">
                624.2Mt
              </span>
              <span className="text-[8px] font-mono text-emerald-300">
                ▼15.9% 감축
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
              <span className="text-[9px] font-mono text-slate-400 block">
                2024년 잠정
              </span>
              <span className="text-base font-mono font-black text-amber-300 block my-0.5">
                691.6Mt
              </span>
              <span className="text-[8px] font-mono text-slate-500">
                배출량 반등 경보
              </span>
            </div>
          </div>

          <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800 flex items-center justify-between">
            <span>환경부 국가온실가스종합관리시스템</span>
            <span className="text-emerald-400 font-bold">배출 궤적 보기</span>
          </div>
        </div>
      </SpatialExhibitContainer>

      {/* ========================================================
          EXHIBIT 3-A: 한반도 미래 기후 3단계 시나리오 전시 챔버 (좌측 중반)
          X = -460px, Y = -20px, Z = -11100px, RotY = 20deg
          ======================================================== */}
      <SpatialExhibitContainer
        x={-460}
        y={-20}
        z={-11100}
        rotateY={20}
        cameraZ={cameraZ}
        width={500}
        title="한반도 미래 기후 3단계 시나리오 챔버"
        exhibitCode="EXHIBIT 3-A"
        onInspect={() => onInspect("exhibit_3a")}
      >
        <div className="p-6 rounded-2xl bg-[#021510]/95 border-2 border-emerald-500/40 shadow-2xl backdrop-blur-md relative overflow-hidden group-hover:border-emerald-400/80 transition-colors">
          <div className="flex items-center justify-between border-b border-emerald-500/30 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-600 text-[10px] font-mono font-bold text-emerald-300">
                EXHIBIT 3-A
              </span>
              <span className="text-xs font-mono text-slate-300">
                CLIMATE SCENARIO CHAMBER
              </span>
            </div>
            <span className="text-[10px] text-emerald-400 font-sans flex items-center gap-1">
              <CloudSunRain className="w-3.5 h-3.5 text-emerald-400" />
              <span>클릭하여 상세 보기</span>
            </span>
          </div>

          <h3 className="text-xl font-black text-white font-mono mb-2">
            한반도 미래 기후 3단계 시나리오
          </h3>

          <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
            현재 8.8일인 폭염일수는 고탄소(SSP5-8.5) 지속 시 79.5일(+7.0°C)로
            9배 폭증하며, 연간 자연재난 피해는 최대 11조 4,794억 원에 달합니다.
          </p>

          <div className="grid grid-cols-2 gap-2.5 mb-4">
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 block mb-0.5">
                현재 평년 폭염일수
              </span>
              <div className="text-lg font-mono font-black text-slate-200">
                연간 8.8일
              </div>
              <span className="text-[9px] font-mono text-slate-500">
                기준점 (1991~2020)
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 block mb-0.5">
                저탄소 (SSP1-2.6)
              </span>
              <div className="text-lg font-mono font-black text-emerald-400">
                24.2일 (+2.3°C)
              </div>
              <span className="text-[9px] font-mono text-emerald-500">
                탄소중립 성공 시
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 block mb-0.5">
                고탄소 (SSP5-8.5)
              </span>
              <div className="text-lg font-mono font-black text-rose-400">
                79.5일 (+7.0°C)
              </div>
              <span className="text-[9px] font-mono text-rose-500">
                9배 폭증 (아열대화)
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 block mb-0.5">
                자연재난 피해 추정
              </span>
              <div className="text-sm font-mono font-black text-amber-400">
                최대 11.4조 원
              </div>
              <span className="text-[9px] font-mono text-slate-500">
                태풍 루사의 1.4배
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800/80">
            <span>출처: 기상청 기후변화 전망보고서</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              상세 분석 보기 <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </SpatialExhibitContainer>

      {/* ========================================================
          EXHIBIT 3-B: 제11차 전기본 무탄소 발전 70.7% 디스플레이 타워 (중앙 독립 조형 타워)
          X = 0px, Y = +50px, Z = -11600px, RotY = 0deg
          ======================================================== */}
      <SpatialExhibitContainer
        x={0}
        y={50}
        z={-11600}
        rotateY={0}
        cameraZ={cameraZ}
        width={460}
        title="제11차 전기본 무탄소 70.7% 디스플레이 타워"
        exhibitCode="EXHIBIT 3-B"
        onInspect={() => onInspect("exhibit_3b")}
      >
        <div className="relative flex flex-col items-center">
          <div className="w-24 h-5 bg-emerald-400/80 rounded-full blur-[2px] shadow-[0_0_25px_#10b981] mb-2 animate-pulse" />

          <div className="w-full p-6 rounded-2xl bg-gradient-to-b from-[#031d14] to-[#010b07] border-2 border-emerald-500/50 shadow-2xl backdrop-blur-md relative group-hover:border-emerald-400/80 transition-colors">
            <div className="flex items-center justify-between border-b border-emerald-500/30 pb-3 mb-3">
              <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-300 font-bold">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span>CFE POWER TOWER (2024~2038)</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 border border-emerald-600 text-emerald-300">
                2038년 70.7%
              </span>
            </div>

            <h4 className="text-lg font-black text-white font-mono mb-2">
              제11차 전기본 무탄소 발전 70.7% 타워
            </h4>

            <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
              무탄소 발전 비중을 2023년 39.1%에서 2030년 53.0%, 2038년 70.7%로
              대폭 확대하며 원자력과 재생에너지의 조화를 꾀합니다.
            </p>

            <div className="space-y-2.5 mb-4">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-emerald-300 font-bold mb-1">
                  <span>전체 무탄소 발전 (2023 39.1% → 2038)</span>
                  <span>70.7%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-400 rounded-full"
                    style={{ width: "70.7%" }}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-mono text-sky-300 mb-1">
                  <span>원자력 발전 비중 (2030 31.8% → 2038)</span>
                  <span>35.2%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-sky-400 rounded-full"
                    style={{ width: "35.2%" }}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-mono text-amber-300 mb-1">
                  <span>신재생에너지 비중 (2030 18.8% → 2038)</span>
                  <span>29.2%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-400 rounded-full"
                    style={{ width: "29.2%" }}
                  />
                </div>
              </div>
            </div>

            <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800 flex items-center justify-between">
              <span>산업통상자원부 제11차 전기본</span>
              <span className="text-emerald-400 font-bold">전체 믹스 보기</span>
            </div>
          </div>
        </div>
      </SpatialExhibitContainer>

      {/* ========================================================
          EXHIBIT 3-E: 2035 NDC 부문별 감축 목표 쇼케이스 (우측 초입)
          X = +460px, Y = -10px, Z = -10600px, RotY = -20deg
          ======================================================== */}
      <SpatialExhibitContainer
        x={460}
        y={-10}
        z={-10600}
        rotateY={-20}
        cameraZ={cameraZ}
        width={480}
        title="2035 NDC 부문별 감축 목표 쇼케이스"
        exhibitCode="EXHIBIT 3-E"
        onInspect={() => onInspect("exhibit_3e")}
      >
        <div className="p-6 rounded-2xl bg-[#021812]/95 border-2 border-emerald-500/50 shadow-2xl backdrop-blur-md relative group-hover:border-emerald-400/80 transition-colors">
          <div className="flex items-center justify-between border-b border-emerald-500/30 pb-3 mb-3">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-300 font-bold">
              <Factory className="w-4 h-4 text-emerald-400" />
              <span>2035 NDC SECTOR REDUCTION</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 border border-emerald-600 text-emerald-300">
              53~61% 감축 목표
            </span>
          </div>

          <h4 className="text-xl font-black text-white font-mono mb-2">
            2035 NDC 부문별 감축 목표 쇼케이스
          </h4>

          <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
            2018년 대비 53~61% 감축을 목표로 하며, 전력 부문 69%, 산업 부문 24%
            감축 등 국가 주력 산업의 대전환 비용을 요구합니다.
          </p>

          <div className="space-y-2 mb-4">
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-300">
                2035 NDC 총감축 목표
              </span>
              <span className="text-xs font-mono font-black text-emerald-400">
                2018년 대비 53~61% 감축
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-800/50 flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-300">
                전력 부문 감축률
              </span>
              <span className="text-xs font-mono font-black text-emerald-300">
                69% 감축 (탈석탄·무탄소)
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-300">
                산업 부문 감축률
              </span>
              <span className="text-xs font-mono font-black text-amber-300">
                24% 감축 (철강·화학 혁신)
              </span>
            </div>
          </div>

          <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800 flex items-center justify-between">
            <span>2050 탄소중립녹색성장위원회</span>
            <span className="text-emerald-400 font-bold">감축 로드맵 보기</span>
          </div>
        </div>
      </SpatialExhibitContainer>

      {/* ========================================================
          EXHIBIT 3-F: 기후대응기금 5개년 예산 편성률 모니터 (우측 중반)
          X = +460px, Y = -10px, Z = -11400px, RotY = -20deg
          ======================================================== */}
      <SpatialExhibitContainer
        x={460}
        y={-10}
        z={-11400}
        rotateY={-20}
        cameraZ={cameraZ}
        width={480}
        title="기후대응기금 5개년 편성률 모니터"
        exhibitCode="EXHIBIT 3-F"
        onInspect={() => onInspect("exhibit_3f")}
      >
        <div className="p-6 rounded-2xl bg-[#041d14]/95 border-2 border-emerald-500/40 shadow-2xl backdrop-blur-md relative group-hover:border-emerald-400/80 transition-colors">
          <div className="flex items-center justify-between border-b border-emerald-500/30 pb-3 mb-3">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-300 font-bold">
              <Coins className="w-4 h-4 text-emerald-400" />
              <span>CLIMATE FUND EXECUTION MONITOR</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 border border-amber-600 text-amber-300">
              편성률 74.2% 불과
            </span>
          </div>

          <h4 className="text-xl font-black text-white font-mono mb-2">
            기후대응기금 5개년 편성률 모니터
          </h4>

          <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
            2025년 2조 6,217억 원에서 2026년 2조 9,057억 원으로 증액되었으나,
            5개년 재정계획(89.9조 원) 대비 실제 예산 편성률은 74.2%에 그쳐 재정
            갭이 발생하고 있습니다.
          </p>

          <div className="space-y-2 mb-4">
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-300">
                2025년 기금 규모
              </span>
              <span className="text-xs font-mono font-bold text-slate-200">
                2조 6,217억 원
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-800/40 flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-300">
                2026년 기금 규모
              </span>
              <span className="text-xs font-mono font-bold text-emerald-300">
                2조 9,057억 원 (직접 운용)
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-rose-950/30 border border-rose-800/40 flex items-center justify-between">
              <span className="text-xs font-mono text-rose-300">
                5개년 계획 대비 편성률
              </span>
              <span className="text-xs font-mono font-black text-rose-400">
                74.2% (목표 89.9조 대비 부족)
              </span>
            </div>
          </div>

          <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800 flex items-center justify-between">
            <span>기후에너지환경부 & 국회예산정책처</span>
            <span className="text-emerald-400 font-bold">기금 재정 보기</span>
          </div>
        </div>
      </SpatialExhibitContainer>

      {/* ========================================================
          EXHIBIT 3-C: EU CBAM 탄소국경세 충격 키오스크 (우측 후반)
          X = +460px, Y = -10px, Z = -12300px, RotY = -20deg
          ======================================================== */}
      <SpatialExhibitContainer
        x={460}
        y={-10}
        z={-12300}
        rotateY={-20}
        cameraZ={cameraZ}
        width={490}
        title="EU CBAM 충격 및 기후대응기금 월"
        exhibitCode="EXHIBIT 3-C"
        onInspect={() => onInspect("exhibit_3c")}
      >
        <div className="p-6 rounded-2xl bg-[#021812]/95 border-2 border-emerald-500/40 shadow-2xl backdrop-blur-md relative group-hover:border-emerald-400/80 transition-colors">
          <div className="flex items-center justify-between border-b border-emerald-500/30 pb-3 mb-3">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-300 font-bold">
              <Globe2 className="w-4 h-4 text-emerald-400" />
              <span>EU CBAM TRADE BARRIER</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-sans">
              클릭하여 상세 보기
            </span>
          </div>

          <h4 className="text-xl font-black text-white font-mono mb-2">
            EU CBAM 탄소국경세 무역 장벽
          </h4>

          <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
            대EU 수출 681억 달러 중 51억 달러(7.5%)가 대상이며, 철강(89.3%)과
            알루미늄(10.6%) 중심으로 향후 25년간 연평균 약 3,000억 원의 탄소
            관세 부담이 발생합니다.
          </p>

          <div className="space-y-2 mb-4">
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-mono text-slate-300">
                  CBAM 대상 수출액
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono font-bold text-amber-300">
                  51억 달러 (7.5%)
                </span>
                <span className="text-[10px] text-slate-500 block">
                  철강 89.3%, 알루미늄 10.6%
                </span>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-rose-400" />
                <span className="text-xs font-mono text-slate-300">
                  기업 연평균 부담
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono font-bold text-rose-400">
                  연 약 3,000억 원
                </span>
                <span className="text-[10px] text-slate-500 block">
                  25년간 지속 부과
                </span>
              </div>
            </div>
          </div>

          <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800 flex items-center justify-between">
            <span>한국은행 조사통계월보 & 한국무역협회</span>
            <span className="text-emerald-400 font-bold">무역 비용 확인</span>
          </div>
        </div>
      </SpatialExhibitContainer>

      {/* ========================================================
          CORRIDOR 03 WALL PLAQUE: AI 회랑 안내 사이니지
          X = +270px, Z = -13300px, RotY = -10deg, Width = 310px
          ======================================================== */}
      <SpatialExhibitContainer
        x={270}
        y={0}
        z={-13300}
        rotateY={-10}
        cameraZ={cameraZ}
        width={310}
        title="AI 회랑 안내 사이니지"
        exhibitCode="CORRIDOR 03"
        onInspect={() => onInspect("exhibit_corridor_03")}
      >
        <div className="p-5 rounded-2xl bg-[#0c0316]/95 border border-purple-500/40 shadow-xl backdrop-blur-md group-hover:border-purple-400/80 transition-colors">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase">
              CORRIDOR 03 TRANSIT
            </span>
            <span className="text-[9px] text-purple-400/70 font-sans">
              클릭하여 해설 보기
            </span>
          </div>
          <h4 className="text-base font-bold text-white font-mono mb-2">
            사이버네틱 AI 회랑
          </h4>
          <p className="text-xs text-slate-300 font-sans leading-relaxed">
            기후위기에서 인공지능 국가 전략 및 컴퓨팅 인프라로 향하는 미래
            회랑입니다. 전방에 보이는 Hall 04 문으로 전진하세요.
          </p>
        </div>
      </SpatialExhibitContainer>
    </>
  );
};

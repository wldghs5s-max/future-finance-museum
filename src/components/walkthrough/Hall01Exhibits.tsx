import React from "react";
import { SpatialExhibitContainer } from "./SpatialExhibitContainer";
import {
  Users,
  Hourglass,
  ShieldAlert,
  MapPin,
  TrendingDown,
  AlertTriangle,
  Flame,
} from "lucide-react";

interface Hall01ExhibitsProps {
  cameraZ: number;
  onInspect: (exhibitId: string) => void;
}

export const Hall01Exhibits: React.FC<Hall01ExhibitsProps> = ({
  cameraZ,
  onInspect,
}) => {
  return (
    <>
      {/* ========================================================
          EXHIBIT 1-D: 2020 인구 데드크로스 역사 기념비 (좌측 초입)
          X = -460px, Y = 0px, Z = -2500px, RotY = 22deg
          ======================================================== */}
      <SpatialExhibitContainer
        x={-460}
        y={0}
        z={-2500}
        rotateY={22}
        cameraZ={cameraZ}
        width={480}
        title="2020 인구 데드크로스 기념비"
        exhibitCode="EXHIBIT 1-D"
        onInspect={() => onInspect("exhibit_1d")}
      >
        <div className="p-6 rounded-2xl bg-gradient-to-b from-[#140608]/95 to-[#080204]/95 border-2 border-rose-600/50 shadow-2xl backdrop-blur-md relative overflow-hidden group-hover:border-rose-400/80 transition-colors">
          <div className="flex items-center justify-between border-b border-rose-500/30 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-rose-950 border border-rose-700 text-[10px] font-mono font-bold text-rose-300">
                EXHIBIT 1-D
              </span>
              <span className="text-xs font-mono text-slate-300">
                HISTORICAL MONUMENT
              </span>
            </div>
            <span className="text-[10px] text-rose-400 font-sans flex items-center gap-1">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
              <span>클릭하여 상세 보기</span>
            </span>
          </div>

          <h3 className="text-xl font-black text-white font-mono mb-2">
            2020 인구 데드크로스 기념비
          </h3>

          <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
            대한민국 건국 이래 최초로 사망자 수가 출생아 수를 추월하며 총인구
            자연감소가 시작된 역사적 분기점입니다.
          </p>

          <div className="grid grid-cols-2 gap-2.5 mb-4">
            <div className="p-3 rounded-xl bg-slate-950/80 border border-rose-900/40">
              <span className="text-[10px] font-mono text-slate-400 block mb-0.5">
                2020년 사망자 수
              </span>
              <div className="text-lg font-mono font-black text-rose-400">
                30.5만 명
              </div>
              <span className="text-[9px] font-mono text-rose-500">
                사상 최초 출생아 추월
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 block mb-0.5">
                2020년 출생아 수
              </span>
              <div className="text-lg font-mono font-black text-sky-400">
                27.2만 명
              </div>
              <span className="text-[9px] font-mono text-slate-500">
                자연감소: -2만 명
              </span>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-rose-950/30 border border-rose-800/40 text-center mb-3">
            <span className="text-xs font-mono font-bold text-rose-300">
              패러다임 전환: 인구 보너스 → 인구 오너스(Demographic Onus)
            </span>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800">
            <span>출처: 통계청 인구동향조사</span>
            <span className="text-rose-400 font-bold">기념비 해설 보기</span>
          </div>
        </div>
      </SpatialExhibitContainer>

      {/* ========================================================
          EXHIBIT 1-A: 2072 장래인구추계 대형 인포그래픽 월 (좌측 벽면)
          X = -460px, Y = -20px, Z = -3100px, RotY = 22deg
          ======================================================== */}
      <SpatialExhibitContainer
        x={-460}
        y={-20}
        z={-3100}
        rotateY={22}
        cameraZ={cameraZ}
        width={500}
        title="2072 장래인구추계 대형 인포그래픽 월"
        exhibitCode="EXHIBIT 1-A"
        onInspect={() => onInspect("exhibit_1a")}
      >
        <div className="p-6 rounded-2xl bg-[#061126]/95 border-2 border-sky-500/40 shadow-2xl backdrop-blur-md relative overflow-hidden group-hover:border-sky-400/80 transition-colors">
          <div className="flex items-center justify-between border-b border-sky-500/30 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-sky-950 border border-sky-700 text-[10px] font-mono font-bold text-sky-300">
                EXHIBIT 1-A
              </span>
              <span className="text-xs font-mono text-slate-300">
                WALL INSTALLATION
              </span>
            </div>
            <span className="text-[10px] text-sky-400 font-sans flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-sky-400" />
              <span>클릭하여 상세 보기</span>
            </span>
          </div>

          <h3 className="text-xl font-black text-white font-mono mb-2">
            2072 장래인구추계 대형 인포그래픽 월
          </h3>

          <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
            총인구는 5,175만 명(2024)에서 3,622만 명(2072)으로 30% 급감(1977년
            회귀)하고, 65세 이상 고령인구 비중은 47.7%로 치솟습니다.
          </p>

          {/* 핵심 공식 통계 4분면 큐브 */}
          <div className="grid grid-cols-2 gap-2.5 mb-4">
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 block mb-0.5">
                총인구 (2072)
              </span>
              <div className="text-lg font-mono font-black text-rose-400">
                3,622만 명
              </div>
              <span className="text-[9px] font-mono text-slate-500">
                약 30% 감소 (1977년 수준 회귀)
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 block mb-0.5">
                고령인구 비중 (65세+)
              </span>
              <div className="text-lg font-mono font-black text-amber-400">
                47.7%
              </div>
              <span className="text-[9px] font-mono text-slate-500">
                19.5%(2024) → 약 3배 폭증
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 block mb-0.5">
                생산연령인구 (15~64세)
              </span>
              <div className="text-base font-mono font-black text-sky-400">
                45.8% (1,658만)
              </div>
              <span className="text-[9px] font-mono text-slate-500">
                70.0%(3,674만)에서 반토막
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 block mb-0.5">
                노년부양비 (생산 100명당)
              </span>
              <div className="text-base font-mono font-black text-rose-300">
                104.2명
              </div>
              <span className="text-[9px] font-mono text-slate-500">
                27.4명 → 3.8배 (1명이 1명 초과 부양)
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800/80">
            <span>총부양비: 41명 → 119명 (OECD 최고)</span>
            <span className="text-sky-400 font-bold">
              클릭하여 전체 분석 보기
            </span>
          </div>
        </div>
      </SpatialExhibitContainer>

      {/* ========================================================
          EXHIBIT 1-B: 초고령사회 25년 도달 타임 필러 (중앙 우측 독립 입체 기둥)
          X = +100px, Y = +50px, Z = -3600px, RotY = -12deg
          ======================================================== */}
      <SpatialExhibitContainer
        x={100}
        y={50}
        z={-3600}
        rotateY={-12}
        cameraZ={cameraZ}
        width={440}
        title="초고령사회 25년 도달 타임 필러"
        exhibitCode="EXHIBIT 1-B"
        onInspect={() => onInspect("exhibit_1b")}
      >
        <div className="relative flex flex-col items-center">
          <div className="w-24 h-3 bg-amber-400/80 rounded-full blur-[2px] shadow-[0_0_20px_#f59e0b] mb-2" />

          <div className="w-full p-6 rounded-2xl bg-gradient-to-b from-[#181105] to-[#080603] border-2 border-amber-500/50 shadow-2xl backdrop-blur-md relative group-hover:border-amber-400/80 transition-colors">
            <div className="flex items-center justify-between border-b border-amber-500/30 pb-3 mb-3">
              <div className="flex items-center gap-1.5 text-xs font-mono text-amber-300 font-bold">
                <Hourglass
                  className="w-4 h-4 text-amber-400 animate-spin"
                  style={{ animationDuration: "8s" }}
                />
                <span>TIME PILLAR MONUMENT</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 border border-amber-600 text-amber-300">
                세계 최단 25년
              </span>
            </div>

            <h4 className="text-lg font-black text-white font-mono tracking-tight mb-2">
              초고령사회 25년 도달 타임 필러
            </h4>

            <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
              고령화사회(7%)에서 초고령사회(20%)로 진입하는 데 단 25년 소요되어
              2025년 대한민국은 공식 초고령사회로 진입했습니다.
            </p>

            <div className="space-y-2 mb-4">
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-amber-300 font-bold mb-0.5">
                  <span>대한민국 (2025년 진입)</span>
                  <span>단 25년</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-400 rounded-full"
                    style={{ width: "20%" }}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-0.5">
                  <span>일본</span>
                  <span>35년</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-slate-400 rounded-full"
                    style={{ width: "28%" }}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-0.5">
                  <span>미국</span>
                  <span>94년</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-slate-500 rounded-full"
                    style={{ width: "75%" }}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-0.5">
                  <span>프랑스</span>
                  <span>154년</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-slate-600 rounded-full"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>

            <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800 text-center flex items-center justify-between">
              <span>행안부 & future_finance_doc.md</span>
              <span className="text-amber-400 font-bold">
                클릭하여 전체 분석 보기
              </span>
            </div>
          </div>
        </div>
      </SpatialExhibitContainer>

      {/* ========================================================
          EXHIBIT 1-E: 합계출산율 추이 쇼케이스 (중앙 좌측 궤적 디스플레이)
          X = -120px, Y = +20px, Z = -4100px, RotY = 15deg
          ======================================================== */}
      <SpatialExhibitContainer
        x={-120}
        y={20}
        z={-4100}
        rotateY={15}
        cameraZ={cameraZ}
        width={420}
        title="합계출산율 추이 쇼케이스"
        exhibitCode="EXHIBIT 1-E"
        onInspect={() => onInspect("exhibit_1e")}
      >
        <div className="p-6 rounded-2xl bg-gradient-to-b from-[#0a1426] to-[#040812] border-2 border-cyan-500/50 shadow-2xl backdrop-blur-md relative group-hover:border-cyan-400/80 transition-colors">
          <div className="flex items-center justify-between border-b border-cyan-500/30 pb-3 mb-3">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 font-bold">
              <TrendingDown className="w-4 h-4 text-cyan-400" />
              <span>FERTILITY RATE TRAJECTORY</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 border border-cyan-700 text-cyan-300">
              0.75명 (OECD 1/2)
            </span>
          </div>

          <h4 className="text-lg font-black text-white font-mono mb-2">
            합계출산율 추이 쇼케이스
          </h4>

          <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
            2024년 0.75명으로 OECD 평균 절반에 미달하며, 2025년 0.65명 저점 후
            2072년 1.08명(중위 가정)에 머물 것으로 전망됩니다.
          </p>

          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
              <span className="text-[9px] font-mono text-slate-400 block">
                2024년
              </span>
              <span className="text-base font-mono font-black text-rose-400 block my-0.5">
                0.75명
              </span>
              <span className="text-[8px] font-mono text-slate-500">
                OECD 평균 절반 미달
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-rose-950/40 border border-rose-800/60 text-center">
              <span className="text-[9px] font-mono text-rose-300 block">
                2025년 저점
              </span>
              <span className="text-base font-mono font-black text-rose-300 block my-0.5">
                0.65명
              </span>
              <span className="text-[8px] font-mono text-rose-400">
                사상 최저점 기록
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
              <span className="text-[9px] font-mono text-slate-400 block">
                2072년 중위
              </span>
              <span className="text-base font-mono font-black text-sky-400 block my-0.5">
                1.08명
              </span>
              <span className="text-[8px] font-mono text-slate-500">
                인구대체(2.1명) 절반
              </span>
            </div>
          </div>

          <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800 flex items-center justify-between">
            <span>통계청 장래인구추계</span>
            <span className="text-cyan-400 font-bold">클릭하여 전체 보기</span>
          </div>
        </div>
      </SpatialExhibitContainer>

      {/* ========================================================
          EXHIBIT 1-F: 89개 인구감소지역 및 수도권 일극화 지도 (우측 초입 대형 지도 월)
          X = +460px, Y = -20px, Z = -2700px, RotY = -22deg
          ======================================================== */}
      <SpatialExhibitContainer
        x={460}
        y={-20}
        z={-2700}
        rotateY={-22}
        cameraZ={cameraZ}
        width={480}
        title="89개 소멸지역 및 수도권 일극화 지도"
        exhibitCode="EXHIBIT 1-F"
        onInspect={() => onInspect("exhibit_1f")}
      >
        <div className="p-6 rounded-2xl bg-[#140c1e]/95 border-2 border-purple-500/50 shadow-2xl backdrop-blur-md relative group-hover:border-purple-400/80 transition-colors">
          <div className="flex items-center justify-between border-b border-purple-500/30 pb-3 mb-3">
            <div className="flex items-center gap-2 text-xs font-mono text-purple-300 font-bold">
              <MapPin className="w-4 h-4 text-purple-400" />
              <span>REGIONAL EXTINCTION MAP</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 border border-purple-700 text-purple-300">
              수도권 집중 51%
            </span>
          </div>

          <h4 className="text-xl font-black text-white font-mono mb-2">
            89개 소멸지역 & 수도권 일극화 지도
          </h4>

          <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
            국토 면적 11.8%인 수도권이 인구 51%, GRDP 52.3%를 독점하며, 전국
            89개 인구감소지역은 10년간 인구가 12.5% 급감했습니다.
          </p>

          <div className="space-y-2 mb-4">
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-300">
                수도권 인구 / GRDP
              </span>
              <span className="text-xs font-mono font-black text-purple-300">
                51.0% / 52.3% 독점
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-300">
                89개 인구감소지역 (10년간)
              </span>
              <span className="text-xs font-mono font-black text-rose-400">
                인구증감률 -12.5%
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-rose-950/30 border border-rose-900/50 flex items-center justify-between">
              <span className="text-xs font-mono text-rose-300">
                경북 의성군 (극단 사례)
              </span>
              <span className="text-xs font-mono font-bold text-rose-300">
                고령 47.5% · 노년부양비 92.1
              </span>
            </div>
          </div>

          <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800 flex items-center justify-between">
            <span>행정안전부 & 통계청</span>
            <span className="text-purple-400 font-bold">지도 분석 보기</span>
          </div>
        </div>
      </SpatialExhibitContainer>

      {/* ========================================================
          EXHIBIT 1-G: 노인 1인가구 빈곤 실태 월 (우측 중반)
          X = +460px, Y = -10px, Z = -3700px, RotY = -22deg
          ======================================================== */}
      <SpatialExhibitContainer
        x={460}
        y={-10}
        z={-3700}
        rotateY={-22}
        cameraZ={cameraZ}
        width={480}
        title="노인 1인가구 빈곤 실태 월"
        exhibitCode="EXHIBIT 1-G"
        onInspect={() => onInspect("exhibit_1g")}
      >
        <div className="p-6 rounded-2xl bg-[#160808]/95 border-2 border-rose-500/50 shadow-2xl backdrop-blur-md relative group-hover:border-rose-400/80 transition-colors">
          <div className="flex items-center justify-between border-b border-rose-500/30 pb-3 mb-3">
            <div className="flex items-center gap-2 text-xs font-mono text-rose-300 font-bold">
              <Flame className="w-4 h-4 text-rose-400" />
              <span>SINGLE ELDERLY POVERTY WALL</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-950 border border-rose-700 text-rose-300">
              60세+ 73% 빈곤층
            </span>
          </div>

          <h4 className="text-xl font-black text-white font-mono mb-2">
            노인 1인가구 빈곤 실태 월
          </h4>

          <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
            1인가구는 2015년 27.2%(520만)에서 2024년 36.1%(804만), 2052년
            41.3%까지 치솟으며, 60세 이상 1인가구의 73%가 월소득 200만 원 이하
            빈곤 상태입니다.
          </p>

          <div className="grid grid-cols-2 gap-2.5 mb-4">
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 block mb-0.5">
                1인가구 비중 추이
              </span>
              <div className="text-base font-mono font-black text-rose-300">
                27.2% → 36.1% → 41.3%
              </div>
              <span className="text-[9px] font-mono text-slate-500">
                2015 → 2024 → 2052년
              </span>
            </div>
            <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-800/60">
              <span className="text-[10px] font-mono text-rose-300 block mb-0.5">
                60세+ 1인가구 빈곤율
              </span>
              <div className="text-lg font-mono font-black text-rose-400">
                73.0%
              </div>
              <span className="text-[9px] font-mono text-rose-300">
                월소득 200만 원 이하
              </span>
            </div>
          </div>

          <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800 flex items-center justify-between">
            <span>통계청 가계금융복지조사</span>
            <span className="text-rose-400 font-bold">세부 지표 보기</span>
          </div>
        </div>
      </SpatialExhibitContainer>

      {/* ========================================================
          EXHIBIT 1-C: 국방 안보 인력 급감 키오스크 (우측 후반)
          X = +460px, Y = -10px, Z = -4400px, RotY = -22deg
          ======================================================== */}
      <SpatialExhibitContainer
        x={460}
        y={-10}
        z={-4400}
        rotateY={-22}
        cameraZ={cameraZ}
        width={480}
        title="국방 안보 인력 급감 키오스크"
        exhibitCode="EXHIBIT 1-C"
        onInspect={() => onInspect("exhibit_1c")}
      >
        <div className="p-6 rounded-2xl bg-[#091024]/95 border-2 border-cyan-500/40 shadow-2xl backdrop-blur-md relative group-hover:border-cyan-400/80 transition-colors">
          <div className="flex items-center justify-between border-b border-cyan-500/30 pb-3 mb-3">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 font-bold">
              <ShieldAlert className="w-4 h-4 text-cyan-400" />
              <span>DEFENSE MANPOWER CRISIS</span>
            </div>
            <span className="text-[10px] text-cyan-400 font-sans">
              클릭하여 상세 보기
            </span>
          </div>

          <h4 className="text-xl font-black text-white font-mono mb-2">
            국방 안보 인력 급감 키오스크
          </h4>

          <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
            20대 남성 인구가 2000년대 450만 명에서 2025년 323만 명, 2072년 142만
            명으로 급감하여 상비병력 50만 명 유지가 불가능해집니다.
          </p>

          <div className="space-y-2 mb-4">
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-300">
                20대 남성: 2000년대
              </span>
              <span className="text-xs font-mono font-bold text-slate-300">
                450만 명
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-amber-300">
                20대 남성: 2025년 현재
              </span>
              <span className="text-xs font-mono font-bold text-amber-300">
                323만 명
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-rose-950/40 border border-rose-800/60 flex items-center justify-between">
              <span className="text-xs font-mono text-rose-300">
                20대 남성: 2072년 전망
              </span>
              <span className="text-xs font-mono font-black text-rose-400">
                142만 명 (▼68%)
              </span>
            </div>
          </div>

          <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800 flex items-center justify-between">
            <span>국방부 국방백서 & 통계청</span>
            <span className="text-cyan-400 font-bold">국방 재정 개혁 보기</span>
          </div>
        </div>
      </SpatialExhibitContainer>

      {/* ========================================================
          CORRIDOR 01 WALL PLAQUE: 세대·복지 회랑 티저 사이니지
          X = +270px, Z = -5300px, RotY = -10deg, Width = 310px
          ======================================================== */}
      <SpatialExhibitContainer
        x={270}
        y={0}
        z={-5300}
        rotateY={-10}
        cameraZ={cameraZ}
        width={310}
        title="세대·복지 회랑 안내 사이니지"
        exhibitCode="CORRIDOR 01"
        onInspect={() => onInspect("exhibit_corridor_01")}
      >
        <div className="p-5 rounded-2xl bg-[#140b03]/95 border border-amber-500/40 shadow-xl backdrop-blur-md group-hover:border-amber-400/80 transition-colors">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase">
              CORRIDOR 01 TRANSIT
            </span>
            <span className="text-[9px] text-amber-400/70 font-sans">
              클릭하여 해설 보기
            </span>
          </div>
          <h4 className="text-base font-bold text-white font-mono mb-2">
            세대·복지 회랑
          </h4>
          <p className="text-xs text-slate-300 font-sans leading-relaxed">
            인구 충격을 지나 국민연금 기금 소진과 건강보험 재정 위기가
            본격화되는 전이 통로입니다. 전방에 보이는 Hall 02 문으로 전진하세요.
          </p>
        </div>
      </SpatialExhibitContainer>
    </>
  );
};

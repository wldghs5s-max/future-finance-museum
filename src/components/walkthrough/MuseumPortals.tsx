import React from "react";

interface MuseumPortalsProps {
  cameraZ: number;
}

export const MuseumPortals: React.FC<MuseumPortalsProps> = ({ cameraZ }) => {
  // 1. 박물관 정문 입구 게이트 (Z = -450px)
  const entranceDist = -450 + cameraZ;
  const isEntranceOpen = cameraZ >= 60 || entranceDist > -400;

  // 2. HALL 01 (인구변화관) 게이트 (Z = -2,150px)
  const hall01Dist = -2150 + cameraZ;
  const isHall01Open = cameraZ >= 1550 || hall01Dist > -600;

  // 3. HALL 02 (복지·연금관) 게이트 (Z = -5,950px)
  const hall02Dist = -5950 + cameraZ;
  const isHall02Open = cameraZ >= 5350 || hall02Dist > -600;

  // 4. HALL 03 (환경문제관) 게이트 (Z = -9,950px)
  const hall03Dist = -9950 + cameraZ;
  const isHall03Open = cameraZ >= 9350 || hall03Dist > -600;

  // 5. HALL 04 (AI기술관) 게이트 (Z = -13,950px)
  const hall04Dist = -13950 + cameraZ;
  const isHall04Open = cameraZ >= 13350 || hall04Dist > -600;

  // 6. HALL 05 (장기재정전망관) 게이트 (Z = -17,950px)
  const hall05Dist = -17950 + cameraZ;
  const isHall05Open = cameraZ >= 17350 || hall05Dist > -600;

  // 7. HALL 06 (나라살림게임 랩) 게이트 (Z = -21,950px)
  const hall06Dist = -21950 + cameraZ;
  const isHall06Open = cameraZ >= 21350 || hall06Dist > -600;

  // 8. MUSEUM EXIT 라운지 게이트 (Z = -25,150px)
  const exitDist = -25150 + cameraZ;
  const isExitOpen = cameraZ >= 24650 || exitDist > -500;

  return (
    <>
      {/* ========================================================
          GATE 00: 박물관 외벽 및 정문 자동 슬라이딩 게이트 (Z = -450px)
          ======================================================== */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 preserve-3d pointer-events-none"
        style={{
          transform: `translate3d(0px, 0px, -450px)`,
          opacity: entranceDist > 100 ? 0 : 1,
        }}
      >
        <div className="w-[880px] h-[520px] border-4 border-cyan-500/40 rounded-3xl relative overflow-hidden bg-slate-950/20 backdrop-blur-[2px] shadow-[0_0_50px_rgba(0,240,255,0.2)] flex flex-col justify-between p-6">
          <div className="flex items-center justify-between border-b border-cyan-500/30 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-xs font-mono font-bold tracking-widest text-cyan-300 uppercase">
                MUSEUM MAIN ENTRANCE PORTAL
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">
              AUTOMATIC ENVIRONMENTAL ACCESS
            </span>
          </div>

          <div className="text-center">
            <span className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-white block mb-1">
              재정미래박물관
            </span>
            <span className="text-xs font-mono text-cyan-400 tracking-[0.3em]">
              VIRTUAL CYBERNETIC MUSEUM
            </span>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-cyan-500/20 pt-3">
            <span>WALKWAY: GRAND LOBBY AHEAD</span>
            <span className="text-cyan-400">SENSOR: APPROACH DETECTED</span>
          </div>
        </div>

        {/* 좌측 슬라이딩 도어 */}
        <div
          className="absolute top-0 left-0 w-[440px] h-[520px] bg-gradient-to-r from-cyan-950/90 to-slate-900/80 border-r-2 border-cyan-400/80 transition-transform duration-1000 ease-out flex items-center justify-end pr-6 shadow-2xl"
          style={{
            transform: isEntranceOpen
              ? "translateX(-320px)"
              : "translateX(0px)",
          }}
        >
          <div className="text-right">
            <div className="w-8 h-1 bg-cyan-400 rounded-full mb-2 ml-auto" />
            <span className="text-[10px] font-mono text-cyan-300 block tracking-widest">
              GATE LEFT
            </span>
          </div>
        </div>

        {/* 우측 슬라이딩 도어 */}
        <div
          className="absolute top-0 right-0 w-[440px] h-[520px] bg-gradient-to-l from-cyan-950/90 to-slate-900/80 border-l-2 border-cyan-400/80 transition-transform duration-1000 ease-out flex items-center justify-start pl-6 shadow-2xl"
          style={{
            transform: isEntranceOpen ? "translateX(320px)" : "translateX(0px)",
          }}
        >
          <div className="text-left">
            <div className="w-8 h-1 bg-cyan-400 rounded-full mb-2" />
            <span className="text-[10px] font-mono text-cyan-300 block tracking-widest">
              GATE RIGHT
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================
          GATE 01: HALL 01 (인구변화관) 전시장 입구 슬라이딩 게이트 (Z = -2,150px)
          ======================================================== */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 preserve-3d pointer-events-none"
        style={{
          transform: `translate3d(0px, 0px, -2150px)`,
          opacity: hall01Dist > 100 ? 0 : 1,
        }}
      >
        <div className="w-[920px] h-[540px] border-4 border-sky-500/50 rounded-3xl relative overflow-hidden bg-sky-950/20 backdrop-blur-[2px] shadow-[0_0_60px_rgba(56,189,248,0.25)] flex flex-col justify-between p-6">
          <div className="flex items-center justify-between border-b border-sky-500/40 pb-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-sky-900/80 border border-sky-400 text-sky-200 font-mono text-xs font-bold">
                HALL 01
              </span>
              <span className="text-xs font-mono font-bold tracking-wider text-white">
                인구변화 전시장 입구
              </span>
            </div>
            <span className="text-[10px] font-mono text-sky-400">
              EXHIBIT ZONE: DEMOGRAPHY
            </span>
          </div>

          <div className="text-center">
            <span className="text-xs font-mono text-slate-400 tracking-widest block mb-1">
              REPUBLIC OF KOREA 2072 PROJECTION
            </span>
            <span className="text-2xl sm:text-3xl font-black text-white font-sans">
              인구 구조의 격변과 재정의 미래
            </span>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-sky-500/20 pt-3">
            <span>3 MAJOR PHYSICAL EXHIBITS AHEAD</span>
            <span className="text-sky-300">AUTOMATIC ENTRY</span>
          </div>
        </div>

        <div
          className="absolute top-0 left-0 w-[460px] h-[540px] bg-gradient-to-r from-slate-950 via-[#071328] to-slate-900 border-r-2 border-sky-400 transition-transform duration-1000 ease-out flex items-center justify-end pr-8 shadow-2xl"
          style={{
            transform: isHall01Open ? "translateX(-360px)" : "translateX(0px)",
          }}
        >
          <div className="text-right">
            <span className="text-xs font-mono text-sky-400 font-bold block mb-1">
              HALL 01 - L
            </span>
            <span className="text-[10px] font-mono text-slate-500">
              POPULATION ARCHIVE
            </span>
          </div>
        </div>

        <div
          className="absolute top-0 right-0 w-[460px] h-[540px] bg-gradient-to-l from-slate-950 via-[#071328] to-slate-900 border-l-2 border-sky-400 transition-transform duration-1000 ease-out flex items-center justify-start pl-8 shadow-2xl"
          style={{
            transform: isHall01Open ? "translateX(360px)" : "translateX(0px)",
          }}
        >
          <div className="text-left">
            <span className="text-xs font-mono text-sky-400 font-bold block mb-1">
              HALL 01 - R
            </span>
            <span className="text-[10px] font-mono text-slate-500">
              AUTOMATIC ACCESS
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================
          GATE 02: HALL 02 (복지 및 연금관) 게이트 (Z = -5,950px)
          ======================================================== */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 preserve-3d pointer-events-none"
        style={{
          transform: `translate3d(0px, 0px, -5950px)`,
          opacity: hall02Dist > 100 ? 0 : 1,
        }}
      >
        <div className="w-[940px] h-[540px] border-4 border-amber-500/50 rounded-3xl relative overflow-hidden bg-amber-950/20 backdrop-blur-[2px] shadow-[0_0_60px_rgba(245,158,11,0.25)] flex flex-col justify-between p-6">
          <div className="flex items-center justify-between border-b border-amber-500/40 pb-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-amber-900/80 border border-amber-400 text-amber-200 font-mono text-xs font-bold">
                HALL 02
              </span>
              <span className="text-xs font-mono font-bold tracking-wider text-white">
                복지 및 연금 전시장 입구
              </span>
            </div>
            <span className="text-[10px] font-mono text-amber-400">
              WELFARE & PENSION
            </span>
          </div>

          <div className="text-center">
            <span className="text-xs font-mono text-slate-400 tracking-widest block mb-1">
              NATIONAL PENSION & HEALTH INSURANCE
            </span>
            <span className="text-2xl sm:text-3xl font-black text-white font-sans">
              사회보장의 지속가능성과 연금 개혁
            </span>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-amber-500/20 pt-3">
            <span>PENSION DEPLETION TIMELINE AHEAD</span>
            <span className="text-amber-300">AUTOMATIC ENTRY</span>
          </div>
        </div>

        <div
          className="absolute top-0 left-0 w-[470px] h-[540px] bg-gradient-to-r from-slate-950 via-[#1b1206] to-slate-900 border-r-2 border-amber-400 transition-transform duration-1000 ease-out flex items-center justify-end pr-8 shadow-2xl"
          style={{
            transform: isHall02Open ? "translateX(-360px)" : "translateX(0px)",
          }}
        >
          <div className="text-right">
            <span className="text-xs font-mono text-amber-400 font-bold block mb-1">
              HALL 02 - L
            </span>
            <span className="text-[10px] font-mono text-slate-500">
              WELFARE ARCHIVE
            </span>
          </div>
        </div>

        <div
          className="absolute top-0 right-0 w-[470px] h-[540px] bg-gradient-to-l from-slate-950 via-[#1b1206] to-slate-900 border-l-2 border-amber-400 transition-transform duration-1000 ease-out flex items-center justify-start pl-8 shadow-2xl"
          style={{
            transform: isHall02Open ? "translateX(360px)" : "translateX(0px)",
          }}
        >
          <div className="text-left">
            <span className="text-xs font-mono text-amber-400 font-bold block mb-1">
              HALL 02 - R
            </span>
            <span className="text-[10px] font-mono text-slate-500">
              ACCESS GRANTED
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================
          GATE 03: HALL 03 (환경 문제 전시장) 게이트 (Z = -9,950px)
          ======================================================== */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 preserve-3d pointer-events-none"
        style={{
          transform: `translate3d(0px, 0px, -9950px)`,
          opacity: hall03Dist > 100 ? 0 : 1,
        }}
      >
        <div className="w-[940px] h-[540px] border-4 border-emerald-500/50 rounded-3xl relative overflow-hidden bg-emerald-950/20 backdrop-blur-[2px] shadow-[0_0_60px_rgba(16,185,129,0.25)] flex flex-col justify-between p-6">
          <div className="flex items-center justify-between border-b border-emerald-500/40 pb-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-emerald-900/80 border border-emerald-400 text-emerald-200 font-mono text-xs font-bold">
                HALL 03
              </span>
              <span className="text-xs font-mono font-bold tracking-wider text-white">
                환경 문제 전시장 입구
              </span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400">
              CLIMATE & ENVIRONMENT
            </span>
          </div>

          <div className="text-center">
            <span className="text-xs font-mono text-slate-400 tracking-widest block mb-1">
              2035 NDC & CARBON TAX BORDER
            </span>
            <span className="text-2xl sm:text-3xl font-black text-white font-sans">
              기후위기 과학적 시나리오와 녹색 재정
            </span>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-emerald-500/20 pt-3">
            <span>3 CLIMATE SCENARIOS & 70.7% TOWER</span>
            <span className="text-emerald-300">AUTOMATIC ENTRY</span>
          </div>
        </div>

        <div
          className="absolute top-0 left-0 w-[470px] h-[540px] bg-gradient-to-r from-slate-950 via-[#041913] to-slate-900 border-r-2 border-emerald-400 transition-transform duration-1000 ease-out flex items-center justify-end pr-8 shadow-2xl"
          style={{
            transform: isHall03Open ? "translateX(-360px)" : "translateX(0px)",
          }}
        >
          <div className="text-right">
            <span className="text-xs font-mono text-emerald-400 font-bold block mb-1">
              HALL 03 - L
            </span>
            <span className="text-[10px] font-mono text-slate-500">
              CLIMATE ARCHIVE
            </span>
          </div>
        </div>

        <div
          className="absolute top-0 right-0 w-[470px] h-[540px] bg-gradient-to-l from-slate-950 via-[#041913] to-slate-900 border-l-2 border-emerald-400 transition-transform duration-1000 ease-out flex items-center justify-start pl-8 shadow-2xl"
          style={{
            transform: isHall03Open ? "translateX(360px)" : "translateX(0px)",
          }}
        >
          <div className="text-left">
            <span className="text-xs font-mono text-emerald-400 font-bold block mb-1">
              HALL 03 - R
            </span>
            <span className="text-[10px] font-mono text-slate-500">
              ACCESS GRANTED
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================
          GATE 04: HALL 04 (AI 기술 전시장) 게이트 (Z = -13,950px)
          ======================================================== */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 preserve-3d pointer-events-none"
        style={{
          transform: `translate3d(0px, 0px, -13950px)`,
          opacity: hall04Dist > 100 ? 0 : 1,
        }}
      >
        <div className="w-[940px] h-[540px] border-4 border-purple-500/50 rounded-3xl relative overflow-hidden bg-purple-950/20 backdrop-blur-[2px] shadow-[0_0_60px_rgba(168,85,247,0.25)] flex flex-col justify-between p-6">
          <div className="flex items-center justify-between border-b border-purple-500/40 pb-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-purple-900/80 border border-purple-400 text-purple-200 font-mono text-xs font-bold">
                HALL 04
              </span>
              <span className="text-xs font-mono font-bold tracking-wider text-white">
                AI 기술 전시장 입구
              </span>
            </div>
            <span className="text-[10px] font-mono text-purple-400">
              AI & FUTURE LABOR
            </span>
          </div>

          <div className="text-center">
            <span className="text-xs font-mono text-slate-400 tracking-widest block mb-1">
              GPU INFRASTRUCTURE & AUTOMATION RISK
            </span>
            <span className="text-2xl sm:text-3xl font-black text-white font-sans">
              인공지능 대전환과 미래 노동시장
            </span>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-purple-500/20 pt-3">
            <span>AI BUDGET 9.9T & GLOBAL INDEX</span>
            <span className="text-purple-300">AUTOMATIC ENTRY</span>
          </div>
        </div>

        <div
          className="absolute top-0 left-0 w-[470px] h-[540px] bg-gradient-to-r from-slate-950 via-[#160724] to-slate-900 border-r-2 border-purple-400 transition-transform duration-1000 ease-out flex items-center justify-end pr-8 shadow-2xl"
          style={{
            transform: isHall04Open ? "translateX(-360px)" : "translateX(0px)",
          }}
        >
          <div className="text-right">
            <span className="text-xs font-mono text-purple-400 font-bold block mb-1">
              HALL 04 - L
            </span>
            <span className="text-[10px] font-mono text-slate-500">
              CYBERNETIC CORE
            </span>
          </div>
        </div>

        <div
          className="absolute top-0 right-0 w-[470px] h-[540px] bg-gradient-to-l from-slate-950 via-[#160724] to-slate-900 border-l-2 border-purple-400 transition-transform duration-1000 ease-out flex items-center justify-start pl-8 shadow-2xl"
          style={{
            transform: isHall04Open ? "translateX(360px)" : "translateX(0px)",
          }}
        >
          <div className="text-left">
            <span className="text-xs font-mono text-purple-400 font-bold block mb-1">
              HALL 04 - R
            </span>
            <span className="text-[10px] font-mono text-slate-500">
              ACCESS GRANTED
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================
          GATE 05: HALL 05 (장기 재정 전망관) 게이트 (Z = -17,950px)
          ======================================================== */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 preserve-3d pointer-events-none"
        style={{
          transform: `translate3d(0px, 0px, -17950px)`,
          opacity: hall05Dist > 100 ? 0 : 1,
        }}
      >
        <div className="w-[940px] h-[540px] border-4 border-rose-500/50 rounded-3xl relative overflow-hidden bg-rose-950/20 backdrop-blur-[2px] shadow-[0_0_60px_rgba(244,63,94,0.25)] flex flex-col justify-between p-6">
          <div className="flex items-center justify-between border-b border-rose-500/40 pb-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-rose-900/80 border border-rose-400 text-rose-200 font-mono text-xs font-bold">
                HALL 05
              </span>
              <span className="text-xs font-mono font-bold tracking-wider text-white">
                장기 재정 전망관 입구
              </span>
            </div>
            <span className="text-[10px] font-mono text-rose-400">
              FISCAL TRAJECTORY
            </span>
          </div>

          <div className="text-center">
            <span className="text-xs font-mono text-slate-400 tracking-widest block mb-1">
              DEBT RATIO 173% & CROCODILE JAW
            </span>
            <span className="text-2xl sm:text-3xl font-black text-white font-sans">
              2072 국가채무와 '악어의 입' 조형관
            </span>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-rose-500/20 pt-3">
            <span>REVENUE 22.0% VS EXPENDITURE 33.6%</span>
            <span className="text-rose-300">AUTOMATIC ENTRY</span>
          </div>
        </div>

        <div
          className="absolute top-0 left-0 w-[470px] h-[540px] bg-gradient-to-r from-slate-950 via-[#22070e] to-slate-900 border-r-2 border-rose-400 transition-transform duration-1000 ease-out flex items-center justify-end pr-8 shadow-2xl"
          style={{
            transform: isHall05Open ? "translateX(-360px)" : "translateX(0px)",
          }}
        >
          <div className="text-right">
            <span className="text-xs font-mono text-rose-400 font-bold block mb-1">
              HALL 05 - L
            </span>
            <span className="text-[10px] font-mono text-slate-500">
              FISCAL CRISIS
            </span>
          </div>
        </div>

        <div
          className="absolute top-0 right-0 w-[470px] h-[540px] bg-gradient-to-l from-slate-950 via-[#22070e] to-slate-900 border-l-2 border-rose-400 transition-transform duration-1000 ease-out flex items-center justify-start pl-8 shadow-2xl"
          style={{
            transform: isHall05Open ? "translateX(360px)" : "translateX(0px)",
          }}
        >
          <div className="text-left">
            <span className="text-xs font-mono text-rose-400 font-bold block mb-1">
              HALL 05 - R
            </span>
            <span className="text-[10px] font-mono text-slate-500">
              ACCESS GRANTED
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================
          GATE 06: HALL 06 (나라살림게임 랩) 게이트 (Z = -21,950px)
          ======================================================== */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 preserve-3d pointer-events-none"
        style={{
          transform: `translate3d(0px, 0px, -21950px)`,
          opacity: hall06Dist > 100 ? 0 : 1,
        }}
      >
        <div className="w-[940px] h-[540px] border-4 border-cyan-500/50 rounded-3xl relative overflow-hidden bg-cyan-950/20 backdrop-blur-[2px] shadow-[0_0_60px_rgba(0,240,255,0.25)] flex flex-col justify-between p-6">
          <div className="flex items-center justify-between border-b border-cyan-500/40 pb-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-cyan-900/80 border border-cyan-400 text-cyan-200 font-mono text-xs font-bold">
                HALL 06
              </span>
              <span className="text-xs font-mono font-bold tracking-wider text-white">
                나라살림게임 시뮬레이션 랩
              </span>
            </div>
            <span className="text-[10px] font-mono text-cyan-400">
              POLICY SIMULATION LAB
            </span>
          </div>

          <div className="text-center">
            <span className="text-xs font-mono text-slate-400 tracking-widest block mb-1">
              PERI FUTURE FISCAL SIMULATION
            </span>
            <span className="text-2xl sm:text-3xl font-black text-white font-sans">
              2055 국가채무와 미래세대 선택
            </span>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-cyan-500/20 pt-3">
            <span>4 OFFICIAL SCENARIOS & 15 POLICY CONSOLE</span>
            <span className="text-cyan-300">AUTOMATIC ENTRY</span>
          </div>
        </div>

        <div
          className="absolute top-0 left-0 w-[470px] h-[540px] bg-gradient-to-r from-slate-950 via-[#071926] to-slate-900 border-r-2 border-cyan-400 transition-transform duration-1000 ease-out flex items-center justify-end pr-8 shadow-2xl"
          style={{
            transform: isHall06Open ? "translateX(-360px)" : "translateX(0px)",
          }}
        >
          <div className="text-right">
            <span className="text-xs font-mono text-cyan-400 font-bold block mb-1">
              LAB ACCESS - L
            </span>
            <span className="text-[10px] font-mono text-slate-500">
              INTERACTIVE CONSOLE
            </span>
          </div>
        </div>

        <div
          className="absolute top-0 right-0 w-[470px] h-[540px] bg-gradient-to-l from-slate-950 via-[#071926] to-slate-900 border-l-2 border-cyan-400 transition-transform duration-1000 ease-out flex items-center justify-start pl-8 shadow-2xl"
          style={{
            transform: isHall06Open ? "translateX(360px)" : "translateX(0px)",
          }}
        >
          <div className="text-left">
            <span className="text-xs font-mono text-cyan-400 font-bold block mb-1">
              LAB ACCESS - R
            </span>
            <span className="text-[10px] font-mono text-slate-500">
              ACCESS GRANTED
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================
          GATE 07: MUSEUM EXIT (관람 종료 라운지 게이트) (Z = -25,150px)
          ======================================================== */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 preserve-3d pointer-events-none"
        style={{
          transform: `translate3d(0px, 0px, -25150px)`,
          opacity: exitDist > 100 ? 0 : 1,
        }}
      >
        <div className="w-[940px] h-[540px] border-4 border-sky-500/50 rounded-3xl relative overflow-hidden bg-sky-950/20 backdrop-blur-[2px] shadow-[0_0_60px_rgba(56,189,248,0.25)] flex flex-col justify-between p-6">
          <div className="flex items-center justify-between border-b border-sky-500/40 pb-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-sky-900/80 border border-sky-400 text-sky-200 font-mono text-xs font-bold">
                EXIT
              </span>
              <span className="text-xs font-mono font-bold tracking-wider text-white">
                전시 관람 종료 라운지 입구
              </span>
            </div>
            <span className="text-[10px] font-mono text-sky-400">
              CONCLUSION & SUMMARY
            </span>
          </div>

          <div className="text-center">
            <span className="text-xs font-mono text-slate-400 tracking-widest block mb-1">
              MUSEUM OF FISCAL FUTURE
            </span>
            <span className="text-2xl sm:text-3xl font-black text-white font-sans">
              모두의 재정, 미래를 향한 동행
            </span>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-sky-500/20 pt-3">
            <span>FINAL SUMMARY LOUNGE</span>
            <span className="text-sky-300">OPENING</span>
          </div>
        </div>

        <div
          className="absolute top-0 left-0 w-[470px] h-[540px] bg-gradient-to-r from-slate-950 via-[#0a1626] to-slate-900 border-r-2 border-sky-400 transition-transform duration-1000 ease-out flex items-center justify-end pr-8 shadow-2xl"
          style={{
            transform: isExitOpen ? "translateX(-360px)" : "translateX(0px)",
          }}
        >
          <div className="text-right">
            <span className="text-xs font-mono text-sky-400 font-bold block mb-1">
              EXIT - L
            </span>
            <span className="text-[10px] font-mono text-slate-500">
              SUMMARY ARCHIVE
            </span>
          </div>
        </div>

        <div
          className="absolute top-0 right-0 w-[470px] h-[540px] bg-gradient-to-l from-slate-950 via-[#0a1626] to-slate-900 border-l-2 border-sky-400 transition-transform duration-1000 ease-out flex items-center justify-start pl-8 shadow-2xl"
          style={{
            transform: isExitOpen ? "translateX(360px)" : "translateX(0px)",
          }}
        >
          <div className="text-left">
            <span className="text-xs font-mono text-sky-400 font-bold block mb-1">
              EXIT - R
            </span>
            <span className="text-[10px] font-mono text-slate-500">
              THANK YOU
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

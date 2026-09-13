import React from "react";

interface MuseumArchitectureProps {
  cameraZ?: number;
}

export const MuseumArchitecture: React.FC<MuseumArchitectureProps> = () => {
  return (
    <div className="absolute inset-0 pointer-events-none preserve-3d">
      {/* ========================================================
          1. 전체 14개 주요 공간 연속 원근 바닥 타일 (Continuous Floor Grid)
          Y = +280px (관람객 발밑 높이), rotateX = 90deg
          ======================================================== */}

      {/* 01 & 02. ENTRANCE & GRAND LOBBY (Z: 0 ~ -2,200px) */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 preserve-3d"
        style={{
          width: "1400px",
          height: "2300px",
          transform: `translate3d(0px, 280px, -1100px) rotateX(90deg)`,
          background: `
            radial-gradient(ellipse at 50% 50%, rgba(14, 30, 60, 0.35) 0%, rgba(4, 8, 18, 0.98) 75%),
            linear-gradient(180deg, #03060f 0%, #060c1c 50%, #03060f 100%)
          `,
          boxShadow: "inset 0 0 80px rgba(0, 0, 0, 0.9)",
        }}
      />

      {/* 03. HALL 01: 인구변화 전시장 (Z: -2,200 ~ -4,800px) */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 preserve-3d"
        style={{
          width: "1500px",
          height: "2600px",
          transform: `translate3d(0px, 280px, -3500px) rotateX(90deg)`,
          background: `
            radial-gradient(ellipse at 50% 50%, rgba(14, 38, 70, 0.32) 0%, rgba(3, 7, 18, 0.98) 75%),
            linear-gradient(180deg, #030712 0%, #050e24 50%, #030712 100%)
          `,
          boxShadow: "inset 0 0 100px rgba(0, 0, 0, 0.95)",
        }}
      />

      {/* 04. CORRIDOR 01: 세대·복지 회랑 (Z: -4,800 ~ -6,000px) */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 preserve-3d"
        style={{
          width: "1080px",
          height: "1200px",
          transform: `translate3d(0px, 280px, -5400px) rotateX(90deg)`,
          background: `
            radial-gradient(ellipse at 50% 50%, rgba(40, 25, 8, 0.28) 0%, rgba(10, 6, 2, 0.98) 80%),
            linear-gradient(180deg, #0a0602 0%, #120b04 50%, #0a0602 100%)
          `,
          borderLeft: "1px solid rgba(245, 158, 11, 0.15)",
          borderRight: "1px solid rgba(245, 158, 11, 0.15)",
          boxShadow: "inset 0 0 60px rgba(0, 0, 0, 0.9)",
        }}
      />

      {/* 05. HALL 02: 복지 및 연금 전시장 (Z: -6,000 ~ -8,800px) */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 preserve-3d"
        style={{
          width: "1500px",
          height: "2800px",
          transform: `translate3d(0px, 280px, -7400px) rotateX(90deg)`,
          background: `
            radial-gradient(ellipse at 50% 50%, rgba(45, 28, 8, 0.32) 0%, rgba(10, 6, 2, 0.98) 75%),
            linear-gradient(180deg, #0a0602 0%, #160e05 50%, #0a0602 100%)
          `,
          boxShadow: "inset 0 0 100px rgba(0, 0, 0, 0.95)",
        }}
      />

      {/* 06. CORRIDOR 02: 기후 회랑 (Z: -8,800 ~ -10,000px) */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 preserve-3d"
        style={{
          width: "1080px",
          height: "1200px",
          transform: `translate3d(0px, 280px, -9400px) rotateX(90deg)`,
          background: `
            radial-gradient(ellipse at 50% 50%, rgba(10, 35, 25, 0.28) 0%, rgba(2, 8, 6, 0.98) 80%),
            linear-gradient(180deg, #020906 0%, #04140d 50%, #020906 100%)
          `,
          borderLeft: "1px solid rgba(16, 185, 129, 0.15)",
          borderRight: "1px solid rgba(16, 185, 129, 0.15)",
          boxShadow: "inset 0 0 60px rgba(0, 0, 0, 0.9)",
        }}
      />

      {/* 07. HALL 03: 환경 문제 전시장 (Z: -10,000 ~ -12,800px) */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 preserve-3d"
        style={{
          width: "1500px",
          height: "2800px",
          transform: `translate3d(0px, 280px, -11400px) rotateX(90deg)`,
          background: `
            radial-gradient(ellipse at 50% 50%, rgba(10, 40, 30, 0.32) 0%, rgba(2, 10, 7, 0.98) 75%),
            linear-gradient(180deg, #020c08 0%, #051811 50%, #020c08 100%)
          `,
          boxShadow: "inset 0 0 100px rgba(0, 0, 0, 0.95)",
        }}
      />

      {/* 08. CORRIDOR 03: AI 회랑 (Z: -12,800 ~ -14,000px) */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 preserve-3d"
        style={{
          width: "1080px",
          height: "1200px",
          transform: `translate3d(0px, 280px, -13400px) rotateX(90deg)`,
          background: `
            radial-gradient(ellipse at 50% 50%, rgba(30, 12, 45, 0.28) 0%, rgba(8, 3, 12, 0.98) 80%),
            linear-gradient(180deg, #08030d 0%, #12071f 50%, #08030d 100%)
          `,
          borderLeft: "1px solid rgba(168, 85, 247, 0.15)",
          borderRight: "1px solid rgba(168, 85, 247, 0.15)",
          boxShadow: "inset 0 0 60px rgba(0, 0, 0, 0.9)",
        }}
      />

      {/* 09. HALL 04: AI 기술 전시장 (Z: -14,000 ~ -16,800px) */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 preserve-3d"
        style={{
          width: "1500px",
          height: "2800px",
          transform: `translate3d(0px, 280px, -15400px) rotateX(90deg)`,
          background: `
            radial-gradient(ellipse at 50% 50%, rgba(38, 15, 55, 0.32) 0%, rgba(10, 4, 16, 0.98) 75%),
            linear-gradient(180deg, #09030e 0%, #170725 50%, #09030e 100%)
          `,
          boxShadow: "inset 0 0 100px rgba(0, 0, 0, 0.95)",
        }}
      />

      {/* 10. CORRIDOR 04: 악어의 입 회랑 (Z: -16,800 ~ -18,000px) */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 preserve-3d"
        style={{
          width: "1080px",
          height: "1200px",
          transform: `translate3d(0px, 280px, -17400px) rotateX(90deg)`,
          background: `
            radial-gradient(ellipse at 50% 50%, rgba(45, 10, 20, 0.28) 0%, rgba(12, 3, 6, 0.98) 80%),
            linear-gradient(180deg, #0d0205 0%, #1c050c 50%, #0d0205 100%)
          `,
          borderLeft: "1px solid rgba(244, 63, 94, 0.15)",
          borderRight: "1px solid rgba(244, 63, 94, 0.15)",
          boxShadow: "inset 0 0 60px rgba(0, 0, 0, 0.9)",
        }}
      />

      {/* 11. HALL 05: 장기 재정 전망관 (Z: -18,000 ~ -20,800px) */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 preserve-3d"
        style={{
          width: "1500px",
          height: "2800px",
          transform: `translate3d(0px, 280px, -19400px) rotateX(90deg)`,
          background: `
            radial-gradient(ellipse at 50% 50%, rgba(48, 12, 22, 0.32) 0%, rgba(12, 3, 6, 0.98) 75%),
            linear-gradient(180deg, #0e0206 0%, #1f050d 50%, #0e0206 100%)
          `,
          boxShadow: "inset 0 0 100px rgba(0, 0, 0, 0.95)",
        }}
      />

      {/* 12. CORRIDOR 05: 시뮬레이션 게이트 회랑 (Z: -20,800 ~ -22,000px) */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 preserve-3d"
        style={{
          width: "1080px",
          height: "1200px",
          transform: `translate3d(0px, 280px, -21400px) rotateX(90deg)`,
          background: `
            radial-gradient(ellipse at 50% 50%, rgba(12, 30, 55, 0.28) 0%, rgba(4, 8, 16, 0.98) 80%),
            linear-gradient(180deg, #03070e 0%, #071525 50%, #03070e 100%)
          `,
          borderLeft: "1px solid rgba(0, 240, 255, 0.15)",
          borderRight: "1px solid rgba(0, 240, 255, 0.15)",
          boxShadow: "inset 0 0 60px rgba(0, 0, 0, 0.9)",
        }}
      />

      {/* 13. HALL 06: 재정 시뮬레이션관 (나라살림게임 랩) (Z: -22,000 ~ -25,200px) */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 preserve-3d"
        style={{
          width: "1500px",
          height: "3200px",
          transform: `translate3d(0px, 280px, -23600px) rotateX(90deg)`,
          background: `
            radial-gradient(ellipse at 50% 50%, rgba(12, 36, 65, 0.35) 0%, rgba(3, 8, 18, 0.98) 75%),
            linear-gradient(180deg, #030814 0%, #061830 50%, #030814 100%)
          `,
          boxShadow: "inset 0 0 120px rgba(0, 0, 0, 0.95)",
        }}
      />

      {/* 14. MUSEUM EXIT: 전시 관람 종료 라운지 (Z: -25,200 ~ -26,500px) */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 preserve-3d"
        style={{
          width: "1400px",
          height: "1300px",
          transform: `translate3d(0px, 280px, -25850px) rotateX(90deg)`,
          background: `
            radial-gradient(ellipse at 50% 50%, rgba(14, 30, 55, 0.3) 0%, rgba(4, 7, 16, 0.98) 80%),
            linear-gradient(180deg, #03060f 0%, #071224 50%, #03060f 100%)
          `,
          boxShadow: "inset 0 0 80px rgba(0, 0, 0, 0.9)",
        }}
      />

      {/* ========================================================
          2. 전체 26,500px 연속 천장 레일 조명 트랙 (Ceiling Spotlight Track)
          ======================================================== */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 preserve-3d"
        style={{
          width: "1080px",
          height: "27000px",
          transform: `translate3d(0px, -280px, -13300px) rotateX(-90deg)`,
          background: `
            linear-gradient(to right, transparent 0%, rgba(0, 240, 255, 0.15) 15%, transparent 20%, transparent 80%, rgba(0, 240, 255, 0.15) 85%, transparent 100%)
          `,
        }}
      />

      {/* ========================================================
          3. 5대 전이 회랑 좌우 물리적 인클로저 벽면 (X = ±540px)
          ======================================================== */}

      {/* 회랑 01: 세대·복지 회랑 벽면 (Z: -5,400px, 앰버) */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 preserve-3d"
        style={{
          width: "1200px",
          height: "560px",
          transform: `translate3d(-540px, 0px, -5400px) rotateY(90deg)`,
          background: "linear-gradient(180deg, #120902 0%, #080401 100%)",
          borderTop: "1px solid rgba(245, 158, 11, 0.2)",
          borderBottom: "1px solid rgba(245, 158, 11, 0.2)",
        }}
      >
        <div className="absolute top-20 left-1/4 w-32 h-1 bg-amber-400/70 shadow-[0_0_20px_#f59e0b]" />
        <div className="absolute bottom-16 left-1/3 text-[11px] font-mono text-amber-500/50 tracking-widest">
          WELFARE TRANSIT CORRIDOR • SECTION 01
        </div>
      </div>
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 preserve-3d"
        style={{
          width: "1200px",
          height: "560px",
          transform: `translate3d(540px, 0px, -5400px) rotateY(-90deg)`,
          background: "linear-gradient(180deg, #120902 0%, #080401 100%)",
          borderTop: "1px solid rgba(245, 158, 11, 0.2)",
          borderBottom: "1px solid rgba(245, 158, 11, 0.2)",
        }}
      >
        <div className="absolute top-20 right-1/4 w-32 h-1 bg-amber-400/70 shadow-[0_0_20px_#f59e0b]" />
        <div className="absolute bottom-16 right-1/3 text-[11px] font-mono text-amber-500/50 tracking-widest">
          FORWARD TO HALL 02 WELFARE & PENSION
        </div>
      </div>

      {/* 회랑 02: 기후 회랑 벽면 (Z: -9,400px, 에메랄드) */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 preserve-3d"
        style={{
          width: "1200px",
          height: "560px",
          transform: `translate3d(-540px, 0px, -9400px) rotateY(90deg)`,
          background: "linear-gradient(180deg, #020f0a 0%, #010805 100%)",
          borderTop: "1px solid rgba(16, 185, 129, 0.2)",
          borderBottom: "1px solid rgba(16, 185, 129, 0.2)",
        }}
      >
        <div className="absolute top-20 left-1/4 w-32 h-1 bg-emerald-400/70 shadow-[0_0_20px_#10b981]" />
        <div className="absolute bottom-16 left-1/3 text-[11px] font-mono text-emerald-500/50 tracking-widest">
          CLIMATE SHIFT CORRIDOR • SECTION 02
        </div>
      </div>
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 preserve-3d"
        style={{
          width: "1200px",
          height: "560px",
          transform: `translate3d(540px, 0px, -9400px) rotateY(-90deg)`,
          background: "linear-gradient(180deg, #020f0a 0%, #010805 100%)",
          borderTop: "1px solid rgba(16, 185, 129, 0.2)",
          borderBottom: "1px solid rgba(16, 185, 129, 0.2)",
        }}
      >
        <div className="absolute top-20 right-1/4 w-32 h-1 bg-emerald-400/70 shadow-[0_0_20px_#10b981]" />
        <div className="absolute bottom-16 right-1/3 text-[11px] font-mono text-emerald-500/50 tracking-widest">
          FORWARD TO HALL 03 ENVIRONMENT & CLIMATE
        </div>
      </div>

      {/* 회랑 03: AI 회랑 벽면 (Z: -13,400px, 퍼플) */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 preserve-3d"
        style={{
          width: "1200px",
          height: "560px",
          transform: `translate3d(-540px, 0px, -13400px) rotateY(90deg)`,
          background: "linear-gradient(180deg, #0d0416 0%, #06020c 100%)",
          borderTop: "1px solid rgba(168, 85, 247, 0.2)",
          borderBottom: "1px solid rgba(168, 85, 247, 0.2)",
        }}
      >
        <div className="absolute top-20 left-1/4 w-32 h-1 bg-purple-400/70 shadow-[0_0_20px_#a855f7]" />
        <div className="absolute bottom-16 left-1/3 text-[11px] font-mono text-purple-500/50 tracking-widest">
          AI & DATA TRANSIT CORRIDOR • SECTION 03
        </div>
      </div>
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 preserve-3d"
        style={{
          width: "1200px",
          height: "560px",
          transform: `translate3d(540px, 0px, -13400px) rotateY(-90deg)`,
          background: "linear-gradient(180deg, #0d0416 0%, #06020c 100%)",
          borderTop: "1px solid rgba(168, 85, 247, 0.2)",
          borderBottom: "1px solid rgba(168, 85, 247, 0.2)",
        }}
      >
        <div className="absolute top-20 right-1/4 w-32 h-1 bg-purple-400/70 shadow-[0_0_20px_#a855f7]" />
        <div className="absolute bottom-16 right-1/3 text-[11px] font-mono text-purple-500/50 tracking-widest">
          FORWARD TO HALL 04 AI & FUTURE LABOR
        </div>
      </div>

      {/* 회랑 04: 악어의 입 회랑 벽면 (Z: -17,400px, 로즈) */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 preserve-3d"
        style={{
          width: "1200px",
          height: "560px",
          transform: `translate3d(-540px, 0px, -17400px) rotateY(90deg)`,
          background: "linear-gradient(180deg, #160408 0%, #0a0204 100%)",
          borderTop: "1px solid rgba(244, 63, 94, 0.2)",
          borderBottom: "1px solid rgba(244, 63, 94, 0.2)",
        }}
      >
        <div className="absolute top-20 left-1/4 w-32 h-1 bg-rose-500/70 shadow-[0_0_20px_#f43f5e]" />
        <div className="absolute bottom-16 left-1/3 text-[11px] font-mono text-rose-500/50 tracking-widest">
          FISCAL TRAJECTORY CORRIDOR • SECTION 04
        </div>
      </div>
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 preserve-3d"
        style={{
          width: "1200px",
          height: "560px",
          transform: `translate3d(540px, 0px, -17400px) rotateY(-90deg)`,
          background: "linear-gradient(180deg, #160408 0%, #0a0204 100%)",
          borderTop: "1px solid rgba(244, 63, 94, 0.2)",
          borderBottom: "1px solid rgba(244, 63, 94, 0.2)",
        }}
      >
        <div className="absolute top-20 right-1/4 w-32 h-1 bg-rose-500/70 shadow-[0_0_20px_#f43f5e]" />
        <div className="absolute bottom-16 right-1/3 text-[11px] font-mono text-rose-500/50 tracking-widest">
          FORWARD TO HALL 05 FISCAL OUTLOOK
        </div>
      </div>

      {/* 회랑 05: 시뮬레이션 게이트 회랑 벽면 (Z: -21,400px, 사이언) */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 preserve-3d"
        style={{
          width: "1200px",
          height: "560px",
          transform: `translate3d(-540px, 0px, -21400px) rotateY(90deg)`,
          background: "linear-gradient(180deg, #030d1c 0%, #01060e 100%)",
          borderTop: "1px solid rgba(0, 240, 255, 0.2)",
          borderBottom: "1px solid rgba(0, 240, 255, 0.2)",
        }}
      >
        <div className="absolute top-20 left-1/4 w-32 h-1 bg-cyan-400/70 shadow-[0_0_20px_#00f0ff]" />
        <div className="absolute bottom-16 left-1/3 text-[11px] font-mono text-cyan-500/50 tracking-widest">
          SIMULATION ACCESS CORRIDOR • SECTION 05
        </div>
      </div>
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 preserve-3d"
        style={{
          width: "1200px",
          height: "560px",
          transform: `translate3d(540px, 0px, -21400px) rotateY(-90deg)`,
          background: "linear-gradient(180deg, #030d1c 0%, #01060e 100%)",
          borderTop: "1px solid rgba(0, 240, 255, 0.2)",
          borderBottom: "1px solid rgba(0, 240, 255, 0.2)",
        }}
      >
        <div className="absolute top-20 right-1/4 w-32 h-1 bg-cyan-400/70 shadow-[0_0_20px_#00f0ff]" />
        <div className="absolute bottom-16 right-1/3 text-[11px] font-mono text-cyan-500/50 tracking-widest">
          FORWARD TO HALL 06 FISCAL LAB
        </div>
      </div>
    </div>
  );
};

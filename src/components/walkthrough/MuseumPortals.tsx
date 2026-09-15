import React from "react";
import {
  GATES,
  GateId,
  clamp01,
  corridorExhibitForGate,
  doorOpenAmount,
  gateOpacity,
} from "../../data/spaceLayout";
import { generatedVisualFor } from "../../data/museumImages";
import { getExhibit } from "../../data/walkthroughData";

interface MuseumPortalsProps {
  cameraZ: number;
}

const GATE_THEME: Record<
  string,
  { frame: string; fill: string; glow: string; name: string }
> = {
  entrance: {
    frame: "border-cyan-400/55",
    fill: "from-slate-900 via-[#0c2240] to-slate-800",
    glow: "shadow-[0_0_55px_rgba(56,189,248,0.28)]",
    name: "재정미래관",
  },
  hall01: {
    frame: "border-sky-400/60",
    fill: "from-slate-900 via-[#0c2848] to-slate-800",
    glow: "shadow-[0_0_55px_rgba(56,189,248,0.3)]",
    name: "인구변화",
  },
  hall02: {
    frame: "border-amber-400/55",
    fill: "from-slate-900 via-[#3a220c] to-slate-800",
    glow: "shadow-[0_0_50px_rgba(245,158,11,0.28)]",
    name: "복지·연금",
  },
  hall03: {
    frame: "border-emerald-400/55",
    fill: "from-slate-900 via-[#0c2e20] to-slate-800",
    glow: "shadow-[0_0_50px_rgba(16,185,129,0.28)]",
    name: "환경",
  },
  hall04: {
    frame: "border-violet-400/55",
    fill: "from-slate-900 via-[#2a1450] to-slate-800",
    glow: "shadow-[0_0_50px_rgba(167,139,250,0.28)]",
    name: "AI 기술",
  },
  hall05: {
    frame: "border-rose-400/55",
    fill: "from-slate-900 via-[#3a1020] to-slate-800",
    glow: "shadow-[0_0_50px_rgba(244,63,94,0.26)]",
    name: "장기 재정",
  },
  hall06: {
    frame: "border-cyan-300/60",
    fill: "from-slate-900 via-[#0c2848] to-slate-800",
    glow: "shadow-[0_0_55px_rgba(34,211,238,0.3)]",
    name: "나라살림 랩",
  },
};

function DoorOrnament({ side }: { side: "left" | "right" }) {
  return (
    <div
      className={`flex flex-col items-center gap-3 ${
        side === "left" ? "mr-6" : "ml-6"
      }`}
    >
      <div className="w-10 h-10 rotate-45 border border-white/25 bg-white/5" />
      <div className="w-px h-24 bg-white/20" />
      <div className="w-6 h-6 rounded-full border border-white/20 bg-white/5" />
    </div>
  );
}

function DoorThemePlate({
  gateId,
  side,
}: {
  gateId: GateId;
  side: "left" | "right";
}) {
  const exhibitId = corridorExhibitForGate(gateId);
  if (!exhibitId) return null;
  const exhibit = getExhibit(exhibitId);
  const visual = generatedVisualFor(exhibitId);
  if (!exhibit || !visual) return null;

  return (
    <div
      className={`absolute top-14 w-[68%] overflow-hidden rounded-lg border border-white/20 bg-black/35 ${
        side === "left" ? "left-8" : "right-8"
      }`}
      data-testid={`gate-theme-${gateId}`}
    >
      <div className="relative aspect-video">
        <img
          src={visual.src}
          alt=""
          width={480}
          height={270}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      {side === "right" && (
        <p className="px-2 py-1.5 text-[10px] leading-snug text-white/95">
          {exhibit.titleKo}
        </p>
      )}
    </div>
  );
}

export const MuseumPortals: React.FC<MuseumPortalsProps> = ({ cameraZ }) => (
  <>
    {GATES.map((gate) => {
      const dist = gate.z + cameraZ;
      const opacity = gateOpacity(dist);
      if (opacity <= 0) return null;
      const theme = GATE_THEME[gate.id];
      const open = doorOpenAmount(dist);
      const near = clamp01((dist + 200) / 320);
      const signScale = 1 - 0.46 * near;
      const signLift = -8 - 36 * near;
      const signFade = dist > 40 ? Math.max(0, 1 - (dist - 40) / 180) : 1;
      const approachId = corridorExhibitForGate(gate.id);
      const approach = approachId ? getExhibit(approachId) : undefined;

      return (
        <div
          key={gate.id}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 preserve-3d pointer-events-none"
          style={{
            transform: `translate3d(0px, 0px, ${gate.z}px)`,
            opacity,
          }}
        >
          <div className="relative w-[920px] h-[540px] preserve-3d">
            <div
              className="absolute left-1/2 w-[780px] preserve-3d"
              style={{
                bottom: "100%",
                marginBottom: `${signLift}px`,
                transform: `translateX(-50%) translateZ(18px) scale(${signScale})`,
                opacity: signFade,
                transformOrigin: "center bottom",
              }}
            >
              <div className="h-3 rounded-t-md bg-gradient-to-r from-slate-700 via-slate-300/80 to-slate-700 border-x border-t border-white/20" />
              <div
                className={`px-6 py-3 border-x-4 border-b-4 ${theme.frame} bg-[#0a1220]/92 ${theme.glow} text-center`}
              >
                <div className="text-[10px] font-mono tracking-[0.35em] text-slate-300 mb-1">
                  HALL {gate.hall}
                </div>
                <div className="text-xl font-black text-white tracking-wide">
                  {theme.name}
                </div>
                {approach && (
                  <p className="mt-1.5 text-[11px] leading-snug text-slate-200">
                    {approach.titleKo} · {approach.summary}
                  </p>
                )}
              </div>
            </div>

            <div
              className={`absolute inset-0 border-4 ${theme.frame} rounded-b-2xl overflow-hidden ${theme.glow}`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(80,140,200,0.22)_0%,_rgba(8,16,32,0.2)_62%)]" />

              <div
                className={`absolute top-0 left-0 w-[460px] h-full bg-gradient-to-r ${theme.fill} border-r-2 border-white/15 flex items-center justify-end`}
                style={{ transform: `translateX(${-480 * open}px)` }}
              >
                <DoorThemePlate gateId={gate.id} side="left" />
                <DoorOrnament side="left" />
              </div>
              <div
                className={`absolute top-0 right-0 w-[460px] h-full bg-gradient-to-l ${theme.fill} border-l-2 border-white/15 flex items-center justify-start`}
                style={{ transform: `translateX(${480 * open}px)` }}
              >
                <DoorOrnament side="right" />
                <DoorThemePlate gateId={gate.id} side="right" />
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </>
);

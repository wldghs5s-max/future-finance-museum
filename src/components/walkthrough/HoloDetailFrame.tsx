import React from "react";
import { holoPanelClass, type HoloAccent } from "../../data/exhibitAccent";

interface HoloDetailFrameProps {
  accent: HoloAccent;
  onBackdrop: () => void;
  children: React.ReactNode;
}

export const HoloDetailFrame: React.FC<HoloDetailFrameProps> = ({
  accent,
  onBackdrop,
  children,
}) => (
  <div
    className="fixed inset-0 z-50 flex items-start justify-center px-3 sm:px-5 pt-14 sm:pt-16 pb-4 animate-fade-in"
    data-testid="hologram-detail"
  >
    <div className="absolute inset-0 bg-[#050811]/55" onClick={onBackdrop} />
    <div
      data-testid="hologram-detail-panel"
      data-holo-accent={accent}
      className={`${holoPanelClass(accent)} relative z-10 flex h-[min(calc(100vh-5.5rem),840px)] w-full max-w-3xl flex-col overflow-hidden p-4 sm:p-7`}
      onClick={(event) => event.stopPropagation()}
    >
      {children}
    </div>
  </div>
);

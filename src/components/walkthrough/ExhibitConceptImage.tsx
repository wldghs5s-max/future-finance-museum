import React from "react";
import { GeneratedMuseumImage } from "../../data/museumImages";

export const ExhibitConceptImage: React.FC<{ visual: GeneratedMuseumImage }> = ({
  visual,
}) => (
  <div
    className="relative mb-3 overflow-hidden rounded-xl bg-[#070d16] border border-white/10"
    style={{ aspectRatio: visual.aspect }}
  >
    <img
      src={visual.src}
      alt={visual.alt}
      width={1152}
      height={864}
      className="absolute inset-0 h-full w-full object-contain"
    />
  </div>
);

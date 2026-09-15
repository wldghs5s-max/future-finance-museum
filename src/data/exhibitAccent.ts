export type HoloAccent = "rose" | "sky" | "amber" | "emerald" | "violet" | "cyan";

const ACCENT_BY_ID: Record<string, HoloAccent> = {
  exhibit_lobby_intro: "cyan",
  exhibit_lobby_directory: "amber",
  exhibit_1d: "rose",
  exhibit_1a: "sky",
  exhibit_1b: "amber",
  exhibit_1e: "rose",
  exhibit_1f: "sky",
  exhibit_1g: "amber",
  exhibit_1c: "rose",
  exhibit_1h: "emerald",
  exhibit_1_choices: "rose",
  exhibit_2d: "amber",
  exhibit_2a: "sky",
  exhibit_2b: "rose",
  exhibit_2f: "amber",
  exhibit_2e: "emerald",
  exhibit_2c: "sky",
  exhibit_2_choices: "amber",
  exhibit_3d: "emerald",
  exhibit_3a: "sky",
  exhibit_3b: "cyan",
  exhibit_3e: "emerald",
  exhibit_3f: "amber",
  exhibit_3c: "rose",
  exhibit_3h: "emerald",
  exhibit_3_choices: "emerald",
  exhibit_4d: "violet",
  exhibit_4a: "cyan",
  exhibit_4b: "rose",
  exhibit_4e: "violet",
  exhibit_4f: "amber",
  exhibit_4c: "sky",
  exhibit_4h: "violet",
  exhibit_4_choices: "violet",
  exhibit_5d: "rose",
  exhibit_5a: "sky",
  exhibit_5b: "amber",
  exhibit_5e: "cyan",
  exhibit_5c: "rose",
  exhibit_5f: "sky",
  exhibit_5_choices: "rose",
  exhibit_6a: "cyan",
  exhibit_6b: "amber",
  exhibit_6d: "sky",
};

export function holoAccentFor(exhibitId: string): HoloAccent {
  return ACCENT_BY_ID[exhibitId] ?? "cyan";
}

export function holoPanelClass(accent: HoloAccent) {
  return `holo-panel holo-panel-${accent}`;
}

export const HOLO_TAB_ACTIVE: Record<HoloAccent, string> = {
  rose: "bg-rose-950/80 border-rose-400/70 text-rose-100",
  sky: "bg-sky-950/80 border-sky-400/70 text-sky-100",
  amber: "bg-amber-950/80 border-amber-300/70 text-amber-100",
  emerald: "bg-emerald-950/80 border-emerald-300/70 text-emerald-100",
  violet: "bg-violet-950/80 border-violet-300/70 text-violet-100",
  cyan: "bg-cyan-950/80 border-cyan-400/70 text-cyan-100",
};

export const HOLO_CTA: Record<HoloAccent, string> = {
  rose: "bg-rose-400 hover:bg-rose-300 text-rose-950",
  sky: "bg-sky-400 hover:bg-sky-300 text-sky-950",
  amber: "bg-amber-400 hover:bg-amber-300 text-amber-950",
  emerald: "bg-emerald-400 hover:bg-emerald-300 text-emerald-950",
  violet: "bg-violet-400 hover:bg-violet-300 text-violet-950",
  cyan: "bg-cyan-400 hover:bg-cyan-300 text-cyan-950",
};

export const HOLO_BADGE: Record<HoloAccent, string> = {
  rose: "bg-rose-950 border border-rose-700 text-rose-300",
  sky: "bg-sky-950 border border-sky-700 text-sky-300",
  amber: "bg-amber-950 border border-amber-700 text-amber-300",
  emerald: "bg-emerald-950 border border-emerald-700 text-emerald-300",
  violet: "bg-violet-950 border border-violet-700 text-violet-300",
  cyan: "bg-cyan-950 border border-cyan-700 text-cyan-300",
};

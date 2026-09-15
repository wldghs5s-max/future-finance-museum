import React, { useEffect } from "react";
import { SpatialZoneId, SPATIAL_ZONES } from "../../types/spatial";
import { ZONE_CAMERA_Z_MAP as LAYOUT_CAMERA_Z } from "../../data/spaceLayout";
import { MUSEUM_SPACE_GUIDE } from "../../types/exhibit";
import { Map, X, Compass, ArrowRight, CheckCircle2 } from "lucide-react";

interface MuseumMapModalProps {
  isOpen: boolean;
  currentZone: SpatialZoneId;
  visitedZones: Set<SpatialZoneId>;
  inspectedCount: number;
  progress: number;
  onClose: () => void;
  onSelectZone: (zoneId: SpatialZoneId) => void;
}

export const ZONE_CAMERA_Z_MAP: Record<string, number> = LAYOUT_CAMERA_Z;

export const MuseumMapModal: React.FC<MuseumMapModalProps> = ({
  isOpen,
  currentZone,
  visitedZones,
  inspectedCount,
  progress,
  onClose,
  onSelectZone,
}) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl rounded-2xl bg-[#080e22] border border-cyan-500/30 shadow-2xl shadow-cyan-950/60 overflow-hidden flex flex-col max-h-[90vh]">
        {/* 모달 상단 헤더 */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <Map className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white tracking-wide flex items-center gap-2">
                재정미래박물관 도면 및 위치 이동 (MUSEUM MAP)
              </h3>
              <p className="text-[10px] font-mono text-slate-400 uppercase">
                {MUSEUM_SPACE_GUIDE.mapZoneCount} ZONES · 로비·6관·5회랑
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 박물관 도면 및 공간 리스트 */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-xs text-cyan-200 font-sans leading-relaxed">
            지도 항목은 {MUSEUM_SPACE_GUIDE.mapZoneCount}개입니다.{" "}
            {MUSEUM_SPACE_GUIDE.breakdown}. {MUSEUM_SPACE_GUIDE.introNote} 이동
            진행률({Math.round(progress * 100)}%)과 구역 방문({visitedZones.size}
            /{MUSEUM_SPACE_GUIDE.mapZoneCount}), 전시 상세 열람({inspectedCount})은
            서로 다른 기록입니다.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
            {SPATIAL_ZONES.map((zone) => {
              const isCurrent = zone.id === currentZone;
              const isVisited = visitedZones.has(zone.id);
              const isCorridor = zone.zoneType === "corridor";
              const isSupportedInProto =
                ZONE_CAMERA_Z_MAP[zone.id] !== undefined;

              return (
                <button
                  key={zone.id}
                  onClick={() => {
                    onSelectZone(zone.id);
                    onClose();
                  }}
                  className={`p-4 rounded-xl text-left border transition cursor-pointer flex flex-col justify-between ${
                    isCurrent
                      ? "bg-cyan-950/50 border-cyan-400 glow-cyan ring-1 ring-cyan-400/50"
                      : isCorridor
                        ? "bg-slate-950/50 border-slate-800/60 hover:border-slate-700 hover:bg-slate-900/40"
                        : isSupportedInProto
                          ? "bg-slate-900/70 border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/95"
                          : "bg-slate-950/40 border-slate-900 opacity-60 hover:opacity-100"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                          isCorridor
                            ? "bg-slate-900 text-slate-400 border border-slate-800"
                            : "bg-cyan-950 text-cyan-300 border border-cyan-800/60"
                        }`}
                      >
                        {zone.hallNumber
                          ? `HALL ${zone.hallNumber}`
                          : zone.zoneType.toUpperCase()}
                      </span>

                      {isCurrent ? (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500 text-slate-950 font-bold flex items-center gap-1">
                          <Compass className="w-3 h-3 animate-spin" /> 현재 위치
                        </span>
                      ) : isVisited ? (
                        <span className="text-[10px] font-mono text-cyan-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> 방문완료
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono text-cyan-500/80 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40">
                          이동 가능
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm font-bold text-white mb-1">
                      {zone.nameKo}
                    </h4>
                    <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed font-sans">
                      {zone.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-500">
                    <span>{zone.nameEn}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 모달 하단 닫기 */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-900/60 flex items-center justify-between text-xs font-mono text-slate-400">
          <span className="max-w-xl leading-relaxed text-[10px] text-slate-500">
            {MUSEUM_SPACE_GUIDE.civicNote}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition cursor-pointer"
          >
            도면 닫기
          </button>
        </div>
      </div>
    </div>
  );
};

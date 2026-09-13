import React from "react";
import { SpatialZoneId, SPATIAL_ZONES } from "../../types/spatial";
import { Footprints, ArrowRight, CornerDownLeft, Sparkles } from "lucide-react";

interface MuseumCorridorProps {
  corridorZoneId: SpatialZoneId;
  onNavigate: (zoneId: SpatialZoneId) => void;
}

export const MuseumCorridor: React.FC<MuseumCorridorProps> = ({
  corridorZoneId,
  onNavigate,
}) => {
  const currentMeta =
    SPATIAL_ZONES.find((z) => z.id === corridorZoneId) || SPATIAL_ZONES[2];
  const nextZoneMeta = currentMeta.nextZoneId
    ? SPATIAL_ZONES.find((z) => z.id === currentMeta.nextZoneId)
    : null;
  const prevZoneMeta = currentMeta.prevZoneId
    ? SPATIAL_ZONES.find((z) => z.id === currentMeta.prevZoneId)
    : null;

  return (
    <div className="relative min-h-[85vh] flex flex-col justify-between p-6 sm:p-12 overflow-hidden museum-viewport animate-fade-in">
      {/* 1. 천장 조명 레일 (Perspective Ceiling) */}
      <div className="absolute top-0 left-0 right-0 h-40 museum-ceiling pointer-events-none opacity-40 light-beam-ceiling" />

      {/* 2. 좌우 벽면 앰비언트 (Perspective Corridor Walls) */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 museum-wall-left pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 museum-wall-right pointer-events-none" />

      {/* 3. 복도 상단 안내 사이니지 */}
      <div className="relative z-10 max-w-4xl mx-auto w-full text-center pt-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-mono tracking-widest uppercase mb-4 shadow-lg">
          <Footprints className="w-3.5 h-3.5 text-cyan-400" />
          <span>MUSEUM CONNECTING CORRIDOR</span>
        </div>
        <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight font-mono mb-2">
          {currentMeta.nameKo}
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed font-sans">
          {currentMeta.description}
        </p>
      </div>

      {/* 4. 복도 중앙: 멀리 소실점 끝에 보이는 다음 전시장 문 (Next Hall Perspective Gate) */}
      <div className="relative z-10 my-12 max-w-xl mx-auto w-full text-center">
        {nextZoneMeta && (
          <div className="p-8 rounded-3xl bg-gradient-to-b from-slate-900/95 via-[#08122a]/90 to-[#030612]/95 border-2 border-cyan-500/40 shadow-2xl shadow-cyan-950/80 backdrop-blur-xl relative overflow-hidden group">
            {/* 소실점 문 뒤쪽에서 새어나오는 전시장 내부 빛 */}
            <div
              className="absolute inset-0 opacity-25 blur-3xl pointer-events-none"
              style={{ backgroundColor: nextZoneMeta.themeColor }}
            />

            <div className="relative z-10">
              <span className="text-[10px] font-mono tracking-[0.25em] text-cyan-400 uppercase block mb-2">
                AHEAD IN THE DISTANCE
              </span>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-800 text-slate-300 font-mono text-xs mb-3 border border-slate-700">
                <span>
                  {nextZoneMeta.hallNumber
                    ? `HALL ${nextZoneMeta.hallNumber}`
                    : nextZoneMeta.zoneType.toUpperCase()}
                </span>
                <span>•</span>
                <span className="text-cyan-300 font-bold">
                  {nextZoneMeta.nameEn}
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-black text-white mb-2">
                {nextZoneMeta.nameKo}
              </h4>
              <p className="text-xs text-slate-400 max-w-sm mx-auto mb-6 font-sans">
                {nextZoneMeta.description}
              </p>

              {/* 다음 전시장으로 발걸음 옮기기 버튼 */}
              <button
                onClick={() => {
                  onNavigate(nextZoneMeta.id);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono font-bold text-xs tracking-wider uppercase transition shadow-lg shadow-cyan-500/30 flex items-center justify-center gap-2 mx-auto cursor-pointer group-hover:scale-105"
              >
                <span>전시장 문을 열고 입장하기</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 5. 복도 하단: 바닥 타일 가이드라인 및 이전 전시장 회귀 */}
      <div className="relative z-10 max-w-4xl mx-auto w-full flex items-center justify-between pt-6 border-t border-slate-800/80 text-xs font-mono text-slate-400">
        {prevZoneMeta ? (
          <button
            onClick={() => {
              onNavigate(prevZoneMeta.id);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-1.5 hover:text-white transition cursor-pointer"
          >
            <CornerDownLeft className="w-3.5 h-3.5 text-slate-500" />
            <span>이전 전시장 ({prevZoneMeta.nameKo})으로 돌아가기</span>
          </button>
        ) : (
          <div />
        )}

        <div className="flex items-center gap-2 text-[11px] text-slate-500">
          <Sparkles className="w-3 h-3 text-cyan-400" />
          <span>복도를 걸어 다음 전시장으로 이동 중</span>
        </div>
      </div>

      {/* 6. 바닥 원근 타일 그리드 (Floor Perspective) */}
      <div className="absolute bottom-0 left-0 right-0 h-48 museum-floor pointer-events-none opacity-60" />
    </div>
  );
};

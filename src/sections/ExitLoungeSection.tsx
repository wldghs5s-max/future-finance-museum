import React from "react";
import { SpatialZoneId } from "../types/spatial";
import { RotateCcw, Building2, CheckCircle2, ArrowRight } from "lucide-react";

interface ExitLoungeSectionProps {
  onNavigate: (zoneId: SpatialZoneId) => void;
  onReplayPortal: () => void;
}

export const ExitLoungeSection: React.FC<ExitLoungeSectionProps> = ({
  onNavigate,
  onReplayPortal,
}) => {
  return (
    <div className="relative min-h-[90vh] flex flex-col justify-between py-12 px-4 sm:px-6 lg:px-8 overflow-hidden museum-viewport animate-fade-in">
      {/* 1. 천장 앰비언트 라이트 */}
      <div className="absolute top-0 left-0 right-0 h-44 museum-ceiling pointer-events-none opacity-40 light-beam-ceiling" />

      {/* 2. 퇴장 라운지 중앙 컨텐츠 */}
      <div className="relative z-10 max-w-4xl mx-auto w-full text-center pt-8 pb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono tracking-widest text-cyan-300 uppercase mb-6 shadow-lg glow-cyan">
          <CheckCircle2 className="w-4 h-4 text-cyan-400" />
          <span>MUSEUM TOUR COMPLETED</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight font-mono mb-4">
          재정미래관 관람을 마치며
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans mb-10">
          인구 변화, 복지와 연금, 기후 환경, AI 혁명, 장기재정의 시간축을
          통과하셨습니다.
          <br className="hidden sm:inline" />
          우리가 오늘 내리는 재정적 선택이 곧 30년 뒤 미래세대가 살아갈
          대한민국의 현실이 됩니다.
        </p>

        {/* 6대 테마 총괄 회고 보드 */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 mb-10 text-left">
          <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-4">
            전시 핵심 아카이브 요약:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs font-sans">
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
              <span className="font-bold text-white block mb-0.5">
                01. 인구의 미래
              </span>
              <span className="text-slate-400">
                2020 데드크로스, 2072년 3,622만 명 회귀
              </span>
            </div>
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
              <span className="font-bold text-white block mb-0.5">
                02. 복지와 연금
              </span>
              <span className="text-slate-400">
                개혁 2065년 / 호실적 2069년 소진, 건보 2029 고갈
              </span>
            </div>
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
              <span className="font-bold text-white block mb-0.5">
                03. 환경의 미래
              </span>
              <span className="text-slate-400">
                폭염 8.8일 → 79.5일 억제, 무탄소 70.7%
              </span>
            </div>
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
              <span className="font-bold text-white block mb-0.5">
                04. AI의 미래
              </span>
              <span className="text-slate-400">
                2026 AI 예산 9.9조, 2030 GPU 20만 장 로드맵
              </span>
            </div>
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
              <span className="font-bold text-white block mb-0.5">
                05. 장기재정전망
              </span>
              <span className="text-slate-400">
                악어의 입 극복을 위한 60-3 재정준칙
              </span>
            </div>
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
              <span className="font-bold text-white block mb-0.5">
                06. 나라살림게임
              </span>
              <span className="text-slate-400">
                전문가 안정선 150.0% 달성과 세대 간 연대
              </span>
            </div>
          </div>
        </div>

        {/* 액션 버튼 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              onNavigate("lobby");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono font-bold text-xs tracking-wider uppercase transition shadow-lg shadow-cyan-500/30 cursor-pointer"
          >
            <Building2 className="w-4 h-4" />
            <span>중앙 로비로 돌아가 다시 관람하기</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onReplayPortal}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-mono font-medium transition cursor-pointer"
          >
            <RotateCcw className="w-4 h-4 text-sky-400" />
            <span>오프닝 포탈 영상 다시보기</span>
          </button>
        </div>
      </div>

      {/* 3. 바닥 원근 타일 그리드 */}
      <div className="absolute bottom-0 left-0 right-0 h-48 museum-floor pointer-events-none opacity-40" />
    </div>
  );
};

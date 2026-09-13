import React from "react";
import { SpatialExhibitContainer } from "./SpatialExhibitContainer";
import {
  Award,
  Compass,
  BookOpen,
  CheckCircle,
  HeartHandshake,
} from "lucide-react";

interface ExitLoungeExhibitsProps {
  cameraZ: number;
  onInspect: (exhibitId: string) => void;
}

export const ExitLoungeExhibits: React.FC<ExitLoungeExhibitsProps> = ({
  cameraZ,
  onInspect,
}) => {
  return (
    <>
      {/* ========================================================
          MUSEUM EXIT: 전시 관람 종료 라운지 종합 회고 월
          *사용자 지침 준수: '로비로 돌아가기' 버튼 완전 제거, HUD/도면 안내*
          X = 0px, Y = 0px, Z = -25800px, RotY = 0deg, Width = 560px
          ======================================================== */}
      <SpatialExhibitContainer
        x={0}
        y={0}
        z={-25800}
        rotateY={0}
        cameraZ={cameraZ}
        width={560}
        title="전시 관람 종료 라운지 종합 회고 월"
        exhibitCode="EXIT SUMMARY"
        onInspect={() => onInspect("exhibit_exit_summary")}
      >
        <div className="p-8 rounded-3xl bg-gradient-to-b from-[#071328] via-[#040c1c] to-[#02050e] border-2 border-sky-500/50 shadow-[0_0_80px_rgba(56,189,248,0.25)] backdrop-blur-md relative group-hover:border-sky-400/80 transition-colors text-center">
          {/* 상단 엠블럼 */}
          <div className="w-16 h-16 rounded-2xl bg-sky-950/80 border border-sky-400/60 shadow-[0_0_30px_rgba(56,189,248,0.3)] flex items-center justify-center mx-auto mb-4">
            <Award className="w-8 h-8 text-sky-300" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-600 text-[10px] font-mono text-sky-300 mb-3">
            <CheckCircle className="w-3 h-3 text-sky-400" />
            <span>14개 주요 공간 2.5D 보행 완주</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight mb-2">
            재정미래박물관 관람을 마칩니다
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-md mx-auto leading-relaxed mb-6">
            인구 절벽, 연금 소진, 기후위기, AI 충격, 그리고 국가채무의 5대 축을
            통해 대한민국의 지속가능성을 마주하셨습니다. 미래세대를 위한 재정은
            우리 모두의 책임과 연대에서 시작됩니다.
          </p>

          {/* 공식 데이터 아카이브 검증 배너 */}
          <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 text-left mb-5">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
              <span className="flex items-center gap-1.5 text-sky-300 font-bold">
                <BookOpen className="w-4 h-4 text-sky-400" />
                <span>공식 데이터 원천 (Single Source of Truth)</span>
              </span>
              <span className="text-emerald-400">100% 검증</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
              통계청(2072 인구추계), 보건복지부(국민연금 개혁), 산업부(11차
              전기본), 과기정통부(AI 국가전략), KDI(자동화율),
              국회예산정책처(2072 장기재정), 정책평가연구원(나라살림게임 모델)
              공식 데이터에 엄격히 근거합니다.
            </p>
          </div>

          {/* 안내 메시지: 로비로 돌아가기 버튼 없이 도면(MUSEUM MAP)을 이용하도록 명시 */}
          <div className="p-3 rounded-xl bg-sky-950/30 border border-sky-800/40 text-xs text-sky-200 font-sans flex items-center justify-center gap-2">
            <Compass className="w-4 h-4 text-sky-400 shrink-0" />
            <span>
              다른 전시관을 다시 둘러보시려면 상단 HUD의{" "}
              <strong>MUSEUM MAP</strong>을 이용하세요.
            </span>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-500 flex items-center justify-between">
            <span className="flex items-center gap-1">
              <HeartHandshake className="w-3.5 h-3.5 text-slate-400" />
              <span>모두의 재정 • 미래재정박물관</span>
            </span>
            <span className="text-sky-400 font-bold">
              클릭하여 최종 회고 열기
            </span>
          </div>
        </div>
      </SpatialExhibitContainer>
    </>
  );
};

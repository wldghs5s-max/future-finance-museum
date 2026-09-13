import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, FastForward, Play, Sparkles } from "lucide-react";

interface PortalIntroProps {
  onEnterMuseum: () => void;
}

export const PortalIntro: React.FC<PortalIntroProps> = ({ onEnterMuseum }) => {
  const [phase, setPhase] = useState<"initial-black" | "playing" | "arrived">(
    "initial-black",
  );
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Phase 1: 1.2초간 암전 및 오프닝 텍스트 발광 후 영상 재생
    const timer = setTimeout(() => {
      setPhase("playing");
      if (videoRef.current) {
        videoRef.current.play().catch(() => {
          // 브라우저 자동재생 차단 시 음소거 유지
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(() => {
              setVideoError(true);
            });
          }
        });
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      setProgress((current / total) * 100);

      // 영상 종료 0.8초 전부터 도착 트랜지션 준비
      if (total - current <= 0.8 && phase === "playing") {
        setPhase("arrived");
        setTimeout(() => {
          onEnterMuseum();
        }, 1200);
      }
    }
  };

  const handleVideoEnded = () => {
    setPhase("arrived");
    setTimeout(() => {
      onEnterMuseum();
    }, 1200);
  };

  const handleSkip = () => {
    setPhase("arrived");
    setTimeout(() => {
      onEnterMuseum();
    }, 400);
  };

  const toggleSound = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#050811] flex items-center justify-center overflow-hidden select-none">
      {/* 1. 인트로 암전 & 타이포그래피 (1.2초) */}
      {phase === "initial-black" && (
        <div className="text-center px-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 animate-spin text-cyan-400" />
            Portal Sequence Initializing
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-3">
            모두의 재정 <span className="text-cyan-400">| 재정미래관</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-base font-light tracking-wide">
            현대에서 미래로 통하는 포탈이 열립니다. 잠시만 기다려주세요...
          </p>
        </div>
      )}

      {/* 2. 미래포탈 영상 재생 영역 */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
          phase === "playing"
            ? "opacity-100"
            : phase === "arrived"
              ? "opacity-30 blur-md scale-105"
              : "opacity-0"
        }`}
      >
        {!videoError ? (
          <video
            ref={videoRef}
            src="/videos/portal_intro.mp4"
            className="w-full h-full object-cover"
            playsInline
            muted={isMuted}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleVideoEnded}
            onError={() => setVideoError(true)}
          />
        ) : (
          /* Fallback: 영상 로드 불가 시 인터랙티브 사이버네틱 관문 그래픽 */
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-slate-950 via-[#0A1128] to-slate-950 p-6 text-center">
            <div className="w-24 h-24 rounded-full border-2 border-dashed border-cyan-400 animate-spin flex items-center justify-center mb-6 glow-cyan">
              <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <Play className="w-8 h-8 text-cyan-300 ml-1" />
              </div>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
              미래박물관 시공간 포탈
            </h2>
            <p className="text-slate-400 max-w-md mb-8 text-sm">
              시공간 워프 시퀀스를 거쳐 대한민국 미래 재정 전시관으로
              진입합니다.
            </p>
            <button
              onClick={handleSkip}
              className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold tracking-wider uppercase transition shadow-lg shadow-cyan-500/30 flex items-center gap-2 cursor-pointer"
            >
              전시관 바로 입장하기
            </button>
          </div>
        )}
      </div>

      {/* 3. 비디오 상단/하단 HUD 제어 인터페이스 */}
      {phase === "playing" && (
        <>
          {/* 상단 미니 배너 */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10 pointer-events-auto">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-xs tracking-widest text-cyan-300 font-mono uppercase bg-slate-900/80 px-2.5 py-1 rounded border border-cyan-500/30">
                TRANSIT TO FUTURE FISCAL MUSEUM
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={toggleSound}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs transition cursor-pointer"
                title={isMuted ? "소리 켜기" : "음소거"}
              >
                {isMuted ? (
                  <VolumeX className="w-3.5 h-3.5 text-amber-400" />
                ) : (
                  <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
                )}
                <span>{isMuted ? "음소거 중" : "사운드 ON"}</span>
              </button>

              <button
                onClick={handleSkip}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 hover:text-white border border-cyan-500/40 text-xs font-semibold tracking-wider uppercase transition cursor-pointer"
              >
                <span>SKIP (입장하기)</span>
                <FastForward className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 하단 진행 프로그레스 바 */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-900">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500 transition-all duration-100 ease-out glow-cyan"
              style={{ width: `${progress}%` }}
            />
          </div>
        </>
      )}

      {/* 4. 도착 환영 시퀀스 (영상 마지막 프레임과 메인 로비의 자연스러운 연결) */}
      {phase === "arrived" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/70 backdrop-blur-sm z-20 animate-fade-in text-center px-4">
          <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center mb-4 glow-cyan">
            <Sparkles className="w-8 h-8 text-cyan-400 animate-pulse" />
          </div>
          <span className="text-xs font-mono tracking-[0.3em] text-cyan-400 uppercase mb-2">
            PORTAL DOCKING COMPLETE
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-2">
            FUTURE FISCAL MUSEUM
          </h2>
          <p className="text-slate-300 text-sm md:text-base">
            재정미래박물관 메인 로비에 도착하셨습니다.
          </p>
        </div>
      )}
    </div>
  );
};

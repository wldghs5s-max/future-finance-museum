import { useState, useEffect, useRef, useCallback } from "react";
import { SpatialZoneId } from "../types/spatial";
import { MAX_WORLD_Z, zoneInfoForCamera } from "../data/spaceLayout";

export interface LocomotionOptions {
  maxWorldZ?: number;
  dampingFactor?: number;
  scrollSensitivity?: number;
  paused?: boolean;
}

export interface LocomotionState {
  cameraZ: number;
  targetZ: number;
  progress: number;
  currentZoneId: SpatialZoneId;
  currentZoneNameKo: string;
  currentZoneNameEn: string;
  isWalking: boolean;
  lookRotateY: number; // 마우스 좌우 시선 회전 (deg)
  lookRotateX: number; // 마우스 상하 시선 회전 (deg)
  lookTranslateX: number; // 마우스 미세 수평 이동 (px)
  lookTranslateY: number; // 마우스 미세 수직 이동 (px)
  jumpTo: (z: number) => void;
  warpTo: (z: number, durationMs?: number) => void;
  warping: boolean;
}

export const LOBBY_WARP_MS = 720;

function easeInCubic(t: number) {
  return t * t * t;
}

// 지도 12개 구역 + 입장 오프닝. 월드 깊이는 spaceLayout.MAX_WORLD_Z
export const DEFAULT_MAX_WORLD_Z = MAX_WORLD_Z;

export function useMuseumLocomotion(
  options?: LocomotionOptions,
): LocomotionState {
  const maxZ = options?.maxWorldZ ?? DEFAULT_MAX_WORLD_Z;
  const damping = options?.dampingFactor ?? 0.08; // 부드러운 LERP 관성 감속 계수
  const sensitivity = options?.scrollSensitivity ?? 0.85; // 휠 감도

  const [cameraZ, setCameraZ] = useState(0);
  const targetZRef = useRef(0);
  const cameraZRef = useRef(0);
  const warpRef = useRef<{
    from: number;
    surge: number;
    land: number;
    start: number;
    duration: number;
  } | null>(null);
  const [warping, setWarping] = useState(false);
  const [isWalking, setIsWalking] = useState(false);
  const walkTimeoutRef = useRef<number | null>(null);

  // 마우스 시선 추적: 마우스가 향하는 방향을 자연스럽게 응시하도록 설정
  const targetMouseXRef = useRef(0); // -0.5 (좌측 끝) ~ +0.5 (우측 끝)
  const targetMouseYRef = useRef(0); // -0.5 (상단 끝) ~ +0.5 (하단 끝)
  const mouseXRef = useRef(0);
  const mouseYRef = useRef(0);
  const [lookState, setLookState] = useState({
    lookRotateY: 0,
    lookRotateX: 0,
    lookTranslateX: 0,
    lookTranslateY: 0,
  });

  const getZoneInfo = (z: number) => zoneInfoForCamera(z);

  const markWalking = useCallback(() => {
    setIsWalking(true);
    if (walkTimeoutRef.current) {
      window.clearTimeout(walkTimeoutRef.current);
    }
    walkTimeoutRef.current = window.setTimeout(() => {
      setIsWalking(false);
    }, 200);
  }, []);

  const resetLook = useCallback(() => {
    targetMouseXRef.current = 0;
    targetMouseYRef.current = 0;
    mouseXRef.current = 0;
    mouseYRef.current = 0;
    setLookState({
      lookRotateY: 0,
      lookRotateX: 0,
      lookTranslateX: 0,
      lookTranslateY: 0,
    });
  }, []);

  // 순간 이동 (도면 점프 등)
  const jumpTo = useCallback(
    (z: number) => {
      const clamped = Math.max(0, Math.min(z, maxZ));
      warpRef.current = null;
      setWarping(false);
      targetZRef.current = clamped;
      cameraZRef.current = clamped;
      setCameraZ(clamped);
      resetLook();
      markWalking();
    },
    [maxZ, markWalking, resetLook],
  );

  // 로비 워프: 후진하지 않고 앞으로 가속한 뒤 정문으로 이어진다
  const warpTo = useCallback(
    (z: number, durationMs = LOBBY_WARP_MS) => {
      const land = Math.max(0, Math.min(z, maxZ));
      const from = cameraZRef.current;
      resetLook();
      if (Math.abs(from - land) < 2) {
        warpRef.current = null;
        setWarping(false);
        cameraZRef.current = land;
        targetZRef.current = land;
        setCameraZ(land);
        return;
      }
      const surge = from + Math.max(2600, maxZ - from + 1400);
      warpRef.current = {
        from,
        surge,
        land,
        start: performance.now(),
        duration: Math.max(160, durationMs),
      };
      setWarping(true);
      markWalking();
    },
    [maxZ, markWalking, resetLook],
  );

  const isPaused = options?.paused ?? false;

  // 마우스 이동, 휠, 키보드 이벤트 리스너
  useEffect(() => {
    // 1. 마우스 휠 리스너 (위=전진, 아래=후진. 게임/상세 내부 스크롤은 paused에서 통과)
    const handleWheel = (e: WheelEvent) => {
      // 모달/시뮬레이션 모드 활성화 시 보행 스크롤 중지 및 내부 컨텐츠 자연 스크롤 허용
      if (isPaused) return;
      if (warpRef.current) {
        e.preventDefault();
        return;
      }

      e.preventDefault();
      const delta = -e.deltaY * sensitivity;
      targetZRef.current = Math.max(
        0,
        Math.min(targetZRef.current + delta, maxZ),
      );
      markWalking();
    };

    // 2. 마우스 커서 위치 리스너 (마우스 커서 방향을 따라 직관적으로 고개 돌리기)
    const handleMouseMove = (e: MouseEvent) => {
      if (isPaused || warpRef.current) return;
      const normX = e.clientX / window.innerWidth - 0.5; // -0.5 ~ +0.5
      const normY = e.clientY / window.innerHeight - 0.5; // -0.5 ~ +0.5
      targetMouseXRef.current = normX;
      targetMouseYRef.current = normY;
    };

    // 3. 키보드 방향키 리스너
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isPaused || warpRef.current) return;
      let delta = 0;
      if (e.key === "ArrowDown" || e.key === " " || e.key === "PageDown") {
        delta = e.key === "PageDown" ? 600 : 150;
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        delta = e.key === "PageUp" ? -600 : -150;
      }

      if (delta !== 0) {
        e.preventDefault();
        targetZRef.current = Math.max(
          0,
          Math.min(targetZRef.current + delta, maxZ),
        );
        markWalking();
      }
    };

    // 4. 모바일 터치 스와이프 리스너
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      if (isPaused || warpRef.current) return;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isPaused || warpRef.current) return;
      const currentY = e.touches[0].clientY;
      const deltaY = (touchStartY - currentY) * 1.5;
      touchStartY = currentY;
      targetZRef.current = Math.max(
        0,
        Math.min(targetZRef.current + deltaY, maxZ),
      );
      markWalking();
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      if (walkTimeoutRef.current) {
        window.clearTimeout(walkTimeoutRef.current);
      }
    };
  }, [sensitivity, maxZ, markWalking, isPaused]);

  // LERP 렌더 루프
  useEffect(() => {
    let animId: number;

    const tick = () => {
      const warp = warpRef.current;
      if (warp) {
        const t = Math.min(1, (performance.now() - warp.start) / warp.duration);
        const wrapAt = 0.82;
        let next: number;
        if (t < wrapAt) {
          next = warp.from + (warp.surge - warp.from) * easeInCubic(t / wrapAt);
          targetZRef.current = warp.surge;
        } else {
          next = warp.land;
          targetZRef.current = warp.land;
        }
        cameraZRef.current = next;
        setCameraZ(next);
        if (t >= 1) {
          cameraZRef.current = warp.land;
          targetZRef.current = warp.land;
          setCameraZ(warp.land);
          warpRef.current = null;
          setWarping(false);
        }
      } else {
        const diffZ = targetZRef.current - cameraZRef.current;
        if (Math.abs(diffZ) > 0.05) {
          cameraZRef.current += diffZ * damping;
          setCameraZ(cameraZRef.current);
        }
      }

      // 2. 마우스 시선 LERP
      // [사용자 요청 반영]: 카메라의 위치 이동(strafing)을 완전히 배제하고,
      // 걸어가면서 가볍게 좌우를 둘러보는 정도의 자연스러운 카메라 방향 회전(Orientation/Direction)만 제공
      const diffX = targetMouseXRef.current - mouseXRef.current;
      const diffY = targetMouseYRef.current - mouseYRef.current;
      if (Math.abs(diffX) > 0.001 || Math.abs(diffY) > 0.001) {
        mouseXRef.current += diffX * 0.06;
        mouseYRef.current += diffY * 0.06;

        const curX = mouseXRef.current; // -0.5 ~ +0.5
        const curY = mouseYRef.current; // -0.5 ~ +0.5

        setLookState({
          lookRotateY: curX * 4.5, // 최대 ±2.25도: 과하지 않고 편안한 좌우 둘러보기 시야
          lookRotateX: curY * -1.8, // 최대 ±0.9도: 미세한 상하 안정 시선
          lookTranslateX: 0, // 카메라 위치 자체 변동 완전 제거
          lookTranslateY: 0, // 카메라 위치 자체 변동 완전 제거
        });
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [damping]);

  const zoneInfo = getZoneInfo(cameraZ);
  const progress = Math.min(Math.max(cameraZ, 0) / maxZ, 1);

  return {
    cameraZ,
    targetZ: targetZRef.current,
    progress,
    currentZoneId: zoneInfo.id,
    currentZoneNameKo: zoneInfo.nameKo,
    currentZoneNameEn: zoneInfo.nameEn,
    isWalking,
    lookRotateY: lookState.lookRotateY,
    lookRotateX: lookState.lookRotateX,
    lookTranslateX: lookState.lookTranslateX,
    lookTranslateY: lookState.lookTranslateY,
    jumpTo,
    warpTo,
    warping,
  };
}

import { useState, useEffect, useRef, useCallback } from "react";
import { SpatialZoneId } from "../types/spatial";

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
}

// 전체 14개 주요 공간 총 월드 깊이: 26,500px
export const DEFAULT_MAX_WORLD_Z = 26500;

export function useMuseumLocomotion(
  options?: LocomotionOptions,
): LocomotionState {
  const maxZ = options?.maxWorldZ ?? DEFAULT_MAX_WORLD_Z;
  const damping = options?.dampingFactor ?? 0.08; // 부드러운 LERP 관성 감속 계수
  const sensitivity = options?.scrollSensitivity ?? 0.85; // 휠 감도

  const [cameraZ, setCameraZ] = useState(0);
  const targetZRef = useRef(0);
  const cameraZRef = useRef(0);
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

  // 14개 주요 공간 구역 판별 로직 (Z 좌표 기준)
  const getZoneInfo = (
    z: number,
  ): { id: SpatialZoneId; nameKo: string; nameEn: string } => {
    if (z < 600) {
      return {
        id: "lobby",
        nameKo: "박물관 정문 입구",
        nameEn: "MUSEUM ENTRANCE",
      };
    } else if (z < 2200) {
      return {
        id: "lobby",
        nameKo: "재정미래관 중앙 로비",
        nameEn: "GRAND LOBBY",
      };
    } else if (z < 4800) {
      return {
        id: "hall_01",
        nameKo: "HALL 01: 인구변화 전시장",
        nameEn: "HALL 01: DEMOGRAPHY",
      };
    } else if (z < 6000) {
      return {
        id: "corridor_01",
        nameKo: "세대·복지 회랑 (복도 01)",
        nameEn: "CORRIDOR 01: WELFARE TRANSIT",
      };
    } else if (z < 8800) {
      return {
        id: "hall_02",
        nameKo: "HALL 02: 복지 및 연금 전시장",
        nameEn: "HALL 02: WELFARE & PENSION",
      };
    } else if (z < 10000) {
      return {
        id: "corridor_02",
        nameKo: "기후 회랑 (복도 02)",
        nameEn: "CORRIDOR 02: CLIMATE TRANSIT",
      };
    } else if (z < 12800) {
      return {
        id: "hall_03",
        nameKo: "HALL 03: 환경 문제 전시장",
        nameEn: "HALL 03: ENVIRONMENT & CLIMATE",
      };
    } else if (z < 14000) {
      return {
        id: "corridor_03",
        nameKo: "AI 회랑 (복도 03)",
        nameEn: "CORRIDOR 03: AI TRANSIT",
      };
    } else if (z < 16800) {
      return {
        id: "hall_04",
        nameKo: "HALL 04: AI 기술 전시장",
        nameEn: "HALL 04: AI & FUTURE LABOR",
      };
    } else if (z < 18000) {
      return {
        id: "corridor_04",
        nameKo: "악어의 입 회랑 (복도 04)",
        nameEn: "CORRIDOR 04: FISCAL TRAJECTORY",
      };
    } else if (z < 20800) {
      return {
        id: "hall_05",
        nameKo: "HALL 05: 장기 재정 전망관",
        nameEn: "HALL 05: FISCAL OUTLOOK",
      };
    } else if (z < 22000) {
      return {
        id: "corridor_05",
        nameKo: "시뮬레이션 게이트 회랑 (복도 05)",
        nameEn: "CORRIDOR 05: LAB ACCESS",
      };
    } else if (z < 25200) {
      return {
        id: "hall_06",
        nameKo: "HALL 06: 재정 시뮬레이션관 (나라살림게임 랩)",
        nameEn: "HALL 06: FISCAL LAB",
      };
    } else {
      return {
        id: "exit",
        nameKo: "전시 관람 종료 라운지",
        nameEn: "MUSEUM EXIT & SUMMARY",
      };
    }
  };

  const markWalking = useCallback(() => {
    setIsWalking(true);
    if (walkTimeoutRef.current) {
      window.clearTimeout(walkTimeoutRef.current);
    }
    walkTimeoutRef.current = window.setTimeout(() => {
      setIsWalking(false);
    }, 200);
  }, []);

  // 순간 이동 (도면 점프 등)
  const jumpTo = useCallback(
    (z: number) => {
      const clamped = Math.max(0, Math.min(z, maxZ));
      targetZRef.current = clamped;
      markWalking();
    },
    [maxZ, markWalking],
  );

  const isPaused = options?.paused ?? false;

  // 마우스 이동, 휠, 키보드 이벤트 리스너
  useEffect(() => {
    // 1. 마우스 휠 리스너 (전진/후진 스크롤)
    const handleWheel = (e: WheelEvent) => {
      // 모달/시뮬레이션 모드 활성화 시 보행 스크롤 중지 및 내부 컨텐츠 자연 스크롤 허용
      if (isPaused) return;

      e.preventDefault();
      const delta = e.deltaY * sensitivity;
      targetZRef.current = Math.max(
        0,
        Math.min(targetZRef.current + delta, maxZ),
      );
      markWalking();
    };

    // 2. 마우스 커서 위치 리스너 (마우스 커서 방향을 따라 직관적으로 고개 돌리기)
    const handleMouseMove = (e: MouseEvent) => {
      if (isPaused) return;
      const normX = e.clientX / window.innerWidth - 0.5; // -0.5 ~ +0.5
      const normY = e.clientY / window.innerHeight - 0.5; // -0.5 ~ +0.5
      targetMouseXRef.current = normX;
      targetMouseYRef.current = normY;
    };

    // 3. 키보드 방향키 리스너
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isPaused) return;
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
      if (isPaused) return;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isPaused) return;
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
      // 1. Z축 전진/후진 보행 LERP
      const diffZ = targetZRef.current - cameraZRef.current;
      if (Math.abs(diffZ) > 0.05) {
        cameraZRef.current += diffZ * damping;
        setCameraZ(cameraZRef.current);
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
  const progress = Math.min(cameraZ / maxZ, 1);

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
  };
}

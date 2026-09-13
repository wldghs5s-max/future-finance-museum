import React from 'react';
import { Search } from 'lucide-react';

interface SpatialExhibitContainerProps {
  x: number; // 좌우 위치 (음수: 좌측, 양수: 우측, 0: 중앙)
  y?: number; // 상하 높이 (음수: 천장 쪽, 양수: 바닥 쪽, 기본값: 0 눈높이)
  z: number; // 월드 Z 깊이 (음수 값, 예: -1500px)
  rotateY?: number; // Y축 회전 각도 (벽면 각도 조절)
  rotateX?: number; // X축 회전 각도 (바닥/천장 눕힘 등)
  cameraZ: number; // 현재 카메라 Z 좌표
  width?: number | string; // 요소 너비
  title?: string; // 전시물 제목
  exhibitCode?: string; // 전시물 코드 (EXHIBIT 1-A 등)
  onInspect?: () => void; // 클릭 시 현장 상세 관람 모달/드로어 오픈
  children: React.ReactNode;
  className?: string;
}

export const SpatialExhibitContainer: React.FC<SpatialExhibitContainerProps> = ({
  x,
  y = 0,
  z,
  rotateY = 0,
  rotateX = 0,
  cameraZ,
  width = 440,
  title,
  exhibitCode,
  onInspect,
  children,
  className = '',
}) => {
  // 카메라와의 상대 거리 (relZ가 0일 때 카메라와 동일한 Z선상)
  const relZ = z + cameraZ;

  // 1. 카메라 뒤로 충분히 통과한 경우 컬링 (380px까지 자연스럽게 시야 주변을 스쳐 지나침)
  if (relZ > 380) {
    return null;
  }

  // 2. 거리에 따른 박물관 대기 안개(Fog) 및 카메라 통과(Pass-by) 자연 감쇄
  let opacity = 1;
  if (relZ < -3500) {
    opacity = 0;
  } else if (relZ < -1800) {
    // 원경에서 서서히 시야 진입
    opacity = Math.max(0.1, (3500 + relZ) / 1700);
  } else if (relZ > 80) {
    // 80px부터 380px까지 부드럽게 주변 시야 뒤로 페이드아웃
    opacity = Math.max(0, 1 - (relZ - 80) / 300);
  }

  // 3. 사용자가 마우스 스크롤로 지나쳐갈 때 (relZ > 0) 어깨 뒤/화면 양옆으로 미끄러져 빠져나가는 역동적 궤적
  // [복원 및 튜닝]: 좌측 전시물(x < 0)은 좌측 화면 바깥으로, 우측 전시물(x > 0)은 우측 바깥으로 시원하게 빠짐
  // 복도 전시물(절댓값 <= 350)은 벽을 뚫지 않도록 120px로 안전 제어, 넓은 홀 전시물(절댓값 > 350)은 200px로 시원하게 빠짐
  let lateralDriftX = 0;
  let lateralDriftRotY = 0;
  if (relZ > 0) {
    const passRatio = Math.min(relZ / 300, 1);
    const direction = x > 0 ? 1 : x < 0 ? -1 : 0;
    const maxDrift = Math.abs(x) > 350 ? 200 : 120;
    lateralDriftX = direction * passRatio * maxDrift;
    lateralDriftRotY = direction * passRatio * -12; // 시야 뒤로 젖혀지듯 회전
  }

  // 4. 관람객 초점 범위 (상세 관람 가능 영역: 다가오는 -1600px부터 통과 직후 60px까지)
  const canInspect = Boolean(onInspect) && relZ >= -1600 && relZ <= 60;
  const isFocusRange = relZ >= -700 && relZ <= 30;

  const finalX = x + lateralDriftX;
  const finalRotY = rotateY + lateralDriftRotY;

  return (
    <div
      aria-label={title || exhibitCode || '전시물 설치 영역'}
      data-exhibit-code={exhibitCode}
      onClick={() => {
        if (canInspect && onInspect) {
          onInspect();
        }
      }}
      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 preserve-3d transition-opacity duration-300 ${
        canInspect ? 'cursor-pointer' : ''
      } ${className}`}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        transform: `translate3d(${finalX}px, ${y}px, ${z}px) rotateY(${finalRotY}deg) rotateX(${rotateX}deg)`,
        opacity,
        pointerEvents: opacity < 0.15 || relZ > 90 ? 'none' : 'auto',
      }}
    >
      {/* 전시물 실물 렌더링 컨테이너 */}
      <div className="relative group">
        {/* 전시물 카드 본체 (마우스 호버 시 입체 반응 및 하이라이트) */}
        <div
          className={`transition-all duration-300 ${
            canInspect
              ? 'group-hover:scale-[1.02] group-hover:shadow-[0_0_35px_rgba(0,240,255,0.35)] group-hover:border-cyan-400/80'
              : ''
          }`}
        >
          {children}
        </div>

        {/* 상시/초점 범위 안내 배지: 클릭 시 상세보기 안내 */}
        {canInspect && (
          <div
            className={`absolute -bottom-9 left-1/2 -translate-x-1/2 z-30 transition-all duration-300 ${
              isFocusRange
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 scale-95 group-hover:scale-100'
            }`}
          >
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-[11px] font-mono font-bold shadow-lg shadow-cyan-500/40 transition">
              <Search className="w-3.5 h-3.5" />
              <span>클릭하여 상세 관람</span>
            </div>
          </div>
        )}

        {/* 전시물 상단 핀 조명 헤일로 */}
        {isFocusRange && (
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-36 h-1 bg-cyan-400/90 rounded-full blur-[2px] shadow-[0_0_25px_#00f0ff]" />
        )}
      </div>
    </div>
  );
};

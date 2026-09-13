import { useState } from "react";
import { SpatialZoneId } from "./types/spatial";
import { PortalIntro } from "./components/intro/PortalIntro";
import { MuseumMinimalHUD } from "./components/spatial/MuseumMinimalHUD";
import {
  MuseumMapModal,
  ZONE_CAMERA_Z_MAP,
} from "./components/spatial/MuseumMapModal";
import { GlossaryModal } from "./components/common/GlossaryModal";
import { MuseumViewport } from "./components/walkthrough/MuseumViewport";
import {
  ExhibitDetailDrawer,
  ExhibitDetailData,
} from "./components/walkthrough/ExhibitDetailDrawer";
import { EXHIBIT_DETAILS_MAP } from "./data/walkthroughData";
import { useMuseumLocomotion } from "./hooks/useMuseumLocomotion";
import { FiscalSimulationModal } from "./components/simulation/FiscalSimulationModal";
import {
  OFFICIAL_PRESETS,
  computeSimulationResult,
} from "./data/simulationData";

export function App() {
  // 포탈 오프닝 영상 활성화 상태
  const [isIntroActive, setIsIntroActive] = useState(true);

  // MUSEUM MAP 도면 모달 상태
  const [isMapOpen, setIsMapOpen] = useState(false);

  // 재정 용어사전 모달 상태
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);

  // 현장 상세 관람 드로어 상태 (선택된 전시물 데이터)
  const [selectedExhibit, setSelectedExhibit] =
    useState<ExhibitDetailData | null>(null);

  // 방문 구역 추적
  const [visitedZones, setVisitedZones] = useState<Set<SpatialZoneId>>(
    new Set(["lobby"]),
  );

  // ==========================================================
  // 시뮬레이션 콘솔 상태 (Hall 06 3D 키오스크 & 전용 모달 동기화)
  // ==========================================================
  const [isSimulationModalOpen, setIsSimulationModalOpen] = useState(false);
  const [selectedPolicies, setSelectedPolicies] = useState<Set<string>>(
    new Set(OFFICIAL_PRESETS.defense_2.policies),
  );

  const simulationResult = computeSimulationResult(selectedPolicies);

  const handleTogglePolicy = (id: string) => {
    setSelectedPolicies((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleApplyPreset = (presetKey: string) => {
    const preset = OFFICIAL_PRESETS[presetKey];
    if (preset) {
      setSelectedPolicies(new Set(preset.policies));
    }
  };

  const handleClearAllPolicies = () => {
    setSelectedPolicies(new Set());
  };

  // 모달 또는 드로어가 열려 있을 때는 보행 스크롤을 일시 중지하여 내부 컨텐츠 조작 편의성 극대화
  const isLocomotionPaused =
    isSimulationModalOpen ||
    isMapOpen ||
    isGlossaryOpen ||
    selectedExhibit !== null;

  // 연속 2.5D 레일 보행 훅 (카메라 Z 이동, LERP 관성, 직관적인 마우스 시선 둘러보기 연동)
  const {
    cameraZ,
    progress,
    currentZoneId,
    currentZoneNameKo,
    currentZoneNameEn,
    lookRotateY,
    lookRotateX,
    jumpTo,
  } = useMuseumLocomotion({
    maxWorldZ: 26500,
    dampingFactor: 0.08, // 부드러운 보행 감속
    scrollSensitivity: 0.9, // 휠/트랙패드 감도
    paused: isLocomotionPaused,
  });

  // 포탈 입장 완료 시 카메라를 박물관 입구에 배치
  const handleEnterMuseum = () => {
    setIsIntroActive(false);
    jumpTo(80); // 입구 바로 앞
  };

  // 포탈 영상 다시보기
  const handleReplayPortal = () => {
    setIsIntroActive(true);
  };

  // 도면에서 구역 선택 시 해당 카메라 위치로 도약
  const handleSelectMapZone = (zoneId: SpatialZoneId) => {
    const targetZ = ZONE_CAMERA_Z_MAP[zoneId];
    if (targetZ !== undefined) {
      jumpTo(targetZ);
      setVisitedZones((prev) => new Set([...prev, zoneId]));
    }
  };

  // 전시물 현장 상세 관람 열기
  const handleInspectExhibit = (exhibitId: string) => {
    const detail = EXHIBIT_DETAILS_MAP[exhibitId];
    if (detail) {
      setSelectedExhibit(detail);
    }
  };

  return (
    <div className="min-h-screen bg-[#030611] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black overflow-hidden select-none">
      {/* 1. 미래포탈 오프닝 시퀀스 */}
      {isIntroActive && <PortalIntro onEnterMuseum={handleEnterMuseum} />}

      {/* 2. 연속 2.5D 공간 보행 박물관 엔진 (단일 3D 좌표계 월드) */}
      {!isIntroActive && (
        <>
          {/* 상단 미니멀 관람 HUD (앞으로가기 버튼 전면 제거, 공간명 및 진행도 유지) */}
          <MuseumMinimalHUD
            currentZoneNameKo={currentZoneNameKo}
            currentZoneNameEn={currentZoneNameEn}
            progress={progress}
            onOpenMap={() => setIsMapOpen(true)}
            onOpenGlossary={() => setIsGlossaryOpen(true)}
            onReplayPortal={handleReplayPortal}
          />

          {/* 메인 2.5D 뷰포트 (마우스 휠 스크롤 전진/후진 + 마우스 시선 둘러보기) */}
          <MuseumViewport
            cameraZ={cameraZ}
            lookRotateY={lookRotateY}
            lookRotateX={lookRotateX}
            onInspectExhibit={handleInspectExhibit}
            selectedPolicies={selectedPolicies}
            simulationResult={simulationResult}
            onOpenSimulationModal={() => setIsSimulationModalOpen(true)}
          />

          {/* 전용 재정 정책 시뮬레이션 콘솔 조작 모달 (스크롤 충돌 완전 해결 및 직관적 조작 제공) */}
          <FiscalSimulationModal
            isOpen={isSimulationModalOpen}
            onClose={() => setIsSimulationModalOpen(false)}
            selectedPolicies={selectedPolicies}
            onTogglePolicy={handleTogglePolicy}
            onApplyPreset={handleApplyPreset}
            onClearAll={handleClearAllPolicies}
            simulationResult={simulationResult}
          />

          {/* 전시물 클릭 시 현장에서 상세 수치를 확인하는 박물관 캡션 디테일 드로어 (페이지 전환 없음) */}
          <ExhibitDetailDrawer
            data={selectedExhibit}
            onClose={() => setSelectedExhibit(null)}
          />

          {/* 전체 박물관 도면 모달 (MUSEUM MAP & 카메라 도약) */}
          <MuseumMapModal
            isOpen={isMapOpen}
            currentZone={currentZoneId}
            visitedZones={visitedZones}
            onClose={() => setIsMapOpen(false)}
            onSelectZone={handleSelectMapZone}
          />

          {/* 핵심 재정 용어사전 모달 */}
          <GlossaryModal
            isOpen={isGlossaryOpen}
            onClose={() => setIsGlossaryOpen(false)}
          />
        </>
      )}
    </div>
  );
}

export default App;

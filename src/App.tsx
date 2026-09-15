import { useEffect, useState } from "react";
import { SpatialZoneId } from "./types/spatial";
import { PortalIntro } from "./components/intro/PortalIntro";
import { MuseumMinimalHUD } from "./components/spatial/MuseumMinimalHUD";
import {
  MuseumMapModal,
  ZONE_CAMERA_Z_MAP,
} from "./components/spatial/MuseumMapModal";
import { GlossaryModal } from "./components/common/GlossaryModal";
import { MuseumViewport } from "./components/walkthrough/MuseumViewport";
import { ExhibitDetailDrawer } from "./components/walkthrough/ExhibitDetailDrawer";
import { EXHIBIT_DETAILS_MAP } from "./data/walkthroughData";
import { useMuseumLocomotion } from "./hooks/useMuseumLocomotion";
import { CivicLabGame } from "./components/simulation/CivicLabGame";
import { MUSEUM_SPACE_GUIDE } from "./types/exhibit";
import { MAX_WORLD_Z } from "./data/spaceLayout";

export function App() {
  const [isIntroActive, setIsIntroActive] = useState(true);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);
  const [glossaryTermId, setGlossaryTermId] = useState<string | null>(null);
  const [glossarySession, setGlossarySession] = useState(0);
  const [selectedExhibitId, setSelectedExhibitId] = useState<string | null>(null);
  const [focusDirectionId, setFocusDirectionId] = useState<string | null>(null);
  const [visitedZones, setVisitedZones] = useState<Set<SpatialZoneId>>(
    new Set(["lobby"]),
  );
  const [inspectedExhibits, setInspectedExhibits] = useState<Set<string>>(
    new Set(),
  );
  const [isSimulationModalOpen, setIsSimulationModalOpen] = useState(false);
  const selectedExhibit = selectedExhibitId
    ? EXHIBIT_DETAILS_MAP[selectedExhibitId] ?? null
    : null;

  const isLocomotionPaused =
    isSimulationModalOpen ||
    isMapOpen ||
    isGlossaryOpen ||
    selectedExhibit !== null;

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
    maxWorldZ: MAX_WORLD_Z,
    dampingFactor: 0.08,
    scrollSensitivity: 0.9,
    paused: isLocomotionPaused,
  });

  useEffect(() => {
    setVisitedZones((prev) => {
      if (prev.has(currentZoneId)) return prev;
      return new Set([...prev, currentZoneId]);
    });
  }, [currentZoneId]);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const exhibit = query.get("exhibit");
    const openGame = query.has("game");
    if (query.has("skipIntro") || exhibit || openGame) {
      setIsIntroActive(false);
    }
    const cameraStart = Number(query.get("z"));
    if (Number.isFinite(cameraStart) && cameraStart >= 0) {
      jumpTo(cameraStart);
    } else if (query.has("skipIntro")) {
      jumpTo(80);
    }
    if (exhibit && EXHIBIT_DETAILS_MAP[exhibit]) {
      setSelectedExhibitId(exhibit);
    }
    if (openGame) setIsSimulationModalOpen(true);
  }, []);

  const handleEnterMuseum = () => {
    setIsIntroActive(false);
    jumpTo(80);
  };

  const handleSelectMapZone = (zoneId: SpatialZoneId) => {
    const targetZ = ZONE_CAMERA_Z_MAP[zoneId];
    if (targetZ !== undefined) {
      jumpTo(targetZ);
      setVisitedZones((prev) => new Set([...prev, zoneId]));
    }
  };

  const handleInspectExhibit = (exhibitId: string, directionId?: string) => {
    if (exhibitId === "exhibit_lobby_monument") return;
    if (!EXHIBIT_DETAILS_MAP[exhibitId]) return;
    setSelectedExhibitId(exhibitId);
    setFocusDirectionId(directionId ?? null);
    setInspectedExhibits((prev) => new Set([...prev, exhibitId]));
  };

  const openTerm = (termId: string) => {
    setGlossaryTermId(termId);
    setGlossarySession((n) => n + 1);
    setIsGlossaryOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#07111f] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black overflow-hidden select-none">
      {isIntroActive && <PortalIntro onEnterMuseum={handleEnterMuseum} />}

      {!isIntroActive && (
        <>
          <MuseumMinimalHUD
            currentZoneNameKo={currentZoneNameKo}
            currentZoneNameEn={currentZoneNameEn}
            progress={progress}
            visitedCount={visitedZones.size}
            inspectedCount={inspectedExhibits.size}
            onOpenMap={() => setIsMapOpen(true)}
            onOpenGlossary={() => {
              setGlossaryTermId(null);
              setGlossarySession((n) => n + 1);
              setIsGlossaryOpen(true);
            }}
            onReplayPortal={() => setIsIntroActive(true)}
          />

          <MuseumViewport
            cameraZ={cameraZ}
            lookRotateY={lookRotateY}
            lookRotateX={lookRotateX}
            onInspectExhibit={handleInspectExhibit}
            onOpenSimulationModal={() => setIsSimulationModalOpen(true)}
          />

          <CivicLabGame
            isOpen={isSimulationModalOpen}
            onClose={() => setIsSimulationModalOpen(false)}
            onBrowseHalls={() => {
              setIsSimulationModalOpen(false);
              setIsMapOpen(true);
            }}
          />

          <ExhibitDetailDrawer
            data={selectedExhibit}
            focusDirectionId={focusDirectionId}
            onClose={() => {
              setSelectedExhibitId(null);
              setFocusDirectionId(null);
            }}
            onOpenTerm={openTerm}
            onOpenExhibit={handleInspectExhibit}
          />

          <MuseumMapModal
            isOpen={isMapOpen}
            currentZone={currentZoneId}
            visitedZones={visitedZones}
            inspectedCount={inspectedExhibits.size}
            progress={progress}
            onClose={() => setIsMapOpen(false)}
            onSelectZone={handleSelectMapZone}
          />

          <GlossaryModal
            key={glossarySession}
            isOpen={isGlossaryOpen}
            onClose={() => setIsGlossaryOpen(false)}
            initialTermId={glossaryTermId}
          />

          <div className="fixed bottom-3 left-4 z-30 pointer-events-none max-w-sm text-[10px] text-slate-500 hidden md:block">
            {MUSEUM_SPACE_GUIDE.civicNote}
          </div>
        </>
      )}
    </div>
  );
}

export default App;

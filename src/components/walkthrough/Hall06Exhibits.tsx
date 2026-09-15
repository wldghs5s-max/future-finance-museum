import React from "react";
import { DataExhibit } from "./DataExhibit";
import { GameEntrance } from "./GameEntrance";

interface Hall06ExhibitsProps {
  cameraZ: number;
  onInspect: (exhibitId: string) => void;
  onOpenSimulationModal: () => void;
}

export const Hall06Exhibits: React.FC<Hall06ExhibitsProps> = ({
  cameraZ,
  onInspect,
  onOpenSimulationModal,
}) => (
  <>
    <DataExhibit id="exhibit_6a" cameraZ={cameraZ} onInspect={onInspect} accent="cyan" metricCount={3} />
    <DataExhibit id="exhibit_6b" cameraZ={cameraZ} onInspect={onInspect} accent="amber" metricCount={3} />
    <GameEntrance cameraZ={cameraZ} onStart={onOpenSimulationModal} />
    <DataExhibit id="exhibit_6d" cameraZ={cameraZ} onInspect={onInspect} accent="sky" metricCount={2} />
  </>
);

import React from "react";
import { DataExhibit } from "./DataExhibit";
import { HallChoicesBoard } from "./HallChoicesBoard";

interface Hall03ExhibitsProps {
  cameraZ: number;
  onInspect: (exhibitId: string, directionId?: string) => void;
}

export const Hall03Exhibits: React.FC<Hall03ExhibitsProps> = ({
  cameraZ,
  onInspect,
}) => (
  <>
    <DataExhibit id="exhibit_3d" cameraZ={cameraZ} onInspect={onInspect} accent="emerald" />
    <DataExhibit id="exhibit_3a" cameraZ={cameraZ} onInspect={onInspect} accent="sky" metricCount={2} />
    <DataExhibit id="exhibit_3b" cameraZ={cameraZ} onInspect={onInspect} accent="cyan" metricCount={2} />
    <DataExhibit id="exhibit_3e" cameraZ={cameraZ} onInspect={onInspect} accent="emerald" />
    <DataExhibit id="exhibit_3f" cameraZ={cameraZ} onInspect={onInspect} accent="amber" />
    <DataExhibit id="exhibit_3c" cameraZ={cameraZ} onInspect={onInspect} accent="rose" />
    <DataExhibit id="exhibit_3h" cameraZ={cameraZ} onInspect={onInspect} accent="emerald" />
    <HallChoicesBoard id="exhibit_3_choices" cameraZ={cameraZ} onInspect={onInspect} />
  </>
);

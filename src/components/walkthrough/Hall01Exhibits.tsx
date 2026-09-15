import React from "react";
import { DataExhibit } from "./DataExhibit";
import { HallChoicesBoard } from "./HallChoicesBoard";

interface Hall01ExhibitsProps {
  cameraZ: number;
  onInspect: (exhibitId: string, directionId?: string) => void;
}

export const Hall01Exhibits: React.FC<Hall01ExhibitsProps> = ({
  cameraZ,
  onInspect,
}) => (
  <>
    <DataExhibit id="exhibit_1d" cameraZ={cameraZ} onInspect={onInspect} accent="rose" />
    <DataExhibit id="exhibit_1a" cameraZ={cameraZ} onInspect={onInspect} accent="sky" metricCount={4} />
    <DataExhibit id="exhibit_1b" cameraZ={cameraZ} onInspect={onInspect} accent="amber" />
    <DataExhibit id="exhibit_1e" cameraZ={cameraZ} onInspect={onInspect} accent="rose" />
    <DataExhibit id="exhibit_1f" cameraZ={cameraZ} onInspect={onInspect} accent="sky" metricCount={2} />
    <DataExhibit id="exhibit_1g" cameraZ={cameraZ} onInspect={onInspect} accent="amber" metricCount={2} />
    <DataExhibit id="exhibit_1c" cameraZ={cameraZ} onInspect={onInspect} accent="rose" />
    <DataExhibit id="exhibit_1h" cameraZ={cameraZ} onInspect={onInspect} accent="emerald" />
    <HallChoicesBoard id="exhibit_1_choices" cameraZ={cameraZ} onInspect={onInspect} />
  </>
);

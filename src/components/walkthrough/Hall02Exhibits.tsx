import React from "react";
import { DataExhibit } from "./DataExhibit";
import { HallChoicesBoard } from "./HallChoicesBoard";

interface Hall02ExhibitsProps {
  cameraZ: number;
  onInspect: (exhibitId: string, directionId?: string) => void;
}

export const Hall02Exhibits: React.FC<Hall02ExhibitsProps> = ({
  cameraZ,
  onInspect,
}) => (
  <>
    <DataExhibit id="exhibit_2d" cameraZ={cameraZ} onInspect={onInspect} accent="amber" />
    <DataExhibit id="exhibit_2a" cameraZ={cameraZ} onInspect={onInspect} accent="sky" />
    <DataExhibit id="exhibit_2b" cameraZ={cameraZ} onInspect={onInspect} accent="rose" />
    <DataExhibit id="exhibit_2f" cameraZ={cameraZ} onInspect={onInspect} accent="amber" />
    <DataExhibit id="exhibit_2e" cameraZ={cameraZ} onInspect={onInspect} accent="emerald" />
    <DataExhibit id="exhibit_2c" cameraZ={cameraZ} onInspect={onInspect} accent="sky" />
    <HallChoicesBoard id="exhibit_2_choices" cameraZ={cameraZ} onInspect={onInspect} />
  </>
);

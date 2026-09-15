import React from "react";
import { DataExhibit } from "./DataExhibit";
import { HallChoicesBoard } from "./HallChoicesBoard";

interface Hall05ExhibitsProps {
  cameraZ: number;
  onInspect: (exhibitId: string, directionId?: string) => void;
}

export const Hall05Exhibits: React.FC<Hall05ExhibitsProps> = ({
  cameraZ,
  onInspect,
}) => (
  <>
    <DataExhibit id="exhibit_5d" cameraZ={cameraZ} onInspect={onInspect} accent="rose" />
    <DataExhibit id="exhibit_5a" cameraZ={cameraZ} onInspect={onInspect} accent="sky" />
    <DataExhibit id="exhibit_5b" cameraZ={cameraZ} onInspect={onInspect} accent="amber" />
    <DataExhibit id="exhibit_5e" cameraZ={cameraZ} onInspect={onInspect} accent="cyan" />
    <DataExhibit id="exhibit_5c" cameraZ={cameraZ} onInspect={onInspect} accent="rose" />
    <DataExhibit id="exhibit_5f" cameraZ={cameraZ} onInspect={onInspect} accent="sky" />
    <HallChoicesBoard id="exhibit_5_choices" cameraZ={cameraZ} onInspect={onInspect} />
  </>
);

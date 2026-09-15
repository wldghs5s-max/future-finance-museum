import React from "react";
import { DataExhibit } from "./DataExhibit";
import { CorridorScene } from "./CorridorScene";
import { HallChoicesBoard } from "./HallChoicesBoard";

interface Hall04ExhibitsProps {
  cameraZ: number;
  onInspect: (exhibitId: string, directionId?: string) => void;
}

export const Hall04Exhibits: React.FC<Hall04ExhibitsProps> = ({
  cameraZ,
  onInspect,
}) => (
  <>
    <DataExhibit id="exhibit_4d" cameraZ={cameraZ} onInspect={onInspect} accent="violet" />
    <DataExhibit id="exhibit_4a" cameraZ={cameraZ} onInspect={onInspect} accent="cyan" />
    <DataExhibit id="exhibit_4b" cameraZ={cameraZ} onInspect={onInspect} accent="rose" />
    <DataExhibit id="exhibit_4e" cameraZ={cameraZ} onInspect={onInspect} accent="violet" />
    <DataExhibit id="exhibit_4f" cameraZ={cameraZ} onInspect={onInspect} accent="amber" />
    <DataExhibit id="exhibit_4c" cameraZ={cameraZ} onInspect={onInspect} accent="sky" />
    <DataExhibit id="exhibit_4h" cameraZ={cameraZ} onInspect={onInspect} accent="violet" />
    <HallChoicesBoard id="exhibit_4_choices" cameraZ={cameraZ} onInspect={onInspect} />
    <CorridorScene id="exhibit_corridor_04" cameraZ={cameraZ} />
  </>
);

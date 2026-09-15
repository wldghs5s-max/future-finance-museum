import React from "react";
import { DataExhibit } from "./DataExhibit";

interface GrandLobbyExhibitsProps {
  cameraZ: number;
  onInspect: (exhibitId: string) => void;
}

export const GrandLobbyExhibits: React.FC<GrandLobbyExhibitsProps> = ({
  cameraZ,
  onInspect,
}) => (
  <>
    <DataExhibit id="exhibit_lobby_intro" cameraZ={cameraZ} onInspect={onInspect} accent="cyan" metricCount={2} />
    <DataExhibit id="exhibit_lobby_directory" cameraZ={cameraZ} onInspect={onInspect} accent="amber" metricCount={2} />
  </>
);

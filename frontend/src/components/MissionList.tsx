import React from "react";
import { Mission } from "../types/mission";
import MissionItem from "./MissionItem";

interface Props {
    missions: Mission[];
    onDeleteMission: (id: number) => void;
}

const MissionList: React.FC<Props> = ({ missions, onDeleteMission }) => (
    <div>
        {missions.map(mission => (
            <MissionItem key={mission.id} mission={mission} onDelete={() => onDeleteMission(mission.id)} />
        ))}
    </div>
);

export default MissionList;

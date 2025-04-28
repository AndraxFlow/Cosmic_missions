import React from "react";
import { Mission } from "../types/mission";

interface Props {
    mission: Mission;
    onDelete: () => void;
}

const MissionItem: React.FC<Props> = ({ mission, onDelete }) => (
    <div>
        <h3>{mission.name}</h3>
        <p>Дата старта: {mission.startDate}</p>
        <p>Цель: {mission.goal}</p>
        <p>Экипаж: {mission.crew.join(", ")}</p>
        <button onClick={onDelete}>Удалить</button>
    </div>
);

export default MissionItem;

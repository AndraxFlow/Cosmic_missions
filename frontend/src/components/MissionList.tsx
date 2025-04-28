// components/MissionList.tsx
import React from 'react';
import MissionItem from './MissionItem';
import { Mission } from '../types/mission';

interface MissionListProps {
  missions: Mission[];
  onDeleteMission: (id: number) => Promise<void>;
}

const MissionList: React.FC<MissionListProps> = ({ missions, onDeleteMission }) => {
  return (
    <div>
      {missions.map((mission) => (
        <MissionItem
          key={mission.id}
          name={mission.name}
          date={mission.date}
          target={mission.target}
          onDelete={() => onDeleteMission(mission.id)} // Передаем функцию удаления
        />
      ))}
    </div>
  );
};

export default MissionList;

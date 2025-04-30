// src/components/MissionList.tsx
import React from 'react';
import MissionItem from './MissionItem';
import { Mission } from '../types/mission';

interface MissionListProps {
  missions: Mission[];
  onDeleteMission: (id: number) => Promise<void>;
  onUpdateStatus: (id: number) => void;
}

const MissionList: React.FC<MissionListProps> = ({ missions, onDeleteMission, onUpdateStatus }) => {
  return (
    <div>
      {missions.map((mission) => (
        <MissionItem
          key={mission.id}
          mission={mission}
          onDelete={() => onDeleteMission(mission.id)}
          onUpdateStatus={() => onUpdateStatus(mission.id)}
        />
      ))}
    </div>
  );
};

export default MissionList;

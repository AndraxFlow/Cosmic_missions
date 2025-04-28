// pages/ViewMissions.tsx
import React from 'react';
import MissionList from '../components/MissionList';
import { Mission } from '../types/mission';

interface ViewMissionsProps {
  missions: Mission[];
  onDeleteMission: (id: number) => Promise<void>;
}

const ViewMissions: React.FC<ViewMissionsProps> = ({ missions, onDeleteMission }) => {
  return (
    <div>
      <h1>Миссии</h1>
      <MissionList missions={missions} onDeleteMission={onDeleteMission} />
    </div>
  );
};

export default ViewMissions;

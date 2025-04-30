// src/pages/ViewMissions.tsx
import React from 'react';
import MissionList from '../components/MissionList';
import { Mission } from '../types/mission';

interface ViewMissionsProps {
  missions: Mission[];
  onDeleteMission: (id: number) => Promise<void>;
  onUpdateStatus: (id: number) => void;
}

const ViewMissions: React.FC<ViewMissionsProps> = ({ missions, onDeleteMission, onUpdateStatus }) => {
  return (
    <div>
      <h1>Просмотр миссий</h1>
      <MissionList
        missions={missions}
        onDeleteMission={onDeleteMission}
        onUpdateStatus={onUpdateStatus}
      />
    </div>
  );
};

export default ViewMissions;

// pages/CreateMission.tsx
import React from 'react';
import MissionForm from '../components/MissionForm';
import { Mission } from '../types/mission';

interface CreateMissionProps {
  onAddMission: (mission: Omit<Mission, 'id'>) => Promise<void>;
}

const CreateMission: React.FC<CreateMissionProps> = ({ onAddMission }) => {
  return (
    <div>
      <h1>Создать миссию</h1>
      <MissionForm onAddMission={onAddMission} />
    </div>
  );
};

export default CreateMission;

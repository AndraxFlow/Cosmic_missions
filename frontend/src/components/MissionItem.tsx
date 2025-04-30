// src/components/MissionItem.tsx
import React from 'react';
import { Mission } from '../types/mission';
import MissionStatus from './MissionStatus';

interface MissionItemProps {
  mission: Mission;
  onDelete: () => Promise<void>;
  onUpdateStatus: () => void;
}

const MissionItem: React.FC<MissionItemProps> = ({ mission, onDelete, onUpdateStatus }) => {
  return (
    <div style={missionItemStyle}>
      <h3>{mission.name}</h3>
      <p>Цель: {mission.target}</p>
      <p>Дата: {mission.date}</p>
      <MissionStatus status={mission.status} />
      <button onClick={onUpdateStatus}>Изменить статус</button>
      <button onClick={onDelete}>Удалить</button>
    </div>
  );
};

const missionItemStyle: React.CSSProperties = {
  padding: '20px',
  margin: '10px 0',
  backgroundColor: '#333',
  borderRadius: '8px',
  color: '#fff',
};

export default MissionItem;

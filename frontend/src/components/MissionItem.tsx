// src/components/MissionItem.tsx
import React, { useState } from 'react';
import { Mission } from '../types/mission';
import MissionStatus from './MissionStatus';
import './explosionButtonStyle/ExplosionButtonStyle.css';
interface MissionItemProps {
  mission: Mission;
  onDelete: () => Promise<void>;
  onUpdateStatus: () => void;
}

const MissionItem: React.FC<MissionItemProps> = ({ mission, onDelete, onUpdateStatus }) => {
  const [showExplosion, setShowExplosion] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleStatusClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount === 2) {
      setShowExplosion(true);
      setTimeout(() => {
        setShowExplosion(false);
        setClickCount(0);
      }, 1000); // длительность анимации
    }

    onUpdateStatus(); // вызываем обновление статуса
  };
  
  return (
    <div style={missionItemStyle}>
      <h3>{mission.name}</h3>
      <p>Цель: {mission.target}</p>
      <p>Дата: {mission.date}</p>
      <MissionStatus status={mission.status} />
      <button onClick={onUpdateStatus} onDoubleClick={handleStatusClick} className="explode-button">Изменить статус</button>
      {showExplosion && <div className="explosion" />}
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

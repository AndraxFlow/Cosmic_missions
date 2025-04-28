// components/MissionItem.tsx
import React from 'react';

interface MissionItemProps {
  name: string;
  date: string;
  target: string;
  onDelete: () => Promise<void>;
}

const MissionItem: React.FC<MissionItemProps> = ({ name, date, target, onDelete }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{target}</p>
      <button onClick={onDelete}>Удалить</button>
    </div>
  );
};

export default MissionItem;

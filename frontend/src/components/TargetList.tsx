// src/components/TargetList.tsx
import React from 'react';

interface TargetListProps {
  targets: string[];
  onSelectTarget: (target: string) => void;
}

const TargetList: React.FC<TargetListProps> = ({ targets, onSelectTarget }) => {
  return (
    <div>
      <h2>Выберите цель</h2>
      <ul>
        {targets.map((target, index) => (
          <li key={index}>
            <button onClick={() => onSelectTarget(target)}>{target}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TargetList;

// src/components/TargetMissionsView.tsx
import React from 'react';
import { Mission } from '../types/mission';

interface TargetMissionsViewProps {
  target: string;
  missions: Mission[];
}

const TargetMissionsView: React.FC<TargetMissionsViewProps> = ({ target, missions }) => {
  return (
    <div>
      <h3>Миссии с целью: {target}</h3>
      {missions.length === 0 ? (
        <p>Нет миссий</p>
      ) : (
        <ul>
          {missions.map((m) => (
            <li key={m.id}>
              {m.name} — {m.date} ({m.status})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TargetMissionsView;

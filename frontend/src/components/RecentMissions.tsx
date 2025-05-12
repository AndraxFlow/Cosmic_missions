// src/components/RecentMissions.tsx
import React from 'react';
import { Mission } from '../types/mission';

interface Props {
  missions: Mission[];
}

const RecentMissions: React.FC<Props> = ({ missions }) => {
  const recent = [...missions]
    .sort((a, b) => b.id - a.id)
    .slice(0, 5);

  return (
    <div>
      <h2>Последние миссии</h2>
      <ul>
        {recent.map((m) => (
          <li key={m.id}>
            {m.name} — {m.date} ({m.status})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentMissions;

// src/pages/TargetsPage.tsx
import React, { useEffect, useState } from 'react';
import { Mission } from '../types/mission';
import { fetchMissions } from '../services/apiService';
import TargetList from '../components/TargetList';
import TargetMissionsView from '../components/TargetMissionsView';

const TargetsPage: React.FC = () => {
  const [missions, setMissions] = useState<Mission[]>([]);
  const [selectedTarget, setSelectedTarget] = useState<string | null>(null);

  useEffect(() => {
    fetchMissions().then(setMissions);
  }, []);

  const uniqueTargets = Array.from(new Set(missions.map(m => m.target)));

  const handleSelectTarget = (target: string) => {
    setSelectedTarget(target);
  };

  const filteredMissions = selectedTarget
    ? missions.filter(m => m.target === selectedTarget)
    : [];

  return (
    <div className="card">
      <h1>Каталог целей</h1>
      <TargetList targets={uniqueTargets} onSelectTarget={handleSelectTarget} />
      {selectedTarget && (
        <TargetMissionsView target={selectedTarget} missions={filteredMissions} />
      )}
    </div>
  );
};

export default TargetsPage;

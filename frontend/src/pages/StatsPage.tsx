// src/pages/StatsPage.tsx
import React, { useEffect, useState } from 'react';
import { Mission } from '../types/mission';
import { fetchMissions } from '../services/apiService';
import StatusChart from '../components/StatusChart';
import RecentMissions from '../components/RecentMissions';

const StatsPage: React.FC = () => {
  const [missions, setMissions] = useState<Mission[]>([]);

  useEffect(() => {
    fetchMissions().then(setMissions);
  }, []);

  return (
    <div>
      <h1>Статистика по миссиям</h1>
      <StatusChart missions={missions} />
      <RecentMissions missions={missions} />
    </div>
  );
};

export default StatsPage;

import React, { useEffect, useState } from 'react';
import { Mission } from '../types/mission';
import { fetchMissions } from '../services/apiService';

const MissionOfTheDay: React.FC = () => {
  const [mission, setMission] = useState<Mission | null>(null);

  useEffect(() => {
    fetchMissions().then(data => {
      if (data.length > 0) {
        const random = Math.floor(Math.random() * data.length);
        setMission(data[random]);
      }
    });
  }, []);

  if (!mission) return null;

  return (
    <div style={{
      marginTop: '40px',
      backgroundColor: '#1f1f3f',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 209, 255, 0.2)'
    }}>
      <h2>🌟 Миссия дня</h2>
      <p><strong>Название:</strong> {mission.name}</p>
      <p><strong>Цель:</strong> {mission.target}</p>
      <p><strong>Дата:</strong> {mission.date}</p>
      <p><strong>Статус:</strong> {mission.status}</p>
    </div>
  );
};

export default MissionOfTheDay;

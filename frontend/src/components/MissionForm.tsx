import React, { useState } from 'react';
import { Mission } from '../types/mission';
interface MissionFormProps {
  onAddMission: (mission: Omit<Mission, 'id'>) => Promise<void>;
}

const MissionForm: React.FC<MissionFormProps> = ({ onAddMission }) => {
  const [missionData, setMissionData] = useState({
    name: '',
    date: '',
    target: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMissionData({
      ...missionData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddMission(missionData); // Здесь передаем данные миссии
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <div>
        <label htmlFor="name">Название миссии:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={missionData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="date">Дата запуска:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={missionData.date}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="target">Цель миссии:</label>
        <input
          type="text"
          id="target"
          name="target"
          value={missionData.target}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Создать миссию</button>
    </form>
  );
};

const formStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#1f1f3f',
  padding: '20px',
  borderRadius: '10px',
  color: '#fff',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
};

export default MissionForm;

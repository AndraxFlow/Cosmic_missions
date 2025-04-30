// src/components/MissionForm.tsx
import React, { useState } from 'react';
import { Mission } from '../types/mission';

const MissionForm: React.FC<{ onAddMission: (mission: Omit<Mission, 'id'>) => void }> = ({ onAddMission }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [target, setTarget] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name && date && target) {
      const newMission: Omit<Mission, 'id'> = { name, date, target, status: 'Запланировано' };
      onAddMission(newMission);
      setName('');
      setDate('');
      setTarget('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Название миссии</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Дата</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div>
        <label>Цель</label>
        <input type="text" value={target} onChange={(e) => setTarget(e.target.value)} />
      </div>
      <button type="submit">Создать миссию</button>
    </form>
  );
};

export default MissionForm;

// src/components/MissionForm.tsx
import React, { useState } from 'react';
import { Mission } from '../types/mission';
import { useNavigate } from 'react-router-dom';

const MissionForm: React.FC<{ onAddMission: (mission: Omit<Mission, 'id'>) => void }> = ({ onAddMission }) => {

  const navigate = useNavigate();
  const getToday = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const [name, setName] = useState('');
  const [date, setDate] = useState(getToday());
  const [target, setTarget] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name && date && target) {
      const newMission: Omit<Mission, 'id'> = { name, date, target, status: 'Запланировано' };
      onAddMission(newMission);
      setName('');
      setDate(getToday());
      setTarget('');
      navigate('/view-missions');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Название миссии</label>
        <p></p>
        <input placeholder="Введите название..." type="text" value={name} onChange={(e) => setName(e.target.value)} 
        style={{
          width: '80%',
          padding: '8px',
          borderRadius: '5px',
          border: '1px solid #00d1ff',
          backgroundColor: '#1f1f3f',
          color: '#ffffff',
          marginTop: '5px',
        }}
        />
      </div>
      <div>
        <label>Дата</label>
        <p></p>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} 
        style={{
          width: '80%',
          padding: '8px',
          borderRadius: '5px',
          border: '1px solid #00d1ff',
          backgroundColor: '#1f1f3f',
          color: '#ffffff',
          marginTop: '5px',
        }}
        />
      </div>
      <div>
        <label>Цель</label>
        <p></p>
        <input placeholder="Введите цель..." type="text" value={target} onChange={(e) => setTarget(e.target.value)} 
        style={{
          width: '80%',
          padding: '8px',
          borderRadius: '5px',
          border: '1px solid #00d1ff',
          backgroundColor: '#1f1f3f',
          color: '#ffffff',
          marginTop: '5px',
        }}    
        />
      </div>
      <button 
      type="submit">Создать миссию</button>
    </form>
  );
};

export default MissionForm;

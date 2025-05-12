import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import CreateMission from './pages/CreateMission';
import ViewMissions from './pages/ViewMissions';
import TargetsPage from './pages/TargetsPage';
import Home from './pages/Home';
import StatsPage from './pages/StatsPage';


import { Mission } from './types/mission';
import { FaRocket } from 'react-icons/fa';
import { addLog, addMission, deleteMission, fetchMissions } from './services/apiService';
import LogsPage from './pages/LogsPage';

const App: React.FC = () => {
  const [missions, setMissions] = useState<Mission[]>([]);

  // ✅ Загрузить миссии при старте
  useEffect(() => {
    const loadMissions = async () => {
      const data = await fetchMissions();
      setMissions(data);
    };
    loadMissions();
  }, []);

  const handleAddMission = async (mission: Omit<Mission, 'id'>) => {
    const newMission = await addMission(mission); // ✅ отправка на сервер
    await addLog({
      type: "Создание",
      missionName: mission.name,
      timestamp: new Date().toISOString(),
    });
    setMissions([...missions, newMission]);
  };

  const handleDeleteMission = async (id: number) => {
    await deleteMission(id);
    const mission = missions.find((m) => m.id === id);
    if (!mission) return;
    await addLog({
      type: "Удаление",
      missionName: mission.name,
      timestamp: new Date().toISOString(),
    });
    setMissions(missions.filter((mission) => mission.id !== id));
  };

  // Функция для изменения статуса
  const handleUpdateStatus = async  (id: number) => {

    const mission = missions.find((m) => m.id === id);
    if (!mission) return;

    const updated = {
      ...mission,
      status:
        mission.status === 'Запланировано'
          ? 'В подготовке'
          : mission.status === 'В подготовке'
          ? 'В процессе'
          : mission.status === 'В процессе'
          ? 'Завершено'
          : 'Запланировано',
    };

    await fetch(`http://localhost:5000/missions/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: updated.status }),
    });
    await addLog({
      type: "Обновление статуса",
      missionName: mission.name,
      timestamp: new Date().toISOString(),
    });

    setMissions((prevMissions) => {
      return prevMissions.map((mission) => {
        if (mission.id === id) {
          const nextStatus = getNextStatus(mission.status);
          return { ...mission, status: nextStatus };
        }
        return mission;
      });
    });
  };

  // Функция для получения следующего статуса
  const getNextStatus = (currentStatus: 'Запланировано' | 'В подготовке' | 'В процессе' | 'Завершено') => {
    switch (currentStatus) {
      case 'Запланировано':
        return 'В подготовке';
      case 'В подготовке':
        return 'В процессе';
      case 'В процессе':
        return 'Завершено';
      default:
        return currentStatus;
    }
  };
  

  return (
    <Router>
      <div>
        <nav style={navStyle}>
          <div style={logoContainer}>
            <FaRocket style={logoStyle} />
            <h1 style={logoText}>Cosmic Missions</h1>
          </div>
          <ul style={navList}>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/create-mission">Создать миссию</Link>
            </li>
            <li>
              <Link to="/view-missions">Просмотр миссий</Link>
            </li>
            <li>
              <Link to="/targets">Цели миссий</Link>
            </li>
            <li>
              <Link to="/stats">Статистика</Link>
            </li>
          </ul>
        </nav>
  
        <Routes>
          <Route path="/targets" element={<TargetsPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/create-mission" element={<CreateMission onAddMission={handleAddMission} />} />
          <Route path="/view-missions" element={<ViewMissions missions={missions} onDeleteMission={handleDeleteMission} onUpdateStatus={handleUpdateStatus} />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/logs" element={<LogsPage />} />

        </Routes>
      </div>
    </Router>
  );
};

// Стили для навигации
const navStyle: React.CSSProperties = {
  backgroundColor: '#1f1f3f',
  padding: '10px 20px',
  display: 'flex',
  flexDirection: 'column',
  color: '#fff',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
};

const logoContainer: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
};

const logoStyle: React.CSSProperties = {
  fontSize: '32px',
  color: '#00bfff',
  marginRight: '10px',
};

const logoText: React.CSSProperties = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#fff',
};

const navList: React.CSSProperties = {
  listStyle: 'none',
  display: 'flex',
  gap: '20px',
};

const navItem: React.CSSProperties = {
  padding: '10px 20px',
  borderRadius: '5px',
  backgroundColor: '#333',
  transition: 'background-color 0.3s',
};

const linkStyle: React.CSSProperties = {
  textDecoration: 'none',
  color: '#fff',
  fontWeight: 'bold',
  display: 'block',
  padding: '10px 20px',
};

const activeLinkStyle: React.CSSProperties = {
  ...linkStyle,
  color: '#00bfff',
};
export default App;

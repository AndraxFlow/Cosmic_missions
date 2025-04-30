import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateMission from './pages/CreateMission';
import ViewMissions from './pages/ViewMissions';
import Home from './pages/Home';
import { Mission } from './types/mission';
import { FaRocket } from 'react-icons/fa';

const App: React.FC = () => {
  const [missions, setMissions] = useState<Mission[]>([]);

  const handleAddMission = async (mission: Omit<Mission, 'id'>) => {
    const newMission: Mission = { 
      ...mission, 
      id: missions.length + 1, 
      status: 'Запланировано' // Статус должен быть одним из допустимых значений
    };
    setMissions([...missions, newMission]);
  };

  const handleDeleteMission = async (id: number) => {
    setMissions(missions.filter((mission) => mission.id !== id));
  };

    // Функция для изменения статуса
    const handleUpdateStatus = (id: number) => {
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
            </ul>
          </nav>
    
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-mission" element={<CreateMission onAddMission={handleAddMission} />} />
            <Route path="/view-missions" element={<ViewMissions missions={missions} onDeleteMission={handleDeleteMission} onUpdateStatus={handleUpdateStatus} />} />
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

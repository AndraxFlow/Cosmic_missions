import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateMission from './pages/CreateMission';
import ViewMissions from './pages/ViewMissions';
import { Mission } from './types/mission';

const App: React.FC = () => {
  const [missions, setMissions] = useState<Mission[]>([]);

  const handleAddMission = async (mission: Omit<Mission, 'id'>) => {
    const newMission = { ...mission, id: missions.length + 1 }; // Генерация id
    setMissions([...missions, newMission]);
  };

  const handleDeleteMission = async (id: number) => {
    setMissions(missions.filter((mission) => mission.id !== id));
  };

  return (
    <Router>
      <div>
        {/* Навигационное меню */}
        <nav style={navStyle}>
          <ul>
            <li>
              <Link to="/" style={linkStyle}>Главная</Link>
            </li>
            <li>
              <Link to="/create-mission" style={linkStyle}>Создать миссию</Link>
            </li>
            <li>
              <Link to="/view-missions" style={linkStyle}>Просмотр миссий</Link>
            </li>
          </ul>
        </nav>

        {/* Роуты */}
        <Routes>
          {/* Главная страница */}
          <Route path="/" element={<h1>Добро пожаловать на главную страницу!</h1>} />

          {/* Страница создания миссии */}
          <Route
            path="/create-mission"
            element={<CreateMission onAddMission={handleAddMission} />}
          />

          {/* Страница просмотра миссий */}
          <Route
            path="/view-missions"
            element={<ViewMissions missions={missions} onDeleteMission={handleDeleteMission} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

// Стили для навигации
const navStyle: React.CSSProperties = {
  backgroundColor: '#1f1f3f',
  padding: '10px',
  color: '#fff',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
};

const linkStyle: React.CSSProperties = {
  marginRight: '15px',
  textDecoration: 'none',
  color: '#fff',
  fontWeight: 'bold',
};

export default App;

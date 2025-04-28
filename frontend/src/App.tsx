import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Mission } from "./types/mission";
import Home from './pages/Home';
import CreateMission from './pages/CreateMission';
import ViewMissions from './pages/ViewMissions';
import { fetchMissions, addMission, deleteMission } from "./services/apiService";
import MissionList from "./components/MissionList";
import MissionForm from "./components/MissionForm";

const App: React.FC = () => {
    const [missions, setMissions] = useState<Mission[]>([]);

    useEffect(() => {
        fetchMissions().then(setMissions);
    }, []);

    const handleAddMission = async (mission: Omit<Mission, "id">) => {
        const newMission = await addMission(mission);
        setMissions(prev => [...prev, newMission]);
    };

    const handleDeleteMission = async (id: number) => {
        await deleteMission(id);
        setMissions(prev => prev.filter(mission => mission.id !== id));
    };

    return (
        <div>
        <Router>
            <nav style={{ marginBottom: '20px' }}>
                <Link to="/" style={{ marginRight: '10px', color: '#00d1ff' }}>Главная</Link>
                <Link to="/create" style={{ marginRight: '10px', color: '#00d1ff' }}>Создать миссию</Link>
                <Link to="/view" style={{ color: '#00d1ff' }}>Просмотреть миссии</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<CreateMission />} />
                <Route path="/view" element={<ViewMissions />} />
            </Routes>
        </Router>
        <div>
            <h1>Планирование космических миссий</h1>
            <MissionForm onAddMission={handleAddMission} />
            <MissionList missions={missions} onDeleteMission={handleDeleteMission} />
        </div>
        </div>

    );
};

export default App;

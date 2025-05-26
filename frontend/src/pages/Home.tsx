import React from 'react';
import { Link } from 'react-router-dom';
import FeatureList from '../components/FeatureList';
import MissionOfTheDay from '../components/MissionOfTheDay';
import Footer from '../components/Footer';



const Home = () => {
  return (
    <div className="card" style={{ textAlign: 'inherit', padding: '50px 20px' }}>
      <h1>Добро пожаловать в Cosmic Missions!</h1>
      <p style={{ maxWidth: '600px', margin: '20px auto', fontSize: '18px', lineHeight: '1.6' }}>
        Здесь вы можете планировать, создавать и отслеживать космические миссии.
        От идеи до запуска — управлять каждой стадией стало проще, чем когда-либо.
      </p>
      <div style={{ marginTop: '30px' }}>
        <Link to="/create-mission" style={{ marginLeft: '10px' }}>
          <button style={buttonStyle}>🚀 Создать миссию</button>
        </Link>
        <Link to="/view-missions" style={{ marginLeft: '10px' }}>
          <button style={buttonStyle}>🛰️ Все миссии</button>
        </Link>
      </div>
      <div style={{ marginTop: '30px' }}>
         <Link to="/targets" style={{ marginLeft: '10px' }}>
        <button style={buttonStyle} >📜 Цели миссий</button>
        </Link>           
        <Link to="/stats" style={{ marginLeft: '10px' }}>
        <button style={buttonStyle}>📊 Статистика</button>
        </Link>
      </div>
    
    <FeatureList />
    <MissionOfTheDay />
    <Footer />

    </div>
  );
};

export default Home;

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#00d1ff',
  color: '#000',
  border: 'none',
  padding: '12px 20px',
  borderRadius: '8px',
  cursor: 'pointer',
  width: '250px',
  fontSize: '16px',
};
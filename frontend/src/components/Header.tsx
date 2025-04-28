import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header style={headerStyle}>
      <h1>🚀 Планировщик Космических Миссий</h1>
      <nav>
        <Link to="/" style={navLinkStyle}>Главная</Link>
        <Link to="/create" style={navLinkStyle}>Создать Миссию</Link>
        <Link to="/view" style={navLinkStyle}>Просмотреть Миссии</Link>
      </nav>
    </header>
  );
};

const headerStyle: React.CSSProperties = {
  backgroundColor: '#0d0d2b', // Темный фон для космического эффекта
  padding: '20px',
  color: '#ffffff',
  textAlign: 'center',
};

const navLinkStyle: React.CSSProperties = {
  color: '#00d1ff',
  margin: '0 15px',
  textDecoration: 'none',
};

export default Header;

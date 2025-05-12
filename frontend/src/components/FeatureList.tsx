import React from 'react';

const features = [
  { emoji: '🚀', title: 'Создание миссий', description: 'Добавляйте и настраивайте новые космические миссии.' },
  { emoji: '🔄', title: 'Обновление статуса', description: 'Следите за прогрессом и меняйте статус миссий.' },
  { emoji: '📊', title: 'Статистика', description: 'Получайте аналитику по всем миссиям.' },
  { emoji: '📜', title: 'Журнал действий', description: 'Все изменения фиксируются в журнале.' },
];

const FeatureList: React.FC = () => (
  <div style={{ display: 'grid', gap: '20px', marginTop: '40px' }}>
    {features.map((f, index) => (
      <div key={index} style={{
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 0 10px rgba(0, 209, 255, 0.5)',
      }}>
        <h3 style={{ fontSize: '24px' }}>{f.emoji} {f.title}</h3>
        <p style={{ fontSize: '16px', color: '#ccc' }}>{f.description}</p>
      </div>
    ))}
  </div>
);

export default FeatureList;

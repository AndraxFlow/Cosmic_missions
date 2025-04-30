import React from 'react';

const Home = () => {
  return (
    <div style={{ textAlign: 'inherit', padding: '50px 20px' }}>
  <h1>Добро пожаловать в Cosmic Missions!</h1>
  <p style={{ maxWidth: '600px', margin: '20px auto', fontSize: '18px', lineHeight: '1.6' }}>
    Здесь вы можете планировать, создавать и отслеживать космические миссии.
    От идеи до запуска — управлять каждой стадией стало проще, чем когда-либо.
  </p>
  <p>
  Все права защищены команией OOO"НииШТЯК"
  </p>
  {/* <img
    src="https://cdn.pixabay.com/photo/2021/01/10/13/01/space-5904115_1280.jpg"
    alt="Космическая миссия"
    style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 0 20px rgba(0, 209, 255, 0.4)' }}
  /> */}
</div>
  );
};

export default Home;

import Sidebar from '@/components/Layout/Sidebar/index';
import MainScreen from '@/components/MainScreen';
import React from 'react';

const Main = () => {
  return (
    <div
      className="bg-black "
      style={{
        height: '100vh',
        width: '100vw',
        display: 'grid',
        gridTemplateColumns: '420px 1fr',
        gap: '8px',
        padding: '8px',
      }}
    >
      <Sidebar />
      <MainScreen />
    </div>
  );
};

export default Main;

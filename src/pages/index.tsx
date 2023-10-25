import React from 'react';

import Sidebar from '../components/Layout/Sidebar/index';
import MainScreen from '../components/MainScreen';
import PlayBarComponent from '../components/PlayBar';

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
        gridTemplateRows: '1fr 72px',
      }}
    >
      <Sidebar />
      <MainScreen />
      <PlayBarComponent />
    </div>
  );
};

export default Main;

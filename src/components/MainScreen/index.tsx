import React from 'react';

import BodyMainScreen from './Body';
import HeaderScreen from './Header';
import NavBarSection from './Navbar';
import styles from './styles/MainScreen.module.css';

const MainScreen = () => {
  return (
    <div className={`${styles.mainContainer} ${styles.scroll}`}>
      <HeaderScreen />
      <div style={{ padding: '0 24px' }}>
        <NavBarSection />
        <BodyMainScreen />
      </div>
    </div>
  );
};

export default MainScreen;

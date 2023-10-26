import React from 'react';

import BodyMainScreen from './Body';
import HeaderScreen from './Header';
import NavBarSection from './Navbar';
import useStyles from './styles';

const MainScreen = () => {
  const { classes } = useStyles();
  return (
    <div className={`${classes.root} ${classes.scroll}`}>
      <HeaderScreen />
      <div style={{ padding: '0 24px' }}>
        <NavBarSection />
        <BodyMainScreen />
      </div>
    </div>
  );
};

export default MainScreen;

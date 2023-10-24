import React from 'react';

import SidebarBody from './SidebarBody';
import SidebarNavBar from './SidebarNavBar';
import styles from './styles/Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.mainContainer}>
      <SidebarNavBar />
      <SidebarBody />
    </div>
  );
};

export default Sidebar;

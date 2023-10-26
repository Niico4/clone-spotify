import React from 'react';

import SidebarBody from './BodySidebar';
import SidebarNavBar from './HeaderSidebar/NavBar';
import useStyles from './styles';

const Sidebar = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <SidebarNavBar />
      <SidebarBody />
    </div>
  );
};

export default Sidebar;

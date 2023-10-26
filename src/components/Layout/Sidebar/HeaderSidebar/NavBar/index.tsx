import React from 'react';

import Icon from '../../../../atoms/icon';
import HomeIcon from '../../../../atoms/icons/Home';
import SearchIcon from '../../../../atoms/icons/Search';

import useStyles from './styles';

const SidebarNavBar = () => {
  const { classes } = useStyles();
  return (
    <nav className={classes.root}>
      <ul className={classes.wrapperItems}>
        <li className={classes.items}>
          <button className={classes.buttons}>
            <Icon component={HomeIcon} size={30} />
            <span>Inicio</span>
          </button>
        </li>
        <li className={classes.items}>
          <button className={classes.buttons}>
            <Icon component={SearchIcon} size={30} />
            <span>Buscar</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default SidebarNavBar;

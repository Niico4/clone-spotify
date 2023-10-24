import React from 'react';

import Icon from '../../atoms/icon';
import HomeIcon from '../../atoms/icons/Home';
import SearchIcon from '../../atoms/icons/Search';
import styles from './styles/Sidebar.module.css';
import styled from './styles/style';

const SidebarNavBar = () => {
  return (
    <>
      <nav className={styles.sidebarNav}>
        <styled.Ul>
          <styled.Li>
            <button className={styles.buttonInicioAndSearch}>
              <Icon component={HomeIcon} size={30} />
              <span>Inicio</span>
            </button>
          </styled.Li>
          <styled.Li>
            <button className={styles.buttonInicioAndSearch}>
              <Icon component={SearchIcon} size={30} />
              <span>Buscar</span>
            </button>
          </styled.Li>
        </styled.Ul>
      </nav>
    </>
  );
};

export default SidebarNavBar;

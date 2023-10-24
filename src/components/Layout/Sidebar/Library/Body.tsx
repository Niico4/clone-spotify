import Icon from '@/components/atoms/icon';
import ListIcon from '@/components/atoms/icons/List';
import SearchIcon from '@/components/atoms/icons/Search';
import { Tooltip } from '@mui/material';
import React from 'react';

import styles from '../styles/Sidebar.module.css';
import styled from '../styles/style';

const LibraryBodyComponent = () => {
  return (
    <>
      <styled.WrapperButtonsSearchAndFilter>
        <Tooltip title="Buscar en Tu biblioteca" placement="top-end">
          <button className={styles.buttonSearch}>
            <Icon component={SearchIcon} />
          </button>
        </Tooltip>
        <styled.ButtonBodyRecent>
          Recientes
          <Icon component={ListIcon} size={20} />
        </styled.ButtonBodyRecent>
      </styled.WrapperButtonsSearchAndFilter>
    </>
  );
};

export default LibraryBodyComponent;

import Icon from '@/components/atoms/icon';
import AddIcon from '@/components/atoms/icons/Add';
import ArrowRightIcon from '@/components/atoms/icons/ArrowRight';
import LibraryIcon from '@/components/atoms/icons/Library';
import { Tooltip } from '@mui/material';
import React from 'react';

import styles from '../styles/Sidebar.module.css';
import styled from '../styles/style';

const LibraryHeaderComponent = () => {
  return (
    <>
      <styled.HeaderLibrary style={{ margin: '8px' }}>
        <div className={styles.wrapperButtonsHeader}>
          <div style={{ marginRight: '150px' }}>
            <Tooltip title="Contraer Tu biblioteca" placement="top-start">
              <styled.ButtonHeader>
                <Icon component={LibraryIcon} />
                <span>Tu biblioteca</span>
              </styled.ButtonHeader>
            </Tooltip>
          </div>
          <Tooltip title="Crear una lista o carpeta" placement="top">
            <button className={styles.buttonCreateAndAdd}>
              <Icon component={AddIcon} />
            </button>
          </Tooltip>
          <Tooltip title="Mostrar más" placement="top">
            <button className={styles.buttonCreateAndAdd}>
              <Icon component={ArrowRightIcon} />
            </button>
          </Tooltip>
        </div>
      </styled.HeaderLibrary>

      <div className={styles.albumAndListWrapperButtons}>
        <styled.Buttons>Listas</styled.Buttons>
        <styled.Buttons>Álbumes</styled.Buttons>
      </div>
    </>
  );
};

export default LibraryHeaderComponent;

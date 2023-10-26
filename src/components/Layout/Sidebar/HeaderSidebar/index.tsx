import { Tooltip } from '@mui/material';
import React from 'react';

import Icon from '../../../atoms/icon';
import AddIcon from '../../../atoms/icons/Add';
import ArrowRightIcon from '../../../atoms/icons/ArrowRight';
import LibraryIcon from '../../../atoms/icons/Library';

import useStyles from './styles';

const LibraryHeaderComponent = () => {
  const { classes } = useStyles();
  return (
    <>
      <header className={classes.root}>
        <div className={classes.wrapperButtons}>
          <div style={{ marginRight: '150px' }}>
            <Tooltip title="Contraer Tu biblioteca" placement="top-start">
              <button className={classes.buttonLibrary}>
                <Icon component={LibraryIcon} />
                <span>Tu biblioteca</span>
              </button>
            </Tooltip>
          </div>
          <Tooltip title="Crear una lista o carpeta" placement="top">
            <button className={classes.buttonIcon}>
              <Icon component={AddIcon} />
            </button>
          </Tooltip>
          <Tooltip title="Mostrar más" placement="top">
            <button className={classes.buttonIcon}>
              <Icon component={ArrowRightIcon} />
            </button>
          </Tooltip>
        </div>
      </header>

      <div className={classes.albumAndListWrapperButtons}>
        <button className={classes.button}>Listas</button>
        <button className={classes.button}>Álbumes</button>
      </div>
    </>
  );
};

export default LibraryHeaderComponent;

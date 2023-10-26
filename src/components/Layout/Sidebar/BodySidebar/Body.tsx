import { Tooltip } from '@mui/material';
import React from 'react';

import Icon from '../../../atoms/icon';
import ListIcon from '../../../atoms/icons/List';
import SearchIcon from '../../../atoms/icons/Search';

import useStyles from './styles';

const LibraryBodyComponent = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapperButtons}>
      <Tooltip title="Buscar en Tu biblioteca" placement="top-end">
        <button className={classes.buttonSearch}>
          <Icon component={SearchIcon} />
        </button>
      </Tooltip>
      <button className={classes.ButtonRecent}>
        Recientes
        <Icon component={ListIcon} size={20} />
      </button>
    </div>
  );
};

export default LibraryBodyComponent;

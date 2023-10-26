import { Tooltip } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import imageProfile from '../../../../public/mock/southPark.jpg';
import Icon from '../../atoms/icon';
import ArrowNavigateBackIcon from '../../atoms/icons/ArrowNavigateBack';
import ArrowNavigateNextIcon from '../../atoms/icons/ArrowNavigateNext';
import DownloadIcon from '../../atoms/icons/Download';
import NotificationIcon from '../../atoms/icons/Notification';

import useStyles from './styles';

const HeaderScreen = () => {
  const { classes } = useStyles();
  return (
    <header className={classes.root}>
      <div className={classes.wrapperButtonsArrows}>
        <button disabled className={classes.buttonArrow}>
          <Icon component={ArrowNavigateBackIcon} size={34} />
        </button>
        <button disabled className={classes.buttonArrow}>
          <Icon component={ArrowNavigateNextIcon} size={34} />
        </button>
      </div>

      <div className={classes.wrapperButtonsIcons}>
        <button className={`${classes.buttonDownload} ${classes.buttonsHover}`}>
          <Icon component={DownloadIcon} color="#FFF" size={20} />
          <span>Instalar app</span>
        </button>
        <Tooltip title="Novedades">
          <button
            className={`${classes.buttonNotification} ${classes.buttonsHover}`}
          >
            <Icon component={NotificationIcon} size={20} />
          </button>
        </Tooltip>

        <Tooltip title="Niico">
          <button
            className={`${classes.buttonProfile} ${classes.buttonsHover}`}
          >
            <Image
              src={imageProfile}
              alt="profile image"
              className={classes.image}
            />
          </button>
        </Tooltip>
      </div>
    </header>
  );
};

export default HeaderScreen;

import { Tooltip } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import imageProfile from '../../../../public/mock/southPark.jpg';
import Icon from '../../atoms/icon';
import ArrowNavigateBackIcon from '../../atoms/icons/ArrowNavigateBack';
import ArrowNavigateNextIcon from '../../atoms/icons/ArrowNavigateNext';
import DownloadIcon from '../../atoms/icons/Download';
import NotificationIcon from '../../atoms/icons/Notification';
import styles from '../styles/MainScreen.module.css';
import styled from './style';

const HeaderScreen = () => {
  return (
    <styled.Container>
      <div className={styles.wrapperButtonsBackAndNext}>
        <button disabled className={styles.buttonsBackAndNext}>
          <Icon component={ArrowNavigateBackIcon} size={34} />
        </button>
        <button disabled className={styles.buttonsBackAndNext}>
          <Icon component={ArrowNavigateNextIcon} size={34} />
        </button>
      </div>

      <div className={styles.wrapperButtonsIcons}>
        <styled.ButtonDownloadApp className={styles.buttonsHover}>
          <Icon component={DownloadIcon} color="#FFF" size={20} />
          <span>Instalar app</span>
        </styled.ButtonDownloadApp>
        <Tooltip title="Novedades">
          <button
            className={`${styles.buttonNotification} ${styles.buttonsHover}`}
          >
            <Icon component={NotificationIcon} size={20} />
          </button>
        </Tooltip>

        <Tooltip title="Niico">
          <button className={`${styles.buttonProfile} ${styles.buttonsHover}`}>
            <Image
              src={imageProfile}
              alt="profile image"
              className={styles.imageButtonProfile}
            />
          </button>
        </Tooltip>
      </div>
    </styled.Container>
  );
};

export default HeaderScreen;

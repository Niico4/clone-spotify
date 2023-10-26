import React from 'react';

import Icon from '../atoms/icon';
import PlayCircleIcon from '../atoms/icons/PlayCircle';
import RandomIcon from '../atoms/icons/Random';
import RepeatIcon from '../atoms/icons/Repeat';
import SkipNextIcon from '../atoms/icons/SkipNext';
import SkipPreviousIcon from '../atoms/icons/SkipPrevious';
import { imageSouthPark } from '../../../public/mock/index';

import CardSongComponent from './CardSong';
import SettingSongComponent from './SettingSong';
import useStyles from './styles';

const PlayBarComponent = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <CardSongComponent
        imageURL={imageSouthPark}
        altText="image song"
        label="Sustancias"
        artistsName="Depp, MakumbaMusic"
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
          }}
        >
          <Icon component={RandomIcon} size={20} />
          <Icon component={SkipPreviousIcon} size={30} color="#fff" />
          <Icon component={PlayCircleIcon} size={40} color="#fff" />
          <Icon component={SkipNextIcon} size={30} color="#fff" />
          <Icon component={RepeatIcon} size={20} />
        </div>
        <div
          style={{
            width: '620px',
            height: '2px',
            backgroundColor: 'white',
          }}
        />
      </div>
      <div>
        <SettingSongComponent />
      </div>
    </div>
  );
};

export default PlayBarComponent;

import React from 'react';

import Icon from '../atoms/icon';
import PlayCircleIcon from '../atoms/icons/PlayCircle';
import RandomIcon from '../atoms/icons/Random';
import RepeatIcon from '../atoms/icons/Repeat';
import SkipNextIcon from '../atoms/icons/SkipNext';
import SkipPreviousIcon from '../atoms/icons/SkipPrevious';

const PlayBarComponent = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gridColumn: '1 / -1',
      }}
    >
      <h2 style={{ color: 'white' }}>CANCION</h2>
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
      <h2 style={{ color: 'white' }}>ICONOS</h2>
    </div>
  );
};

export default PlayBarComponent;

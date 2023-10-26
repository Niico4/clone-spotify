import React from 'react';
import { Slider } from '@mui/material';

import ExpandIcon from '../../atoms/icons/Expand';
import Icon from '../../atoms/icon';
import ShareScreenIcon from '../../atoms/icons/ShareScreen';
import VolumenUpIcon from '../../atoms/icons/VolumenUp';
import SpeakerIcon from '../../atoms/icons/Speaker';
import ListIcon from '../../atoms/icons/List';
import MicrophoneIcon from '../../atoms/icons/Microphone';
import ControllerMusicIcon from '../../atoms/icons/ControllerMusic';

import useStyles from './styles';

const SettingSongComponent = () => {
  const { classes } = useStyles();
  const [value, setValue] = React.useState<number>(30);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };
  return (
    <div className={classes.root}>
      <div className={classes.wrapperComponents}>
        <Icon
          component={ControllerMusicIcon}
          size={22}
          style={{ cursor: 'pointer' }}
        />
        <Icon
          component={MicrophoneIcon}
          size={22}
          style={{ cursor: 'pointer' }}
        />
        <Icon component={ListIcon} size={22} style={{ cursor: 'pointer' }} />
        <Icon component={SpeakerIcon} size={22} style={{ cursor: 'pointer' }} />
        <Icon
          component={VolumenUpIcon}
          size={22}
          style={{ cursor: 'pointer' }}
        />
        <Slider
          disabled={false}
          style={{ width: '100px', marginRight: '10px' }}
          marks
          max={100}
          min={0}
          size="small"
          valueLabelDisplay="off"
          onChange={handleChange}
          value={value}
        />

        <Icon
          component={ShareScreenIcon}
          size={22}
          style={{ cursor: 'pointer' }}
        />
        <Icon component={ExpandIcon} size={22} style={{ cursor: 'pointer' }} />
      </div>
    </div>
  );
};

export default SettingSongComponent;

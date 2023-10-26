import { tss } from 'tss-react';

import theme from '../../../theme/theme';

const { colors } = theme;

const useStyles = tss.create({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 24px',
  },

  wrapperButtonsArrows: {
    display: 'flex',
    gap: '8px',
  },

  wrapperButtonsIcons: {
    display: 'flex',
    gap: '10px',
  },

  buttonArrow: {
    backgroundColor: `${colors.palette.darkest}`,
    borderRadius: '50%',
  },

  buttonDownload: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    backgroundColor: `${colors.buttons}`,
    borderRadius: '20px',
    color: '#fff',
    fontSize: '12px',
    fontWeight: 700,
    padding: '0 14px',
  },

  buttonNotification: {
    padding: '6px',
    backgroundColor: '#0f0f0f',
    borderRadius: '50%',
  },

  buttonProfile: {
    padding: '4px',
    backgroundColor: '#0f0f0f',
    borderRadius: '50%',
  },

  buttonsHover: {
    '&:hover': {
      transform: 'scale(1.05)',
    },

    '&:hover svg': {
      transform: 'scale(1.1)',
      fill: '#fff',
    },
  },

  image: {
    borderRadius: '50%',
    width: '24px',
    height: '24px',
    objectFit: 'cover',
  },
});

export default useStyles;

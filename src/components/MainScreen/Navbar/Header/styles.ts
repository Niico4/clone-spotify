import { tss } from 'tss-react';

import theme from '../../../../theme/theme';

const { colors } = theme;
const useStyles = tss.create({
  root: {
    width: '465px',
    height: '64px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '14px',
    backgroundColor: `${colors.palette.grayLightest}`,
    borderRadius: '4px',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '#4b4b4b',
    },
  },

  wrapperImage: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    gap: '14px',
  },

  image: {
    width: '64px',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '4px 0 0 4px',
    boxShadow: `3px 0 6px ${colors.shadow.light}`,
  },

  title: {
    color: '#fff',
    fontSize: '15px',
    fontWeight: 600,
  },

  imagePlayCircle: {
    display: 'block',
    width: '48px',
    height: '48px',
    objectFit: 'cover',
    boxShadow: `0 4px 10px ${colors.shadow.dark}`,
    borderRadius: '50%',
    marginRight: '15px',

    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
});

export default useStyles;

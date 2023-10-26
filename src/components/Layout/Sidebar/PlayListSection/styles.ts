import { tss } from 'tss-react/mui';

import theme from '../../../../theme/theme';

const { colors } = theme;

const useStyles = tss.create({
  root: {
    height: '64px',
    cursor: 'pointer',
  },

  wrapperComponent: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    height: '100%',
    padding: '0 8px',

    '&:hover': {
      backgroundColor: `${colors.palette.dark}`,
      borderRadius: '8px',
    },
  },

  wrapperImage: {
    width: '48px',
    height: '48px',
  },

  wrapperText: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '6px',
  },

  paragraph: {
    fontSize: '16px',
    color: '#fff',
    fontWeight: 500,

    '&:hover': {
      color: `${colors.palette.primary}`,
    },
  },

  span: {
    fontSize: '12px',
    color: `${colors.text.gray}`,
    fontWeight: 700,
  },
});

export default useStyles;

import { tss } from 'tss-react/mui';

import theme from '../../../../theme/theme';

const { colors } = theme;

const useStyles = tss.create({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '8px',
    padding: '8px 16px',
    margin: '8px',
  },

  wrapperButtons: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },

  albumAndListWrapperButtons: {
    display: 'flex',
    gap: '20px',
    padding: '4px 20px',
  },

  buttonLibrary: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    padding: '4px 6px',
    color: `${colors.palette.gray}`,
    fontSize: '15px',
    fontWeight: 700,

    '&:hover span': {
      color: '#fff',
    },
    '&:hover svg': {
      fill: '#fff',
    },
  },

  buttonIcon: {
    padding: '2px',

    '&:hover': {
      backgroundColor: `${colors.palette.grayDarkest}`,
      borderRadius: '50%',
      fill: '#fff',
    },

    '&:hover svg': {
      fill: '#fff',
    },
  },

  button: {
    borderRadius: '20px',
    backgroundColor: `${colors.palette.grayDarkest}`,
    color: '#fff',
    fontWeight: 500,
    fontSize: '13px',
    padding: '6px 12px',

    '&:hover': {
      backgroundColor: `${colors.palette.grayLightest}`,
    },

    // TODO:
  },
});

export default useStyles;

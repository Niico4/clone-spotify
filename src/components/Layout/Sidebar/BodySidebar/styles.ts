import { tss } from 'tss-react/mui';

import theme from '../../../../theme/theme';

const { colors } = theme;

const useStyles = tss.create({
  root: {
    width: '420px',
    height: '120px',
    backgroundColor: `${colors.palette.darkest}`,
    borderRadius: '8px',
  },

  wrapperButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: ' 2px 8px 8px 16px',
  },

  wrapperPlayList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },

  wrapperBody: {
    backgroundColor: `${colors.palette.darkest}`,
    minHeight: '66.6vh',
    maxHeight: '66.6vh',
    borderRadius: '8px',
    padding: '0px 8px 8px',
    overflow: 'auto',

    '&::-webkit-scrollbar': {
      width: '5px',
      borderRadius: '8px',
    },

    '&::-webkit-scrollbar-thumb': {
      background: `${colors.palette.grayLightest}`,
      borderRadius: '8px',
    },

    '&::-webkit-scrollbar-track': {
      background: `${colors.palette.darkest}`,
    },
  },

  buttonSearch: {
    padding: '6px',

    '&:hover': {
      backgroundColor: `${colors.palette.grayDarkest}`,
      borderRadius: '50%',
      fill: '#fff',
    },
  },

  ButtonRecent: {
    display: 'flex',
    gap: '8px',
    padding: '8px',
    color: `${colors.palette.gray}`,
    fontSize: '14px',

    '&:hover': {
      color: '#fff',
      transform: 'scale(1.03)',
    },

    '&:hover svg': {
      fill: '#fff',
    },
  },
});

export default useStyles;

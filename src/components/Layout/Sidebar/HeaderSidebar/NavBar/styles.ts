import { tss } from 'tss-react/mui';

import theme from '../../../../../theme/theme';

const { colors } = theme;

const useStyles = tss.create({
  root: {
    width: '420px',
    height: '112px',
  },

  wrapperItems: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '112px',
    backgroundColor: `${colors.palette.darkest}`,
    borderRadius: '8px',
    padding: '8px 12px',
  },

  items: {
    color: `${colors.palette.gray}`,
    fontSize: '15px',
    fontWeight: 700,
    padding: '4px 12px',
    cursor: 'pointer',
    display: 'block',

    '&:hover svg': {
      fill: '#fff',
    },
    '&:hover span': {
      color: '#fff',
    },
  },

  buttons: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
});

export default useStyles;

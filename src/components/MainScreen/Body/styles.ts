import { tss } from 'tss-react';

import theme from '../../../theme/theme';

const { colors } = theme;

const useStyles = tss.create({
  root: {
    marginTop: '34px',
    overflow: 'hidden',
  },

  wrapperTitles: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  wrapperCardsPlayList: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },

  subTitle: {
    color: '#fff',
    fontSize: '22px',
    fontWeight: 700,

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  ancle: {
    color: `${colors.palette.gray}`,
    fontWeight: 800,
    fontSize: '13px',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

export default useStyles;

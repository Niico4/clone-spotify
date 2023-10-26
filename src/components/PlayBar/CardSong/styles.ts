import { tss } from 'tss-react';

import theme from '../../../theme/theme';

const { colors } = theme;

const useStyles = tss.create({
  card: {
    cursor: 'pointer',
    width: '56px',
    height: '56px',
    backgroundColor: `${colors.palette.darkest}`,
    padding: '6px',
    borderRadius: '3px',
    marginLeft: '8px',
  },

  imageCard: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '3px',
  },

  textLabel: {
    color: '#fff',
    fontWeight: 400,
    fontSize: '14px',
  },

  textArtist: {
    color: `${colors.palette.gray}`,
    fontSize: '11px',
    fontWeight: 400,

    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

export default useStyles;

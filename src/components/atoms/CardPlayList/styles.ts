import { tss } from 'tss-react';

import theme from '../../../theme/theme';

const { colors } = theme;

const useStyles = tss.create({
  card: {
    cursor: 'pointer',
    width: '182px',
    height: '264px',
    backgroundColor: `${colors.palette.dark}`,
    padding: '16px',
    borderRadius: '8px',

    '&:hover': {
      backgroundColor: `${colors.palette.grayLightest}`,
      transition: '.5s',
    },
  },

  imagePlayCircle: {
    position: 'absolute',
    display: 'block',
    left: '95px',
    top: '95px',
    width: '48px',
    height: '48px',
    objectFit: 'cover',
    boxShadow: `0 4px 10px ${colors.shadow.dark}`,
    borderRadius: '50%',

    '&:hover': {
      transform: 'scale(1.05)',
    },
  },

  imageCard: {
    width: '150px',
    height: '150px',
    borderRadius: '8px',
    marginBottom: '20px',
    objectFit: 'cover',
    boxShadow: `3px 3px 10px ${colors.shadow.dark}`,
  },

  textLabel: {
    maxWidth: '150px',
    height: '26px',
    color: '#fff',
    fontWeight: 700,
    fontSize: '15px',
    padding: '0 0 4px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },

  textArtist: {
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '150px',
    maxHeight: '35px',
    color: `${colors.palette.gray}`,
    fontSize: '13px',
    fontWeight: 600,

    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

export default useStyles;

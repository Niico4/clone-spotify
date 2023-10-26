import { tss } from 'tss-react';

import theme from '../../theme/theme';

const { colors } = theme;
const useStyles = tss.create({
  root: {
    width: '100%',
    height: '90vh',
    background: `linear-gradient(0deg, ${colors.palette.darkest} 70%, #1f1f1f 100%)`,
    borderRadius: '8px',
    overflow: 'auto',
  },

  scroll: {
    '&::-webkit-scrollbar': {
      // TODO:
      width: '2px',
      height: '10px',
    },

    '&::-webkit-scrollbar-thumb': {
      background: `${colors.palette.grayLight}`,
    },

    '&::-webkit-scrollbar-thumb:hover': {
      background: `${colors.palette.gray}`,
    },

    '&::-webkit-scrollbar-track': {
      background: `${colors.palette.darkest}`,
    },
  },
});

export default useStyles;

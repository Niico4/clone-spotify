import { tss } from 'tss-react';

const useStyles = tss.create({
  root: {
    width: '420px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
});

export default useStyles;

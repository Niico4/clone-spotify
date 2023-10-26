import { tss } from 'tss-react';

const useStyles = tss.create({
  root: {
    width: '100%',
    maxHeight: '72px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gridColumn: '1 / -1',
  },
});

export default useStyles;

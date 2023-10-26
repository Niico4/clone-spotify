import { tss } from 'tss-react';

const useStyles = tss.create({
  root: {
    width: '569px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: '8px',
  },

  wrapperComponents: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
  },
});

export default useStyles;

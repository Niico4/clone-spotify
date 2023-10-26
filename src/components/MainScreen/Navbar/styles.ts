import { tss } from 'tss-react';

const useStyles = tss.create({
  title: {
    color: '#fff',
    fontSize: '32px',
    fontWeight: 700,
    marginBottom: '12px',
  },

  wrapperCards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '12px',
  },
});

export default useStyles;

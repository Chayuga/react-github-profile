import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  summeryCard: {
    display: 'flex',
    justifyContent: 'space-between',

  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    background: 'white',
    height: '5.5rem',
    width: '7.5rem',
    borderRadius: '1rem',
    boxShadow: '1px 1px 18px rgba(213, 212, 214, 0.5);',
  },
  countNumber: {
    fontSize: '1.5rem',
  },
}));

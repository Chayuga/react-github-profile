import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const profileWidth = 280;

export default makeStyles((theme: Theme) => ({
  profile: {
    padding: '40px 10px 10px 10px',
    [theme.breakpoints.up('sm')]: {
      height: '100vh',
      color: 'inherit',
      width: profileWidth,
      flexShrink: 0,
      boxShadow: '0 0 15px rgba(0,0,0,0.25)',
    },
  },
  socialButton: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '20',
  },
}));

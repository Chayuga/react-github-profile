import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const profileWidth = 240;

export default makeStyles((theme: Theme) => ({
  profile: {
    [theme.breakpoints.up('sm')]: {
      height: '100vh',
      color: 'inherit',
      width: profileWidth,
      flexShrink: 0,
      boxShadow: '0 0 15px rgba(0,0,0,0.25)',
    },
  },
}));

import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export default makeStyles((theme: Theme) => ({
  profile: {
    [theme.breakpoints.up('sm')]: {
      height: '100vh',
      color: 'inherit',
      width: '25%',
      background: 'black',
      alignContent: 'center',
    },

  },
}));


import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export default makeStyles((theme: Theme) => ({
  mainScreen: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      width: '100%',
    },

  },
  mainScreen__dashboard: {
    width: '100%',
  },
}));

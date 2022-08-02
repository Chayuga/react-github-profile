import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export default makeStyles((theme: Theme) => ({
  mainScreen: {
    position: 'sticky',
    top: '0',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      width: '100%',
    },
  },
  mainScreen__dashboard: {
    width: '100%',
    height: '100vw',
  },
}));

import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export default makeStyles((theme: Theme) => ({

  toolbar: {
    height: '80px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    // marginLeft: '480px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      flexWrap: 'wrap',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  linkButton: {
    '&:hover': {
      color: 'green',
      textDecoration: 'none',
    },
  },
  searchGroup: {
    display: 'flex',
    alignItems: 'center',
  },

  searchInput: {
    display: 'flex',
  },
}));

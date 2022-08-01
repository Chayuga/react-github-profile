import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const profileWidth = 280;
const padding = 20;

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

  socialButton_span: {
    marginLeft: '10px',
  },
  profileName: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: padding,
  },

  profileName_loginUser: {
    color: '#706e6e',
  },

  profileBio: {
    textAlign: 'center',
    paddingTop: padding,
  },

  socialGroup: {
    margin: '10px 30px',
    display: 'flex',
    flexDirection: 'column',
  },
  socialGroupMenus: { display: 'flex',
    flexDirection: 'column',
    paddingTop: padding,
  },
  socialMenuButton: {
    marginTop: padding,
    borderStyle: 'solid',
    color: 'primary',
    borderRadius: '50px',
  },

  socialMenuButton_link: {
    textDecoration: 'none',
    color: 'blue',
  },

  socialMenuItem: {
    color: 'blue',
    fontSize: 'medium',
  },

}));

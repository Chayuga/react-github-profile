import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const profileWidth = 280;
const padding = 20;

export default makeStyles((theme: Theme) => ({
  container: {
    padding: '35px 10px 10px 10px',
    backgroundColor: '#f7f7f7',
    position: 'sticky',
    marginTop: '60px',
    top: '50px',
    [theme.breakpoints.up('sm')]: {
      height: '100vh',
      color: 'inherit',
      width: profileWidth,
      flexShrink: 0,
      boxShadow: '0 0 15px rgba(0,0,0,0.25)',
    },
  },

  profile: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
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
    color: '#706e6e',
  },

  socialGroup: {
    margin: '10px 30px',
    display: 'flex',
    flexDirection: 'column',
  },
  socialGroupMenus: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: padding,
  },
  socialMenuButton: {
    marginTop: padding,
    borderStyle: 'solid',
    color: 'primary',
    borderRadius: '100px',
  },

  socialMenuButton_link: {
    textDecoration: 'none',
    color: 'blue',
    borderRadius: '50px',
  },

  socialMenuItem: {
    color: 'blue',
    fontSize: 'small',
  },
  socialButton_count: {
    marginLeft: '20',
    justifyContent: 'center',
    padding: '4px 4px',
    borderRadius: '50px',
    fontSize: '12px',
    backgroundColor: 'green',
    color: 'white',
  },

}));

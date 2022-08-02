import { makeStyles } from '@mui/styles';

const padding = 20;

export default makeStyles(() => ({
  sideBar: {
    height: '100vh',
    backgroundColor: '#3440e3',
    padding: '40px 10px 10px 10px',
  },
  imageLink: {
    display: 'flex',
    justifyContent: 'center',
    padding: '1.25rem 0',
  },
  image: {
    width: '50%',
  },
  subHeader: {
    backgroundColor: '#3440e3 !important',
    color: '#a5a6c2 !important',
    marginLeft: '1.5rem',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    textDecoration: 'none',
    marginLeft: '2rem',
    '&:hover': {
      background: '#0384fc',
      color: '#000408',
    },
    '&:active': {
      background: '#021173',
      color: 'white',
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
  socialButton_count: {
    marginLeft: '20',
    justifyContent: 'center',
    padding: '4px 4px',
    borderRadius: '50px',
    fontSize: '12px',
    backgroundColor: 'white',
    color: 'blue',
  },
}));


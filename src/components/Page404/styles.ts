import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  container: {
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageContainer: {
    display: 'flex',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '300px',
  },

  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 20px',
  },

  infoInnerContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  pageTitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    padding: '5px 7px',
    borderStyle: 'ridge',
    borderRadius: '10px',
  },

  infoItem: {
    justifyContent: 'center',
    marginTop: '20px',
    textAlign: 'center',
  },
}));

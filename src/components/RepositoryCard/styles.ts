import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  repositoryContainer: {
    marginTop: '3rem',
  },
  repositoryCard: {
    display: 'flex',
    margin: '5px 0',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },

  sectionHeader: {
    fontSize: '1.2rem',
  },
  card: {
    margin: '5px 0',
    padding: '20px 20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    background: 'white',
    height: '15rem',
    width: '20.5rem',
    borderRadius: '1rem',
    boxShadow: '1px 1px 18px rgba(213, 212, 214, 0.5);',
    '&:hover': {
      boxShadow: '1px 1px 18px rgba(19, 104, 194, 0.5);',
    },
  },
  repoTitle: {
    alignSelf: 'flex-start',
  },
  repoIcons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  countNumber: {
    fontSize: '1.5rem',
  },
}));

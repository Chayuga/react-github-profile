import { Box, Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import useStyles from './styles';

import dontCry from '../assets/images/cry-not-found.png';

interface INotFound {
  page: string,
  textColor: string
}

function Page404({ page, textColor }: INotFound) {
  const classes = useStyles();

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ width: '100%', marginTop: '240' }} className={classes.container}>
      <div className={classes.container}>
        {!mobile && (

        <div className={classes.imageContainer}>
          <img src={dontCry} alt="don't cry" className={classes.image} />
        </div>
        )}
        <div className={classes.infoContainer}>
          <div className={classes.infoInnerContainer}>
            <div className={classes.infoItem}>
              <Typography variant="h3">{!mobile && 'Awwww...Don\'t Cry'}</Typography>
            </div>
            <div className={classes.infoItem}>
              <Typography variant="h5">This <span style={{ color: textColor, borderColor: textColor }} className={classes.pageTitle}>{page}</span> has no data to display at the moment</Typography>
            </div>
            <div className={classes.infoItem}>
              <Typography variant="body1">But I have good news for you, how about you navigate to Home/Overview page and check how I can display data from different GitHub profiles?</Typography>
            </div>
            <div className={classes.infoItem}>
              <Button variant="contained" href="/">Let me take you there</Button>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default Page404;

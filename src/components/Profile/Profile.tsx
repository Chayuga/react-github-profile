import { Avatar, Box, Button } from '@mui/material';
import { Place, Facebook, Layers, StarRate, People, Person } from '@mui/icons-material';

import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

import useStyles from './styles';

import AvatarImage from '../assets/images/avatar.png';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(4.4)',
      opacity: 0,
    },
  },
}));

function Profile() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.profile}>
        <Box display="flex" flexDirection="column" justifyContent="space-around" alignItems="center">

          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
            <Avatar
              alt="Profile"
              src={AvatarImage}
              sx={{ width: 165, height: 165 }}
            />
          </StyledBadge>

          <div className={classes.profileName}>
            Rodgers Chayuga
            <span className={classes.profileName_loginUser}>&#64;Chayuga</span>
          </div>

          <div className={classes.profileBio}>
            Front-end engineer at Dynamic Visual Technology.<br />
            <span className={classes.profileName_loginUser}>
              SKILLS: ReactJS | NextJS | Typescript | Redux | Solidity | Web3
            </span>
          </div>
        </Box>
        <Box className={classes.socialGroup}>
          <Box className={classes.socialGroupMenus}>
            <div className={classes.socialButton}>
              <Facebook className={classes.socialMenuItem} />
              <Button href="https://web.facebook.com/senajichayuga/" target="_blank" style={{ color: 'rgba(0,0,0,0.8)' }}>
                Facebook
              </Button>
            </div>
            <div className={classes.socialButton}>
              <Place className={classes.socialMenuItem} />
              <p className={classes.socialButton_span}>
                Nairobi, Kenya
              </p>
            </div>
          </Box>
          <Button variant="outlined" className={classes.socialMenuButton}>
            <a href="https://github.com/Chayuga" target="_blank" className={classes.socialMenuButton_link} rel="noreferrer">
              Follow
            </a>
          </Button>
          <Box className={classes.socialGroupMenus}>
            <div className={classes.socialButton}>
              <Layers className={classes.socialMenuItem} />
              <p className={classes.socialButton_span}>
                Repositories <span>189</span>
              </p>
            </div>
            <div className={classes.socialButton}>
              <StarRate className={classes.socialMenuItem} />
              <p className={classes.socialButton_span}>
                Stars <span>189</span>
              </p>
            </div>
            <div className={classes.socialButton}>
              <People className={classes.socialMenuItem} />
              <p className={classes.socialButton_span}>
                Follower <span>24</span>
              </p>
            </div>
            <div className={classes.socialButton}>
              <Person className={classes.socialMenuItem} />
              <p className={classes.socialButton_span}>
                Following <span>77</span>
              </p>
            </div>
          </Box>
        </Box>

      </div>
    </div>
  );
}

export default Profile;

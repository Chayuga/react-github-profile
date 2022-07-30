import { Avatar, Box, Button } from '@mui/material';
import { Place, Facebook, Layers, StarRate, People, Person } from '@mui/icons-material';

import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

import useStyles from './styles';

import AvatarImage from '../assets/images/avatar.jpg';

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
  const padding = 20;

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

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', paddingTop: padding }}>
            Rodgers Chayuga
            <span style={{ color: '#706e6e' }}>&#64;Chayuga</span>
          </div>

          <div style={{ textAlign: 'center', paddingTop: padding }}>
            Front-end engineer at Dynamic Visual Technology.<br />
            <span style={{ color: '#706e6e' }}>
              SKILLS: ReactJS | NextJS | Typescript | Redux | Solidity | Web3
            </span>
          </div>
        </Box>
        <Box style={{ margin: '10px 30px', display: 'flex', flexDirection: 'column' }}>
          <Box style={{ paddingTop: padding }}>
            <div className={classes.socialButton}>
              <Facebook style={{ color: 'blue', fontSize: 'medium' }} />
              <Button href="https://web.facebook.com/senajichayuga/" target="_blank" style={{ color: 'rgba(0,0,0,0.8)' }}>
                Facebook
              </Button>
            </div>
            <div className={classes.socialButton}>
              <Place style={{ color: 'blue', fontSize: 'medium' }} />
              <p style={{ marginLeft: '10px' }}>
                Nairobi, Kenya
              </p>
            </div>
          </Box>
          <Button variant="outlined" style={{ marginTop: padding, borderStyle: 'solid', color: 'primary', borderRadius: '50px' }}>
            <a href="https://github.com/Chayuga" target="_blank" style={{ textDecoration: 'none', color: 'blue' }} rel="noreferrer">
              Follow
            </a>
          </Button>
          <Box style={{ display: 'flex', flexDirection: 'column', paddingTop: padding }}>
            <div className={classes.socialButton}>
              <Layers style={{ color: 'blue', fontSize: 'medium' }} />
              <p style={{ marginLeft: '10px' }}>
                Repositories <span>189</span>
              </p>
            </div>
            <div className={classes.socialButton}>
              <StarRate style={{ color: 'blue', fontSize: 'medium' }} />
              <p style={{ marginLeft: '10px' }}>
                Stars <span>189</span>
              </p>
            </div>
            <div className={classes.socialButton}>
              <People style={{ color: 'blue', fontSize: 'medium' }} />
              <p style={{ marginLeft: '10px' }}>
                Follower <span>24</span>
              </p>
            </div>
            <div className={classes.socialButton}>
              <Person style={{ color: 'blue', fontSize: 'medium' }} />
              <p style={{ marginLeft: '10px' }}>
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

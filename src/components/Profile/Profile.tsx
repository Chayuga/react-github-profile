import { Avatar, Box, Button } from '@mui/material';

import { Place, Facebook, Layers, StarRate, People, Person } from '@mui/icons-material';

import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

// import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import localAvatar from '../assets/images/avatar.png';
import useStyles from './styles';

import { fetchProfileAction } from '../../features/profile/profileSlice';

import { useAppDispatch } from '../../app/store';
import { IStoreDataTypes } from '../../app/types';

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
  const [user, setUser] = useState('Chayuga');

  // dispatch
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileAction(user));
  }, [dispatch]);

  const store = useSelector((state:IStoreDataTypes) => state?.profile);

  const { loading, profile } = store;

  console.log('========>', store);

  return (
    <div className={classes.profile}>
      {loading ? <h1 className="text-green-300 text-3xl text-center">Loading please wait...</h1>
        : (
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
                    src={profile?.avatar_url ? profile?.avatar_url : localAvatar}
                    sx={{ width: 165, height: 165 }}

                  />
                </StyledBadge>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', paddingTop: padding }}>
                  {profile?.name}
                  <span style={{ color: '#706e6e' }}>&#64;{profile?.login}</span>
                </div>

                <div style={{ textAlign: 'center', paddingTop: padding }}>
                  <span style={{ color: '#706e6e' }}>
                    {profile?.bio}
                  </span>
                </div>
              </Box>
              <Box style={{ margin: '10px 30px', display: 'flex', flexDirection: 'column' }}>
                <Box style={{ paddingTop: padding }}>
                  <div className={classes.socialButton}>
                    <Facebook style={{ color: 'blue', fontSize: 'medium' }} />
                    <Button href="" target="_blank" style={{ color: 'rgba(0,0,0,0.8)' }}>
                      Facebook
                    </Button>
                  </div>
                  <div className={classes.socialButton}>
                    <Place style={{ color: 'blue', fontSize: 'medium' }} />
                    <p style={{ marginLeft: '10px' }}>
                      {profile?.location}
                    </p>
                  </div>
                </Box>
                <Button variant="outlined" style={{ marginTop: padding, borderStyle: 'solid', color: 'primary', borderRadius: '50px' }}>
                  <a href={profile?.html_url} target="_blank" style={{ textDecoration: 'none', color: 'blue' }} rel="noreferrer">
                    Follow
                  </a>
                </Button>
                <Box style={{ display: 'flex', flexDirection: 'column', paddingTop: padding }}>
                  <div className={classes.socialButton}>
                    <Layers style={{ color: 'blue', fontSize: 'medium' }} />
                    <p style={{ marginLeft: '10px' }}>
                      Repositories <span>{profile?.public_repos ? profile?.public_repos : 'N/A'}</span>
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
                      Follower <span>{profile?.followers}</span>
                    </p>
                  </div>
                  <div className={classes.socialButton}>
                    <Person style={{ color: 'blue', fontSize: 'medium' }} />
                    <p style={{ marginLeft: '10px' }}>
                      Following <span>{profile?.following}</span>
                    </p>
                  </div>
                </Box>
              </Box>

            </div>
          </div>

        )}
    </div>
  );
}

export default Profile;

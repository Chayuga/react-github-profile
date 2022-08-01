import { Avatar, Box, Button } from '@mui/material';

import {
  Place,
  Facebook,
  Layers,
  StarRate,
  People,
  Person,
} from '@mui/icons-material';

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

  const store = useSelector((state: IStoreDataTypes) => state?.profile);

  const { loading, profile } = store;

  return (
    <div className={classes.profile}>
      {loading ? (
        <h1 className="text-green-300 text-3xl text-center">
          Loading please wait...
        </h1>
      ) : (
        <div>
          <div>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
              alignItems="center"
            >
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

              <div
                className={classes.profileName}
              >
                {profile?.name}
                <span className={classes.profileName_loginUser}>&#64;{profile?.login}</span>
              </div>

              <div className={classes.profileBio}>
                {profile?.bio}
              </div>
            </Box>
            <Box
              className={classes.socialGroup}
            >
              <Box className={classes.socialGroupMenus}>
                <div className={classes.socialButton}>
                  <Facebook className={classes.socialMenuItem} />
                  <Button
                    href=""
                    target="_blank"
                    style={{ color: 'rgba(0,0,0,0.8)' }}
                  >
                    Facebook
                  </Button>
                </div>
                <div className={classes.socialButton}>
                  <Place className={classes.socialMenuItem} />
                  <p className={classes.socialButton_span}>{profile?.location}</p>
                </div>
              </Box>
              <Button
                variant="outlined"
                className={classes.socialMenuButton}
              >
                <a
                  href={profile?.html_url}
                  target="_blank"
                  className={classes.socialMenuButton_link}
                  rel="noreferrer"
                >
                  Follow
                </a>
              </Button>
              <Box
                className={classes.socialGroupMenus}
              >
                <div className={classes.socialButton}>
                  <Layers className={classes.socialMenuItem} />
                  <p className={classes.socialButton_span}>
                    Repositories{' '}
                    <span className={classes.socialButton_count}>
                      {profile?.public_repos ? profile?.public_repos : 'N/A'}
                    </span>
                  </p>
                </div>
                <div className={classes.socialButton}>
                  <StarRate className={classes.socialMenuItem} />
                  <p className={classes.socialButton_span}>
                    Stars{' '}
                    <span className={classes.socialButton_count}>
                      {profile?.stargazers_count
                        ? profile?.stargazers_count
                        : '0'}
                    </span>
                  </p>
                </div>
                <div className={classes.socialButton}>
                  <People className={classes.socialMenuItem} />
                  <p className={classes.socialButton_span}>
                    Follower{' '}
                    <span className={classes.socialButton_count}>
                      {profile?.followers ? profile?.followers : '0'}
                    </span>
                  </p>
                </div>
                <div className={classes.socialButton}>
                  <Person className={classes.socialMenuItem} />
                  <p className={classes.socialButton_span}>
                    Following{' '}
                    <span className={classes.socialButton_count}>
                      {profile?.following ? profile?.following : '0'}
                    </span>
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

import { Avatar, Box, Button } from '@mui/material';

import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import localAvatar from '../assets/images/avatar.png';
import useStyles from './mobileStyle';

import { fetchProfileAction } from '../../features/profile/profileSlice';

import { useAppDispatch } from '../../app/store';
import { ISearchStateType, IStoreDataTypes } from '../../app/types';

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

  // dispatch
  const dispatch = useAppDispatch();
  const user = useSelector((state: ISearchStateType) => state.searches?.user);

  useEffect(() => {
    dispatch(fetchProfileAction(user));
  }, [dispatch]);

  const store = useSelector((state: IStoreDataTypes) => state?.profile);

  const { profile } = store;

  return (

    <div className={classes.container}>

      <Box className={classes.profile}>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar
            alt="Profile"
            src={profile?.avatar_url ? profile?.avatar_url : localAvatar}
            sx={{ width: 100, height: 100 }}
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
        <Button
          variant="outlined"
          className={classes.socialMenuButton}
          style={{ marginTop: padding,
            borderStyle: 'solid',
            color: 'primary',
            borderRadius: '100px' }}
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
      </Box>

    </div>
  );
}

export default Profile;

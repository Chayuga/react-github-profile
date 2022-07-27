import { Avatar } from '@mui/material';

// import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useStyles from './styles';

import { fetchProfileAction, initialStateObject } from '../../features/profile/profileSlice';

import { useAppDispatch } from '../../app/store';

function Profile() {
  const classes = useStyles();
  const [user, setUser] = useState('Chayuga');

  // dispatch
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileAction(user));
  }, [dispatch]);

  const store:initialStateObject = useSelector((state) => state?.profile);
  const { loading, reposList, profile, error } = store;

  return (
    <div className={classes.profile}>
      {loading ? <h1 className="text-green-300 text-3xl text-center">Loading please wait...</h1>
        : (
          <>
            <Avatar
              className="w-56 h-56 rounded-full"
              alt="Profile"
              src={profile?.avatar_url}
            />
            <div>Name: {' '}
              <span>
                {profile?.name}
              </span>
            </div>
            <div>&#64; {profile?.login}</div>
            <p>@Chayuga</p>
            <div>
              Bio: <span>{profile?.bio}</span>
            </div>
            <div>
              Company: <span>{profile?.company}</span>
            </div>
            <div>
              <p>Facebook Link</p>
              Location: <span>{profile?.location}</span>
            </div>
            <div>
              <a href={profile?.html_url}>
                Follow
              </a>
            </div>
            <h4>
              Followers <span>{profile?.followers}</span>
            </h4>
            <h4>
              Following <span>{profile?.following}</span>
            </h4>
            <h4>
              Repositories <span>{profile?.public_repos ? profile?.public_repos : 'N/A'}</span>
            </h4>
          </>
        )}
    </div>
  );
}

export default Profile;

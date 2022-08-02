import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import {
  Divider,
  ListSubheader,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Person, ReportGmailerrorred, ShoppingBag, Language, RemoveRedEye, Layers, StarRate, People } from '@mui/icons-material';

import { fetchProfileAction } from '../../features/profile/profileSlice';

import { useAppDispatch } from '../../app/store';
import { ISearchStateType, IStoreDataTypes } from '../../app/types';

import useStyles from './styles';

import githubWhite from '../assets/logo/github_white.png';

function SidebarMenu() {
  const classes = useStyles();
  // dispatch
  const dispatch = useAppDispatch();
  const user = useSelector((state: ISearchStateType) => state.searches?.user);

  useEffect(() => {
    dispatch(fetchProfileAction(user));
  }, [dispatch]);

  const store = useSelector((state: IStoreDataTypes) => state?.profile);

  const { profile } = store;

  return (
    <div className={classes.sideBar}>
      <Link to="/" className={classes.imageLink}>
        <img src={githubWhite} alt="GitHub Logo" className={classes.image} />
      </Link>
      <Divider />
      <ListSubheader className={classes.subHeader}>MAIN</ListSubheader>
      <Link to="/pull-request" className={classes.links}>
        <Person style={{ color: 'white', fontSize: 'large' }} />
        <p style={{ marginLeft: '10px' }}>
          Pull Request
        </p>
      </Link>
      <Link to="/issues" className={classes.links}>
        <ReportGmailerrorred style={{ color: 'white', fontSize: 'large' }} />
        <p style={{ marginLeft: '10px' }}>
          Issues
        </p>
      </Link>
      <Link to="/market" className={classes.links}>
        <ShoppingBag style={{ color: 'white', fontSize: 'large' }} />
        <p style={{ marginLeft: '10px' }}>
          Market
        </p>
      </Link>
      <Link to="/explore" className={classes.links}>
        <Language style={{ color: 'white', fontSize: 'large' }} />
        <p style={{ marginLeft: '10px' }}>
          Explore
        </p>
      </Link>
      <Divider />
      <ListSubheader className={classes.subHeader}>OTHER</ListSubheader>
      <Link to="/" className={classes.links}>
        <RemoveRedEye style={{ color: 'white', fontSize: 'large' }} />
        <p style={{ marginLeft: '10px' }}>
          Overview
        </p>
      </Link>
      <Link to="/repositories" className={classes.links}>
        <Layers style={{ color: 'white', fontSize: 'large' }} />
        <p style={{ marginLeft: '10px' }}>
          Repositories{' '}
          <span className={classes.socialButton_count}>
            {profile?.public_repos ? profile?.public_repos : 0}
          </span>
        </p>
      </Link>
      <Link to="/stars" className={classes.links}>
        <StarRate style={{ color: 'white', fontSize: 'large' }} />
        <p style={{ marginLeft: '10px' }}>
          Stars{' '}
          <span className={classes.socialButton_count}>
            {profile?.stargazers_count
              ? profile?.stargazers_count
              : '0'}
          </span>
        </p>
      </Link>
      <Link to="/followers" className={classes.links}>
        <People style={{ color: 'white', fontSize: 'large' }} />
        <p style={{ marginLeft: '10px' }}>
          Folowers{' '}
          <span className={classes.socialButton_count}>
            {profile?.followers ? profile?.followers : '0'}
          </span>
        </p>
      </Link>
    </div>
  );
}

export default SidebarMenu;

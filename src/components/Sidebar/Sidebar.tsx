import React, { useEffect, Dispatch, SetStateAction } from 'react';
import { Divider, List, ListItem, ListItemText, ListItemIcon, Box, CircularProgress, ListSubheader } from '@mui/material';
import { Link } from 'react-router-dom';

import useStyles from './styles';

import githubWhite from '../assets/logo/github_white.png';
// import githubblack from '../assets/logo/github_black.png';

const demoMain = [{ label: 'Pull Request', value: 'pull-request' },
  { label: 'Issues', value: 'issues' },
  { label: 'Market', value: 'market' },
  { label: 'Explore', value: 'explore' }];

const demoOthers = [
  { label: 'Overview', value: 'overview' },
  { label: 'Repositories', value: 'Repositories' },
  { label: 'Stars', value: 'Stars' },
  { label: 'Followers', value: 'Followers' }];

function Sidebar({ setMobileOpen }:{ setMobileOpen:Dispatch<SetStateAction<boolean>>}) {
  const classes = useStyles();

  return (
    <div className={classes.sideBar}>
      <Link to="/" className={classes.imageLink}>
        <img
          src={githubWhite}
          alt="GitHub Logo"
          className={classes.image}
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader className={classes.subHeader}>MAIN</ListSubheader>
        {demoMain.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              <ListItemIcon>
                <img src={githubWhite} className={classes.mainImages} height={30} />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader className={classes.subHeader}>OTHER</ListSubheader>
        {demoOthers.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              <ListItemIcon>
                <img src={githubWhite} className={classes.mainImages} height={30} />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>

  );
}

export default Sidebar;

import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListSubheader,
} from '@mui/material';
import { Link } from 'react-router-dom';

import useStyles from './styles';

import githubWhite from '../assets/logo/github_white.png';
// import githubblack from '../assets/logo/github_black.png';

const mainMenu = [
  { label: 'Pull Request', value: 'pull-request' },
  { label: 'Issues', value: 'issues' },
  { label: 'Market', value: 'market' },
  { label: 'Explore', value: 'explore' },
];

const otherMenu = [
  { label: 'Overview', value: 'overview' },
  { label: 'Repositories', value: 'Repositories' },
  { label: 'Stars', value: 'Stars' },
  { label: 'Followers', value: 'Followers' },
];

function SidebarMenu() {
  const classes = useStyles();

  return (
    <div className={classes.sideBar}>
      <Link to="/" className={classes.imageLink}>
        <img src={githubWhite} alt="GitHub Logo" className={classes.image} />
      </Link>
      <Divider />
      <List>
        <ListSubheader className={classes.subHeader}>MAIN</ListSubheader>
        {mainMenu.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              <ListItemIcon>
                <img src={githubWhite} height={30} alt={`${label} logo`} />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader className={classes.subHeader}>OTHER</ListSubheader>
        {otherMenu.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              <ListItemIcon>
                <img src={githubWhite} height={30} alt={`${label} logo`} />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
}

export default SidebarMenu;

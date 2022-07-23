import React, { useState } from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  Button,
  useMediaQuery,
} from '@mui/material';
import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
  ArrowDropDown,
  Search,
  Notifications,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

import makeStyles from './styles';

function NavBar() {
  const [profileOpen, setProfileOpen] = useState<boolean>(true);
  const isMobile = useMediaQuery('(max-width:600px)');
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const classes = makeStyles();
  const theme = useTheme();
  const isAuthenticated = true;

  return (
    <AppBar position="relative" style={{ background: 'transparent', boxShadow: 'none', color: 'black', width: '100%' }}>
      <Toolbar className={classes.toolbar}>
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: 'none' }}
              onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>

            {isAuthenticated && (
            <div className={classes.searchInput}>
              <Search /> &nbsp; Search Github...
            </div>
            )}
          </>
        ) : (
          <div className={classes.searchGroup}>
            {isAuthenticated && (
            <>
              <IconButton
                color="inherit"
                sx={{ ml: 1, mr: 2 }}
                onClick={() => {}}
              >
                {theme.palette.mode === 'dark' ? (
                  <Brightness7 />
                ) : (
                  <Brightness4 />
                )}
              </IconButton>

              <div className={classes.searchInput}>
                <Search /> &nbsp; Search Github...
              </div>
            </>
            )}
          </div>
        )}

        <div>
          {!isAuthenticated ? (
            <Button color="inherit" onClick={() => {}}>
              <AccountCircle /> &nbsp; Login
            </Button>
          ) : (
            <>
              <Button
                color="inherit"
                component={Link}
                to="/notification"
                className={classes.linkButton}
                onClick={() => {}}
              >
                <Notifications /> &nbsp; <ArrowDropDown />
              </Button>
              {/* TODO: This button will help in opening and closing off the Profile component */}
              <Button
                color="inherit"
                className={classes.linkButton}
                onClick={() => setProfileOpen((prevProfileOpen) => !prevProfileOpen)}
              >
                <AccountCircle /> &nbsp;{' '}
                {profileOpen ? (
                  <h5 style={{ color: 'red' }}>Close</h5>
                ) : (
                  <h5 style={{ color: 'green' }}>Open</h5>
                )}
              </Button>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

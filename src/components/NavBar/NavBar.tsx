import React from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7, ArrowDropDown, Search } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

import makeStyles from './styles';

function NavBar() {
  const classes = makeStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const isAuthenticated = true;

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        {isMobile && (
          <IconButton
            color="inherit"
            edge="start"
            style={{ outline: 'none' }}
            onClick={() => {}}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
        )}

        {!isMobile
          && (
          <div className={classes.searchGroup}>
            <Search /> &nbsp; Search Github ....
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
                to="/profile/:id"
                className={classes.linkButton}
                onClick={() => {}}
              >
                {!isMobile
              && (
              <>
                <AccountCircle /> &nbsp; <ArrowDropDown />

              </>
              )}

                {/* TODO: Move this avatar to profile section */}
                {/* <Avatar
                style={{ width: 150, height: 150 }}
                alt="Profile"
                src="https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png"
              /> */}
              </Button>
              <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
                {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </>
          )}
        </div>
        {isMobile && 'Search Github ....'}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

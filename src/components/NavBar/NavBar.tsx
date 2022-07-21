import React, { useState } from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7, ArrowDropDown, Search, Notifications } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

import makeStyles from './styles';
import { Sidebar } from '..';

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const classes = makeStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const isAuthenticated = true;

  return (
    <>
      <AppBar position="fixed" style={{ background: 'transparent', boxShadow: 'none', color: 'black' }}>
        <Toolbar className={classes.toolbar}>
          {isMobile && (
          <IconButton
            color="inherit"
            edge="start"
            style={{ outline: 'none' }}
            onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
          )}

          {!isMobile
          && (
            <div className={classes.searchGroup}>
              {isAuthenticated && (
              <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
                {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
              )}
              <div className={classes.searchInput}>
                <Search /> &nbsp; Search Github ....
              </div>
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
                <Notifications /> &nbsp; <ArrowDropDown />

              </>

              )}
                </Button>
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
              </>
            )}
          </div>
          {isMobile && 'Search Github ....'}
        </Toolbar>
      </AppBar>
      <div>
        <nav className={classes.drawer}>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent" open>
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
}

export default NavBar;

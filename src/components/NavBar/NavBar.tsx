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
                <Search /> &nbsp; Search Github ....
              </div>
              )}
            </>
          ) : (
            <div className={classes.searchGroup}>
              {isAuthenticated && (
                <>
                  <IconButton color="inherit" sx={{ ml: 1, mr: 2 }} onClick={() => {}}>
                    {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                  </IconButton>

                  <div className={classes.searchInput}>
                    <Search /> &nbsp; Search Github ....
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
                {!isMobile && (
                <Button
                  color="inherit"
                  component={Link}
                  to="/profile/:id"
                  className={classes.linkButton}
                  onClick={() => {}}
                >

                  <Notifications /> &nbsp; <ArrowDropDown />

                </Button>
                )}
                <Button
                  color="inherit"
                  component={Link}
                  to="/profile/:id"
                  className={classes.linkButton}
                  onClick={() => {}}
                >

                  <AccountCircle /> &nbsp; <ArrowDropDown />

                </Button>
              </>
            )}
          </div>
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

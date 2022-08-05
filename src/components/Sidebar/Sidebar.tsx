import React, { useState } from 'react';
import { Drawer, useMediaQuery } from '@mui/material';

import { SidebarMenu } from '..';
import useStyles from './styles';

function Sidebar() {
  const classes = useStyles();

  const isMobile = useMediaQuery('(max-width:600px)');

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  return (
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
            <SidebarMenu />
          </Drawer>
        ) : (
          <Drawer
            classes={{ paper: classes.drawerPaper }}
            variant="permanent"
            open
          >
            <SidebarMenu />
          </Drawer>
        )}
      </nav>
    </div>
  );
}

export default Sidebar;

import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export default makeStyles((theme: Theme) => ({
  toolbar: {
    height: '80px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      flexWrap: 'wrap',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  linkButton: {
    '&:hover': {
      color: 'green',
      textDecoration: 'none',
    },
  },
  searchGroup: {
    display: 'flex',
    alignItems: 'center',
    position: 'fixed',
  },

  searchInput: {
    display: 'flex',
  },
}));

// =========================================
// <Toolbar >
//         <div>
//           {isMobile ? (
//             <>
//               <IconButton
//                 color="inherit"
//                 edge="start"
//                 style={{ outline: 'none' }}
//                 onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
//                 className={classes.menuButton}
//               >
//                 <Menu />
//               </IconButton>

//               {isAuthenticated && (
//               <div className={classes.searchInput}>
//                 <Search /> &nbsp; Search Github...
//               </div>
//               )}
//             </>
//           ) : (
//             <div className={classes.searchGroup}>
//               {isAuthenticated && (
//               <>
//                 <IconButton
//                   color="inherit"
//                   sx={{ ml: 1, mr: 2 }}
//                   onClick={switchDarkMode}
//                 >
//                   {theme.palette.mode === 'dark' ? (
//                     <Brightness7 />
//                   ) : (
//                     <Brightness4 />
//                   )}
//                 </IconButton>

//                 <div className={classes.searchInput}>
//                   <Search /> &nbsp; Search Github...
//                 </div>
//               </>
//               )}
//             </div>
//           )}
//         </div>

//         <div style={{ position: 'fixed' }}>
//           {!isAuthenticated ? (
//             <Button color="inherit" onClick={() => {}}>
//               <AccountCircle /> &nbsp; Login
//             </Button>
//           ) : (
//             <>
//               <Button
//                 color="inherit"
//                 component={Link}
//                 to="/notification"
//                 className={classes.linkButton}
//               >
//                 <Notifications /> &nbsp; <ArrowDropDown />
//               </Button>
//               {/* TODO: This button will help in opening and closing off the Profile component */}
//               <Button
//                 color="inherit"
//                 className={classes.linkButton}
//                 onClick={() => setProfileOpen((prevProfileOpen) => !prevProfileOpen)}
//               >
//                 <AccountCircle /> &nbsp;{' '}
//                 {profileOpen ? (
//                   <h5 style={{ color: 'red' }}>Close</h5>
//                 ) : (
//                   <h5 style={{ color: 'green' }}>Open</h5>
//                 )}
//               </Button>
//             </>
//           )}
//         </div>
//       </Toolbar>

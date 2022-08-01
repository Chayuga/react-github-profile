import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const drawerWidth = 240;

export default makeStyles((theme: Theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

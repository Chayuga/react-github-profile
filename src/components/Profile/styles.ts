import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const profileWidth = 260;

export default makeStyles((theme: Theme) => ({
  profile: {
    padding: "50px 10px 10px 10px",
    position: "sticky",
    top: "0",
    [theme.breakpoints.up("sm")]: {
      height: "100vh",
      color: "inherit",
      width: profileWidth,
      flexShrink: 0,
      boxShadow: "0 0 15px rgba(0,0,0,0.25)",
    },
  },
  socialButton: {
    display: "flex",
    alignItems: "center",
    paddingTop: "20",
  },
  gitCount: {
    marginLeft: "20",
    justifyContent: "center",
    padding: "4px 4px",
    borderRadius: "50px",
    fontSize: "12px",
    backgroundColor: "green",
    color: "white",
  },
}));

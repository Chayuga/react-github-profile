import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  root: {
    display: "flex",
    height: "100%",
    background: "#f7f7f7",
  },

  content: {
    flexGrow: "1",
    padding: "2em",
  },

  toolbar: {
    height: "70px",
  },
}));

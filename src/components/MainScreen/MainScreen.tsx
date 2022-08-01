import React from "react";
import { Profile, NavBar } from "..";
import useStyles from "./styles";

interface IChildren {
  children: JSX.Element[] | JSX.Element;
}

function MainScreen({ children }: IChildren) {
  const classes = useStyles();

  return (
    <div className={classes.mainScreen}>
      <Profile />
      <div className={classes.mainScreen__dashboard}>
        <NavBar />
        {children}
      </div>
    </div>
  );
}

export default MainScreen;

import React from "react";
import { SummerCard, RepositoryCard } from "..";
import useStyles from "./styles";

function Overview() {
  const classes = useStyles();
  return (
    <div className={classes.overviewMain}>
      <SummerCard />
      <RepositoryCard heading="Popular Repositories" />
    </div>
  );
}

export default Overview;

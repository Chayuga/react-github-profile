import React from 'react';
import SummerCard from '../MainScreen/SummerCard/SummerCard';
import useStyles from './styles';

function Overview() {
  const classes = useStyles();
  return <div className={classes.overviewMain}><SummerCard /></div>;
}

export default Overview;

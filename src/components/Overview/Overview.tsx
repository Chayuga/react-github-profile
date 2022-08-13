import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { useSelector } from 'react-redux';
import { SummerCard, RepositoryCard } from '..';
import { ISearchStateType } from '../../app/types';
import useStyles from './styles';

function Overview() {
  const classes = useStyles();
  const user = useSelector((state: ISearchStateType) => state.searches?.user);
  return (
    <div className={classes.overviewMain}>
      <SummerCard />
      <RepositoryCard heading='Popular Repositories' />
      <div className={classes.gitCalendar}>
        <GitHubCalendar username={user} />
      </div>
    </div>
  );
}

export default Overview;

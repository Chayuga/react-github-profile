import { Box, Typography } from '@mui/material';

// import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { fetchProfileAction } from '../../../features/profile/profileSlice';

import { useAppDispatch } from '../../../app/store';
import { ISearchStateType, IStoreDataTypes } from '../../../app/types';

import useStyles from './styles';

interface ISummery {
  title: string;
  countNumber: number | undefined;
}

function Card({ title, countNumber }: ISummery) {
  const classes = useStyles();
  return (
    <Box className={classes.card}>
      <Typography sx={{ fontSize: '0.8rem' }}>{title}</Typography>
      <Typography sx={{ fontSize: '1.5rem' }}>{countNumber}</Typography>
    </Box>
  );
}

function SummerCard() {
  const classes = useStyles();
  const user = useSelector((state: ISearchStateType) => state.searches?.user);

  // dispatch
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileAction(user));
  }, [dispatch]);

  const store = useSelector((state: IStoreDataTypes) => state?.profile);

  const { profile } = store;

  return (
    <div className={classes.summeryCard} key={profile?.id}>
      <Card
        title="Pull Requests"
        countNumber={
          profile?.open_issues_count ? profile?.open_issues_count : 0
        }
      />
      <Card
        title="Forks"
        countNumber={profile?.forks_count ? profile?.forks_count : 0}
      />
      <Card
        title="Repositories"
        countNumber={profile?.public_repos ? profile?.public_repos : 0}
      />
      <Card
        title="Stars"
        countNumber={profile?.stargazers_count ? profile?.stargazers_count : 0}
      />
      <Card
        title="Followers"
        countNumber={profile?.followers ? profile?.followers : 0}
      />
      <Card
        title="Following"
        countNumber={profile?.following ? profile?.following : 0}
      />
    </div>
  );
}

export default SummerCard;

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Profile, NavBar, MobileProfile } from '..';
import { useAppDispatch } from '../../app/store';
import { ISearchStateType, IToggleStateType } from '../../app/types';
import { fetchProfileAction } from '../../features/profile/profileSlice';
import useStyles from './styles';

interface IChildren {
  children: JSX.Element[] | JSX.Element;
}

function MainScreen({ children }: IChildren) {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');

  // dispatch
  const dispatch = useAppDispatch();
  const user = useSelector((state: ISearchStateType) => state.searches?.user);
  const toggleOnOff = useSelector((state: IToggleStateType) => state.switchOn?.toggleOn);

  useEffect(() => {
    dispatch(fetchProfileAction(user));
  }, [dispatch]);

  return (
    <div className={classes.mainScreen}>
      {!isMobile && <Profile />}
      <div className={classes.mainScreen__dashboard}>
        <NavBar />
        {isMobile && <MobileProfile />}
        {children}
      </div>

    </div>
  );
}

export default MainScreen;

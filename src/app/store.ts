import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import reposReducer from '../features/repos/reposSlices';
import profileReducer from '../features/profile/profileSlice';

const store = configureStore({
  reducer: {
    repos: reposReducer,
    profile: profileReducer,
  },
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;

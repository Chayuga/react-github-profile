import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import reposReducer from '../features/repos/reposSlices';
import profileReducer from '../features/profile/profileSlice';
import searchReducer from '../features/search/searchSlice';
import toggleReducer from '../features/toggle/toggleSlice';

const store = configureStore({
  reducer: {
    repos: reposReducer,
    profile: profileReducer,
    searches: searchReducer,
    switchOn: toggleReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;

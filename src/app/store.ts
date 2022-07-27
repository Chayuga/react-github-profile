import { configureStore } from '@reduxjs/toolkit';
import reposReducer from '../features/repos/reposSlices';
import profileReducer from '../features/profile/profileSlice';

const store = configureStore({
  reducer: {
    repos: reposReducer,
    profile: profileReducer,
  },
});

export default store;

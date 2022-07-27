import { configureStore } from '@reduxjs/toolkit';
import reposReducer from '../features/repos/reposSlices.js';

const store = configureStore({
  reducer: {
    repos: reposReducer,
  },
});

export default store;

import { createSlice } from '@reduxjs/toolkit';

import { IProfileStateType, IReposStateType } from '../../app/types';

export const userInitial = {
  user: '',
} as IReposStateType | IProfileStateType;

// Creating slice for Search
export const searchSlices = createSlice({
  name: 'search',
  initialState: userInitial,
  reducers: {
    setSearch: (state, action) => {
      state.user = action.payload;
    },
    clearSearch: (state) => {
      state.user = '';
    },
  },
});

export const { setSearch, clearSearch } = searchSlices.actions;
export default searchSlices.reducer;

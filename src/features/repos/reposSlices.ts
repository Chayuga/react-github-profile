import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { userInitial } from '../search/searchSlice';

// Creating Actions for Repos
export const fetchReposAction = createAsyncThunk(
  'repos/list',
  async (user: string, { rejectWithValue }) => {
    try {
      // make http call.
      const { data } = await axios.get(
        `https://api.github.com/users/${user}/repos?per_page=30&sort==asc`,
      );
      return data;
    } catch (error) {
      if (error instanceof Error && !error?.message) {
        throw error;
      }
      return rejectWithValue(error instanceof Error && error?.message);
    }
  },
);

// slice for Repos
const reposSlices = createSlice({
  name: 'repos',
  initialState: userInitial,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchReposAction.pending, (state) => ({
      ...state,
      loading: true,
    }));

    builder.addCase(fetchReposAction.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      repos: action?.payload,
      error: undefined,
    }));

    builder.addCase(fetchReposAction.rejected, (state, action) => ({
      ...state,
      loading: false,
      repos: undefined,
      error: action?.payload,
    }));
  },
});

// get the reducer
export default reposSlices.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Creating Actions for Repos
const fetchReposAction = createAsyncThunk('repos/list', async (user, { rejectWithValue, getState, dispatch }) => {
  try {
    // make http call.
    const { data } = await axios.get(`https://api.github.com/users/${user}/repos?per_page=30&sort==asc`);
    return data;
  } catch (error) {
    if (error instanceof Error && !error?.message) {
      throw error;
    }
    return rejectWithValue(error instanceof Error && error?.message);
  }
});

// slice for Repos
const reposSlices = createSlice({
  name: 'repos',
  initialState: { user: 'chayuga' },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchReposAction.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchReposAction.fulfilled, (state, action) => {
      state.loading = false;
      state.reposList = action?.payload;
      state.error = undefined;
    });

    builder.addCase(fetchReposAction.rejected, (state, action) => {
      state.loading = false;
      state.reposList = undefined;
      state.error = action?.payload;
    });
  },
});

// get the reducer
export default reposSlices.reducer;

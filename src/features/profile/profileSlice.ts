import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface initialStateObject{
  user: string;
  loading: boolean;
  reposList: Array<object> | undefined;
  profile: Array<object> | undefined;
  error: unknown;

}

const userInitial = {
  user: 'Chayuga',
} as initialStateObject;

// Creating Actions for Repos
export const fetchProfileAction = createAsyncThunk('profile/list', async (user, { rejectWithValue, getState, dispatch }) => {
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
const profileSlices = createSlice({
  name: 'repos',
  initialState: userInitial,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProfileAction.pending, (state) => ({ ...state, loading: true }));

    builder.addCase(fetchProfileAction.fulfilled, (state, action) => ({
      ...state, loading: false, reposList: action?.payload, error: undefined,
    }));

    builder.addCase(fetchProfileAction.rejected, (state, action) => ({
      ...state, loading: false, reposList: undefined, error: action?.payload,
    }));
  },
});

// get the reducer
export default profileSlices.reducer;

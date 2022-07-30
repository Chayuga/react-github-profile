import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IProfileStateType } from '../../app/types';

const userInitial = {
  user: 'Chayuga',
} as IProfileStateType;

// Creating Actions for Repos
export const fetchProfileAction = createAsyncThunk('profile/list', async (user: string, { rejectWithValue }) => {
  try {
    // make http call.
    const { data } = await axios.get(`https://api.github.com/users/${user}`);
    return data;
  } catch (error) {
    if (error instanceof Error && !error?.message) {
      throw error;
    }
    return rejectWithValue(error instanceof Error && error?.message);
  }
});

// slice for Profile
const profileSlices = createSlice({
  name: 'repos',
  initialState: userInitial,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProfileAction.pending, (state) => ({ ...state, loading: true }));

    builder.addCase(fetchProfileAction.fulfilled, (state, action) => ({
      ...state, loading: false, profile: action?.payload, error: undefined,
    }));

    builder.addCase(fetchProfileAction.rejected, (state, action) => ({
      ...state, loading: false, profile: undefined, error: action?.payload,
    }));
  },
});

// get the reducer
export default profileSlices.reducer;

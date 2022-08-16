import { createSlice } from '@reduxjs/toolkit';
import { IToggle } from '../../app/types';
// import { IToggleStateType } from '../../app/types';

export const switchInitial = {
  toggleOn: true,
} as IToggle;

// Creating slice to open and clos profile component
export const toggleSlice = createSlice({
  name: 'toggle',
  initialState: switchInitial,
  reducers: {
    setToggle: (state, action) => {
      state.toggleOn = action.payload;
    },
  },
});

export const { setToggle } = toggleSlice.actions;
export default toggleSlice.reducer;

// src/features/registerSlice.js
import { createSlice } from '@reduxjs/toolkit';

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    users: [],
  },
  reducers: {
    registerUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { registerUser } = registerSlice.actions;
export const selectUsers = (state) => state.register.users;
export default registerSlice.reducer;

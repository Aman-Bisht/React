import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Brian Kernighan" },
  { id: "1", name: "Kent Beck" },
  { id: "2", name: "Mark Lutz" },
];

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{}
})

export const selectAllUsers = (state)=>state.users
export default userSlice.reducer;


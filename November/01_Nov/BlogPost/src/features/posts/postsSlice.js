import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 123,
    title: "Data",
    content:
      "Data In common usage and statistics, data is a collection of discrete or continuous values that convey information, describing the quantity, quality, fact, ",
  },
  {
    id: 123,
    title: "Data",
    content:
      "Data In common usage and statistics, data is a collection of discrete or continuous values that convey information, describing the quantity, quality, fact, ",
  },
];
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // postAdded:(state,action)=>{
    //     state.push(action.payload)
    // }
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
  },
});


export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;

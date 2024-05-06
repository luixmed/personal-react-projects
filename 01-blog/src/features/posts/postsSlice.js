import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good things.",
    author: "Dude Lebowski",
  },
  {
    id: "2",
    title: "Slices...",
    content: "The more I say slice, the more I want pizza.",
    author: "Neil Young",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      prepare(title, content, author) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            author,
          },
        };
      },

      reducer(state, action) {
        state.push(action.payload);
      },
    },
  },
});

export const getPosts = (state) => state.posts;

export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;

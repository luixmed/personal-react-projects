import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "../features/posts/postsSlice";
import authorsSlice from "../features/authors/authorsSlice";

const store = configureStore({
  reducer: {
    posts: postsSlice,
    authors: authorsSlice,
  },
});

export default store;

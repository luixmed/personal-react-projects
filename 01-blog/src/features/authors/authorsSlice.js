import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Dude Lebowski" },
  { id: "1", name: "Neil Young" },
  { id: "2", name: "Dave Gray" },
];

const authorsSlice = createSlice({
  name: "authors",
  initialState,
  reducers: {},
});

export const getAllAuthors = (state) => state.authors;

export default authorsSlice.reducer;

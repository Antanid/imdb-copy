import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState = {
  movie: [],
};
const UpcomingFilm = createSlice({
  name: "upcomingFilm",
  initialState,
  reducers: {
    addUpcoming(state, action) {
      state.movie = action.payload;
    },
  },
});

export const { addUpcoming } = UpcomingFilm.actions;
export const setUpcomingMovie = (state: RootState) => state.UpcomingFilm.movie;

export default UpcomingFilm.reducer;

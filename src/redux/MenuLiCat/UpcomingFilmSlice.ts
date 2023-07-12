import { createSlice } from "@reduxjs/toolkit";
import { fetchFilms } from "./asyncActions";
import { RootState } from "../store";
import { Status } from "../types";


const initialState = {
  movie: [],
  status: Status.LOADING
};
const UpcomingFilm = createSlice({
  name: "upcomingFilm",
  initialState,
  reducers: {
    addUpcoming(state, action) {
      state.movie = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilms.pending, (state) => {
        state.status = Status.LOADING;
        state.movie = [];
      });
      builder.addCase(fetchFilms.fulfilled, (state, action: any) => {
        state.movie = action.payload;
        state.status = Status.SUCCESS;
      });
      builder.addCase(fetchFilms.rejected, (state) => {
        state.status = Status.ERROR;
        state.movie = [];
      });
}
});

export const { addUpcoming } = UpcomingFilm.actions;
export const setUpcomingMovie = (state: RootState) => state.UpcomingFilm.movie;
export const setUpcomingStatus = (state: RootState) => state.UpcomingFilm.status;

export default UpcomingFilm.reducer;

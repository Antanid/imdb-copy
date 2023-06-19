import { createSlice } from "@reduxjs/toolkit"
import { fetchFilms } from "./asyncActions";
import { RootState } from "./store";
import { Status } from "./types";


const initialState = {
    movie: [],
    status: Status.LOADING,
}

const movieSlice = createSlice({
    name: 'popularSlice',
    initialState,
    reducers: {
        addMovie(state, action) {
            state.movie = action.payload
        }
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
})

export const { addMovie } = movieSlice.actions;
export const setMovie = (state: RootState) => state.PopularFilm.movie;
export const setStatusPopular = (state: RootState) => state.PopularFilm.status;

export default movieSlice.reducer;
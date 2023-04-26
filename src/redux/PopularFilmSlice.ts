import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "./store";


const initialState = {
    movie: []
}

const movieSlice = createSlice({
    name: 'popularSlice',
    initialState,
    reducers: {
        addMovie(state, action) {
            state.movie = action.payload
        }
    }
})

export const { addMovie } = movieSlice.actions;
export const setMovie = (state: RootState) => state.PopularFilm.movie;

export default movieSlice.reducer;
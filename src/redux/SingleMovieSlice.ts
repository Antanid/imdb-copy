import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "./store";


const initialState = {
    id: 1,
    movie: []
}

const SingleMovie = createSlice({
    name: 'singleMovie',
    initialState,
    reducers: {
        addID(state, action) {
            state.id = action.payload;
        },
        addSingleFilm(state, action) {
         
            state.movie = action.payload
        },
    }
})

export const { addID, addSingleFilm } = SingleMovie.actions;
export const setSingleId = (state: RootState) => state.SingleMovie.id;
export const setSingleMovie = (state: RootState) => state.SingleMovie.movie;

export default SingleMovie.reducer;
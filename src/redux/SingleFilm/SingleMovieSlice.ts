import { createSlice } from "@reduxjs/toolkit"
import { fetchSingleMovie } from "./asyncSingleFilm";
import { RootState } from "../store";
import { Status } from "../types";


const initialState = {
    id: 1,
    movie: [],
    status: Status.LOADING,
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
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSingleMovie.pending, (state) => {
            state.status = Status.LOADING;
            state.movie = [];
          });
          builder.addCase(fetchSingleMovie.fulfilled, (state, action: any) => {
            state.movie = action.payload;
            state.id = action.payload.id;
            state.status = Status.SUCCESS;
          });
          builder.addCase(fetchSingleMovie.rejected, (state) => {
            state.status = Status.ERROR;
            state.movie = [];
          });
    }
})

export const { addID, addSingleFilm } = SingleMovie.actions;
export const setSingleId = (state: RootState) => state.SingleMovie.id;
export const setSingleMovie = (state: RootState) => state.SingleMovie.movie;
export const setSingleStatus= (state: RootState) => state.SingleMovie.status;

export default SingleMovie.reducer;
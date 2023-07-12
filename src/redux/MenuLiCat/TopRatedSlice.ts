import { createSlice } from "@reduxjs/toolkit"
import { fetchFilms } from "./asyncActions";
import { RootState } from "../store";
import { Status } from "../types";

const initialState = {
    movie: [],
    status: Status.LOADING
}

const TopRatedSlice = createSlice({
    name: 'topRated',
    initialState,
    reducers: {
        addTopRated (state, action){
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

export const { addTopRated } = TopRatedSlice.actions;
export const setTopRated = (state: RootState) => state.TopRated.movie;
export const setTopRatedStatus = (state: RootState) => state.TopRated.status;

export default TopRatedSlice.reducer;
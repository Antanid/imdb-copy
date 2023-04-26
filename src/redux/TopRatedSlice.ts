import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "./store";


const initialState = {
    movie: []
}

const TopRatedSlice = createSlice({
    name: 'topRated',
    initialState,
    reducers: {
        addTopRated (state, action){
            state.movie = action.payload
        }
    }
})

export const { addTopRated } = TopRatedSlice.actions;
export const setTopRated = (state: RootState) => state.TopRated.movie;

export default TopRatedSlice.reducer;
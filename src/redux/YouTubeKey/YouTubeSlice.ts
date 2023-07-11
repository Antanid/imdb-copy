import { createSlice } from "@reduxjs/toolkit"
import { Status } from "../types";
import { RootState } from "../store";
import { fetchYoutubeTrailer } from "./asyncYouTubeKey";


const initialState = {
  key: null,
  status: Status.LOADING,
}


const YouTubeSlice = createSlice({
  name: 'YouTubeSlice',
  initialState,
  reducers: {
    addKey(state, action) {
      state.key = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchYoutubeTrailer.pending, (state) => {
      state.status = Status.LOADING;
      state.key = null;
    });
    builder.addCase(fetchYoutubeTrailer.fulfilled, (state, action: any) => {
      state.key = action.payload
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchYoutubeTrailer.rejected, (state) => {
      state.status = Status.ERROR;
      state.key = null;
    });
  }
})

export const {addKey} = YouTubeSlice.actions;

export const setYouTubeKey = (state: RootState) => state.YouTubeSlice.key;

export default YouTubeSlice.reducer
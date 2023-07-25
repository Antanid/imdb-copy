import { createSlice } from "@reduxjs/toolkit";
import { fetchSearchFilms } from "./asyncSearch";
import { RootState } from "../store";
import { Status } from "../types";

const initialState = {
  movieList: [],
  page: 1,
  totalPage: 1,
  status: Status.LOADING
};

const SearchSlice = createSlice({
  name: "search_slice",
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    nextPage(state) {
      if (state.totalPage > state.page) {
        state.page++;
      }
    },
    prevPage(state) {
      if (state.page > 1) {
        state.page--;
      }
    },
    startPage(state){
      if(state.page > state.totalPage){
        state.page = 1
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchFilms.pending, (state) => {
        state.status = Status.LOADING;
        state.movieList = [];
      });
      builder.addCase(fetchSearchFilms.fulfilled, (state, action: any) => {
        state.movieList = action.payload.results;
        state.page = action.payload.page;
        state.totalPage = action.payload.total_pages;
        state.status = Status.SUCCESS;
      });
      builder.addCase(fetchSearchFilms.rejected, (state) => {
        state.status = Status.ERROR;
        state.movieList = [];
      });
}
});

export const { setPage, nextPage, prevPage, startPage } = SearchSlice.actions;
export const setResult = (state: RootState) => state.SearchSlice.movieList;
export const setPageNum = (state: RootState) => state.SearchSlice.page;
export const totalPage = (state: RootState) => state.SearchSlice.totalPage;
export const setStatusSearch = (state: RootState) => state.SearchSlice.status;


export default SearchSlice.reducer;

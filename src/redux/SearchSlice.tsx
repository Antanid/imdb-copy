import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState = {
  movieList: [],
  page: 1,
  totalPage: 1,
};

const SearchSlice = createSlice({
  name: "search_slice",
  initialState,
  reducers: {
    searchResult(state, action) {
      state.movieList = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setTotalPage(state, action) {
      state.totalPage = action.payload;
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
  },
});

export const { searchResult, setPage, nextPage, setTotalPage, prevPage } = SearchSlice.actions;
export const setResult = (state: RootState) => state.SearchSlice.movieList;
export const setPageNum = (state: RootState) => state.SearchSlice.page;
export const totalPage = (state: RootState) => state.SearchSlice.totalPage;

export default SearchSlice.reducer;

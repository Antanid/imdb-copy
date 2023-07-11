import { createSlice } from "@reduxjs/toolkit"
import { Status } from "../types";
import { RootState } from "../store";
import { fetchCategory } from "./asyncCategory";


const initialState = {
  filmArr: [],
  page: 1,
  status: Status.LOADING,
  changeCategory: 'Thriller',
  idCategory: 53,
  totalPage: 1
}


const CategorySlice = createSlice({
  name: 'CategorySlice',
  initialState,
  reducers: {
  addTextCategory (state, action){
    state.changeCategory = action.payload;
  },
  addCategotyId (state, action){
    state.idCategory = action.payload;
  },
  addCategoryPage (state, action){
    state.page = action.payload;
  },
  onPrevCat(state){
    if(state.page > 1){
      state.page--
    }
  },
  onNextCat(state){
    if(state.totalPage > state.page){
      state.page++
    }
  },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.pending, (state) => {
      state.status = Status.LOADING;
      state.filmArr = [];
    });
    builder.addCase(fetchCategory.fulfilled, (state, action: any) => {
        state.status = Status.SUCCESS;
      state.filmArr = action.payload.data.results;
      state.totalPage = action.payload.data.total_pages
    });
    builder.addCase(fetchCategory.rejected, (state) => {
      state.status = Status.ERROR;
      state.filmArr = [];
      state.page = 1
    });
  }
})

export const {addTextCategory, addCategotyId, onPrevCat, onNextCat, addCategoryPage} = CategorySlice.actions;

export const setCategoryFilm = (state: RootState) => state.CategorySlice.filmArr;
export const setCategoryText = (state: RootState) => state.CategorySlice.changeCategory;
export const setCategoryPage= (state: RootState) => state.CategorySlice.page;
export const setCategoryStatus= (state: RootState) => state.CategorySlice.status;
export const setIdCategory= (state: RootState) => state.CategorySlice.idCategory;
export const setCategoryTotalPage= (state: RootState) => state.CategorySlice.totalPage;

export default CategorySlice.reducer
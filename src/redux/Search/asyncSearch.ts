import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type SearchParamsType = {
    input: string,
    language: string,
    page: number
}
export const fetchSearchFilms = createAsyncThunk("SearchSlice/fetchSearchFilms", async (params: SearchParamsType) => {
    const { input, language, page } = params;
    const SearchFilmArr = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${
        input ? input : "Batman"
      }&api_key=4e44d9029b1270a757cddc766a1bcb63&language=${language}&page=${page}`)
    return SearchFilmArr.data
})

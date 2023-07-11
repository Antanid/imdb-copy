import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type SingleParamsType = {
    id: number,
    language: string
}
export const fetchSingleMovie = createAsyncThunk("singleFilm/fetchSingleMovie", async (params: SingleParamsType) => {
    const { id, language } = params;
    const SingleFilmArr = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=${language}`)
    return SingleFilmArr.data
})

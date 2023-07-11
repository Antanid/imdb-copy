import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FetchType } from "./types";

export const fetchFilms = createAsyncThunk("movieSlice/fetchFilm", async (params: FetchType) => {
    const { movieCateg, language } = params;
    const FilmArr = await axios.get(`https://api.themoviedb.org/3/movie/${movieCateg}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=${language}`);
    return FilmArr.data.results
})
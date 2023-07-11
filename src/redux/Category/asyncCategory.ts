import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type CategoryProps = {
    idFilm: number;
    language: string;
    isPage: number
}


export const fetchCategory = createAsyncThunk('CategorySlice/fetchCategory', async(params: CategoryProps) => {
    const {idFilm, language, isPage} = params;
    const fetchArr = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&with_genres=${idFilm ? idFilm : 53}&page=${isPage}&language=${language}
    `)
    console.log(idFilm)
    return fetchArr
})
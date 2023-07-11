import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


type TrailerProps = {
    id: number,
    language: string
}

export const fetchYoutubeTrailer = createAsyncThunk("YouTubeSlice/fetchYoutubeTrailer", async (params: TrailerProps) => {
    const { id, language } = params;
    const TrailerArr = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=4e44d9029b1270a757cddc766a1bcb63&language=${language ? language : "en"}`)
    console.log(TrailerArr)
    return TrailerArr.data.results[0].key
})
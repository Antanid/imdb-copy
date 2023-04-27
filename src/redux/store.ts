import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux'
import PopularFilm from './PopularFilmSlice'
import UpcomingFilm from "./UpcomingFilmSlice";
import TopRated from './TopRatedSlice';
import SingleMovie from './SingleMovieSlice';


export const store = configureStore({
    reducer: {
        PopularFilm,
        UpcomingFilm,
        TopRated,
        SingleMovie
    }
})

export type RootState = ReturnType <typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
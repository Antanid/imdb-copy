import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux'
import PopularFilm from './PopularFilmSlice'
import UpcomingFilm from "./UpcomingFilmSlice";
import TopRated from './TopRatedSlice';
import SingleMovie from './SingleMovieSlice';
import SearchSlice from './SearchSlice'

export const store = configureStore({
    reducer: {
        PopularFilm,
        UpcomingFilm,
        TopRated,
        SingleMovie,
        SearchSlice
    }
})

export type RootState = ReturnType <typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
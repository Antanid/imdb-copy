import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux'
import PopularFilm from './MenuLiCat/PopularFilmSlice'
import UpcomingFilm from "./MenuLiCat/UpcomingFilmSlice";
import TopRated from './MenuLiCat/TopRatedSlice';
import SingleMovie from './SingleFilm/SingleMovieSlice';
import SearchSlice from './Search/SearchSlice';
import ChangeLanguageSlice from './ChangeLanguageSlice';
import YouTubeSlice from './YouTubeKey/YouTubeSlice';
import CategorySlice from './Category/CategorySlice'

export const store = configureStore({
    reducer: {
        PopularFilm,
        UpcomingFilm,
        TopRated,
        SingleMovie,
        SearchSlice,
        ChangeLanguageSlice,
        YouTubeSlice,
        CategorySlice
    }
})

export type RootState = ReturnType <typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
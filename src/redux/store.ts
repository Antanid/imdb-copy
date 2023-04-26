import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux'
import PopularFilm from './PopularFilmSlice'
import UpcomingFilm from "./UpcomingFilmSlice";
import TopRated from './TopRatedSlice'


export const store = configureStore({
    reducer: {
        PopularFilm,
        UpcomingFilm,
        TopRated
    }
})

export type RootState = ReturnType <typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
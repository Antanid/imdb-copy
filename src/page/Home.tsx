import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setStatusPopular } from "../redux/MenuLiCat/PopularFilmSlice";
import HomeCarousel from "../components/Home/HomeCarousel";
import { useSelector } from "react-redux";
import { setMovie } from "../redux/MenuLiCat/PopularFilmSlice";
import CardPopular from "../components/CardPopular/CardPopular";
import { selectedLanguage } from "../redux/ChangeLanguageSlice";
import { fetchFilms } from "../redux/MenuLiCat/asyncActions";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const language = useSelector(selectedLanguage);
  const status = useSelector(setStatusPopular);

  useEffect(() => {
    const movieCateg = "popular";
    // @ts-ignore: Unreachable code error
    dispatch(fetchFilms({ language, movieCateg }));
  }, [dispatch, language]);

  const movieRedux = useSelector(setMovie);

  return (
    <div>
      <HomeCarousel movie={movieRedux} />
      <CardPopular title="POPULAR" movieRedux={movieRedux} Loading={status} />
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import HomeCarousel from "../components/Home/HomeCarousel";
import { useSelector } from "react-redux";
import { setMovie } from "../redux/MenuLiCat/PopularFilmSlice";
import CardPopular from "../components/CardPopular/CardPopular";
import { selectedLanguage } from "../redux/ChangeLanguageSlice";
import { fetchFilms } from "../redux/MenuLiCat/asyncActions";

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const language = useSelector(selectedLanguage);

  useEffect(() => {
    setLoading(true);
    async function getApi() {
      const movieCateg = "popular";
      // @ts-ignore: Unreachable code error
     await dispatch(fetchFilms({ language, movieCateg }));
      setLoading(false);
    }
 getApi()
  }, [dispatch, language]);

  const movieRedux = useSelector(setMovie);

  return (
    <div>
      <HomeCarousel movie={movieRedux} />
      <CardPopular title="POPULAR" movieRedux={movieRedux} Loading={loading} />
    </div>
  );
};

export default Home

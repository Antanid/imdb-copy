import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardPopular from "../components/CardPopular/CardPopular";
import { fetchFilms } from "../redux/MenuLiCat/asyncActions";
import { selectedLanguage } from "../redux/ChangeLanguageSlice";
import { setTopRated } from "../redux/MenuLiCat/TopRatedSlice";

const TopRated = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const language = useSelector(selectedLanguage);

  useEffect(() => {
    setLoading(true);
    async function getApi() {
      const movieCateg = 'top_rated';
      // @ts-ignore: Unreachable code error
    await dispatch(fetchFilms({language, movieCateg}))
      setLoading(false);
    }
    getApi()
  }, [dispatch, language]);

  const topRatedMovie = useSelector(setTopRated);

  return (
    <div>
      <CardPopular title="TOP RATED" movieRedux={topRatedMovie} Loading={loading} />
    </div>
  );
};

export default React.memo(TopRated);

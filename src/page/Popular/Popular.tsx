import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardPopular from "../../components/CardPopular/CardPopular";
import { setMovie } from "../../redux/MenuLiCat/PopularFilmSlice";
import { selectedLanguage } from "../../redux/ChangeLanguageSlice";
import { fetchFilms } from "../../redux/MenuLiCat/asyncActions";

const Popular = () => {
  const [loading, setLoading] = useState(true);
  const language = useSelector(selectedLanguage);
  const dispatch = useDispatch();
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
      <CardPopular title="Popular" movieRedux={movieRedux} Loading={loading} />
    </div>
  );
};

export default Popular;

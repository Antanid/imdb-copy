import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardPopular from "../../components/CardPopular/CardPopular";
import { setMovie, setStatusPopular } from "../../redux/MenuLiCat/PopularFilmSlice";
import { selectedLanguage } from "../../redux/ChangeLanguageSlice";
import { fetchFilms } from "../../redux/MenuLiCat/asyncActions";

const Popular = () => {
  const status = useSelector(setStatusPopular);
  const language = useSelector(selectedLanguage);
  const dispatch = useDispatch();
  useEffect(() => {
    const movieCateg = "popular";
    // @ts-ignore: Unreachable code error
    dispatch(fetchFilms({ language, movieCateg }));
  }, [dispatch, language]);
  const movieRedux = useSelector(setMovie);
  return (
    <div>
      <CardPopular title="Popular" movieRedux={movieRedux} Loading={status} />
    </div>
  );
};

export default Popular;

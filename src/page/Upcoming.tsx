import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardPopular from "../components/CardPopular/CardPopular";
import { fetchFilms } from "../redux/asyncActions";
import { selectedLanguage } from "../redux/ChangeLanguageSlice";
import { setUpcomingMovie, setUpcomingStatus } from "../redux/UpcomingFilmSlice";

const Upcoming: React.FC = () => {
  const dispatch = useDispatch();
  const language = useSelector(selectedLanguage);
  const status = useSelector(setUpcomingStatus);
  useEffect(() => {
    const movieCateg = "upcoming";
    // @ts-ignore: Unreachable code error
    dispatch(fetchFilms({ language, movieCateg }));
  }, [dispatch, language]);
  const UpcomingFilm = useSelector(setUpcomingMovie);
  return (
    <div>
      <CardPopular title="UPCOMING" movieRedux={UpcomingFilm} Loading={status} />
    </div>
  );
};

export default Upcoming;

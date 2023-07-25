import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardPopular from "../components/CardPopular/CardPopular";
import { fetchFilms } from "../redux/MenuLiCat/asyncActions";
import { selectedLanguage } from "../redux/ChangeLanguageSlice";
import { setUpcomingMovie } from "../redux/MenuLiCat/UpcomingFilmSlice";
import React from "react";

const Upcoming: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const language = useSelector(selectedLanguage);

  useEffect(() => {
    setLoading(true)
    async function getApi() {
      const movieCateg = "upcoming";
      // @ts-ignore: Unreachable code error
      await dispatch(fetchFilms({ language, movieCateg }));
      setLoading(false)
    }
   getApi()
  }, [dispatch, language]);

  const UpcomingFilm = useSelector(setUpcomingMovie);
  return (
    <div>
      <CardPopular title="UPCOMING" movieRedux={UpcomingFilm} Loading={loading} />
    </div>
  );
};

export default Upcoming;

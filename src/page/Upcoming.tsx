import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardPopular from "../components/CardPopular/CardPopular";
import { selectedLanguage } from "../redux/ChangeLanguageSlice";
import { addUpcoming, setUpcomingMovie } from "../redux/UpcomingFilmSlice";

const Upcoming: React.FC = () => {
  const dispatch = useDispatch();
  const [Loading, setLoading] = useState(true);
  const language = useSelector(selectedLanguage)
  useEffect(() => {
    const getApi = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=${language}
          `
        );
        dispatch(addUpcoming(data.results));
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getApi();
  }, [dispatch, language]);
  const UpcomingFilm = useSelector(setUpcomingMovie);
  return (
    <div>
      <CardPopular title="UPCOMING" movieRedux={UpcomingFilm} Loading={Loading} />
    </div>
  );
};

export default Upcoming;

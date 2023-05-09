import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardPopular from "../../components/CardPopular/CardPopular";
import { addMovie, setMovie } from "../../redux/PopularFilmSlice";
import { selectedLanguage } from "../../redux/ChangeLanguageSlice";

const Popular = () => {
  const [Loading, setLoading] = useState(true);
  const language = useSelector(selectedLanguage)
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    const getApi = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=${language}`
        );
        dispatch(addMovie(data.results));
      } catch (error) {
        console.log(error);
      }
    };
    setLoading(false);
    getApi();
  }, [dispatch, language]);
  const movieRedux = useSelector(setMovie);
  return (
    <div>
      <CardPopular title='Popular' movieRedux={movieRedux} Loading={Loading} />
    </div>
  );
};

export default Popular;

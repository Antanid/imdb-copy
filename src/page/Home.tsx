import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../redux/PopularFilmSlice";
import HomeCarousel from "../components/Home/HomeCarousel";
import { useSelector } from "react-redux";
import { setMovie } from "../redux/PopularFilmSlice";
import CardPopular from "../components/CardPopular/CardPopular";
import { selectedLanguage } from "../redux/ChangeLanguageSlice";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [Loading, setLoading] = useState(true);
  const language = useSelector(selectedLanguage)

  useEffect(() => {
    const getApi = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=${language}`
        );
        dispatch(addMovie(data.results));
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    };
    getApi();
  }, [dispatch, language]);

  const movieRedux = useSelector(setMovie);

  return (
    <div>
      <HomeCarousel movie={movieRedux} />
      <CardPopular title="POPULAR" movieRedux={movieRedux} Loading={Loading}/>
    </div>
  );
};

export default Home;

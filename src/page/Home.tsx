import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../redux/PopularFilmSlice";
import HomeCarousel from "../components/Home/HomeCarousel";
import { useSelector } from "react-redux";
import { setMovie } from "../redux/PopularFilmSlice";
import CardPopular from "../components/CardPopular/CardPopular";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    const getApi = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
        );
        dispatch(addMovie(data.results));
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    };
    getApi();
  }, [dispatch]);

  const movieRedux = useSelector(setMovie);

  return (
    <div>
      <HomeCarousel movie={movieRedux} />
      <CardPopular title="POPULAR" movieRedux={movieRedux} Loading={Loading}/>
    </div>
  );
};

export default Home;

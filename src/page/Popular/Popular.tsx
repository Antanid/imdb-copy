import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardPopular from "../../components/CardPopular/CardPopular";
import { addMovie, setMovie } from "../../redux/PopularFilmSlice";


const Popular = () => {
  const [Loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const getApi = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
        );
        dispatch(addMovie(data.results));
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getApi();
  }, [dispatch]);

  const movieRedux = useSelector(setMovie);
  return (
    <div> 
        <CardPopular title="POPULAR" movieRedux={movieRedux} isLoading={Loading}/>
    </div>
  );
};

export default Popular;

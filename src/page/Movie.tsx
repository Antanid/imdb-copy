import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { PuffLoader } from "react-spinners";
import SingleFilm from "../components/SingleFilm/SingleFilm";
import { addSingleFilm, setSingleMovie } from "../redux/SingleMovieSlice";
import backMovieImg from "../assets/img/back_movie.jpeg";
import noImg from "../assets/img/No-Image.png";

const Movie = () => {
  const { id } = useParams();
  const [Loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const getApi = async (id: string | undefined) => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
        );
        dispatch(addSingleFilm(data));
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getApi(id);
  }, [dispatch, id]);
  const {
    backdrop_path,
    poster_path,
    title,
    tagline,
    vote_average,
    vote_count,
    runtime,
    release_date,
    genres,
    overview,
    homepage,
    imdb_id,
    production_companies,
  }: any = useSelector(setSingleMovie);
  return (
    <div>
      {Loading ? (
        <PuffLoader size={120} color="#fffff" />
      ) : (
        <SingleFilm
          noImg={noImg}
          backMovieImg={backMovieImg}
          production_companies={production_companies}
          imdb_id={imdb_id}
          homepage={homepage}
          overview={overview}
          genres={genres}
          release_date={release_date}
          runtime={runtime}
          vote_count={vote_count}
          vote_average={vote_average}
          tagline={tagline}
          title={title}
          poster_path={poster_path}
          backdrop_path={backdrop_path}
        />
      )}
    </div>
  );
};

export default Movie;

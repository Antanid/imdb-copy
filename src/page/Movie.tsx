import { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import SingleFilm from "../components/SingleFilm/SingleFilm";
import { setSingleMovie } from "../redux/SingleFilm/SingleMovieSlice";
import backMovieImg from "../assets/img/back_movie.jpeg";
import noImg from "../assets/img/No-Image.png";
import { selectedLanguage } from "../redux/ChangeLanguageSlice";
import { fetchSingleMovie } from "../redux/SingleFilm/asyncSingleFilm";
import { fetchYoutubeTrailer } from "../redux/YouTubeKey/asyncYouTubeKey";
import { setYouTubeKey } from "../redux/YouTubeKey/YouTubeSlice";
import Loader from "../components/Loader/Loader";

type singleFilmTypes = {
  backdrop_path: string;
  poster_path: string;
  title: string;
  tagline: string;
  vote_average: string;
  vote_count: string;
  runtime: string;
  release_date: string;
  genres: {
    id: number;
    name: string;
  }[];
  overview: string;
  homepage: string;
  imdb_id: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    original_country: string;
  }[];
  backMovieImg: string;
}[];

const Movie = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const language = useSelector(selectedLanguage);
  const keyTrailer = useSelector(setYouTubeKey);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getApi = async () => {
      // @ts-ignore: Unreachable code error
      await dispatch(fetchSingleMovie({ id, language }));
      // @ts-ignore: Unreachable code error
      await dispatch(fetchYoutubeTrailer({ id, language }));
      setLoading(false);
    };
    getApi();
  }, [dispatch, id, language]);

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
  }: singleFilmTypes | any = useSelector(setSingleMovie);
  return (
    <div>
      {loading === true ? (
        <Loader />
      ) : (
        <Suspense>
        <SingleFilm
          keyTrailer={keyTrailer}
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
        </Suspense>
      )}
    </div>
  );
};

export default Movie;

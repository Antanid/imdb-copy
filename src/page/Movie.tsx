import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { PuffLoader } from "react-spinners";
import SingleFilm from "../components/SingleFilm/SingleFilm";
import {
  setSingleMovie,
  setSingleStatus,
} from "../redux/SingleMovieSlice";
import backMovieImg from "../assets/img/back_movie.jpeg";
import noImg from "../assets/img/No-Image.png";
import { selectedLanguage } from "../redux/ChangeLanguageSlice";
import { fetchSingleMovie } from "../redux/asyncSingleFilm";
import { Spin } from "antd";
import { fetchYoutubeTrailer } from "../redux/YouTubeKey/asyncYouTubeKey";
import { setYouTubeKey } from "../redux/YouTubeKey/YouTubeSlice";

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
  const status = useSelector(setSingleStatus);
  const keyTrailer = useSelector(setYouTubeKey);

  useEffect(() => {
    // @ts-ignore: Unreachable code error
    dispatch(fetchSingleMovie({ id, language }));
    // @ts-ignore: Unreachable code error
    dispatch(fetchYoutubeTrailer({ id, language }));
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
      {status === "success" ? (
        <Suspense fallback={<Spin />}>
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
      ) : (
        <PuffLoader size={120} color="#fffff" />
      )}
    </div>
  );
};

export default Movie;

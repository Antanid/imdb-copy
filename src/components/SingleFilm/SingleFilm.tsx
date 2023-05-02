import React from "react";
import CompanyList from "./CompanyList";
import MovieBack from "./MovieBack";
import MovieLinks from "./MovieLinks";
import MovieRight from "./MovieRight";
import PosterImg from "./PosterImg";
import style from "./style/style.module.scss";
import TextProduction from "./TextProduction";

type SingleFilmProps = {
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
  noImg: string;
};

const SingleFilm: React.FC<SingleFilmProps> = ({
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
  backMovieImg,
  noImg,
}) => {
  return (
    <div className={style.movie}>
      <MovieBack backdrop_path={backdrop_path} backMovieImg={backMovieImg} />
      <div className={style.movie_detail}>
        <PosterImg poster_path={poster_path} noImg={noImg} />

        <MovieRight
          overview={overview}
          genres={genres}
          release_date={release_date}
          runtime={runtime}
          vote_count={vote_count}
          vote_average={vote_average}
          tagline={tagline}
          title={title}
        />
      </div>
      <MovieLinks
        IMDbText="IMDb"
        HomepageText="Homepage"
        linkText="Useful Links"
        homepage={homepage}
        imdb_id={imdb_id}
      />
      <TextProduction prodText="Production companies" />
      <CompanyList production_companies={production_companies} />
    </div>
  );
};

export default SingleFilm;

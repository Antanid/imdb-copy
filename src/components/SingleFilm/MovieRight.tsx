import React from "react";
import style from "./style/style.module.scss";

type MovieRightProps = {
  title: string;
  tagline: string;
  vote_average: string;
  vote_count: string;
  runtime: string;
  release_date: string;
  genres: {
    name: string;
    id: number;
  }[];
  overview: string;
};

const MovieRight: React.FC<MovieRightProps> = ({
  title,
  tagline,
  vote_average,
  vote_count,
  runtime,
  release_date,
  genres,
  overview,
}) => {
  return (
    <div className={style.movie_Right}>
      <div className={style.movie_detailInfoTop}>
        <div className={style.movie_name}>
          <p> {title}</p>
        </div>
        <div className={style.movie_tagline}>
          <p>{tagline}</p>
        </div>
        <div className={style.movie_rating}>
          <p className={style.vote_average}>{vote_average}</p>
          <span> ★</span>
          <p className={style.vote_count}>({vote_count}) votes</p>
        </div>
        <div className={style.movie_runtime}>
          <p>{runtime} mins</p>
        </div>
        <div className={style.movie_releaseDate}>
          <p>Release date: {release_date}</p>
        </div>
        <div className={style.movie_genres}>
          {genres.map(({ name, id }) => (
            <p key={id} className={style.movie_genre_list}>
              {name}
            </p>
          ))}
        </div>
      </div>
      <div className={style.movie_overview}>
        <h3>Synopsis</h3>
        <p className={style.overview_text}>{overview}</p>
      </div>
    </div>
  );
};

export default MovieRight;

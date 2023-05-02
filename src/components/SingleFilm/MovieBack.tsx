import React from "react";
import style from "./style/style.module.scss";

type BackProps = {
    backdrop_path: string;
    backMovieImg: string
}

const MovieBack: React.FC <BackProps> = ({backdrop_path, backMovieImg}) => {
  return (
    <div className={style.movie_back}>
      <img
        className={style.back_img}
        src={backdrop_path ? `https://image.tmdb.org/t/p/original${backdrop_path}` : backMovieImg}
        alt="background"
      />
    </div>
  );
};

export default MovieBack;

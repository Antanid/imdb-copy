import React from 'react';
import style from "./style/style.module.scss";

type PosterProps = {
    poster_path: string;
    noImg: string
}

const PosterImg: React.FC <PosterProps> = ({poster_path, noImg}) => {
  return (
    <div className={style.detail_Left}>
    <div className={style.posterBox}>
      <img
        className={style.poster_img}
        src={poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` : noImg}
        alt="posterImg"
      />
    </div>
  </div>
  )
}

export default PosterImg
import React from "react";
import style from "./style/style.module.scss";

type CardlistProps = {
    poster: string;
    title: string;
    date: string;
    vote: number;
    overview: string;
}

const CardList: React.FC <CardlistProps> = ({poster, title, date, vote, overview}) => {
  return (
    <div className={style.cards}>
      <img
        className={style.card_img}
        src={`https://image.tmdb.org/t/p/original${poster}`}
        alt="poster_img"
      />
      <div className={style.cards_overlay}>
        <div className={style.title}>
          <p className={style.title_p}>{title}</p>
        </div>
        <div className={style.data_vote}>
          <p className={style.data}>{date}</p>
          <p className={style.vote}>
            {vote} <span> ★</span>
          </p>
        </div>
        <div className={style.description}>
          <p>{overview.slice(0, 118) + "..."}</p>
        </div>
      </div>
    </div>
  );
};

export default CardList;

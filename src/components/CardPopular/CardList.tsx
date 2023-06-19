import React from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import style from "./style/style.module.scss";

type CardlistProps = {
  poster: string;
  title: string;
  date: string;
  vote: number;
  overview: string;
  Loading: string;
  onAddFilm: (id: number) => void;
  id: number;
  NoImg: string;
};

const CardList: React.FC<CardlistProps> = ({
  poster,
  title,
  date,
  vote,
  overview,
  Loading,
  onAddFilm,
  id,
  NoImg,
}) => {
  return (
    <>
      {Loading === 'success' ? (
        <Link to={`/movies/${id}`}>
          <div className={style.cards} onClick={() => onAddFilm(id)}>
            <img
              className={style.card_img}
              src={poster ? `https://image.tmdb.org/t/p/original${poster}` : NoImg}
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
        </Link>
      ) : (
        <Skeleton height={300} width={200} />
      )}
    </>
  );
};

export default CardList;

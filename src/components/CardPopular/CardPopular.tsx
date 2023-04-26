import React from "react";
import { itemMapProps } from "../Home/HomeCarousel";
import Skeleton from "../Skeleton/Skeleton";
import CardList from "./CardList";
import CardTitle from "./CardTitle";
import style from "./style/style.module.scss";

type PopularTypeProps = {
  movieRedux: {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }[];
  title: string;
  isLoading: boolean;
};

const CardPopular: React.FC<PopularTypeProps> = ({ movieRedux, title, isLoading }) => {
  const skeleton = [...new Array(20)].map((_, index) => <Skeleton key={index}/>);
  return (
    <div className={style.movieList}>
      <CardTitle title={title} />

      <div className={style.list_cards}>
        {isLoading
          ? 
          skeleton
          : movieRedux.map((item: itemMapProps) => (
              <CardList
                poster={item.poster_path}
                title={item.title}
                date={item.release_date}
                vote={item.vote_average}
                overview={item.overview}
              />
            ))}
      </div>
    </div>
  );
};

export default CardPopular;

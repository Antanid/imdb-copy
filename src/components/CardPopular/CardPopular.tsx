import React, { Suspense } from "react";
import { itemMapProps } from "../Home/HomeCarousel";
import CardList from "./CardList";
import CardTitle from "./CardTitle";
import style from "./style/style.module.scss";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch } from "react-redux";
import { addID } from "../../redux/SingleFilm/SingleMovieSlice";
import NoImg from "../../assets/img/No-Image.png";
import { Spin } from "antd";

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
  Loading: string;
};

const CardPopular: React.FC<PopularTypeProps> = ({ movieRedux, title, Loading }) => {
  const dispatch = useDispatch();
  const onAddFilm = (id: number) => {
    dispatch(addID(id));
  };
  return (
    <div className={style.movieList}>
      {Loading === 'success' ? (
        <Suspense fallback={<Spin />}>
          <CardTitle title={title} />
          <div className={style.list_cards}>
            {movieRedux.map((item: itemMapProps) => (
              <CardList
                NoImg={NoImg}
                key={item.id}
                onAddFilm={onAddFilm}
                id={item.id}
                Loading={Loading}
                poster={item.poster_path}
                title={item.title}
                date={item.release_date}
                vote={item.vote_average}
                overview={item.overview}
              />
            ))}
          </div>
        </Suspense> 
      ) : null}
    </div>
  );
};

export default CardPopular;

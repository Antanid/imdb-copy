import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import style from "./style/style.module.scss";

export type CarouselProps = {
  movie: {
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
};

export type itemMapProps = {
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
};

const HomeCarousel: React.FC<CarouselProps> = ({ movie }) => {
  return (
    <div className={style.carousel_wrapper}>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        transitionTime={3}
      >
        {movie &&
          movie.map((item: itemMapProps) => (
            <Link to={`/movies/${item.id}`}>
              <div className={style.poster_link} key={item.id}>
                <div className={style.carousel_img}>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                    alt="film-Background"
                  />
                </div>

                <div className={style.overlay}>
                  <div className={style.poster_text}>
                    <p className={style.title}>{item.title}</p>
                  </div>

                  <div className={style.vote_data}>
                    <p className={style.data}>{item.release_date}</p>
                    <p className={style.vote}>
                      {item.vote_average}
                      <span> ★</span>
                    </p>
                  </div>

                  <div className={style.description}>
                    <p>{item.overview}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;

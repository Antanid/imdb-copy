import React from "react";
import style from "./style/style.module.scss";

type SingleFilmProps = {
  backdrop_path: string;
  poster_path: string;
  original_title: string;
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
};

const SingleFilm: React.FC<SingleFilmProps> = ({
  backdrop_path,
  poster_path,
  original_title,
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
}) => {
  return (
    <div className={style.movie}>
      <div className={style.movie_back}>
        <img
          className={style.back_img}
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          alt="background"
        />
      </div>
      <div className={style.movie_detail}>
        <div className={style.detail_Left}>
          <div className={style.posterBox}>
            <img
              className={style.poster_img}
              src={`https://image.tmdb.org/t/p/original${poster_path}`}
              alt="posterImg"
            />
          </div>
        </div>

        <div className={style.movie_Right}>
          <div className={style.movie_detailInfoTop}>
            <div className={style.movie_name}>
              <p> {original_title}</p>
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
      </div>
      <div className={style.movie_links}>
        <div className={style.links_header}>
          <h5>Useful Links</h5>
        </div>
        {homepage && (
          <button className={style.button_homepage}>
            <a rel="noreferrer" target="_blank" href={homepage}>
              Homepage
              <img
                src="https://cdn.icon-icons.com/icons2/936/PNG/512/external-link-symbol_icon-icons.com_73577.png"
                alt="homepage img"
              />
            </a>
          </button>
        )}

        {imdb_id && (
          <button className={style.button_imdb}>
            <a target="_blank" href={`https://www.imdb.com/title/${imdb_id}`} rel="noreferrer">
              IMDb
              <img
                src="https://cdn.icon-icons.com/icons2/936/PNG/512/external-link-symbol_icon-icons.com_73577.png"
                alt="imdb_id search_img"
              />
            </a>
          </button>
        )}
      </div>
      <div className={style.production_header}>Production companies</div>
      <div className={style.movie_production}>
        {production_companies &&
          production_companies.map(({ logo_path, name }) => (
            <div className={style.production_company}>
              {logo_path && name && (
                <>
                  {" "}
                  <img
                    className={style.production_img_company}
                    alt="company img"
                    src={`https://image.tmdb.org/t/p/original${logo_path}`}
                  />
                  <span>{name}</span>
                </>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SingleFilm;
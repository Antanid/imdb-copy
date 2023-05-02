import React from "react";
import style from "./style/style.module.scss";

type LinksProps = {
    homepage: string;
    imdb_id: string;
    linkText: string;
    HomepageText: string;
    IMDbText: string;
    linkImg: string
};

const MovieLinks: React.FC <LinksProps> = ({
    homepage, 
    imdb_id,
    linkText,
    HomepageText,
    IMDbText,
    linkImg
}) => {
  return (
    <div className={style.movie_links}>
      <div className={style.links_header}>
        <h5>{linkText}</h5>
      </div>
      {homepage && (
        <a rel="noreferrer" target="_blank" href={homepage} className={style.link_button}>
          <button className={style.button_homepage}>
            {HomepageText}
            <img
              src={linkImg}
              alt="homepage img"
            />
          </button>
        </a>
      )}

      {imdb_id && (
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${imdb_id}`}
          rel="noreferrer"
          className={style.link_imdb}
        >
          <button className={style.button_imdb}>
            {IMDbText}
            <img
              src={linkImg}
              alt="imdb_id search_img"
            />
          </button>
        </a>
      )}
    </div>
  );
};

export default MovieLinks;

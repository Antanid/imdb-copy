import React from "react";
import { Link } from "react-router-dom";
import style from "./style/style.module.scss";

type MenuImgProps = {
  IMDB_logo: string;
};

const MenuImg: React.FC<MenuImgProps> = ({ IMDB_logo }) => {
  return (
    <div className={style.img_logo}>
      <Link to={'/'}>
      <img src={IMDB_logo} alt="logo" />
      </Link>
    </div>
  );
};

export default MenuImg;

import React, { useState } from "react";
import IMDB_logo from "../../assets/img/IMDB_Logo.png";
import MenuImg from "./MenuImg";
import MenuLi from "./MenuLi";
import style from "./style/style.module.scss";

const Menu: React.FC = () => {
  const [menuLi] = useState([
    {
      title: "Popular",
      path: "popular",
    },
    {
      title: "Top Rated",
      path: "top-rated",
    },
    {
      title: "Upcoming",
      path: "upcoming",
    },
  ]);
  return (
    <div className={style.menu_wrapper}>
    
      <MenuImg IMDB_logo={IMDB_logo}/>
      <MenuLi menuLi={menuLi} />
    </div>
  );
};

export default Menu;

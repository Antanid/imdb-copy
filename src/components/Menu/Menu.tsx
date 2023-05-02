import React, { useState } from "react";
import IMDB_logo from "../../assets/img/IMDB_Logo.png";
import MenuImg from "./MenuImg";
import MenuLi from "./MenuLi";
import style from "./style/style.module.scss";
import iconBurger from "../../assets/img/icon_burger.png";

const Menu: React.FC = () => {
  const [menuLi] = useState([
    {
      title: "Popular",
      path: "popular",
    },
    {
      title: "Top Rated",
      path: "top_rated",
    },
    {
      title: "Upcoming",
      path: "upcoming",
    },
    {
      title: "Search",
      path: "search",
    },
  ]);
  const [Open, isOpen] = useState(false);
  const burgerOpen = () => {
    isOpen((prev) => !prev);
  };
  return (
    <div className={style.menu_wrapper}>
      <MenuImg IMDB_logo={IMDB_logo} />
      <MenuLi burgerOpen={burgerOpen} Open={Open} iconBurger={iconBurger} menuLi={menuLi} />
    </div>
  );
};

export default Menu;

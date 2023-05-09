import React from "react";
import { Link } from "react-router-dom";
import BurgerIcon from "./BurgerIcon";
import style from "./style/style.module.scss";

type MenuLiProps = {
  menuLi: {
    title: string;
    path: string;
  }[];
  iconBurger: string;
  Open: boolean;
  burgerOpen: () => void;
  closeBurger: () => void;
  closeImg: string
};

const MenuLi: React.FC<MenuLiProps> = ({ menuLi, iconBurger, Open, burgerOpen, closeImg, closeBurger }) => {
  return (
    <div>
      <BurgerIcon burgerOpen={burgerOpen} iconBurger={Open ? closeImg : iconBurger} />
      <ul className={Open ? style.menu_ul_burger : style.menu_ul}>
        {menuLi.map((item, index) => (
          <Link key={index} to={item.path}>
            <li onClick={closeBurger}>{item.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MenuLi;

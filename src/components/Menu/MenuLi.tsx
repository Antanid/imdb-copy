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
};

const MenuLi: React.FC<MenuLiProps> = ({ menuLi, iconBurger, Open, burgerOpen }) => {
  return (
    <div>
      <BurgerIcon burgerOpen={burgerOpen} iconBurger={iconBurger} />
      <ul className={Open ? style.menu_ul_burger : style.menu_ul}>
        {menuLi.map((item, index) => (
          <Link key={index} to={item.path}>
            <li>{item.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MenuLi;

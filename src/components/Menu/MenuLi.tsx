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
  closeImg: string;
  categorOpen: boolean;
  setCategorOpen: (arg0: boolean) => void;
};

const MenuLi: React.FC<MenuLiProps> = ({
  menuLi,
  iconBurger,
  Open,
  burgerOpen,
  closeImg,
  closeBurger,
  categorOpen,
  setCategorOpen,
}) => {
  return (
    <div>
      <BurgerIcon setCategorOpen={setCategorOpen} burgerOpen={burgerOpen} iconBurger={Open ? closeImg : iconBurger} />
      <div className={categorOpen ? style.menuWrap : style.menuClose}>
        <ul className={Open ? style.menu_ul_burger : style.menu_ul}>
          {menuLi.map((item) => (
            <Link key={item.path} to={item.path}>
              <li onClick={closeBurger}>{item.title}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuLi;

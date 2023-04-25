import React from "react";
import { Link } from "react-router-dom";
import style from "./style/style.module.scss";

type MenuLiProps = {
  menuLi: {
    title: string;
    path: string;
  }[];
};

const MenuLi: React.FC<MenuLiProps> = ({ menuLi }) => {
  return (
    <ul className={style.menu_ul}>
      {menuLi.map((item, index) => (
        <Link key={index} to={item.path}>
          <li>{item.title}</li>
        </Link>
      ))}
    </ul>
  );
};

export default MenuLi;

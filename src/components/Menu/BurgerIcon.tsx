import React from "react";
import style from "./style/style.module.scss";

type IconProps = {
    iconBurger: string,
    burgerOpen: () => void
}

const BurgerIcon: React.FC <IconProps> = ({iconBurger, burgerOpen}) => {
  return (
    <div onClick={burgerOpen} className={style.burger_menu}>
      <img className={style.burger_img} src={iconBurger} alt="burgerMenu" />
    </div>
  );
};

export default BurgerIcon;

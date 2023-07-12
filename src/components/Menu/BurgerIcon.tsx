import React from "react";
import style from "./style/style.module.scss";

type IconProps = {
    iconBurger: string,
    burgerOpen: () => void,
    setCategorOpen: (arg0: boolean) => void;
}

const BurgerIcon: React.FC <IconProps> = ({iconBurger, burgerOpen, setCategorOpen}) => {
  return (
    <div onClick={burgerOpen} className={style.burger_menu}>
      <img onClick={ () => setCategorOpen(false)} className={style.burger_img} src={iconBurger} alt="burgerMenu" />
    </div>
  );
};

export default BurgerIcon;

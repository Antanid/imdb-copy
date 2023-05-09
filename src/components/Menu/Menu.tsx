import React, { useState } from "react";
import IMDB_logo from "../../assets/img/IMDB_Logo.png";
import MenuImg from "./MenuImg";
import MenuLi from "./MenuLi";
import style from "./style/style.module.scss";
import iconBurger from "../../assets/img/icon_burger.png";
import ChangeLanguage from "./ChangeLanguage";
import enFlagImg from "../../assets/img/united-kingdom.png";
import pidFlagImg from "../../assets/img/rainbow.png";
import polish_flag from "../../assets/img/polish_flag.png";
import germany_flag from "../../assets/img/germany.png";
import { useDispatch } from "react-redux";
import { addLanguage } from "../../redux/ChangeLanguageSlice";
import closeImg from '../../assets/img/close_menu.png'

export type langaugeItem = {
  name: string;
  img: string;
  id: number;
};

const Menu: React.FC = () => {
  const dispatch = useDispatch();
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
  const [langauge] = useState([
    {
      img: enFlagImg,
      name: "en",
      id: 0,
    },
    {
      img: pidFlagImg,
      name: "ru",
      id: 1,
    },
    {
      img: polish_flag,
      name: "pl",
      id: 2,
    },
    {
      img: germany_flag,
      name: "de",
      id: 3,
    },
  ]);
  const [selectLang, setSelectLang] = useState(enFlagImg);
  const [openLang, setOpenLang] = useState(false);
  const [Open, isOpen] = useState(false);

  const openChangeLanguage = () => {
    setOpenLang((prev) => !prev);
  };

  const changeIdLanguage = (item: langaugeItem) => {
    setSelectLang(item.img);
    dispatch(addLanguage(item.name));
    setOpenLang((prev) => !prev);
  };

  const burgerOpen = () => {
    isOpen((prev) => !prev);
  };
  const closeBurger = () => {
    isOpen(false)
  }
  return (
    <div className={style.menu_wrapper}>
      <MenuImg IMDB_logo={IMDB_logo} />
   
      <MenuLi
      closeBurger={closeBurger}
       burgerOpen={burgerOpen} 
       Open={Open}
        iconBurger={iconBurger}
         menuLi={menuLi} 
         closeImg={closeImg}
          />
      <ChangeLanguage
        changeIdLanguage={changeIdLanguage}
        openChangeLanguage={openChangeLanguage}
        selectLang={selectLang}
        openLang={openLang}
        langauge={langauge}
      />
     
    </div>
  );
};

export default Menu;

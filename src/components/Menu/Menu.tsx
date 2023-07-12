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
import closeImg from "../../assets/img/close_menu.png";
import CategoriesMenu from "./CategoriesMenu";
import { addCategoryPage, addCategotyId, addTextCategory } from "../../redux/Category/CategorySlice";

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
  const [categoriesList] = useState([
    {
      title: "Action",
      id: 28,
    },
    {
      title: "Adventure",
      id: 12,
    },
    {
      title: "Animation",
      id: 16,
    },
    {
      title: "Comedy",
      id: 35,
    },
    {
      title: "Crime",
      id: 80,
    },
    {
      title: "Drama",
      id: 18,
    },
    {
      title: "Family",
      id: 10751,
    },
    {
      title: "Fantasy",
      id: 14,
    },
    {
      title: "History",
      id: 36,
    },
    {
      title: "Horror",
      id: 27,
    },
    {
      title: "Music",
      id: 10402,
    },
    {
      title: "Mystery",
      id: 9648,
    },
    {
      title: "Romance",
      id: 10749,
    },
    {
      title: "Science Fiction	",
      id: 878,
    },
    {
      title: "TV Movie",
      id: 10770,
    },
    {
      title: "Thriller",
      id: 53,
    },
    {
      title: "War",
      id: 10752,
    },
    {
      title: "Western",
      id: 37,
    },
  ]);
  const [selectLang, setSelectLang] = useState(enFlagImg);
  const [openLang, setOpenLang] = useState(false);
  const [Open, isOpen] = useState(false);
  const [categorOpen, setCategorOpen] = useState(false);

  const openChangeLanguage = () => {
    setOpenLang((prev) => !prev);
  };

  const changeIdLanguage = (item: langaugeItem) => {
    setSelectLang(item.img);
    dispatch(addLanguage(item.name));
    setOpenLang((prev) => !prev);
  };

  const changeCategories = (id: number, title: string) => {
    dispatch(addCategotyId(id))
    dispatch(addTextCategory(title))
    setCategorOpen(false)
    dispatch(addCategoryPage(1))
  };

  const burgerOpen = () => {
    isOpen((prev) => !prev);
  };
  const closeBurger = () => {
    isOpen(false);
  };
  return (
    <div className={style.menu_wrapper}>
      <MenuImg IMDB_logo={IMDB_logo} />

      <MenuLi
      setCategorOpen={setCategorOpen}
        categorOpen={categorOpen}
        closeBurger={closeBurger}
        burgerOpen={burgerOpen}
        Open={Open}
        iconBurger={iconBurger}
        menuLi={menuLi}
        closeImg={closeImg}
      />
      <CategoriesMenu
        changeCategories={changeCategories}
        categorOpen={categorOpen}
        setCategorOpen={setCategorOpen}
        categoriesList={categoriesList}
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

import React from "react";
import { langaugeItem } from "./Menu";
import style from "./style/style.module.scss";

type LangProps = {
  langauge: {
    name: string;
    img: string;
    id: number;
  }[];
  openLang: boolean;
  selectLang: string;
  openChangeLanguage: () => void;
  changeIdLanguage: (id: langaugeItem) => void;
};

const ChangeLanguage: React.FC<LangProps> = ({
  langauge,
  openLang,
  selectLang,
  openChangeLanguage,
  changeIdLanguage,
}) => {
  return (
    <div className={style.changeLang}>
      <div onClick={openChangeLanguage} className={style.selected}>
        <img src={selectLang} alt="selectedLangueage" />
      </div>
      {openLang && (
        <ul className={style.change_ul}>
          {langauge.map((i: langaugeItem) => (
            <li className={selectLang === i.img ? style.acive : ''} onClick={() => changeIdLanguage(i)} key={i.id}>
              <img src={i.img} alt="imgLanguage" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ChangeLanguage;

import { Link } from "react-router-dom";
import style from "./style/style.module.scss";
import arrowImg from '../../assets/img/arrow.png'

type CategoriesProps = {
  categoriesList: {
    title: string;
    id: number;
  }[];
  setCategorOpen: (arg0: boolean) => void;
  categorOpen: boolean;
  changeCategories: (id: number, title: string) => void;
};

const CategoriesMenu: React.FC<CategoriesProps> = ({ categoriesList, setCategorOpen, categorOpen, changeCategories}) => {
  return (
    <div className={style.categoriesBlock}>
      <div onClick={() => setCategorOpen(!categorOpen)} className={style.mainSelected}>
        <p>
          Categories
          <img className={categorOpen ? style.imgUp : style.imgDown} src={arrowImg} alt='arrowImg'/>
          </p>
      </div>
      {categorOpen && (
        <ul className={style.allCatUl}>
          {categoriesList.map(({id, title}) => (
            <Link key={id} to='categories '>
            <li onClick={() => changeCategories(id, title)}>{title}</li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoriesMenu;

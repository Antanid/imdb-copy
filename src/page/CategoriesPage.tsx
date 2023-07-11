import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardPopular from "../components/CardPopular/CardPopular";
import ButtonControl from "../components/Search/ButtonControl";
import TotalPage from "../components/Search/TotalPage";
import { fetchCategory } from "../redux/Category/asyncCategory";
import {
  onNextCat,
  onPrevCat,
  setCategoryFilm,
  setCategoryPage,
  setCategoryStatus,
  setCategoryText,
  setCategoryTotalPage,
  setIdCategory,
} from "../redux/Category/CategorySlice";
import { selectedLanguage } from "../redux/ChangeLanguageSlice";

const CategoriesPage: React.FC = () => {
  const dispatch = useDispatch();
  const filmArr = useSelector(setCategoryFilm);
  const loading = useSelector(setCategoryStatus);
  const mainText = useSelector(setCategoryText);
  const language = useSelector(selectedLanguage);
  const idFilm = useSelector(setIdCategory);
  const totalPage = useSelector(setCategoryTotalPage);
  const isPage = useSelector(setCategoryPage);

  useEffect(() => {
    // @ts-ignore: Unreachable code error
    dispatch(fetchCategory({ idFilm, language, isPage }));
  }, [language, idFilm, dispatch, isPage]);

  const onPrevPage = () => {
    dispatch(onPrevCat());
  };
  const onNextPage = () => {
    dispatch(onNextCat());
  };

  return (
    <div>
      <CardPopular movieRedux={filmArr} title={mainText.toUpperCase()} Loading={loading} />
      <ButtonControl onPrevPage={onPrevPage} onNextPage={onNextPage} page={isPage}/>
      <TotalPage totalPageNum={totalPage}/>
    </div>
  );
};

export default CategoriesPage;

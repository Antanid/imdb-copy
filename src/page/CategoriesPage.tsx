import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardPopular from "../components/CardPopular/CardPopular";
import Loader from "../components/Loader/Loader";
import ButtonControl from "../components/Search/ButtonControl";
import TotalPage from "../components/Search/TotalPage";
import { fetchCategory } from "../redux/Category/asyncCategory";
import {
  onNextCat,
  onPrevCat,
  setCategoryFilm,
  setCategoryPage,
  setCategoryText,
  setCategoryTotalPage,
  setIdCategory,
} from "../redux/Category/CategorySlice";
import { selectedLanguage } from "../redux/ChangeLanguageSlice";

const CategoriesPage: React.FC = () => {
  const dispatch = useDispatch();
  const filmArr = useSelector(setCategoryFilm);
  const mainText = useSelector(setCategoryText);
  const language = useSelector(selectedLanguage);
  const idFilm = useSelector(setIdCategory);
  const totalPage = useSelector(setCategoryTotalPage);
  const isPage = useSelector(setCategoryPage);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function getApi() {
      // @ts-ignore: Unreachable code error
     await dispatch(fetchCategory({ idFilm, language, isPage }));
      setLoading(false);
    }
    getApi();
  }, [language, idFilm, dispatch, isPage]);

  const onPrevPage = () => {
    dispatch(onPrevCat());
  };
  const onNextPage = () => {
    dispatch(onNextCat());
  };
  return (
    <Suspense>
      <div>
        {loading === true ? (
          <Loader />
        ) : (
          <>
            <CardPopular movieRedux={filmArr} title={mainText.toUpperCase()} Loading={loading} />
            <ButtonControl onPrevPage={onPrevPage} onNextPage={onNextPage} page={isPage} />
            <TotalPage totalPageNum={totalPage} />
          </>
        )}
      </div>
    </Suspense>
  );
};

export default CategoriesPage;

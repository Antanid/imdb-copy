import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  nextPage,
  prevPage,
  setPage,
  setPageNum,
  setResult,
  startPage,
  totalPage,
} from "../../redux/Search/SearchSlice";
import CardPopular from "../CardPopular/CardPopular";
import searchImg from "../../assets/img/search.png";
import style from "./style/style.module.scss";
import InputSearch from "./InputSearch";
import ButtonControl from "./ButtonControl";
import TotalPage from "./TotalPage";
import { selectedLanguage } from "../../redux/ChangeLanguageSlice";
import { fetchSearchFilms } from "../../redux/Search/asyncSearch";
import Loader from "../Loader/Loader";

const SearchComp: React.FC = () => {
  const [input, setInput] = useState("");
  const [searh, setSearch] = useState(false);
  const [loading, setLoading] = useState(true);
  const page = useSelector(setPageNum);
  const dispatch = useDispatch();
  const language = useSelector(selectedLanguage);
console.log('rerender')
  useEffect(() => {
    setLoading(true)
    const getApi = async () => {
      setLoading(false);
      // @ts-ignore: Unreachable code error
      await dispatch(fetchSearchFilms({ input, language, page }));
      await dispatch(startPage())
    };
    const test = setTimeout(() => {
      getApi();
    }, 1000);
    return () => {
      clearTimeout(test);
    };
  }, [input, searh, page, dispatch, language]);
  const onChangeInput = (e: React.ChangeEvent<any>) => {
    setInput(e.target.value);
    e.preventDefault();
  };
  const onSearch = () => {
    dispatch(setPage(1));
    setSearch(!searh);
  };
  const onNextPage = () => {
    dispatch(nextPage());
  };
  const onPrevPage = () => {
    dispatch(prevPage());
  };
  const onKeySearch = (event: any) => {
    if (event.key === "Enter") {
      onSearch();
      dispatch(setPage(1));
    }
  };
  const data = useSelector(setResult);
  const totalPageNum = useSelector(totalPage);
  return (
  
      <div className={style.search_wrapper}>
        <InputSearch
          searchImg={searchImg}
          onSearch={onSearch}
          onChangeInput={onChangeInput}
          input={input}
          onKeySearch={onKeySearch}
        />
      
     
        <div className={style.search_wrapper}>
          <CardPopular movieRedux={data} title="SEARCH" Loading={loading} />
          <ButtonControl onNextPage={onNextPage} page={page} onPrevPage={onPrevPage} />
          <TotalPage totalPageNum={totalPageNum} />
        </div>
      
   </div>
  );
};

export default SearchComp;

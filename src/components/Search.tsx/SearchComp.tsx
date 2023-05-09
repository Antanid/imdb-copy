import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  nextPage,
  prevPage,
  searchResult,
  setPage,
  setPageNum,
  setResult,
  setTotalPage,
  totalPage,
} from "../../redux/SearchSlice";
import CardPopular from "../CardPopular/CardPopular";
import searchImg from "../../assets/img/search.png";
import style from "./style/style.module.scss";
import InputSearch from "./InputSearch";
import ButtonControl from "./ButtonControl";
import TotalPage from "./TotalPage";
import { selectedLanguage } from "../../redux/ChangeLanguageSlice";

const SearchComp: React.FC = () => {
  const [input, setInput] = useState("");
  const [searh, setSearch] = useState(false);
  const [Loading, setLoading] = useState(true);
  const page = useSelector(setPageNum);
  const dispatch = useDispatch();
  const language = useSelector(selectedLanguage)
  useEffect(() => {
    setLoading(true);
    const getApi = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${
          input ? input : "Batman"
        }&api_key=4e44d9029b1270a757cddc766a1bcb63&language=${language}&page=${page}`
      );
      dispatch(searchResult(data.results));
      dispatch(setPage(data.page));
      dispatch(setTotalPage(data.total_pages));
    };
    setLoading(false);
    getApi();
  }, [searh, page, dispatch, language]);
  const onChangeInput = (e: React.ChangeEvent<any>) => {
    setInput(e.target.value);
    e.preventDefault();
  };
  const onSearch = () => {
    dispatch(setPage(1))
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
      dispatch(setPage(1))
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

      <CardPopular movieRedux={data} title="SEARCH" Loading={Loading} />
      <ButtonControl onNextPage={onNextPage} page={page} onPrevPage={onPrevPage} />
      <TotalPage totalPageNum={totalPageNum} />
    </div>
  );
};

export default SearchComp;

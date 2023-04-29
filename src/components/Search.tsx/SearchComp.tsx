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

const SearchComp: React.FC = () => {
  const [input, setInput] = useState("");
  const [searh, setSearch] = useState(false);
  const [Loading, setLoading] = useState(true);
  const page = useSelector(setPageNum);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    const getApi = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${
          input ? input : "Batman"
        }&api_key=4e44d9029b1270a757cddc766a1bcb63&page=${page}`
      );
      console.log(data);
      dispatch(searchResult(data.results));
      dispatch(setPage(data.page));
      dispatch(setTotalPage(data.total_pages));
    };
    setLoading(false);
    getApi();
  }, [searh, page]);
  const onChangeInput = (e: React.ChangeEvent<any>) => {
    setInput(e.target.value);
    e.preventDefault();
  };
  const onSearch = () => {
    setSearch(!searh);
  };
  const onNextPage = () => {
    dispatch(nextPage());
  };
  const onPrevPage = () => {
    dispatch(prevPage());
  };
  const data = useSelector(setResult);
  const totalPageNum = useSelector(totalPage);

  return (
    <div className={style.search_wrapper}>
      <div className={style.input_search_block}>
        <input
          className={style.input_search}
          value={input}
          onChange={onChangeInput}
          placeholder="Batman"
        />
        <button className={style.button_search} onClick={onSearch}>
          <img src={searchImg} alt="searchButton" />
        </button>
      </div>
      <div>
        <CardPopular movieRedux={data} title="SEARCH" Loading={Loading} />
      </div>
      <div className={style.contol_panel}>
        <button className={style.button_page} onClick={onPrevPage}>
          PREV
        </button>
        <p className={style.page_number}> {page}</p>
        <button className={style.button_page} onClick={onNextPage}>
          NEXT
        </button>
      </div>
      <div className={style.totalPage}>
        <h5>Total page: {totalPageNum}</h5>
      </div>
    </div>
  );
};

export default SearchComp;

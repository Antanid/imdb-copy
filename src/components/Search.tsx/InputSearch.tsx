import React from "react";
import style from "./style/style.module.scss";

type InputProps = {
    onKeySearch: (event: any) => void;
    input: string;
    onChangeInput: (e: React.ChangeEvent<any>) => void;
    onSearch: () => void;
    searchImg: string
};

const InputSearch: React.FC<InputProps> = ({onKeySearch, input, onChangeInput, onSearch, searchImg}) => {
  return (
    <div onKeyDown={(event) => onKeySearch(event)} className={style.input_search_block}>
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
  );
};

export default InputSearch;

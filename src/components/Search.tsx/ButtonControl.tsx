import React from "react";
import style from "./style/style.module.scss";

type ControlType = {
  onPrevPage: () => void;
  page: number;
  onNextPage: () => void
};

const ButtonControl: React.FC<ControlType> = ({onPrevPage, page, onNextPage}) => {
  return (
    <div className={style.contol_panel}>
      <button className={style.button_page} onClick={onPrevPage}>
        PREV
      </button>
      <p className={style.page_number}> {page}</p>
      <button className={style.button_page} onClick={onNextPage}>
        NEXT
      </button>
    </div>
  );
};

export default ButtonControl;

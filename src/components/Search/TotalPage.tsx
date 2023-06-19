import React from "react";
import style from "./style/style.module.scss";

type TotalPageProps = {
  totalPageNum: number;
};

const TotalPage: React.FC<TotalPageProps> = ({ totalPageNum }) => {
  return (
    <div className={style.totalPage}>
      <h5>Total page: {totalPageNum}</h5>
    </div>
  );
};

export default TotalPage;

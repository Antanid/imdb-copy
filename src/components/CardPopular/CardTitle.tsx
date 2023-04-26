import React from "react";
import style from "./style/style.module.scss";

type titleProps = {
  title: string;
};

const CardTitle: React.FC<titleProps> = ({ title }) => {
  return (
    <div className={style.header_title}>
      <h2>{title}</h2>
    </div>
  );
};

export default CardTitle;

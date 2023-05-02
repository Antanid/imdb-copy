import React from "react";
import style from "./style/style.module.scss";

type TextProps = {
  prodText: string;
};

const TextProduction: React.FC<TextProps> = ({ prodText }) => {
  return <div className={style.production_header}>Production companies</div>;
};

export default TextProduction;

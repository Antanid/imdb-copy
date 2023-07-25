import { Spin } from "antd";
import style from "./style/style.module.scss";

const Loader = () => {
  return (
    <div className={style.loader}>
      <Spin />
    </div>
  );
};

export default Loader;

import React from "react";

import style from "./style/style.module.scss";

type trailerProps = {
  keyTrailer: string | null;
}

const TrailerPage: React.FC <trailerProps> = ({keyTrailer}) => {
  return(
  <div className={style.trailerDiv}>
    <iframe
      className={style.iframe}
      title="video"
      src={`https://www.youtube.com/embed/${keyTrailer}`}
    />
  </div>

  )
};

export default TrailerPage;

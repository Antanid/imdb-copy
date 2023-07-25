import React from 'react';
import style from "./style/style.module.scss";

type CompanyProps = {
    production_companies: {
        logo_path: string,
        name: string
    }[]
}

const CompanyList: React.FC <CompanyProps> = ({production_companies}) => {
  return (
    <div className={style.movie_production}>
        {production_companies &&
          production_companies.map(({ logo_path, name }) => (
            <div key={name} className={style.production_company}>
              {logo_path && name && (
                <>
                  {" "}
                  <img
                    className={style.production_img_company}
                    alt="company img"
                    src={`https://image.tmdb.org/t/p/original${logo_path}`}
                  />
                  <span>{name}</span>
                </>
              )}
            </div>
          ))}
      </div>
  )
}

export default CompanyList
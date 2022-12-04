import React from "react";
import style from "./index.module.css"

function Paginado({ countryPerPage, countries, paginado }) {
  const pageNumbers = [];
  for (let i = 0; i <= Math.floor(countries / countryPerPage); i++) {
    pageNumbers.push(i+1);
  }
  return (
    <div id={style.pagination}>
        {
          pageNumbers?.map((number) => {
            return <span key={number} >
              <button className={style.button} onClick={() => paginado(number)}>{number}</button>
            </span>
          })
        }
    </div>
  );
}

export default Paginado;

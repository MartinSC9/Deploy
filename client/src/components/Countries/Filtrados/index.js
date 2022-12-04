import React from 'react'
import style from "./index.module.css"

const Filtrados = ({ handleSort, CountriesOfTheContinent, loadingAgain }) => {
  return (
    <div className={style.contenedor}>
      <button id={style.button}
        onClick={e => loadingAgain(e)}> Normal </button>

      <select className={style.select} onChange={e => handleSort(e)}>
        <option value="" >Alfabéticamente</option>
        <option value="Paises ordenados de forma ascendente"> A - Z </option>
        <option value="Paises ordenados de forma descendente"> Z - A </option>
        <option value="Paises ordenados de forma aleatoria"> Aleatorio </option>
      </select>

      <select className={style.select} onChange={e => handleSort(e)}>
        <option value=""> Número de habitantes </option>
        <option value="Paises ordenados por mayor cantidad de habitantes"> Mayor habitantes </option>
        <option value="Paises ordenados por menor cantidad de habitantes"> Menor habitantes </option>
      </select>

      <select className={style.select} onChange={e => CountriesOfTheContinent(e)}>
        <option value="Paises de todos los continentes"> Todos los continentes </option>
        <option value="Europe"> Europa </option>
        <option value="North America"> América del Norte </option>
        <option value="Africa"> África </option>
        <option value="Oceania"> Oceanía </option>
        <option value="Asia"> Asia </option>
        <option value="South America"> America del Sur </option>
      </select>
    </div>
  )
}

export default Filtrados
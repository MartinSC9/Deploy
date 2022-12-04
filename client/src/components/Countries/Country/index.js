import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "./index.module.css"


const Country = ({ id, name,msg, img, continent, inhabitants }) => {

  const spanish = (string) => {
    if (string === "Europe") return "Europa"
    if (string === "North America") return "América del Norte"
    if (string === "South America") return "América del Sur"
    if (string === "Africa") return "África"
    if (string === "Oceania") return "Oceanía"
    if (string === "Asia") return "Asia"
    else return string
  }

  if(msg){
    return (
      <div id={style.card} key={id} >
        <h3 id={style.nameCountry} >{msg}</h3>
      </div>
    )
  }
  return (
    <div id={style.card} key={id} >
      <h3 id={style.nameCountry} >{name}</h3>
      <img id={style.img} src={img} alt={`bandera de ${name}`} />
      <h4 id={style.continent}>{spanish(continent)}</h4>
      <h5>{inhabitants.toLocaleString()} Habitantes </h5>
      <NavLink id={style.viewDetails} to={`/home/countries/details/${name}`}>Ver detalles</NavLink>
    </div>
  )
}

export default Country
// style={{"border-image": `url(${img})`,"border-image-slice": "10%"}}
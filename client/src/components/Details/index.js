import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom'
import { activityCountry, countryDetail, nextCountry } from '../../redux/actions/index';

import style from "./index.module.css"


const Details = () => {
  const dispatch = useDispatch()
  const countryDetails = useSelector(state => state.countryDetails)
  const nextCountryy = useSelector(state => state.nextCountry)
  const actividades = useSelector(state=>state.activitiesCountry)
  const params = useParams();

  useEffect(() => {
    dispatch(countryDetail(params.countryName))
    dispatch(nextCountry(params.countryName))
    dispatch(activityCountry(params.countryName))
  }, [dispatch, params.countryName]);


  const spanish = (string) => {
    if (string === "Europe") return "Europa"
    if (string === "North America") return "América del Norte"
    if (string === "South America") return "América del Sur"
    if (string === "Africa") return "África"
    if (string === "Oceania") return "Oceanía"
    if (string === "Asia") return "Asia"
    else return string
  }

  const number = (n) => {
    n = Number(n)
    return n.toLocaleString()
  }

  
  return (
    <div className={style.container}>
      <div className={style.card}>
        <h3> Mapa de {countryDetails.name} </h3>
        <iframe className={style.map} title={`${countryDetails.name} map`} src={`https://maps.google.com/?ll=${countryDetails.latUno},${countryDetails.latDos}&z=5&t=k&output=embed`}></iframe>
        <br></br>
        <NavLink className={style.navBar} to={`/home/countries/details/${nextCountryy}`}><h4 className={style.verOtro}>{"Ver otro país >"}</h4></NavLink>
      </div>

      <div className={style.card}>
        <h2>{countryDetails.name} | {countryDetails.id} </h2>
        <img id={style.img} src={countryDetails.img} alt={`bandera de ${countryDetails.name}`} />
        <h4 className={style.items}> Capital |  {countryDetails.capital} </h4>
        <h4 className={style.items}> Continente |  {spanish(countryDetails.subregion)}</h4>
        <h4 className={style.items}> Area |  {number(countryDetails.area)} km2</h4>
        <h4 className={style.items}> Población |  {number(countryDetails.population)} </h4>
        <h4 className={style.items}> Idiomas |  {countryDetails.languages} </h4>
        <h4 className={style.items}> Escudo</h4>
        <img id={style.escudo} src={countryDetails.coatOfArms} alt={`No se encontró`} />
      </div>




      <NavLink className={style.verActividades} to={`/home/countries/details/${countryDetails.name}/activities`}>
        <p> Actividades ({actividades.length}) {">"}</p>
      </NavLink>
    </div>
  )
}



export default Details
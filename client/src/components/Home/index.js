import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getAllActivities, getAllCountries } from '../../redux/actions'
import style from "./index.module.css"


const Home = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
      dispatch(getAllActivities())
      dispatch(getAllCountries())
  },[dispatch])

  return (
    <div>
      <h1 id={style.title}>Mi App de Paises</h1>
      <NavLink  className={style.see} to={"/home/countries"}>
        <div>
          Ver paises 
        </div>
      </NavLink>
      <NavLink  className={style.see} to={"/home/activities"}>
        <div>
          Crear Actividades 
        </div>
      </NavLink>
    </div>
  )
}

export default Home
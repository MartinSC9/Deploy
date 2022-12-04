import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllActivities } from '../../redux/actions'
import style from './index.module.css'


const NavBar = () => {
  const dispatch = useDispatch()
  const actividades = useSelector(state => state.activities)

  useEffect(() => {
    dispatch(getAllActivities())
  }, [dispatch])

  return (
    <div className={style.container}>
      <span>
        <NavLink exact to={"/home/countries"} className={style.navBar} activeClassName={style.navActive}>Paises</NavLink>
      </span>
      <span>
        <NavLink exact to={"/home"} className={style.navBar} activeClassName={style.navActive}>Inicio</NavLink>
      </span>
      <span>
        <NavLink exact to={"/home/activities"} className={style.navBar} activeClassName={style.navActive}>Actividades ({actividades.length})</NavLink>
      </span>
    </div>
  )
}

export default NavBar
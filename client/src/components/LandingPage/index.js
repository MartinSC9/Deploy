import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './index.module.css'


const LandingPage = () => {
  return (
    <div>
      <div></div>
      <div>
        <NavLink to={"/home"} id={style.enter} >¡Ingresar a la aplicación!</NavLink>
        <NavLink to={"/home"}>
          <img id={style.img} src='https://acegif.com/wp-content/uploads/gifs/globe-3.gif' alt='imagen' />
        </NavLink>
      </div>
    </div>
  )
}

export default LandingPage
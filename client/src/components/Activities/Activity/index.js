import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "./index.module.css"




const Activity = ({ id, name, going,back, country, img, eliminar }) => {
  const imagenActividad = (name) => {
    if (name === "Turismo de negocios") return "https://th.bing.com/th/id/R.276c702d4ea38d320bcd69549d66004a?rik=AVaLtkwzN67ckg&pid=ImgRaw&r=0"
    if (name === "Turismo artístico: cultura y conocimiento") return "https://th.bing.com/th/id/R.e90f62187c48f8e565044e0a7efed696?rik=SzkEEjajAyYZug&pid=ImgRaw&r=0"
    if (name === "Turismo de aventura: deporte y adrenalina") return "https://th.bing.com/th/id/R.a482c9b5d0108e9166fc47c8cad8fdea?rik=lTlGu7GO0vYbaQ&pid=ImgRaw&r=0"
    if (name === "Turismo solidario") return "https://th.bing.com/th/id/OIP.hx0RRl9Ppr3QMQq0N9ZTrgHaE8?pid=ImgDet&rs=1"
    if (name === "Turismo médico: salud y bienestar") return "https://th.bing.com/th/id/R.f5de87ca9c5e88feb751935982b0f2d8?rik=Qe7xnxXYFuZ4hg&pid=ImgRaw&r=0"
    if (name === "Turismo sostenible") return "https://th.bing.com/th/id/OIP.k-pxOzOeIkPlH8C6AbwvCAAAAA?pid=ImgDet&rs=1"
    if (name === "Ecoturismo: conocer y proteger") return "https://th.bing.com/th/id/R.69ba88da2f7431e855e90bc6515ac2f9?rik=Ai4zpSazfp%2fl7A&pid=ImgRaw&r=0"
    if (name === "Turismo de idiomas: viajar para hablar") return "https://th.bing.com/th/id/R.6e039f92b441878b05e69e21eb87780f?rik=dY2GMGZB1NPzkA&riu=http%3a%2f%2fwww.marthadebayle.com%2fwp-content%2fuploads%2f2015%2f12%2fidiomas.jpg&ehk=V280fUexhEnYYopJ2lSvW%2bQ7TwJjkVaWzRBLHIlxX%2f8%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
    if (name === "Turismo tranquilidad y tradición") return "https://th.bing.com/th/id/R.6e9a100ea7ab211e2a9af62223a17a73?rik=5VlZ8wkDHwq1hg&pid=ImgRaw&r=0"
    if (name === "Turismo gastronómico") return "https://th.bing.com/th/id/OIP.Bh1XLcUkZyiuPWfXdmioEQHaE9?pid=ImgDet&rs=1"
    if (name === "Turismo religioso: un viaje de fe") return "https://th.bing.com/th/id/R.6881d07cddaf89fd46c777e2dd6c7673?rik=RxYAw9w3ennE2Q&pid=ImgRaw&r=0"
    if (name === "Turismo de lujo: exclusivo y elitista") return "https://th.bing.com/th/id/OIP.rp9QxwGbF_II3gXsJJomNAHaFj?pid=ImgDet&rs=1"
    if (name === "Turismo de naturaleza") return "https://th.bing.com/th/id/R.0c59d628878630e3645e05b4c23b17e7?rik=A0dKZm72o%2f0ECg&pid=ImgRaw&r=0"
  }
  const orderDate = (date) => {
    date = date.slice(8,10)+"/"+date.slice(5,7)+"/"+date.slice(0,4)
    return date
  }
  return (
    <div key={id} id={style.card}>
        <h3 id={style.name} > {name} </h3>
        {
          imagenActividad(name) ? <img src={imagenActividad(name)} height="100px" width="200px" alt='imgNaturaleza' id={style.imgAct} /> : null
        }
      <div id={style.countryImg}>
        {country? <h3 > {country}</h3>:null}
      {img?.map(e => {
        return <img  key={e.id} alt="img" id={style.imgCount} src={e.img} />
      })}
      </div>
      <h4 id={style.duration}> Duración </h4>
      <p>{orderDate(going)} | {orderDate(back)}</p>
      {country ? (<NavLink to={`/home/countries/details/${country}/activities`} className={style.navBar} id={style.country} activeClassName={style.navActive}>Ver actividades de {country}</NavLink>) : null}
      {eliminar?  <button className={style.button} value={id} onClick={e => eliminar(e, id)}>eliminar</button>:null}
    
    </div>
  )
}

export default Activity
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllActivities, getAllCountries, filterActivities } from '../../redux/actions'
import Activity from './Activity'
import Form from './Form'
import style from "./index.module.css"

const Activities = () => {

  const dispatch = useDispatch()
  const countries = useSelector(state => state.allCountries)
  const actividades = useSelector(state => state.filterActivities)
  const allActivities = useSelector(state => state.activities)
  const [crearActividades, setCrearActividades] = useState(false)

  function imagenDeLaActividad(countryName) {
    const pais = countries.filter(e => e.name === countryName)
    return pais
  }
  
  useEffect(() => {
    dispatch(getAllActivities())
    dispatch(getAllCountries())
  }, [dispatch])


  const handleSort = (e) => {
    e.preventDefault()
    dispatch(filterActivities(e.target.value))
  }

  const nombresDeActividadesSinRepetir = (allActivitiess) => {
    let arreglo = allActivitiess.map(e => e.name)
    arreglo = arreglo.filter((item, index, array) => {
      return array.indexOf(item) === index;
    })
    return arreglo
  }

  return (
    <div>

      <h2 id={style.title} style={{"color":"white"}}>Actividades Turísticas</h2>

      <div className={style.contenedor}>

        <div className={style.form}>
          <button id={style.button} onClick={e => setCrearActividades(!crearActividades)}>Crear actividad</button>
          {crearActividades ? <Form dispatch={dispatch} /> : null}
        </div>
   
        {actividades.length ? (
          <div >
            <select className={style.selects} onChange={e => handleSort(e)}>
              <option value="Todas las actividades">Todas las actividades</option>
              {nombresDeActividadesSinRepetir(allActivities)?.map(e =>
                <option key={e} value={e}>{e}</option>
              )}

            </select>
        
            <div className={style.actividades}> 
            {actividades?.map((act) => <Activity 
            key={act.id} 
            country={act.country} 
            id={act.id} 
            name={act.name} 
            img={imagenDeLaActividad(act.country)} 
            going={act.going} 
            back={act.back}/>).reverse()}
            </div>
          </div>) : null}

      </div>

    </div>
  )
}

export default Activities
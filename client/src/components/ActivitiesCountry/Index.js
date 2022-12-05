import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activityCountry, countryDetail, getAllActivities, getAllCountries } from '../../redux/actions'
import style from "./index.module.css"
import axios from 'axios';
import swal from "sweetalert"
import Activity from '../Activities/Activity';
import { NavLink, useParams } from 'react-router-dom';

const ActivitiesCountry = () => {

    const dispatch = useDispatch()
    const countryDetails = useSelector(state => state.countryDetails)
    const actividades = useSelector(state => state.activitiesCountry)
    const [cont, setCont] = useState(0)
    const params = useParams()

    useEffect(() => {
        dispatch(getAllActivities())
        dispatch(getAllCountries())
        dispatch(countryDetail(params.countryName))
        dispatch(activityCountry(params.countryName))
    }, [dispatch, cont, params.countryName])



    const eliminar = (e, id) => {
        e.preventDefault()
        swal({
            title: "Eliminar",
            text: "¿Desea eliminar esta actividad?",
            icon: "warning",
            buttons: ["No", "Si"]
        }).then(res => {
            if (res) {
                axios.delete("/activity/" + id)
                swal({
                    text: "La actividad se ha borrado con éxito",
                    icon: "success"
                })
            }
            setCont(cont + 1)
            dispatch(getAllActivities())
        })
    }


    return (
        <div>
            <div className={style.container}>
                <NavLink className={style.navBar} to={`/home/countries/details/${countryDetails.name}`}>{"<<"} Ver detalles de {countryDetails.name}</NavLink>
                <h2 id={style.title} style={{ "color": "white" }}>Actividades Turísticas de {countryDetails.name}: {actividades.length}</h2>
                <NavLink className={style.navBar} to={`/home/activities`}> Ver actividades turísticas {">>"}</NavLink>
            </div>
   {actividades.length?<div className={style.contenedor}>
                <div className={style.actividades}>
                    {countryDetails.activities?.map(e => <Activity
                        eliminar={eliminar}
                        key={e.id}
                        id={e.id}
                        name={e.name}
                        img={e.img}
                        going={e.going}
                        back={e.back} />)}
                </div>
            </div>:
            <div className={style.contenedor}>
                <h3 id={style.noTiene}>¿No tiene?</h3>
                <br></br>
                <NavLink className={style.navBar} to={`/home/activities`}> Crear</NavLink>
            </div>}
            
        </div>
    )
}

export default ActivitiesCountry

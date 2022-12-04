import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCountries, setError, findCountriesContinent, sort, word, setMsg } from '../../redux/actions'
import Country from './Country'
import Paginado from './Paginado'
import Filtrados from './Filtrados'
import SearchBar from './SearcBar'
import style from "./index.module.css"

const Countries = () => {
  const dispatch = useDispatch()
  const countries = useSelector(state => state.allCountries)
  const msg = useSelector(state => state.msg)
  const error = useSelector(state => state.error)


  const [paginaActual, setPaginaActual] = useState(1)
  const indiceDelUltimoPais = (paginaActual * 10) - 1
  const indiceDelPrimerPais = indiceDelUltimoPais - 10
  const paisesActuales = paginaActual === 1 ? countries.slice(0, 9) : countries.slice(indiceDelPrimerPais, indiceDelUltimoPais)


  const [order, setOrder] = useState("")

  const paginado = (pageNumber) => {
    setPaginaActual(pageNumber)
  }

  useEffect(() => {
    dispatch(getAllCountries())
    setPaginaActual(1)
  }, [dispatch]
  )

  const handleSort = (e) => {
    e.preventDefault()
    dispatch(sort(e.target.value))
    setOrder(e.target.value)
    setPaginaActual(1)
  }

  const spanish = (string) => {
    if (string === "Europe") return "Paises de Europa (53)"
    if (string === "North America") return "Paises de América del Norte (41)"
    if (string === "South America") return "Paises de América del Sur (14)"
    if (string === "Africa") return "Paises de África (58)"
    if (string === "Oceania") return "Paises de Oceanía (27)"
    if (string === "Asia") return "Paises de Asia (52)"
    else return string + " (250)"
  }

  const CountriesOfTheContinent = (e) => {
    e.preventDefault()
    dispatch(findCountriesContinent(e.target.value))
    setOrder(spanish(e.target.value))
    setPaginaActual(1)
  }

  const loadingAgain = (e) => {
    e.preventDefault()
    dispatch(getAllCountries())
    dispatch(setError())
    dispatch(setMsg())
    dispatch(word(""))
    setOrder("")
    setPaginaActual(1)
  }

  if (Object.keys(error).length) {
    return (
      <div>
        <div className={style.header}>
          <SearchBar />
        </div>
        <Filtrados handleSort={handleSort} CountriesOfTheContinent={CountriesOfTheContinent} loadingAgain={loadingAgain} />
        <h3 className={style.message}> Intenta de nuevo </h3>
        <br></br>
        <button className={style.button} onClick={loadingAgain} > Actualizar </button>
      </div>
    )
  }

  if (countries.length) {
    return (
      <div>
        <div className={style.header}>
          <SearchBar />
        </div>
        <Filtrados handleSort={handleSort} CountriesOfTheContinent={CountriesOfTheContinent} loadingAgain={loadingAgain} />
        {
          msg.length ?
            (<div>
              <h3 className={style.message}>{msg}</h3>
            </div>)
            :
            order.length ?
              (<h3 className={style.message}>{order}</h3>)
              :
              (<h3 className={style.message}> Paises </h3>)
        }
        <div>
          <Paginado countryPerPage={10} countries={countries.length} paginado={paginado} />
        </div>
        <div id={style.countries}>
          {paisesActuales.map(c => <Country name={c.name} img={c.img} msg={c.msg} continent={c.continent} inhabitants={c.population} key={c.id} />)}
        </div>
      </div >
    )
  } else {
    return (<div>
      <div className={style.header}>
        <SearchBar />
      </div>
      <Filtrados handleSort={handleSort} CountriesOfTheContinent={CountriesOfTheContinent} loadingAgain={loadingAgain} />
      <br />
      <h1 className={style.message}> Cargando Paises </h1>
    </div>)
  }

}

export default Countries
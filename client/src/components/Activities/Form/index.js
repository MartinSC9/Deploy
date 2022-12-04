import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllActivities } from "../../../redux/actions";
import style from './index.module.css'
import axios from "axios";
import swal from "sweetalert"
import fecha from './date'

const Form = ({ dispatch }) => {
  const [error, setError] = useState({})
  const allCountries = useSelector((state) => state.allCountries)
  const [mensaje, setMensaje] = useState("")
  const [input, setInput] = useState({
    name: "",
    country: "",
    going: fecha(),
    back: fecha(),
  });

  useEffect(() => {
    if (!input.name || !input.country.length || !input.going || !input.back) {
      setError({ error: "falta completar datos" })
      setMensaje("")
    } else {
      setError({})
    }
  }, [input])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!Object.keys(error).length) {
      await axios.post("http://localhost:3001/activity", input)
      dispatch(getAllActivities())
      swal({
        text: `Actividad para ${input.country} creada exitosamente`,
        icon: "success", //warning, info, error
        button: "Aceptar",
        timer: "6000"
      })
      setInput({
        name: "",
        country: "",
        going: fecha(),
        back: fecha(),
      });
    } else {
      setMensaje("Debes llenar todo el formulario");
    }
  }

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }
  const handleChangeGoing = (e) => {
    e.preventDefault()
    setInput({
      ...input,
      going: e.target.value,
    })
  }
  const handleChangeBack = (e) => {
    e.preventDefault()
    setInput({
      ...input,
      back: e.target.value,
    })
  }
  const handleChangeCountry = (e) => {
    setInput({
      ...input,
      country: input.country === "" ? [e.target.value] : input.country.includes(e.target.value) ? input.country : [...input.country, e.target.value]
    })
  }

  const cerrar = (e) => {
    if (input.length === 1) {
      setInput({
        ...input,
        country: ""
      })
    } else {
      setInput({
        ...input,
        country: input.country.filter(c => c !== e.target.value)
      })
    }
  }

  const orderAsc = () => {
    const asc = allCountries.sort((a, b) => a.name.localeCompare(b.name));
    return asc
  }

  const imagenPais = (country) => {
    let img = allCountries.filter(c => c.name === country)
    return img[0]["img"]
  }

  return (
    <div id={style.form}>
      <h3>Crear Actividad Turística</h3>
      <form onSubmit={e => handleSubmit(e)}>
        <label> País *</label>
        <br></br>
        <select className={style.select} value={input.country} name="country" onChange={e => handleChangeCountry(e)} >
          <option>{input.country !== "" ? input.country[input.country.length - 1] : "Elige un país"}</option>
          {orderAsc(allCountries).map(count => <option key={count.id} value={count.country}> {count.name} </option>)}
        </select>
        {input.country.length ? <h5 style={{ "margin": "7px", "color": "#076ea1" }}>¡Puedes seleccionar a más de uno!</h5> : null}

        <span>
          <span >{input.country !== "" ? input.country.map(c =>
            c && <span key={c} className={style.countrySelect}>
              <img alt="imgPais" src={imagenPais(c)} width="30px" height="30px" />
              <button className={style.buttonClose} value={c} onClick={ev => cerrar(ev)}> x </button>
            </span>
          ) : null}
          </span>
        </span>
        <br></br>
        <label> Actividad *</label>
        <select className={style.select} value={input.name} name="name" onChange={e => handleChange(e)} >
          <option> Tipos de actividad </option>
          <option value={"Turismo de negocios"}> Turismo de negocios </option>
          <option value={"Turismo artístico: cultura y conocimiento"}> Turismo artístico: cultura y conocimiento </option>
          <option value={"Turismo de aventura: deporte y adrenalina"}> Turismo de aventura: deporte y adrenalina </option>
          <option value={"Turismo solidario"}> Turismo solidario </option>
          <option value={"Turismo médico: salud y bienestar"}> Turismo médico: salud y bienestar </option>
          <option value={"Turismo de naturaleza"}> Turismo de naturaleza </option>
          <option value={"Ecoturismo: conocer y proteger"}> Ecoturismo: conocer y proteger </option>
          <option value={"Turismo sostenible"}> Turismo sostenible </option>
          <option value={"Turismo de idiomas: viajar para hablar"}> Turismo de idiomas: viajar para hablar </option>
          <option value={"Turismo tranquilidad y tradición"}> Turismo tranquilidad y tradición </option>
          <option value={"Turismo gastronómico"}> Turismo gastronómico </option>
          <option value={"Turismo religioso: un viaje de fe"}> Turismo religioso: un viaje de fe </option>
          <option value={"Turismo de lujo: exclusivo y elitista"}> Turismo de lujo: exclusivo y elitista </option>
        </select>

        <div>
          <label>Desde* </label>
          <input className={style.select} id={style.inputdate} type="date" min="2023-01-01"
            max="2030-01-01" value={input.going} onChange={e => handleChangeGoing(e)} />
        </div>
        <div>
          <label>Hasta* </label>
          <input className={style.select} id={style.inputdate} type="date" min={input.going}
            max="2030-01-15" value={input.back} onChange={e => handleChangeBack(e)} />
        </div>

        {mensaje ? <h5 style={{ "margin": "10px", "color": "#076ea1" }}>Las opciones con artístico son obligatorias*</h5> : null}

        {mensaje ?
          (<div>
            <h4 style={{ "color": "red" }}>{mensaje}</h4>
            <button className={style.button} onClick={e => setMensaje("")} id={style.butt} style={{ "margin": "5px" }}>aceptar</button>
          </div>) :
          <button className={style.button} type="submit" id={style.butt}> Crear </button>}
      </form>
    </div>
  );
}

export default Form;




/* <label>Temporada *</label>
<select value={input.season} name="season" onChange={e => handleChange(e)} className={style.select}>
  <option> Elige una temporada </option>
  <option value="Verano-Otoño"> Verano - Otoño </option>
  <option value="Otoño-Invierno"> Otoño - Invierno </option>
  <option value="Invierno-Primavera"> Invierno - Primavera </option>
  <option value="Primavera-Verano"> Primavera - Verano </option>
</select> */
/* <label> Duración *</label>
        <select value={input.numero} name="numero" onChange={e => handleChange(e)} className={style.select}>
          {duracion.map((e) => <option key={e} value={e}>{e}</option>)}
        </select>

        {input.numero > 1 ?
          <select value={input.duration} name="duration" onChange={e => handleChange(e)} className={style.select} >
            <option> opciones </option>
            <option value={input.numero + " semanas"}> semanas </option>
            <option value={input.numero + " meses"}> meses </option>
          </select>
          :
          <select value={input.duration} name="duration" onChange={e => handleChange(e)} className={style.select}>
            <option> opciones </option>
            <option value={input.numero + " semana"}> semana </option>
            <option value={input.numero + " mes"}> mes </option>
          </select>} */
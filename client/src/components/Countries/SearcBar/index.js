import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { findCountry, word } from '../../../redux/actions/';
import style from "./index.module.css"
import { BiSearchAlt2 } from "react-icons/bi";

const SearchBar = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState("")

  useEffect(() => {
    dispatch(findCountry(input))
    dispatch(word(input))
  }, [dispatch, input])

  const handleInputChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  }

  return (<div className={style.search}>
    <input className={style.input} type="text" placeholder="Encuentra un País..." value={input} onChange={e => handleInputChange(e)} />
    <BiSearchAlt2 className={style.icono}/>
  </div>
  )
}

export default SearchBar;
import axios from "axios"

const details = async (countryName) => {
    let country = await axios.get(`http://localhost:3001/countries/${countryName}`)
    return country.data
}

export default details
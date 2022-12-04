import axios from "axios"

const details = async (countryName) => {
    let country = await axios.get(`/countries/${countryName}`)
    return country.data
}

export default details
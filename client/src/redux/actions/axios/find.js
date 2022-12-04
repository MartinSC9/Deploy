import axios from "axios"

const find = async (word) => {
        let country = await axios.get(`http://localhost:3001/countries/country?name=${word}`)
        return country.data
}

export default find
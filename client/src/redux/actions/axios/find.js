import axios from "axios"

const find = async (word) => {
        let country = await axios.get(`/countries/country?name=${word}`)
        return country.data
}

export default find
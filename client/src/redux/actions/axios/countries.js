import axios from "axios"

const countries = async () => {
    let countries = await axios.get('http://localhost:3001/countries/')
    return countries.data
}

export default countries
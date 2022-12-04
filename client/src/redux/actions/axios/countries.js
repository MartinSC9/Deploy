import axios from "axios"

const countries = async () => {
    let countries = await axios.get('/countries')
    return countries.data
}

export default countries
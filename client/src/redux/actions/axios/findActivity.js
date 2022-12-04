import axios from "axios"

const findActivity = async (countryName) => {
        let activity = await axios.get(`http://localhost:3001/activity/${countryName}`)
        return activity.data
}

export default findActivity
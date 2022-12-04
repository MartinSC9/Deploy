import axios from "axios"

const findActivity = async (countryName) => {
        let activity = await axios.get(`/activity/${countryName}`)
        return activity.data
}

export default findActivity
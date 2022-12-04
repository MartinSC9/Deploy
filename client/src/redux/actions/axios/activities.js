import axios from "axios";

const activities = async () => {
 let actividades = await axios.get("http://localhost:3001/activity")
 return actividades.data
}

export default activities
import axios from "axios";

const activities = async () => {
 let actividades = await axios.get("/activity")
 return actividades.data
}

export default activities
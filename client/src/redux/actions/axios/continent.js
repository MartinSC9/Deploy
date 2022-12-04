import axios from "axios";

const continent = async (cont) => {
    const response = await axios.get("/countries");
    if (cont === "Paises de todos los continentes") {
        return response.data
    } else {
        let countriesContinent = []

        for (let i = 0; i < response.data.length; i++) {
            if (response.data[i]["continent"] === cont) {
                countriesContinent.push(response.data[i])
            }
        }
        return countriesContinent
    }
}

export default continent
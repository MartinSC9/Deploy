const axios = require("axios");
const { Country } = require("../db");

const createCountriesInTheDataBase = async () => {
  
    let URL = "https://restcountries.com/v3/all";
    const api = await axios.get(URL);
    const apiCountries = api.data;

    let countries = apiCountries.map((e) => {
        return {
            id: e["cca3"],
            name: e["name"]["common"],
            img: e["flags"][1],
            coatOfArms: `https://mainfacts.com/media/images/coats_of_arms/${e.cca2.toLowerCase()}.png`,
            capital: e["capital"] ? e["capital"][0] : "No tiene",
            subregion: e["subregion"] ? e["subregion"] : "no existe",
            area: e["area"]?e["area"]:0,
            population: e["population"],
            continent: e["continents"][0],
            languages: e["languages"] ? Object.values(e["languages"]).join() : "No tiene",
            latUno: e["latlng"][0],
            latDos: e["latlng"][1]
        }
    })

    for (let i = 0; i < countries.length; i++) {

        await Country.findOrCreate({
            where: {
                id: countries[i].id,
                name: countries[i].name,
                img: countries[i].img,
                coatOfArms: countries[i].coatOfArms,
                capital: countries[i].capital,
                subregion: countries[i].subregion,
                area: countries[i].area,
                population: countries[i].population,
                continent: countries[i].continent,
                languages: countries[i].languages,
                latUno: countries[i].latUno,
                latDos: countries[i].latDos
            },
        });
    }

    if (!countries.length) {
        throw new Error("¡Sorry, right now we have no countries to show!");
    }

    console.log(countries.length, "countries created in the database")
};

module.exports = createCountriesInTheDataBase;

























 // let countries = [];
    // for (let i = 0; i < apiCountries.length && countries.length < 100; i++) {
    //     countries.push({
    //         id: apiCountries[i]["cca3"],
    //         name: apiCountries[i]["name"]["common"],
    //         img: apiCountries[i]["flags"][1],
    //     });
    // }

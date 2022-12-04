const findWord = require("./findWord")
const { Country } = require("../../db")

const findCountries = async (word) => {
  try {
    let countries = await Country.findAll();
    let countriesFound = [];

    for (let i = 0; i < countries.length; i++) {
      if (findWord(countries[i]["name"], word)) {
        countriesFound.push(countries[i]);
      }
    }

    if (countriesFound.length) {
      return countriesFound
    } else {
      countriesFound.push({
        id: "",
        msg: "No existen resultados con la busqueda",
        name: "",
        img: "",
        continent: "",
        capital: "",
      });
      return countriesFound
    }

  } catch (error) {
    throw Error(error.message)
  }

};


module.exports = findCountries;

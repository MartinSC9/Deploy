const express = require("express");
const countryDetails = require("../controllers/countryDetails");
const findCountries = require("../controllers/findCountries")
const { Country } = require("../../db")
const routeCountries = express.Router();


routeCountries.get("/", async (req, res) => {
  try {
    res.status(200).send(await Country.findAll());
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
})


routeCountries.get("/country", async (req, res) => {
  const { name } = req.query;
  try {
    return res.status(200).send(await findCountries(name));
  } catch (err) {
    res.status(404).send({ err: err.message });
  }
});


routeCountries.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    res.status(200).send(await countryDetails(id));
  } catch (err) {
    res
      .status(404)
      .send({ err: err.message });
  }
});


module.exports = routeCountries;



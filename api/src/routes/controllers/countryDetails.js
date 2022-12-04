// const axios = require("axios");
const { Country, Activity } = require("../../db")

const countryDetails = async (name) => {
  try {
    let countryDetail = await Country.findOne({
      where: { name },
      include: {
        model: Activity,
        through: { attributes: [] }
      }
    })
    return countryDetail
  } catch (error) {
    throw Error(error.message)
  }
};

module.exports = countryDetails;

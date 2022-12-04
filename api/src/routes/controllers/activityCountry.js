// const axios = require("axios");
const { Activity } = require("../../db")

const activityCountry = async (nameCountry) => {
  try {
    let activity = await Activity.findAll({
      where: { country: nameCountry },
    })
    return activity
  } catch (error) {
    throw Error(error.message)
  }
};

module.exports = activityCountry;

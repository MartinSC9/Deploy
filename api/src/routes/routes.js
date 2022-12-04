const { Router } = require('express');
const routeCountries = require("./routeCountries/routeCountries")
const routeActivity = require("./routeActivity/routeActivity")
const routes = Router();

routes.use("/countries", routeCountries)
routes.use("/activity", routeActivity)



module.exports = routes;

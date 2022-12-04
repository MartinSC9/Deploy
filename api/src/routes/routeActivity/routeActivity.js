const express = require("express");
const { Activity } = require("../../db")
const createActivity = require("../controllers/createActivity");
const deleteActivity = require("../controllers/deleteActivity");
const activityCountry = require("../controllers/activityCountry");
const routeActivity = express.Router();

routeActivity.post("/", async (req, res) => {
    try {
        res.status(200).send(await createActivity(req.body))
    } catch (err) {
        res.status(400).send(err.message)
    }
})


routeActivity.get("/", async (req, res) => {
    try {
        res.status(200).send(await Activity.findAll())
    } catch (err) {
        res.status(400).send(err.message)
    }
})


routeActivity.delete("/:id", async (req, res) => {
    try {
        res.status(200).send(await deleteActivity(req.params.id))
    } catch (err) {
        res.status(400).send(err.message)
    }
})
routeActivity.get("/:id", async (req, res) => {
    try {
        res.status(200).send(await activityCountry(req.params.id))
    } catch (err) {
        res.status(400).send(err.message)
    }
})


module.exports = routeActivity;
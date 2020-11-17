require('dotenv').config();

const fetch = require('node-fetch');
const constants = require('../constants');
const axios = require('axios')

const getPlants = async(req, res) => {
    const resp = await fetch("https://trefle.io/api/v1/plants?token=dnI608FIjKz6IAXIegM-1eSy7kUmvFg-Tg88MEdHBWs")
    const json = await resp.json();
    res.status(constants.SUCCESS).send(json);
}

module.exports = {
    getPlants
}


const Plant = require('../models').Plant;

const constants = require('../constants');

const getAll = (req, res) => {
    Plant.findAll()
    .then(plants => {
        res.status(constants.SUCCESS).json(plants)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

module.exports = {
    getAll,
}
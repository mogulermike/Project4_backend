const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


router.get('/all', ctrl.plant.getAll)
router.get('/add/:userId/:plantId', ctrl.plant.addPlant)
router.get('/profile/:userId', ctrl.plant.getUserPlants)

module.exports = router;
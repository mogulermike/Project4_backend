const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/plants', ctrl.api.getPlants);

module.exports = router;
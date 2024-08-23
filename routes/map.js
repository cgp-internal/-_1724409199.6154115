const express = require('express');
const router = express.Router();
const mapController = require('../controllers/map');

router.get('/map', mapController.getMapData);
router.put('/map', mapController.updateMapData);

module.exports = router;
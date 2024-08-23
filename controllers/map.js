const express = require('express');
const router = express.Router();
const { getMapData, updateMapData } = require('../services/mapService');

router.get('/maps', async (req, res) => {
  try {
    const maps = await getMapData();
    res.json(maps);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to retrieve map data' });
  }
});

router.put('/maps/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { polygonData, otherMapInformation } = req.body;
    await updateMapData(id, polygonData, otherMapInformation);
    res.json({ message: 'Map data updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to update map data' });
  }
});

module.exports = router;
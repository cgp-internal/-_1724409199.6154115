const express = require('express');
const { processFlightRequest } = require('../services/flightService');

const apiRouter = express.Router();

apiRouter.post('/flight-request', (req, res) => {
  const flightRequestData = req.body;
  try {
    const result = processFlightRequest(flightRequestData);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to process flight request' });
  }
});

module.exports = { apiRouter };
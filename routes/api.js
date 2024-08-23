const express = require('express');
const apiRouter = express.Router();
const apiController = require('../controllers/api');

apiRouter.post('/flight-request', apiController.processFlightRequest);

module.exports = apiRouter;
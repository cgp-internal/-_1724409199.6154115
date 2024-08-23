const { Flight } = require('./models/flight');

class FlightService {
  processFlightRequest(flightRequestData) {
    const { polygonBoundaries, ...otherRelevantData } = flightRequestData;
    const flight = new Flight(polygonBoundaries, otherRelevantData);
    // Process the flight request based on the polygon boundaries
    // For demonstration purposes, let's assume the processing is successful
    return { success: true, message: 'Flight request processed successfully' };
  }
}

module.exports = { processFlightRequest: FlightService.prototype.processFlightRequest.bind(FlightService) };
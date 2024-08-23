class Flight {
  constructor(polygonBoundaries, ...otherRelevantData) {
    this.polygonBoundaries = polygonBoundaries;
    this.otherRelevantData = otherRelevantData;
  }

  getPolygonBoundaries() {
    return this.polygonBoundaries;
  }

  getOtherRelevantData() {
    return this.otherRelevantData;
  }
}

module.exports = { Flight };
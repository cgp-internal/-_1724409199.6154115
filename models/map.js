class Map {
  constructor(id, polygonData, otherMapInformation) {
    this.id = id;
    this.polygonData = polygonData;
    this.otherMapInformation = otherMapInformation;
  }

  static async getAllMaps() {
    // TO DO: implement logic to retrieve all maps from database
  }

  static async getMapById(id) {
    // TO DO: implement logic to retrieve a map by id from database
  }

  async save() {
    // TO DO: implement logic to save the map to the database
  }

  async update() {
    // TO DO: implement logic to update the map in the database
  }

  async delete() {
    // TO DO: implement logic to delete the map from the database
  }
}

module.exports = { Map };
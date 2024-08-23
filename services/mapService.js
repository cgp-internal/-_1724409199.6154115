const { Map } = require('./models/map');

let db;

async function initDB() {
  db = require('better-sqlite3')('db.sqlite');
}

async function getMapData() {
  await initDB();
  const rows = db.prepare('SELECT * FROM maps').all();
  const maps = rows.map((row) => new Map(row.id, row.polygon_data, row.other_map_info));
  return maps;
}

async function updateMapData(id, polygonData, otherMapInformation) {
  await initDB();
  db.prepare('UPDATE maps SET polygon_data = ?, other_map_info = ? WHERE id = ?').run(polygonData, otherMapInformation, id);
}

module.exports = { getMapData, updateMapData };
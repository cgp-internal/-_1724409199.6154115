let map;
let drawnPolygons = [];

document.addEventListener("DOMContentLoaded", () => {
  // Initialize the map
  map = L.map("map").setView([40, -74], 12);

  // Add a basemap layer
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    subdomains: ["a", "b", "c"],
  }).addTo(map);

  // Add a draw control
  let drawControl = new L.Control.Draw({
    draw: {
      polygon: {
        allowIntersection: false,
        drawError: {
          color: "red",
          timeout: 1000,
        },
      },
    },
    edit: false,
  }).addTo(map);

  // Handle draw events
  map.on(L.Draw.Event.CREATED, (e) => {
    drawnPolygons.push(e.layer);
  });

  // Handle clicks on the map
  map.on("click", (e) => {
    // Send a request to the backend API to process the flight request
    sendFlightRequest(e.latlng);
  });
});

// Send a request to the backend API to process the flight request
function sendFlightRequest coordinates {
  const apiUrl = "/api/flight";
  const polygonBounds = drawnPolygons.map((poly) => poly.getLatLngs());
  const requestBody = { coordinates, polygonBounds };

  fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestBody),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}
mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5rdXNoLWNoYXVoYW4iLCJhIjoiY2tobjBvMmNiMGx6ajJ2cm5kZ2ozYWNtOCJ9.oUvlXZkmiTAhO6LkRKRcig";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([-2.24, 53.48]);
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 14,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav, "top-right");

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  });
  
  map.addControl(directions, 'top-left');
}

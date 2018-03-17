var map;

//init maps
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 34.052234,
      lng: -118.2436849
    },
    zoom: 9
  });
}

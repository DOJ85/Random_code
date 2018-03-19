var map;

//init maps
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 34.052234,
      lng: -118.2436849
    },
    zoom: 9,
    styles: [
    {
        "stylers": [
            {
                "hue": "#010063"
            },
            {
                "invert_lightness": true
            },
            {
                "saturation": -80
            },
            {
                "lightness": 33
            },
            {
                "gamma": 0.5
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#2D333C"
            }
        ]
    }
]
  });
}
$(document).ready(function(){
    $('header').parallax("center", 0, 0.5, true);
});

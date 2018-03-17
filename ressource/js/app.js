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
                "hue": "#ff1a00"
            },
            {
                "invert_lightness": true
            },
            {
                "saturation": -100
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

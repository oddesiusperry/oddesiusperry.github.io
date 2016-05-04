$(document).ready(function() {

   var map;
    

    function initMap() {
          // map = new google.map.Map(domRef, mapOptions) understanding the google map js

        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.7142700, lng: -74.0059700},
          zoom: 10
        });

        var marker = new google.maps.Marker({
          position: {lat: 40.7142700, lng: -74.0059700},
          map: map,
          title: 'New York, NY'
        });
     }

    initMap();
})



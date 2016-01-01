//added google map to the page and geocoded the location that is entered to become the new center of the map

// function initMap() {
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 13,
//     center: {lat: 34.052235, lng: -118.243683},
//     scrollwheel: false
//   });
//   var geocoder = new google.maps.Geocoder();
// console.log(1);
//   document.getElementById('submit').addEventListener('click', function() {
//     geocodeAddress(geocoder, map);
//   });
// }

// function geocodeAddress(geocoder, resultsMap) {
//   var address = document.getElementById('location').value;
//   geocoder.geocode({'address': address}, function(results, status) {
//     if (status === google.maps.GeocoderStatus.OK) {
//       resultsMap.setCenter(results[0].geometry.location);
//       // var marker = new google.maps.Marker({
//       //   map: resultsMap,
//       //   position: results[0].geometry.location
//       // });
//   console.log(address);

//         // var map = new google.maps.Map(document.getElementById("map"));
//         // var marker = new google.maps.Marker({
//         //   position: {lat: 34.052235, lng: -118.243683},
//         //   map: resultsMap,
      
//         // });


//         // marker.setMap(map);
//         // To add the marker to the map, call setMap();



//     } else {
//       alert('Geocode was not successful for the following reason: ' + status);
//     }
//   });
// }



//   var marker = new google.maps.Marker({
//   position: latLong,
//   map: map,
//   title: 'Hello World!'
// });
// var latLong = {lat: latitude, lng: longitude};
// console.log(latLong);

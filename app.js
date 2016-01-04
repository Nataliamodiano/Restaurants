//get access to submit button and add event listener on click
var submit = document.getElementById('submit');
submit.addEventListener('click', getApi, false);

// submit.addEventListener('keyup', keyEvent, false);

// function keyEvent(event) {
//   var key = event.keyCode || event.which;
//   var keychar = String.fromCharCode(key);
//   if (key == 13) {
//     metaChar = true;
//   } else {console.log('broken');}
// }

//initiate the map with the center of Los Angeles
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat: 34.052235, lng: -118.243683},
    scrollwheel: false
  });
  var geocoder = new google.maps.Geocoder();
  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
  });
}

//defined geocode function
function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('location').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      resultsMap.setCenter(results[0].geometry.location);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}


function getApi(e) {
  e.preventDefault();
  //get search box values
  var find = document.getElementById('find').value;
  var category = document.getElementById('category').value || 'food';
  var location = document.getElementById('location').value;
  var radius = document.getElementById('radius').value || '4828.03';
  var sort = document.getElementById('sort').value || '0';

  //clear previous search results 
  while (result.firstChild) {
    result.removeChild(result.firstChild);
  }

  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (xhr.status === 200) {
      //parsed the response text and got access to the businesses
      var response = JSON.parse(xhr.responseText);
      var name = response.businesses;

      //geocoded the location that is entered to become the new center of the map
      var geocoder = new google.maps.Geocoder();
      var address = document.getElementById('location').value;
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: {lat: 34.052235, lng: -118.243683},
        scrollwheel: false
      });
      geocodeAddress(geocoder,map);

      //loop through all names in the yelp array
      for (i = 0; i < name.length; i++){
        var result = document.getElementById('result');
        var item = document.createElement('li');
        var title = document.createElement('h4');
        var paragraph = document.createElement('p');
        var image = document.createElement('img');
        image.setAttribute('src', name[i].rating_img_url);

        title.textContent = name[i].name;
        paragraph.textContent = ['This location has a rating of ', name[i].rating, ' stars and a review count of ', name[i].review_count, '.'].join('');

        //append results to the page
        result.appendChild(item);
        item.appendChild(title);
        item.appendChild(paragraph);
        title.appendChild(image);

        //get coordinates
        var latitude = name[i].location.coordinate.latitude;
        var longitude = name[i].location.coordinate.longitude;
        var latLong = {lat: latitude, lng: longitude};

        // for (j = 1; j < 21; j++){
        //   var labels = j;
        //   console.log(labels);
        // }
        var labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'];
        var labelIndex = 0;

        //drop marker for every business name
        var marker = new google.maps.Marker({
          position: latLong,
          map: map,
          animation: google.maps.Animation.DROP,
          title: name[i].name,
          label: labels[i][labelIndex++ % labels.length],
        });
      }
    } else {
        alert('Make sure you entered Find and Location values');
      }
  }

  xhr.open('GET', 'http://localhost:8080/yelp-api/' + find + '/' + category + '/' + location + '/' + radius + '/' + sort, true);
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.send(location);
}

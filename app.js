var submit = document.getElementById('submit');
submit.addEventListener('click', getApi, false);

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

function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('location').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      resultsMap.setCenter(results[0].geometry.location);
      // var marker = new google.maps.Marker({
      //   map: resultsMap,
      //   position: results[0].geometry.location
      // });
      console.log(address);
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
  var radius = document.getElementById('radius').value || '16000';
  var sort = document.getElementById('sort').value || '0';

  //clear previous search results 
  while (result.firstChild) {
    result.removeChild(result.firstChild);
  }

  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      console.log(response);
      var name = response.businesses;

      var geocoder = new google.maps.Geocoder();
      var address = document.getElementById('location').value;

      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: {lat: 34.052235, lng: -118.243683},
        scrollwheel: false
      });
      geocodeAddress(geocoder,map);
      console.log(name.length)
      //loop through all names in the yelp array
      for (i = 0; i < name.length; i++){
        var result = document.getElementById('result');
        var item = document.createElement('li');
        var title = document.createElement('h3');
        var paragraph = document.createElement('p');
        var image = document.createElement('img');
        image.setAttribute('src', name[i].rating_img_url);

        title.textContent = name[i].name;
        paragraph.textContent = ['This restaurant has a rating of ', name[i].rating, ' stars and a review count of ', name[i].review_count, '.'].join('');

        //append results to the page
        result.appendChild(item);
        item.appendChild(title);
        item.appendChild(paragraph);
        title.appendChild(image);

        //get coordinates
        var latitude = name[i].location.coordinate.latitude;
        var longitude = name[i].location.coordinate.longitude;
        var latLong = {lat: latitude, lng: longitude};
        console.log(latLong);

        var marker = new google.maps.Marker({
          position: latLong,
          map: map,
          title: name[i].name
        });

      }
    } else {alert('Make sure you entered Find and Location values');}
  }

  xhr.open('GET', 'http://localhost:8080/yelp-api/' + find + '/' + category + '/' + location + '/' + radius + '/' + sort, true);
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.send(location);
}

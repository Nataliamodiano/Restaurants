var submit = document.getElementById('submit');
submit.addEventListener('click', getApi, false);

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

      //loop through all names in the yelp array
      for (i = 0; i < name.length; i++){
        var result = document.getElementById('result');
        var item = document.createElement('li');
        var title = document.createElement('h3');
        var paragraph = document.createElement('p');
        var image = document.createElement('img');
        image.setAttribute('src', name[i].rating_img_url);

        //get coordinates
        var latLong = name[i].location.coordinate;
        console.log(latLong);

        title.textContent = name[i].name;
        paragraph.textContent = ['This restaurant has a rating of ', name[i].rating, 'and a review count of ', name[i].review_count, '.'].join(' ');

        //append results to the page
        result.appendChild(item);
        item.appendChild(title);
        item.appendChild(paragraph);
        title.appendChild(image);
      };
    } else {alert('Make sure you entered a Find and Location value');}
  };

  xhr.open('GET', 'http://localhost:8080/yelp-api/' + find + '/' + category + '/' + location + '/' + radius + '/' + sort, true);
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.send(location);
};
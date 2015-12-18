var submit = document.getElementById('submit');
submit.addEventListener('click', getApi, false);

function getApi(e) {
  e.preventDefault();
  var find = document.getElementById('find').value;
  console.log(find);
  var location = document.getElementById('location').value;
  console.log(location);

  var xhr = new XMLHttpRequest();

  xhr.onload = function() {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      console.log(response);
      var name = response.businesses;
      for (i = 0; i < name.length; i++){
        console.log(name[i].name);
        var result = document.getElementById('result');
        // result.textContent = name[i].name;
        var newUl = document.createElement('li');
        var content = document.createTextNode(name[i].name);
        result.appendChild(newUl);
        newUl.appendChild(content);
      };
      console.log(name);
    } else {alert('broken');}
  };

  xhr.open('GET', 'http://localhost:8080/yelp-api/' + find + '/' + location, true);
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.send(location);
};
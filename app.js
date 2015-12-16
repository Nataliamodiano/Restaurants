var submit = document.getElementById('submit');
submit.addEventListener('click', getApi, false);

function getApi(e) {
  e.preventDefault();
  var find = document.getElementById('find').value;
  console.log(find);
  // var location = document.getElementById('location').value;
  // console.log(location);

  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      console.log(response + 'hey');
      //postResponse(response);
    };
    
    // function postResponse(response) {
    //   var result = document.getElementById('result');
    //   result.textContent = response;
    //   console.log(response);
    // };
  };

  xhr.open('POST', '/yelp-api/' + find, true);
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.send(null);
};
var addRestaurant = document.getElementById('add-restaurant');
addRestaurant.addEventListener('click', addName, false);

function addName(e) {
  e.preventDefault();
  // get value from input and add it to list
  var restaurantName = document.getElementById('restaurant-name').value;
  var restaurantList = document.getElementById('restaurant-list');
  var item = document.createElement('li');
  var title = document.createElement('h4');
  title.textContent = restaurantName;
  restaurantList.appendChild(item);
  item.appendChild(title);
};

// get value of item clicked on in search result list
result.addEventListener('click', function(e) {
  var newLi = document.getElementsByClassName('new-li');
  e = e || window.event;
  var target = e.path[1],
  text = target.textContent || text.innerText;
  console.log(text); 

  var restaurantList = document.getElementById('restaurant-list');
  var item = document.createElement('li');
  var title = document.createElement('h4');
  title.textContent = text;
  restaurantList.appendChild(item);
  item.appendChild(title);
}, false);


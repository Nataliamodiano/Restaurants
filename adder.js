var addRestaurant = document.getElementById('add-restaurant');
addRestaurant.addEventListener('click', addName, false);

function addName() {

  // get value from input and add it to list
  var restaurantName = document.getElementById('restaurant-name').value;
  var restaurantList = document.getElementById('restaurant-list');
  var item = document.createElement('li');
  var title = document.createElement('h4');
  var remove = document.createElement('input');
  remove.setAttribute('type', 'button');
  remove.setAttribute('value', 'Delete');
  title.textContent = restaurantName;
  restaurantList.appendChild(item);
  item.appendChild(title);
  item.appendChild(remove);
  //delete item on button click
  remove.addEventListener('click', removeItem, false);
  function removeItem() {
    restaurantList.removeChild(item);
  }
  document.getElementById('restaurant-name').value = null;
};

// get value of item clicked on in search result list
result.addEventListener('click', function(e) {
  //ar newLi = document.getElementsByClassName('new-li');
  e = e || window.event;
  var target = e.path[1],
  text = target.textContent || text.innerText;
  // append the item clicked on to the list
  var restaurantList = document.getElementById('restaurant-list');
  var item = document.createElement('li');
  var title = document.createElement('h4');
  var remove = document.createElement('input');
  remove.setAttribute('type', 'button');
  remove.setAttribute('value', 'Delete');
  title.textContent = text;
  restaurantList.appendChild(item);
  item.appendChild(title);
  item.appendChild(remove);
  //delete item on button click
  remove.addEventListener('click', removeItem, false);
  function removeItem() {
    restaurantList.removeChild(item);
  }
}, false);


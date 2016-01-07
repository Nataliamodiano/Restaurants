var addRestaurant = document.getElementById('add-restaurant');
addRestaurant.addEventListener('click', typeName, false);

function typeName() {
  // get value from input and add it to list
  var restaurantName = document.getElementById('restaurant-name').value;
  var restaurantList = document.getElementById('restaurant-list');
  var item = document.createElement('li');
  var title = document.createElement('h3');
  var remove = document.createElement('input');
  remove.setAttribute('type', 'button');
  remove.setAttribute('value', 'Delete');
  title.textContent = restaurantName;
  restaurantList.appendChild(item);
  item.appendChild(title);
  item.appendChild(remove);
  title.setAttribute('class', 'restaurant');

  //delete item on button click
  remove.addEventListener('click', removeItem, false);
  function removeItem() {
    restaurantList.removeChild(item);
  }
  //delete input value
  document.getElementById('restaurant-name').value = null;

  //add text box for notes 
  var notes = document.createElement('textarea');
  var notesButton = document.createElement('input');
  notesButton.setAttribute('type', 'button');
  notesButton.setAttribute('value', 'Add Notes');
  item.appendChild(notesButton);
  item.appendChild(notes);
  notes.setAttribute('class', 'collapse');
  notesButton.addEventListener('click', toggleNotes, false);
  function toggleNotes() {
    
    if (notes.className === 'collapse'){
      notes.setAttribute('class', 'collapse in');
    } 
    else if (notes.className === 'collapse in'){
      notes.setAttribute('class', 'collapse');
    }
    else {
      console.log('You got the wrong note');
    }
  }
}

//         remove link text on my list after it is clicked
//         var link = document.getElementById('link');
//         console.log(link);

//         link.addEventListener('click', function(){
//           addLink.setAttribute('class', 'hide');
//           console.log('hide');
//         }, false);
// console.log('5');

// get value of item clicked on in search result list
result.addEventListener('click', function(e) {
  e = e || window.event;
  var target = e.path[1];
  text = target.textContent || text.innerText;

  // append the item clicked on to the list
  var restaurantList = document.getElementById('restaurant-list');
  var item = document.createElement('li');
  var title = document.createElement('h4');
  var remove = document.createElement('input');
  remove.setAttribute('type', 'button');
  remove.setAttribute('value', 'Delete');
  title.textContent = text;
  title.setAttribute('class', 'item');
  
  var restaurant = document.getElementById('restaurant');
  var locations = document.getElementById('locations');
  var restaurantClone = restaurant.cloneNode(true);
  var locationsClone = locations.cloneNode(true);
  
  console.log(restaurant);

  if (e.path[0].className === 'gray') {
    restaurantList.appendChild(item);
  } else {
    console.log('broken');
  }
  item.appendChild(restaurantClone);
  item.appendChild(locationsClone);
  item.appendChild(remove);

  //delete item on button click
  remove.addEventListener('click', removeItem, false);
  function removeItem() {
    restaurantList.removeChild(item);
  }
  //add text box for notes 
  var notes = document.createElement('textarea');
  var notesButton = document.createElement('input');
  notesButton.setAttribute('type', 'button');
  notesButton.setAttribute('value', 'Add Notes');
  item.appendChild(notesButton);
  item.appendChild(notes);
  notes.setAttribute('class', 'collapse');
  notesButton.addEventListener('click', toggleNotes, false);
  function toggleNotes() {
    
    if (notes.className === 'collapse'){
      notes.setAttribute('class', 'collapse in');
    } 
    else if (notes.className === 'collapse in'){
      notes.setAttribute('class', 'collapse');
    }
    else {
      console.log('You got the wrong note');
    }
  }

}, false);




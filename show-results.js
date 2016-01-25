// if the user adds a restaurant name before they use the search function, "my list" will take the whole row. Once the user searches the row will devide into "my list" and the search results
var manualList = document.getElementById('manual-list');
var lists = document.getElementById('lists');
var resultList = document.getElementById('result-list');
//get access to submit button and add event listener on click
var submit = document.getElementById('submit');
submit.addEventListener('click', showResults, false);
function showResults() {
  resultList.setAttribute('id', '');
  lists.setAttribute('id', '');
  manualList.setAttribute('class', 'col-sm-5');
  manualList.setAttribute('id', '');
}
var addRestaurant = document.getElementById('add-restaurant');
addRestaurant.addEventListener('click', showMyResults, false);
function showMyResults() {
  manualList.setAttribute('id', '');
  lists.setAttribute('id', '');
  if (resultList.id === '') {
    manualList.setAttribute('class', 'col-sm-5');
  } if (resultList.id === 'result-list'){
    manualList.setAttribute('class', 'center-block');
  }
}
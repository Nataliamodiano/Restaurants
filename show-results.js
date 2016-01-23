var addRestaurant = document.getElementById('add-restaurant');
addRestaurant.addEventListener('click', showMyResults, false);

function showMyResults() {
  manualList.setAttribute('id', '');
  manualList.setAttribute('class', 'center-block');
  lists.setAttribute('id', '');
}
var manualList = document.getElementById('manual-list');

//get access to submit button and add event listener on click
var submit = document.getElementById('submit');
submit.addEventListener('click', showResults, false);

var lists = document.getElementById('lists');
function showResults() {
  var resultList = document.getElementById('result-list');
  resultList.setAttribute('id', '');
  lists.setAttribute('id', '');
  manualList.setAttribute('class', 'col-sm-5');
  manualList.setAttribute('id', '');
}
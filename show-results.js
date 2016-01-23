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

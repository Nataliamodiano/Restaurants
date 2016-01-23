//get access to submit button and add event listener on click
var submit = document.getElementById('submit');
submit.addEventListener('click', showResults, false);

function showResults(){
  var resultList = document.getElementById('result-list');
  resultList.setAttribute('id', '');
}
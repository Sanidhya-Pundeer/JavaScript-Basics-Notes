// Dynamic Element Creation using js
// on the click of the button a new element will be created and added to the DOM

var container = document.getElementById('myContainer');
var button = document.getElementById('myButton');

button.addEventListener('click',addingNewElement);

function addingNewElement(){
    const newElement = document.createElement('h1');

    newElement.innerText = 'Sanidhya Pudneer';
    //container.innerHTML = newElement;// will add hashcode to container wont work properly 
    // container.innerHTML = '<p>Sanidhya Pundeer</p>'; // will only add once on click, not multiple times
    container.appendChild(newElement);
}
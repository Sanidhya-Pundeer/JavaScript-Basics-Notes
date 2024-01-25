// 3 methods to for eventlistening
// 1. inline event listeners
// 2. by linked js and calling the function made below
// 3. by giving id to the element

function handleButton(){
    console.log('That Button clicked');
    //alert('you clicked that button');
}

var button = document.getElementById("click");
// 2 ways to attach eventListeners to this Element

// First 
// the last event listener will be called and executed, overriding the previous ones
// button.onclick = function(){
//     console.log('You clicked that button');
// }

//Second (preferred way)
//using this approach if another event listener is added then instead of overriding the previous, 
//both will run simultaneously(added to the list of event listeners)

// button.addEventListener('click', function(){
//     console.log('You clicked that button');
// })

// or 

// button.addEventListener('click', handleButton);
//calling the function by name

//---------------small use case of event listener--------------------

var namePara = document.getElementById('name');
//toggle effect using event listener
function changeColor(){
    if(namePara.style.color === 'red'){
        namePara.style.color = 'blue';
    }
    else {
        namePara.style.color = 'red'
    }
    ;
}

button.addEventListener('click',changeColor);





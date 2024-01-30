const prac = document.getElementById('random-info');
const fontSize = document.getElementById('size-info');
const button = document.getElementById('size-button');



// console.log(userSize);

function Size(){
    var userSize= fontSize.value; 
    function changeSize(){
        prac.style.fontSize = userSize+'px';
    }

    return changeSize;
}

button.addEventListener('click',()=>{
    const newSize = Size();
    newSize();
});



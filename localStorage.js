//Values are stroed in local storage in browser in key value pairs, can be used even after refresh
//local storage(5-10mb) is for cache and cookies(4kb) is for session management 


const button = document.getElementById('button');

const inputUserName = document.getElementById('inputUserName');

const userName = document.getElementById('userName');


button.addEventListener('click',()=>{
    const value = inputUserName.value;
    localStorage.setItem("name",value);//localStorage.setItem(key,value); to assign value
});


window.addEventListener('load',()=>{
    const value = localStorage.getItem("name");
    userName.innerText = value;

})
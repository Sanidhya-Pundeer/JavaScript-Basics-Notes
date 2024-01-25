//-------------Functions----------------//

// function add(num1, num2){//argument 
//     console.log( num1 + " " + num2 );
// }

// add(5,6);
//parameters 


// function multiply(...args){   // spread operator 
//     let ans = 0;
//     for(var i=0; i<args.length; i++){
//         ans += args[i];
//     }
//     result = ans;
// }

// function multiplyV2(arguments){
//     let ans = 0;
//     for(var i=0; i<arguments.length; i++){
//         ans += arguments[i];
//     }
//     result = ans;
// }

// let result = multiply(1,2,3,4,5,6,7,8,9,10);
// console.log(result);






//----------------------arrow function-----------------------

//  1. Syntax
// function sayHello(){
//     console.log("Hello");
// }

const sayHello = () => {
    console.log("Hello");
}

//sayHello();

const addv3 = (a,b) => {
    return a + b;
}

//or you can write one liner like this also

// const addv3 = (a,b) => a + b;

console.log(addv3(5,6));



//   2. 'agruments' 

//spread operator is used for multiple arguments. 'arguments' keyword is not supported in arrrow functions.

const div = (...args) => {
    let ans = 0;
    for(var i=0; i<args.length; i++){
        ans += args[i];
    }
    result = ans;
}

div(2,3,4,5,6,);


// 3. Hoisting

//hoisting does not work in the case of arrow functions 


// 4. this keyword 

// this keyword returns the value of the recent/immediate caller's scope, 
// in arrow functions the immediate caller scope is the browser window and hence this does not work in arrow functions 







// High order and callbacks 
//a function that takes a function as an argument is called an highorder function 

function addition(a,b, cb){
    let fResult = a + b;
    cb(fResult);
}

addition(7,8, function (val) {
    console.log(val);
})

//addition is a high order function, and cb is the callback function called after the execution of high order fucntion 

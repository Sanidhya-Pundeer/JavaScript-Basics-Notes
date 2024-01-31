// closure gives access to an outer function's scope from an inner function 

function main(){
const name = 'sanidhya';// surrounding state or lexical environment

    function sayMyName(){
        console.log(name);// no return for sayMyName
        // return name;
}

return sayMyName;// () brackets for execution of a function right then and there!!!

// return sayMyName(); if add (), then it calls itself here

}

let fn = main(); // assigning a function to a variable. 
//() fn stores the return statement of the function 
// and incase of no return statement, it stores the result which is undefined 


console.log(fn);
fn();
// here fn is a function
// console.log(fn); // here fn is a variable, contains return statement of main()


//chatgpt: https://chat.openai.com/share/b47f9f03-9035-4526-84f5-21dcb300bcfc for closure


//------------- Practical Use Case:------------

// function adder(num1){
//     function add(num2){
//         console.log(num1 + num2);
//     }
//     return add;
// }

// const addTo5 = adder(5);
// const addTo10 = adder(10);
// addTo5(2);
// addTo10(6);


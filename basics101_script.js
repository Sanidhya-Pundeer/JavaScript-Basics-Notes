// -----------------Variables-----------------//


//Languages such as java are strongly types languages, js is loosely typed language 
// DataType varName = value;

var age = 25;


// var -> global scope
//let and const -> local scope

// const once assigned cannot be changed unlike var and let 
// variables made with const have to be assigned a value when declared


//-----------------Data Types-----------------//

// 1. Number

var age = 25;
var no = 3.14;

// 2. String

const name = "John";

// 3. Boolean

let isMarried = true;
let isWorking = false;

// 4. undefined or null 

let x;
// this uses some space in memory where as undefined does not use any space in memory, 
// it is used to free the space in memory

// 5. Undefined

let y = undefined;

// 6. Object

const person = {
    firstName: "John",
    lastName: "Wick",
    age: 25,
};

console.log(person.firstName);
// to access a property of the object 
// objects contains key and value pairs

//fact about operators in js:
// string + string -> string
// string + number -> string
// string * number -> number

//typeof operator 
// returns the type of the operator 
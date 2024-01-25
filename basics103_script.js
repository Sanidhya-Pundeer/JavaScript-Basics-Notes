// Arrays
// to append elements at the end of the array we use push function:


// const students = ["John", "Bob", "Jane", "Peter"];

// students.push("Mark");

// console.log(students);


// arrays are non homogenous in nature, can store multiple type of value

// students.indexOf("John");
// tells the index of the element in the array


// students.pop();
// used to remove the element from the array


// function print (n){
//     console.log(n);
// }

//used to iterate each element of the array 
// students.forEach(print);

//.map is very similiar to forEach
//.map returns an array 


const numbers = [1, 2, 3, 4, 5];

function double(num){
    return num*2;

}

// const newArr = numbers.map(double);
//const newArr = numbers.toEach(double);
//toEach does not return anything hence cant be used here
// console.log(newArr);


//find function in array 
const arr=[1,2,3,4,5,6,7];
// var ans = arr.findIndex((num) => num === 3);

// console.log(ans);

//include returns a boolean value if the elements is present in the array 


const newArray = arr.filter((num)  => num % 2 === 0);

console.log(newArray);
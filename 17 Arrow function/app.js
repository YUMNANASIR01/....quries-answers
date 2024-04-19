"use strict";
//## Basic Arrow Functions Question:
//Define a Arrow function called `greet` that takes a parameter `name` and returns a greeting message including the provided `name`. Then, call the `greet` Arrow function with the argument "John" and log the result to the console.
//  let greet = () => "John";
//  let result = greet()
//  console.log(result);
// ## Arrow Function Return Value Question:
// Write a JavaScript Arrow function named `calculateArea` that takes two parameters: `length` and `width`, representing the length and width of a rectangle respectively. The Arrow function should calculate the area of the rectangle and return the result. 
// Provide an example of calling this Arrow function with values `5` for length and `3` for width, and then print the result.}
const calculateArea = (length, width) => {
    const calculate = length + width;
    return calculate;
};
let arearesult = calculateArea(5, 3);
console.log(arearesult);
// ## Default Parameter Arrow Function Question:
//Create a JavaScript Arrow function named `greet` that accepts two parameters: `name` and `greeting`. The Arrow function should return a greeting message using the provided `name` and `greeting`. If no `greeting` is provided, it should default to `"Hello"`. 
// For example:
//- When `greet("John", "Good morning")` is called, it should return `"Good morning, John!"`.
//- When `greet("Jane")` is called, it should return `"Hello, Jane!"`.
let greeting = (name = "Hello") => {
    let myname = name + greeting;
    return myname;
};
let answer = greeting("Hello");
console.log(`greet("john", "Good morning")`);
console.log(`greet("jane")`);
// ## Rest Parameter in Arrow Function Question:
// Explain the concept of a rest parameter in typescript. write a typeScript Arrow function named `friend` that accepts any name of parameters and returns all name in array.
// For example:
// - If `name('taha', 'Ahmed', 'Ali'), it should return ['taha', 'Ahmed', 'Ali'].
// let friends =(...all : string[]) => {
// let friend = [...'taha', 'Ahmed', 'Ali']
// return friends
// }
// let result = (`friends['taha', 'Ahmed', 'Ali']`);
// console.log(result);
// ## Spread Operator in Arrow Function:
// Explain the concept of a spread operator in typescript. write a typeScript Arrow function named `friend` that accepts any name of parameters and returns all name in array.then make a copy of that name and pop last name form array. make sure your orignal array should not be change.
// For example:
// - If `name('taha', 'Ahmed', 'Ali'), it should return ['taha', 'Ahmed', 'Ali'].
let friends = (...all) => {
    let friend = [...'taha', 'Ahmed', 'Ali'];
    console.log(friend);
    let names = [...'taha', 'Ahmed', 'Ali'];
    names.pop();
    return names;
};
let result = friends('taha', 'Ahmed', 'Ali');
console.log(result);

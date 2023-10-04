"use strict";
// Number
let myNumber = 1;
// String
let myName = "John";
// Boolean
let isWindy = true;
// Any
let apiResponse = {
    data: {
        id: 1,
        name: "Jason"
    }
};
// Array
let numbers = [1, 2, 3, 4, 5];
let fizzBuzz1 = [1, 2, "fizz", 4, "buzz"];
let fizzBuzz2 = [1, 2, "fizz", 4, "buzz"];
// Functions
const add = (a, b) => {
    return a + b;
};
const sayHello = (name) => {
    console.log(`Hello, ${name}`);
};
const canBuyDrink = (age) => {
    return age >= 18;
};
const squaredNumbers = (numbers) => {
    return numbers.map((num) => num ** 2);
};
// ENUMS
var Status;
(function (Status) {
    Status[Status["INCOMPLETE"] = 0] = "INCOMPLETE";
    Status[Status["COMPLETE"] = 1] = "COMPLETE";
})(Status || (Status = {}));
const addTask = (name, status) => {
    console.log(`Added ${name}: ${status}`);
};
addTask("Learn TypeScript", Status.INCOMPLETE);

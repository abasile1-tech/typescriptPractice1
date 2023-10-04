// Number
let myNumber: number = 1;

// String
let myName: string = "John";

// Boolean
let isWindy: boolean = true;

// Any
let apiResponse: any = {
  data: {
    id: 1,
    name: "Jason"
  }
};

// Array
let numbers: number[] = [1, 2, 3, 4, 5];

let fizzBuzz1: (string | number)[] = [1, 2, "fizz", 4, "buzz"];

// Type Definitions
type FizzBuzzType = (string | number)[]; 

let fizzBuzz2: FizzBuzzType = [1, 2, "fizz", 4, "buzz"];

// Functions
const add = (a: number, b: number): number => {
  return a + b;
}

const sayHello = (name: string): void => {
  console.log(`Hello, ${name}`);
}

const canBuyDrink = (age: number): boolean => {
  return age >= 18;
}

const squaredNumbers = (numbers: number[]): number[] => {
  return numbers.map((num: number) =>  num ** 2);
}

// ENUMS
enum Status {
  INCOMPLETE = 0,
  COMPLETE = 1,
}

const addTask = (name: string, status: Status): void => {
  console.log(`Added ${name}: ${status}`);
}

addTask("Learn TypeScript", Status.INCOMPLETE);

// Type Definitions 2
type Rating = 1 | 2 | 3 | 4 | 5;

const rateLesson = (lessonId: string | number, rating: Rating): void => {
  console.log(`You rated ${lessonId}: ${rating}`);
}

rateLesson("TypeScript", 5);


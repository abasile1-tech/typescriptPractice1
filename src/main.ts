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

// Objects
type LoginType = {
  username: string;
  password: string;
}

type UserType = {
  username: string;
  password: string;
  age: number;
}

const login = (details: LoginType): void => {
  console.log(`You logged in as ${details.username}`);
}

const user: UserType = {
  username: "typescriptlover99", 
  password: "123", 
  age:12
};

login(user);

// Interfaces
interface IUser {
  username: string;
  password: string;
  age: number;
}

const user2: IUser = {
  username: "jacksparrow",
  password: "arrrrrrr",
  age: 21
}

interface IEmployee extends IUser {
  employee_id: string;
}

const employee: IEmployee = {
  employee_id: "Alpha47",
  username: "bigboy",
  password: "yeeeeeeaaaaa",
  age: 29
}

type EmployeeType = UserType & {
  employee_id: string;
}

const employee2: EmployeeType = {
  username: "bab",
  password: "ha",
  age: 37,
  employee_id: "3999"
}

// Generics
const filter = <T>(arr: T[], filterFunction: (num: T) => boolean): T[] => {
  return arr.filter(filterFunction)
}

const evenNumbers = filter(numbers, (num) => num % 2 == 0);

const words = ["snake", "sausage", "gareth", "cabbage"];
const wordsStartingWithS = filter(words, (word) => word[0] == "s");
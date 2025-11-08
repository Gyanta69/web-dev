//function doesnt run until called
// can use function many times
//what is hoisting : using a function before its declaration
// hoisting - function can be called before declaration if function is declared using function keyword
// hoisting doesnt work for function expression and arrow function
function doSomething(name, age, gmail) {
}
doSomething("John", 25, "jon@gmail.com");

function doSom() {
   console.log(arguments);
}
doSom("John", 25, "jon@gmail.com");

// arrow function
let doSomethingElse = (name, age, gmail) => {
   console.log(arguments); // arguments object is not available in arrow functions
}
doSomethingElse("John", 25, "sss");

let doAnotherThing = function(name, age, gmail) {
   console.log(arguments);
}
doAnotherThing("John", 25, "sss");

// function with return type
function sum(a, b) {
   return a + b;
}
let result = sum(5, 10);
console.log(result); // 15

// function with default parameters
function multiply(a, b = 2) {
   return a * b;
}

let mulResult = multiply(5);
console.log(mulResult); // 10

// function with rest parameters
function addNumbers(...numbers) {
   return numbers.reduce((acc, curr) => acc + curr, 0);
}
let addResult = addNumbers(1, 2, 3, 4, 5);
console.log(addResult); // 15
// function expression
let greet = function(name) {
   return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Hello, Alice!
// Immediately Invoked Function Expression (IIFE)
(function() {
   console.log("This function runs immediately upon definition!");
})();
// Output: This function runs immediately upon definition!

// Recursive function
function factorial(n) {
   if (n === 0) {
       return 1;
   }
   return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120

// Function as first-class citizens
function processUserInput(callback) {
   let name = "Bob";
   console.log(callback(name));
}
processUserInput(function(name) {
   return `Hello, ${name}!`;
}
); // Output: Hello, Bob!

// Arrow function with implicit return
let square = x => x * x;
console.log(square(4)); // Output: 16

// Hoisting example
hoistedFunction(); // Works due to hoisting

function hoistedFunction() {
   console.log("This function is hoisted!");
}
// Output: This function is hoisted!
// non-hoisted function example
//nonHoistedFunction(); // Uncaught ReferenceError: Cannot access 'nonHoistedFunction' before initialization
let nonHoistedFunction = function() {
   console.log("This function is not hoisted!");
}
//pure function example
// A pure function always produces the same output for the same input and has no side effects

function pureFunction(x, y) {
   return x + y;
}
console.log(pureFunction(2, 3)); // Output: 5
console.log(pureFunction(2, 3));
 // Output: 5

// Impure function example
let counter = 0;
function impureFunction() {
   counter++;
   return counter;
}
console.log(impureFunction()); // Output: 1
console.log(impureFunction()); // Output: 2

// Callback function example
function fetchData(callback) {
   setTimeout(() => {

         const data = { name: "John", age: 30 };
         callback(data);
   }, 1000);
}
fetchData(function(data) {
   console.log("Data received:", data);
}
); // Output after 1 second: Data received: { name: "John", age: 30 }

// Higher-order function example 
function higherOrderFunction(fn, value) {
   return fn(value);
}
function double(x) {
   return x * 2;
}
console.log(higherOrderFunction(double, 5)); // Output: 10

// Function constructor example
let Person = new Function("name", "age", `
   this.name = name;
   this.age = age;
   this.greet = function() {
       return 'Hello, ' + this.name;
   }
`);
let john = new Person("John", 25);
console.log(john.greet()); // Output: Hello, John


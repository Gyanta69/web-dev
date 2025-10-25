
console.log("This is a log message.");


var a = 5;
var b = 10; // bad practice: using 'var' for variable declarations

let sum = a + b; // always use 'let' or 'const' for variable declarations

const pi = 3.14; // good practice: using 'const' for constants

//printing different types of messages to the console
console.log("The sum of a and b is: " + sum);
console.info(`The value of pi is approximately: ${pi}`);
console.warn("This is a warning message.");
console.error("This is an error message.");
console.table({ a: a, b: b, sum: sum, pi: pi });

let userResponse = prompt("This is a prompt message.");
console.log("User response: " + userResponse);

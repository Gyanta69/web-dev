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

// let userResponse = prompt("This is a prompt message.");
// console.log("User response: " + userResponse);

"This is a string literal.".slice(3, 10);

// templet strings
let a = 5;
let b = 10;
"pragyan 2+2"`pragyan ${2 + 2}``pragyan ${a + b}``pragyan ${a * b}``pragyan ${
  a / b
}``pragyan ${a - b}``pragyan ${a % b}`;
`The sum of ${a} and ${b} is ${a + b}.`;
`The product of ${a} and ${b} is ${a * b}.`;
`The difference when ${b} is subtracted from ${a} is ${a - b}.`;
`The quotient when ${a} is divided by ${b} is ${a / b}.`;
`The remainder when ${a} is divided by ${b} is ${a % b}.`;

console.log(`The sum of ${a} and ${b} is ${a + b}.`);
console.log(`The product of ${a} and ${b} is ${a * b}.`);
console.log(`The difference when ${b} is subtracted from ${a} is ${a - b}.`);
console.log(`The quotient when ${a} is divided by ${b} is ${a / b}.`);
console.log(`The remainder when ${a} is divided by ${b} is ${a % b}.`);

console.log("End of script.").includes("End");
console.log("End of script.").startsWith("This");


// statements and expressions
//a code that gives fixed answer
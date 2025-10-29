//Operators in JavaScript
//Arithmetic Operators
let a = 10;
let b = 5;
console.log("Addition: " + (a + b)); //15
console.log("Subtraction: " + (a - b));
console.log("Multiplication: " + (a * b)); //50
console.log("Division: " + (a / b)); //2
console.log("Modulus: " + (a % b)); //0

//Assignment Operators
let c = 20;
c += 5; // c = c + 5
console.log("c after += 5: " + c);
c -= 3; // c = c - 3
console.log("c after -= 3: " + c);
c *= 2; // c = c * 2
console.log("c after *= 2: " + c);
c /= 4; // c = c / 4
console.log("c after /= 4: " + c);
c %= 3; // c = c % 3
console.log("c after %= 3: " + c);

//Comparison Operators
let x = 10;
let y = '10';
console.log("x == y: " + (x == y)); //true not so strict
console.log("x === y: " + (x === y)); //false strict
console.log("x != y: " + (x != y)); //false dont use this
console.log("x !== y: " + (x !== y)); //true strict use this
console.log("x > 5: " + (x > 5)); //true
console.log("x < 5: " + (x < 5));
console.log("x >= 10: " + (x >= 10)); //true
console.log("x <= 9: " + (x <= 9));

//Logical Operators
// What are logical operators?
//Logical operators are used to combine multiple conditions or to invert a condition.
// && (AND), || (OR), ! (NOT)
//true && true = true otherwise false
//false || false = false otherwise true
//!true = false

let p = true;
let q = false;
console.log("p && q: " + (p && q)); //false
console.log("p || q: " + (p || q));
console.log("!p: " + (!p)); //false
console.log("!q: " + (!q)); //true

// Ternary Operator
let age = 19;
let canVote = (age >= 18) ? "Yes, can vote" : "No, cannot vote";
console.log("Can vote: " + canVote);

//typeof Operator
console.log("Type of a: " + typeof a); //number
console.log("Type of y: " + typeof y); //string
console.log("Type of p: " + typeof p); //boolean
console.log("Type of canVote: " + typeof canVote); //string
console.log("Type of undefined variable: " + typeof z); //undefined

// instanceof Operator
let date = new Date();
console.log("date instanceof Date: " + (date instanceof Date)); //true
console.log("a instanceof Number: " + (a instanceof Number)); //false
let numObj = new Number(10);
console.log("numObj instanceof Number: " + (numObj instanceof Number)); //true
console.log("y instanceof String: " + (y instanceof String)); //false

//string operators
let str1 = "Hello, ";
let str2 = "World!";
let greeting = str1 + str2;
console.log("Greeting: " + greeting); //Hello, World!

// spread and rest operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArr = [...arr1, ...arr2];
console.log("Combined Array: " + combinedArr); //1,2,3,4,5,6        
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log("Sum of numbers: " + sum(1, 2, 3, 4, 5)); //15

// nullish coalescing operator
let userInput = null;
let defaultValue = "Default Value";
let finalValue = userInput ?? defaultValue;
console.log("Final Value: " + finalValue); //Default Value

// optional chaining operator
let obj = {}

obj?.name = "John";
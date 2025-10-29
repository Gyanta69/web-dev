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
//true && false = false
//true || false = true
//!true = false

let p = true;
let q = false;
console.log("p && q: " + (p && q)); //false
console.log("p || q: " + (p || q));
console.log("!p: " + (!p)); //false
console.log("!q: " + (!q)); //true

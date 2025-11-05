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


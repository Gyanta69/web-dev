//conditional loops in js
for (let i = 0; i < 5; i++) {
    console.log("For Loop iteration: " + i);
}
let j = 0;
while (j < 5) {
    console.log("While Loop iteration: " + j);
    j++;
}
let k = 0;
do {
    console.log("Do-While Loop iteration: " + k);
    k++;
} while (k < 5);
console.log("End of loops script.");
console.log("End of loops script.").endsWith("script.");
console.log("End of loops script.").repeat(2);

let arr = [1, 2, 3, 4, 5];
for (let index in arr) {
    console.log("Index in array: " + index);
}
for (let value of arr) {
    console.log("Value in array: " + value);
}
console.log("End of loops script.").includes("loops");
console.log("End of loops script.").startsWith("End");

// function to demonstrate loops
function demonstrateLoops() {
    for (let i = 0; i < 3; i++) {
        console.log("Function Loop iteration: " + i);
    }
}
demonstrateLoops();

// Arrow function to demonstrate loops
let demonstrateArrowLoops = () => {
    let i = 0;
    while (i < 3) {
        console.log("Arrow Function Loop iteration: " + i);
        i++;
    }
};
demonstrateArrowLoops();
console.log("End of loops script.").includes("loops");
console.log("End of loops script.").startsWith("This");
console.log("End of loops script.").repeat(3);
console.log("End of loops script.").endsWith("script.");


let age = prompt("Enter your age:");

if (age === null) {
    console.log("User cancelled the prompt.");
} else {
    if (age.trim() === "") {
        console.error("No age provided.");
    } else {
        let ageNum = Number(age);
        if (isNaN(ageNum)) {
            console.error("Invalid age input.");
        } else if (ageNum < 18) {
            console.log("You are a minor.");
        } else if (ageNum >= 18 && ageNum < 65) {
            console.log("You are an adult.");
        } else {
            console.log("You are a senior citizen.");
        }   
    }
}

//Print multiplication table of requested number
let num = prompt("Enter a number to print its multiplication table:");
if (num !== null) {
    let numVal = Number(num);
    if (!isNaN(numVal)) {
        console.log("Multiplication table for " + numVal + ":");
        for (let i = 1; i <= 10; i++) {
            console.log(numVal + " x " + i + " = " + (numVal * i));
        }   
    } else {
        console.error("Invalid number input.");
    }   
} else {
    console.log("User cancelled the prompt.");
}

let attemp = 0;
let opened = false;
let pass = "gyan";

let password = prompt("Enter your password:");
if (password === pass) opened = true;

while (password !== pass) {
    if (attemp === 2) {
        break;
    }
    password = prompt("Incorrect password. Try again:");
    if (password === pass) opened = true;
    attemp++;
}
if (opened === true) {
    console.log("Password accepted.");
} else {
    console.log("Access denied.");
}

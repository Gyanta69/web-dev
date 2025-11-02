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

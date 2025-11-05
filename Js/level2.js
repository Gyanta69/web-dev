// WAP which allows only 3 entries then logs in if correrct password is entered else locks the account

let attempts = 0;
let userPassword = "pragyan";

let enteredPassword = prompt("Enter your password (3 attempts allowed):");
attempts++;

while(attempts < 3 && userPassword !== enteredPassword) {
    enteredPassword = prompt("Enter your password (3 attempts allowed):");
    attempts++;
    
}
if (attempts === 3 && userPassword !== enteredPassword) {
    console.error("Account locked due to too many failed attempts.");
}else {
    console.log("Login successful.");
}

// WAP which takes word input from user until user enters 'yes' 3 times

let word = prompt("Enter a word:");
let counter = 0;

while(counter !== stop) {
    if(word === "yes") counter++;
    word = prompt("Enter a word:");
}
console.log("You entered 'yes' 3 times. Stopping the loop.");

// WAP to print all multiples of 7 from 1 to 51
for(let i = 1; i <= 51; i++) {
    if(i%7 === 0) {
        console.log(i);
        
    } 
}

// WAP to calculate sum of all odd numbers from 1 to 30
let sum = 0;
for (let i = 1; i<31; i++) {
    if(i%2 !== 0) {
        sum = 0 + i;
    }
}
console.log("Sum of odd numbers from 1 to 30 is: " + sum);

// WAP which keeps on asking user to enter an odd number until he enters an odd number
let num = promptmpt("Enter a number:");
num = Number(num);

while (num%2 === 0) {
    console.log("The number " + num + " is even. Please enter an odd number:");
    num = prompt("Enter a number:");
    num = Number(num);
}

// WAP to simulate ATM withdrawal until balance is 0 or user tries to withdraw more than balance 3 times
let balance = 1000;
let count = 0;
let flag = false;

while(balance > 0 && count !== 3) {
    let withdrawAmount = prompt("Enter amount to withdraw:");
    count++;
    if(withdrawAmount <= balance) balance -= withdraw;
    else{
        flag = true;
        break;
    }
}
if(flag === true) {
    console.log("Insufficient balance. Transaction failed.");
}
console.log("Your remaining balance is: " + balance);


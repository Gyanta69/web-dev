// Wap which allows only 3 entries then logs in if correrct password is entered else locks the account

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
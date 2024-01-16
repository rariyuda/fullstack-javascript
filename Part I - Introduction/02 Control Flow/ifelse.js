// Comparing numbers
let a = 20
let b = 20
if(a > b){
    console.log("a is greater than b")
}
else if (a < b){
    console.log("a is less than b");
}
else {
    console.log("a is equal to b");
}

// Time example
let time = 21
if (time < 12){
    console.log("Good Morning!");
}
else if (time < 17){
    console.log("Good Afternoon!");
}
else if (time < 24){
    console.log("Good Evening!")
}
else {
    console.log("Time does not exist!");
}

// Exercise Password
let password =12345678
password = String(password)
if (password.length == 8){
    console.log("Welcome!");
}
else if (password.length <= 8){
    console.log("Password too short!");
}
else if (password.length >= 8){
    console.log("Password too long!");
    console.log("Password should be exactly 8 characters.");
}
else{
    console.log("Please provide a password.");
}
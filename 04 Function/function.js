// Function Declaration 
sayHello("Kremijowo");
const mulRes = myFunction(3,7);
console.log(mulRes);

function sayHello(name){
    console.log(`Hello ${name}`);
}

function myFunction(a,b){
    return a*b;
}

// Function Expression
// greetings("A-Geng");

const greetings = function(user){
    console.log(`Wassap ${user}`);
}
greetings("A-Geng");

// Callback Function
// ~> a function as an (argument) to other function 

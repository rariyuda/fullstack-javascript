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
function apply(name, job){
    console.log(`Hello ${name}`);
    job();
}

apply("Kremijowo", function job() {
    console.log(`I'm a programmer!`);
});

// Exercise
function showCallFunc(fn) {
    const number = 10;
    fn(number);
}

showCallFunc(function fn(val){
    console.log(val);
});
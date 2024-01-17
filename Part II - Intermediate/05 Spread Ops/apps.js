const giveMeFour = (a, b, c, d) => {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
};

giveMeFour(1, 2, 3, 4);
const colors = ["red", "green", "blue", "black"];
giveMeFour(colors);
giveMeFour(...colors); // spread operators into individual element

// combine two arrays
const numA = [1, 3, 5];
const numB = [2, 4, 6];
var concate = [numA, numB];
console.log(concate);
concate = [...numA, ...numB];
console.log(concate.sort());

// pass array to log
let peoples = ["upin", "ipin", "mael"];
console.log("ehsan", ...peoples, "fizi");

// combine two objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3 };
const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj);

// function using spread operator
function user(x, ...userData) {
  console.log(x);
  console.log(userData);
}
user("kremijowo", 19, "chess");

function person(firstName, lastName, ...hobbies) {
  console.log(`first name: ${firstName}`);
  console.log(`last name: ${lastName}`);
  console.log(`hobbies: ${hobbies}`);
}

person("Kremi", "Jowo", "Chess", "Programming", "Badminton");

// Exercise
unltdParam = (...param) => {
  for (let i = 0; i < param.length; i++) {
    console.log(`parameter ${i}: ${param[i]}`);
  }
};

unltdParam("Kuda", "Cuko", 12, 3, "Ntaps");

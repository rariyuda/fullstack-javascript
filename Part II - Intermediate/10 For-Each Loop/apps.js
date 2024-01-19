// When using forEach helper, we pass in anonymous callback function,
// this function gets called one time for every element in the array

//eg.1
const colors = ["red", "green", "blue", "pink"];
colors.forEach((color) => console.log(color));

//eg.2
const words = ["hello", "coding", "friends", "chess", "fun", "games"];

const cap = words.forEach((word, id, arr) => {
  arr[id] = word[0].toUpperCase() + word.substring(1);
});

console.log(words);

// Exercise
// 1. Create an array of numbers.
const numbers = [0, 8, 5];

// 2. Create variable that hold the sum.
var sum = 0;

// 3. Create the adder function which takes the parameter of number & add that with sum variable.
// function adder(number) {
//   sum += number;
// }
//OR
adder = (number) => (sum += number);

// 4. Loop over the array, incrementing the sum variable except this time a function gets referenced in the forEach
//numbers.forEach((number) => adder(number));
//OR
numbers.forEach(adder);

// 5. Print the sum variable
console.log(sum);

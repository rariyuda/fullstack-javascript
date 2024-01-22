// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array

//eg.1
let numbers = [1, 2, 3, 4, 5];
let double = numbers.map((num) => num * 2);

console.log(numbers);
console.log(double);

//eg.2
let persons = [
  { firstName: "Kremi", lastName: "Jowo" },
  { firstName: "Ryan", lastName: "Reynolds" },
  { firstName: "Danzel", lastName: "Washington" },
];

const results = persons.map((person) => {
  return [person.firstName, person.lastName];
});

console.log(results);

// exercise 1
const nums = [3, 1, 0, 5, 9, 7];
// const multen = nums.map((num) => num * 10);
// OR
multiply10 = (num) => num * 10;
const multen = nums.map(multiply10);
console.log(multen);

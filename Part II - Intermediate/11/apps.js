// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array

let numbers = [1, 2, 3, 4, 5];
let double = numbers.map((num) => num * 2);

console.log(numbers);
console.log(double);

let persons = [
  { firstName: "Kremi", lastName: "Jowo" },
  { firstName: "Ryan", lastName: "Reynolds" },
  { firstName: "Danzel", lastName: "Washington" },
];

const results = persons.map((person) => {
  return [person.firstName, person.lastName];
});

console.log(results);

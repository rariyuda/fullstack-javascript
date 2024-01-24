// reducer() accumulating array's results into a single value

//eg.1
const numbers = [3, 4, 5, 6, 7];
const sum = numbers.reduce((p, c) => {
  console.log(`prev value: ${p}`);
  console.log(`curr value: ${c}`);
  return p + c;
  // 0 + 3 => 3
  // 3 + 4 => 7
  // 7 + 5 => 12
  // 12 + 6 => 18
  // 18 + 7 => 25
}, 0);
console.log(sum);

//eg.2
const persons = [
  { name: "Kremi Jowo", age: 20 },
  { name: "Peter Pettigrew", age: 50 },
  { name: "Volt Demort", age: 120 },
];

const oldestAge = persons.reduce((p, c) => (c.age > p ? c.age : p.age), 0);
console.log(oldestAge);

//eg.3
const words = [
  "apple",
  "banana",
  "orange",
  "banana",
  "apple",
  "orange",
  "apple",
  "grape",
];

const uniqueWord = words.reduce((freq, word) => {
  console.log(freq);
  console.log(word);
  freq[word] = freq[word] || 1;
  // line above same as below:
  /*
  const currentCount = freq[word];
  const updatedCount = currentCount ? currentCount : 1;
  freq[word] = updatedCount;
  */

  return freq;
}, {});
console.log(uniqueWord);

//exercise 1

// Write a function called calculateProduct that takes an array of numbers as an argument and returns the product of all the numbers in the array.
// Write the calculateProduct function using the reduce() method to achieve this task.
// Something like this
// const numbers = [2, 3, 4, 5];
// const product = calculateProduct (numbers);
// console.log(product); // 120
const nums = [2, 3, 4, 5];
const res = calculateProduct(nums);
console.log(res);

function calculateProduct(numbers) {
  return numbers.reduce((p, c) => p * c);
}

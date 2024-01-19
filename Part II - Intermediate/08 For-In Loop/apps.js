// for..in used to iterate over the enumerable properties of an object.
// it is a way to loop thorugh the keys (property names) of an object

//eg.1
let person = {
  name: "Kremi",
  age: 20,
  gender: "male",
};

for (let keys in person) {
  console.log(keys, person[keys]);
}

//eg.2
let list = ["one", "two", "three", "four"];

for (let id in list) {
  console.log(id, ":", list[id]);
}

//exercise 1
// iterate over object & log the property and the value of that object using for in loop
const object = { a: 1, b: 2, c: 3 };

for (let keys in object) {
  console.log(object[keys]);
}

//exercise 2
// You are given an object representing a student's test scores. Each property of the object represents the subject name (e.g., "Math", "Science") and the value represents the score. Your task is to use the "for...in" loop to calculate and print the average score of the student.

// const testScores = {
//   Math: 90,
//   Science: 85,
//   History: 78,
//   English: 92,
//   Geography: 88,
// };

// Write a function called calculateAverageScore that takes an object representing test scores as an argument and returns the average score of the student.

const testScores = {
  Math: 90,
  Science: 85,
  History: 78,
  English: 92,
  Geography: 88,
};

// const averageScore = calculateAverageScore(testScores);
// console.log(averageScore); // Output: 86.6

function calculateAverageScore(scores) {
  let totalScores = 0;
  let numSubjects = 0;

  for (let subject in scores) {
    totalScores += scores[subject];
    numSubjects++;
  }
  return totalScores / numSubjects;
}

const res = calculateAverageScore(testScores);
console.log(res);

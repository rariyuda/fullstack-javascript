// The filter() method is a built-in array method in javascript that allows you to create a new array containing elements that pass a certain condition. It provides a clean and concise way to filter out elements from an array based on a specified criteria.

//eg.1
const songs = [
  { title: "Fix You", singer: "Cold Play", duration: 5.23 },
  { title: "Perfect", singer: "Simple Plan", duration: 4.51 },
  { title: "You raise me up", singer: "Brian Kennedy", duration: 4.65 },
  { title: "Just the way you are", singer: "Bruno Mars", duration: 3.8 },
];
console.log(songs.filter((song) => song.duration > 4));

//eg.2
const computers = [
  { ram: 4, hdd: 500 },
  { ram: 8, hdd: 1000 },
  { ram: 16, hdd: 1250 },
  { ram: 32, hdd: 1500 },
];
console.log(computers.filter((comp) => comp.hdd < 1500));

// exercise 1
// 1. Iterate over "ages" array
// 2. Print only adults, those whose age is greaten than 18
const ages = [16, 19, 32, 18, 11, 66];
// without function:
// console.log(ages.filter((age) => age >= 18));
// with function:
function checkAdult(age) {
  return age >= 18;
}
console.log(ages.filter(checkAdult));

// exercise 2
// 1. Iterate over "words" array
// 2. Print only those words which length is greaten than 6
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
//without function
console.log(words.filter((word) => word.length > 6));

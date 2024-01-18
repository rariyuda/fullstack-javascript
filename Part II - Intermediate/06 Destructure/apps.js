// Destructuring allows us to unpack values from data-structures (arrays, objects) into separate distinct variables.
// Array destructuring
//eg.1
const number = ["one", "two"];
[a, b, c, d] = number;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

//eg.2
let x, y;
[x = 5, y = 8] = [1];
console.log(`x: ${x}`);
console.log(`y: ${y}`);

//eg.3
function f() {
  return [1, 2, 3];
}
let m, n;
[m, n] = f();
console.log(m);
console.log(n);

let p, r;
[p, , r] = f(); // ignore the second element
console.log(p);
console.log(r);

// exercise 1
const colors = ["red", "green", "blue", "yellow", "orange"];
const [color1, color2, color3] = colors;
console.log(color1);
console.log(color2);
console.log(color3);

// Object destructuring
// eg.1
const student = {
  name: "Kremi",
  rank: 69,
  id: 123456,
  country: "China",
};
const { name } = student;
console.log(name);

// eg.2 Changing name of object id
const { rank: position, id: studentId } = student;
// console.log(rank);
console.log(position);
// console.log(id);
console.log(studentId);

//eg.3 Object destructuring and rest operator
const { country, ...rest } = student;
console.log(country);
console.log(rest);

//exercise 2
const person = {
  name: "John Doe",
  age: 30,
  gender: "Male",
  country: "USA",
};

// const { name: personName, age: personAge, country: personCountry } = person;
// console.log(personName, personAge, personCountry);

function printPersonInfo({ name, age, country }) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Country: ${country}`);
}

printPersonInfo(person);

// exercise 3
console.log("-------------------------------------------");
let options = { title: "My Menu", items: ["item 1", "item 2"] };

function showMenu({
  title = "Untitled",
  width: w = 100,
  height: h = 200,
  items: [item1, item2],
}) {
  console.log(`${title} ${w} ${h}`);
  console.log(item1);
  console.log(item2);
}
showMenu(options);

// Nested Destructuring
console.log("-------------------------------------------");
const songs = [
  { nama: "Lucky You", singer: "Joyner", duration: 4.34 },
  { nama: "Just like you", singer: "NF", duration: 3.23 },
  { nama: "Humble singer", singer: "Kendrick Lamar", duration: 2.33 },
  { nama: "Old Town Road", singer: "Lil Nas X", duration: 1.43 },
  { nama: "Cold Sholder", singer: "Central Cee", duration: 5.23 },
];

const [, , , { nama }] = songs;
console.log(nama);

const [, , , { nama: mingzi }] = songs;
console.log(mingzi);

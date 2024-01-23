// The find() method
//eg.1
const persons = [
  { name: "Ali", age: "30" },
  { name: "Borat", age: "32" },
  { name: "Carter", age: "46" },
  { name: "Dennis", age: "12" },
  { name: "Ali", age: "11" },
  { name: "Bohr", age: "82" },
];
const resFilter = persons.filter((person) => person.name === "Ali");
console.log(resFilter);
const resFind = persons.find((person) => person.name === "Ali");
console.log(resFind);

//eg.2
const posts = [
  { id: 1, content: "Education" },
  { id: 2, content: "Jokes" },
  { id: 3, content: "Intimidation" },
  { id: 4, content: "Click Bait" },
];
const pos = posts.find((post) => post.content === "Click Bait");
console.log(pos.id, ":", pos.content);

//exercise 1
// 1. Iterate over "ages" array
// 2. Print only those ages which is greater than 18
const ages = [3, 10, 18, 20];
const adult = ages.find((age) => age > 18);
console.log(adult);

//exercise 2
// find and print product with category "Books"
// filter any products with category "Books"
let products = [
  { name: "Checkers", category: "Toys" },
  { name: "Harry Potter", category: "Books" },
  { name: "iPhone", category: "Electronics" },
  { name: "Learn JavaScript", category: "Books" },
];
const findBooks = products.find((product) => product.category === "Books");
console.log(findBooks);

const filterBooks = products.filter((product) => product.category === "Books");
console.log(filterBooks);

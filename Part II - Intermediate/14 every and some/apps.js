// The every() method tests whether all elements in the array pass the condition specified.
// The some() method tests whether at least one element in the array passes condition specified.

//eg.1
const people = ["kremi", "almaz", "artha", "jaya"];
console.log(
  "every:",
  people.every((pep) => pep.length === 5)
);
console.log(
  "some:",
  people.some((pep) => pep.length === 5)
);

//eg.2
const songs = [
  { title: "Fix You", singer: "Cold Play", duration: 5.23 },
  { title: "Perfect", singer: "Simple Plan", duration: 4.51 },
  { title: "You raise me up", singer: "Brian Kennedy", duration: 4.65 },
  { title: "Just the way you are", singer: "Bruno Mars", duration: 3.8 },
];

const everySongUpTo4Min = songs.every((song) => song.duration <= 4);
const someSongUpTo4Min = songs.some((song) => song.duration <= 4);
console.log("Every Song:", everySongUpTo4Min);
console.log("Some Song:", someSongUpTo4Min);

//exercise
let products = [
  { name: "Checkers", category: "Toys" },
  { name: "Harry Potter", category: "Books" },
  { name: "iPhone", category: "Electronics" },
  { name: "Learn JavaScript", category: "Books" },
];

// REFACTOR -> USE EVERY & SOME HELPERS
let allProductsBooks = true;
let someProductsBooks = false;

for (let i = 0; i < products.length; i++) {
  if (products[i].category != "Books") {
    allProductsBooks = false;
  } else {
    someProductsBooks = true;
  }
}
console.log("All Products Books:", allProductsBooks);
console.log("Some Products Books:", someProductsBooks);

// ANSWER =>
const allBooks = products.every((book) => book.category == "Books");
const someBooks = products.some((books) => books.category == "Books");
console.log("All Products Books:", allBooks);
console.log("Some Products Books:", someBooks);

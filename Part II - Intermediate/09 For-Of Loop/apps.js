// for-of is modern iteration in ES6, easier to loop over elements.
// dealing directly with the values of the elements, rather than the indices or keys, which makes the code more readable.

// for (variable of iterable){...}

// eg.1
let players = ["Magnus", "Hikaru", "Fabiano", "Ding"];

for (let player of players) {
  console.log(player);
}
console.log("--------------------------");

// eg.2
const text = "Howdy";

for (const char of text) {
  console.log(char);
}

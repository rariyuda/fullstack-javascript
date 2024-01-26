// Set is a built-in data structure introduced in (ES6) that represents a collection of unique values, unlike arrays.
// Useful for storing a list of unique elements and quickly check for the existence of a specific value.

const initialValue = [1, 2, 3, 2, 2, 3];
const set = new Set(initialValue);
console.log(set);

set.add("Arsha");
set.add("Muhammad");
console.log(set);

console.log(set.has("Arsha"));

set.delete(2);
console.log(set);

// set.clear();
// console.log(set);

for (let item of set) {
  console.log(item);
}

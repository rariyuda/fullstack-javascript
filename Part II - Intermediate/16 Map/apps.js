// Map is a built-in data structure introduced in (ES6) that allows you to store key-value pairs where both the keys and values can be of any data type. It is similar to an object, but with a few key differences:
// -> Keys can be of any data type: Unlike objects, where keys are limited to strings and symbols, Map allows you to use any data type as keys, including numbers, booleans, objects, and even other Map instances.
// -> Maintains insertion in order: Map preserves the order of key-value pairs as they were inserted, while object keys may not be guaranted to be in a specific order.
// -> Iteration: Map provides built-in methods for easy iteration over its elements.

const map = new Map();

const keyOne = "kremijowo";
const keyTwo = {};
const keyThree = function () {};

map.set(keyOne, "Value of key one");
map.set(keyTwo, "Value of key two");
map.set(keyThree, "Value of key three");

console.log(map.keys());
console.log(map.values());
console.log(map.delete(keyTwo));
console.log(map.size);
console.log(map);

for (let key of map.keys()) {
  console.log(key);
}

for (let value of map.values()) {
  console.log(value);
}

for (let [key, value] of map) {
  console.log(`${key} --  ${value}`);
}

//exercise
// 1. Create a new Map
const mapa = new Map();
// 2. Set these properties ("a","b","c")
const key1 = "a";
const key2 = "b";
const key3 = "c";
// 3. Set these values (1,2,3)
mapa.set(key1, 1);
mapa.set(key2, 2);
mapa.set(key3, 3);
console.log(mapa);
// 4. Get "a" from that map
console.log(mapa.get("a"));
// 5. Check the size of that map
console.log(mapa.size);
// 6. Delete the property "b" and then check the size.
console.log(mapa.delete("b"));
console.log(mapa);

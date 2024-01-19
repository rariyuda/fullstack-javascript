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

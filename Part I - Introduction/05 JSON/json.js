// JSON.stringify()
const persons = {
  name: "Kremi Jowo",
  age: 20,
  email: "kjowo123@gmail.com",
  isProgrammer: true,
  hobbies: ["Chess", "Badminton", "Reading"],
  address: {
    city: "Jakarta",
    country: "Indonesia",
  },
};
console.log(persons);
const personsString = JSON.stringify(persons);
console.log(personsString);
console.log(JSON.parse(personsString));

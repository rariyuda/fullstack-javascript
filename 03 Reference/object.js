const person = {
    firstName: "Kremi",
    lastName: "Jowo",
    age: 20,
    location: ['Planet','Earth'],
    isProgrammer: true,
};
console.log(person.firstName.concat(person.lastName))
console.log(person.age);
console.log(person.location[1]);
console.log(person["isProgrammer"]);

person.job = "CEO";
console.log(person);

delete person.location;
console.log(person);

//Exercise
const car = {
    type: "MPV",
    model: "Innova",
    color: "Black",
}
console.log(car);
console.log(typeof car);
car.type = "Toyota";
car.wheels = "RWD";
console.log(car);

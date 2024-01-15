// year, month, day, ..., miliseconds

const currentDate = new Date(2024, 0, 15, 20, 30, 0, 2);
console.log(currentDate);

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const hour = date.getHours();
console.log(`Year: ${year}`);
console.log(`Month: ${month}`);
console.log(`Day: ${day}`);
console.log(`Hour: ${hour}`);

console.log(date.toDateString());
console.log(date.toISOString());

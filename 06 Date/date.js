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
console.log(date.toLocaleDateString());

date.setDate(date.getDate() + 1);
console.log(date);

// setInterval
// setInterval(
//   () => console.log(`This function will be executed every 2 seconds.`),
//   2000
// );

const IntervalID = setInterval(function () {
  console.log(`This function is being executed at the 1s interval`);
}, 1000);
//stop after 10 seconds
setTimeout(function () {
  clearInterval(IntervalID);
}, 10000);

// setTimeout
setTimeout(function () {
  console.log(`This function will be executed after 3 seconds.`);
}, 3000);

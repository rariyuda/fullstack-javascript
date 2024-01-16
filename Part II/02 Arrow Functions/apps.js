// // traditional function
// function greet(username) {
//   return `Hello ${username}!`;
// }

// console.log(greet("kremijowo"));

// // arrow function
// const greet = (username) => `Hello ${username}!`;
// console.log(greet("kremijowo"));

// const square = (number) => number ** 2;
// console.log(square(4));

// Exercise
setTimeout(() => {
  console.log(`Hello`);
  setTimeout(() => {
    console.log(`Hey`);
    setTimeout(() => {
      console.log(`Halo`);
      setTimeout(() => {
        console.log(`Ola`);
        setTimeout(() => {
          console.log(`Bonjour`);
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);

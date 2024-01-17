function countToFive(count = true) {
  //^- default value here
  if (count == true) {
    for (let i = 1; i <= 5; i++) {
      console.log(`Count: ${i}`);
    }
  }
}

countToFive();

// exercise
const multiply = (a, b = 1) => console.log(a * b);

multiply(2);
multiply(2, 3);

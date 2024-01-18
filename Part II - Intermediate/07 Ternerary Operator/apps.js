// condition ? exprIfTrue : exprIfFalse;

// eg.1
let pin = "1234";

function pinChecker(pin) {
  // if (pin.length == 4) {
  //   console.log(`Valid length of PIN`);
  // } else {
  //   console.log(`PIN Should be 4 numbers`);
  // }
  return pin.length == 4 ? `Valid length of PIN` : `PIN Should be 4 numbers`;
}
const result = pinChecker(pin);
console.log(result);

//eg. 2
const age = 25;
const isAdult = age >= 17 ? "Adult" : "Not Adult";

console.log(isAdult);

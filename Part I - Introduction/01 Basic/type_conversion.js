// ========================================================================
// TYPE CONVERSION

// # Convert string to number
let money = "100"
// money = parseInt(money)
// money = +money
money = Number(money)

console.log(money)
console.log(typeof money);

// # Convert number to string
let money2 = 100
// money2 = money2.toString();
money2 = String(money2)

console.log(money2)
console.log(typeof money2);

// # Convert string to decimal
let money3 = "3.1415"
money3 = parseFloat(money3)

console.log(money3)
console.log(typeof money3);
// Symbol is a unique and immutable primitive data type introduced in ECMAScript 6 (ES6).
// Unlike strings or numbers, symbols are guaranteed to be unique.
// Symbol is used as identifier for object properties to avoid potential naming conficts.

const mySymbol = Symbol("My custom Symbol");
console.log(typeof mySymbol);
console.log(mySymbol);

// comparing symbols
const mySymbol1 = Symbol("name");
const mySymbol2 = Symbol("name");
console.log(mySymbol1 === mySymbol2);

const obj = {};
obj[mySymbol1] = "Value 1";
obj[mySymbol2] = "Value 2";
console.log(obj);

const symbol1 = Symbol("name");
const symbol2 = Symbol("name");

const kremi = {};
kremi.age = 19;
kremi["gender"] = "male";
kremi["gender"] = "apache helicopter";
kremi[symbol1] = "John";
kremi[symbol2] = "Cena";
console.log(kremi);

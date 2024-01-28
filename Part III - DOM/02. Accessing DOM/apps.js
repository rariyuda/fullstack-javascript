// DOM SELECTOR
/*
// 1. getELementsByTagName
console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByTagName("h1").length);
// 2. getElementByID
console.log(document.getElementById("main"));
console.log(document.getElementById("id-1"));
// 3. getElementsByClassName
console.log(document.getElementsByClassName("cls"));
console.log(document.getElementsByClassName("cls-1"));
// 4. querySelector -> this will be the most used one.
console.log(document.querySelector("h2"));
console.log(document.querySelector("#id-1"));
console.log(document.querySelector(".cls")); // will only select the first one.

// 5. querySelectorAll
console.log(document.querySelectorAll(".cls")); // willselect all.
console.log(document.querySelectorAll("li"));

// storing data in variables
const h1 = document.querySelector("h1");
console.log(h1);
const liAll = document.querySelectorAll("li");
console.log(liAll);
*/

// Exercise 1:
// 1. Select element h4 which holds text of "Red" by using getElementsByTagName
const h4 = document.getElementsByTagName("h4");
console.log(h4);

// 2. Select div with the class of "green" which holds text (Green) by using getElementsByClassName
const divGreen = document.getElementsByClassName("green");
console.log(divGreen);

// 3. Select div with the ID of blue which holds the text "Blue" by using getElementsById
const divBlue = document.getElementById("blue");
console.log(divBlue);

// 4. Select div which has the class & Id of "yellow" by using querySelector()
const classYellow = document.querySelector(".yellow");
const idYellow = document.querySelector("#yellow");
console.log(classYellow);
console.log(idYellow);

// 5. Select all the elements which has the class of "teal" by using querySelectorAll
const allTeal = document.querySelectorAll(".teal");
console.log(allTeal);

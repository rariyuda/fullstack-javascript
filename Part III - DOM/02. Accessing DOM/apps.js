// DOM SELECTOR
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

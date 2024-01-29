console.log("Kremijowo is Here");
// innerText
const p = document.querySelector("p");
console.log(p.innerText);

//textContent
console.log(p.textContent);

//innerHTML
console.log(p.innerHTML);

//change content
const h3 = document.querySelector("h3");
h3.innerText = "Changed!! Voilaa";
h3.innerHTML = "<del>FREE!!</del>";

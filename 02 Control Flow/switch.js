// switch lamp
let x=3;
let lamp;

switch(x){
    case 0:
        lamp = "off";
        console.log(lamp);
        break;
    case 1:
        lamp = "on";
        console.log(lamp);
        break;
    default:
        console.log("Invalid Input!");
}

// Fruits preference
let fruit = "Straw";
switch(fruit){
    case "Banana":
        console.log("Banana is good!");
        break;
    case "Orange":
        console.log("Me no fan of oranges.");
        break;
    case "Apple":
        console.log("Them Apples you like?");
        break;
    default:
        console.log("Me never heard of that fruit");
}
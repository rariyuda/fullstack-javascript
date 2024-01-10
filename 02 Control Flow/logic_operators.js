// password checker
let password = "kremi-jowo2000";

if (password.length==14 && password.includes("remi-")){
    console.log("Valid Password, welcome!");
} else if(password.length==14){
    console.log("The length is correct, but No! You're not allowed!");
} else{
    console.log("Who the freak are you?!");
}
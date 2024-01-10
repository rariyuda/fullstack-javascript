// ========================================================================
// PLAYING WITH STRINGS
let firstName = "kremi";
let lastName = "jowo";
let age = 20;
let whatIsItYouWantToBe = "programmer";
let alamat = "  Desa Mbogorejo Kecamatan Gedang  "

// 1. Concatenation
console.log("Firstname.concat lastname =>",firstName.concat(lastName));
// 2. Append
console.log("firstname+lastname =>",firstName+lastName);
// 3. Length
console.log(firstName.length+lastName.length);
// 4. Cases
console.log(whatIsItYouWantToBe.toUpperCase());
// 5. Slices
console.log(firstName.slice(2,5));
// 6. Split and Join
console.log(whatIsItYouWantToBe.split('o'));
// 7. Includes
console.log(firstName+firstName.includes("wo"));
// 8. Trim
console.log(alamat);
console.log(alamat.trim());

// exercise
let favActorFirstName = "Robert ";
let favActorLastName = "Downey Jr.";
let fullName = favActorFirstName.concat(favActorLastName);
let uppercase = fullName.toUpperCase();
let message = "My favorite actor is "+uppercase+" because he's always the smart guy in his movies. ";
message += "His best show is Sherlock Holmes. "
console.log(message);

// ========================================================================
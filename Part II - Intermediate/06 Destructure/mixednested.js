const data = {
  user: {
    id: 123456,
    name: "Uzumaki Boruto",
    email: "bolts@mail.com",
    address: {
      city: "Konoha",
      nation: "Fire Nation",
    },
    hobbies: ["fishing", "fighting", "funking"],
    scores: {
      strength: 95,
      bloodline: 100,
      nature: 69,
    },
  },
  products: [
    { id: 1, name: "Kunai", price: 3000 },
    { id: 2, name: "Bomb", price: 500 },
    { id: 3, name: "Scroll", price: 1000 },
  ],
  settings: {
    darkMode: true,
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
    language: "Japanese",
  },
};

// extracting data using object destructuring
const {
  user: {
    name,
    age,
    address: { city, nation },
    hobbies,
    scores: { strength: str, bloodline: bld, nature: ntr },
    email,
  },
  products: [product1, product2, product3],
  settings: {
    darkMode,
    notifications: {
      email: emailNotifications,
      sms: smsNotifications,
      push: pushNotifications,
    },
    language,
  },
} = data;

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Address: ${city}, ${nation}`);
console.log(`Hobbies: ${hobbies.join(", ")}`);
console.log("Scores:");
console.log(`- Strength: ${str}`);
console.log(`- Bloodline: ${bld}`);
console.log(`- Nature: ${ntr}`);
console.log(`Email: ${email}`);
console.log(`Dark Mode: ${darkMode}`);
console.log(
  `Notifications: ${emailNotifications}, ${smsNotifications}, ${pushNotifications}`
);
console.log(`Language: ${language}`);

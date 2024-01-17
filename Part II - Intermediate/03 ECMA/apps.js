function user(name, age, work) {
  return {
    // name: name,
    // age: age,
    // work: work,
    name,
    age,
    work,
    intro: function () {
      console.log(`Hello, I'm ${name} ${age} y.o, and I'm a ${work}`);
    },
  };
}
const kjowo = user("Kremijowo", 20, "Programmer");
kjowo.intro();

// Exercise
const a = 1,
  b = 2,
  c = 3;

function num(a, b, c) {
  return {
    a,
    b,
    c,
    output: () => console.log(`${a}, ${b}, ${c}, are numbers. `),
  };
}

const input = num(a, b, c);
input.output();

function greets(name, age, hobby) {
  user = {
    name,
    age,
    hobby,
    greeting: () =>
      console.log(
        `name: ${name}
      age: ${age}
      hobby: ${hobby}`
      ),
  };
  return user;
}
const intruder = greets("intruder", 999, "coding");
intruder.greeting();

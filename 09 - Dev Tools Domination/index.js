const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55"; //?
  p.style.backgroundColor = "#c1c1c1";
  p.style.fontSize = "50px";
}

// Regular
console.log("pelin");

// Interpolated
console.log("hiya %s", "hebele");

// Styled
console.log(
  "%c hello hello",
  "font-size:50px; background:red; text-shadow:10px 10px 0 blue"
);

// warning!
console.warn("Nooooooooooooooo!");

// Error :|
console.error("Error Text");

// Info
console.info("Info Text");

// Testing

// console.assert(1 === 1, "wrong"); // don't see anything on the console because its true
console.assert(1 === 2, "wrong");

// clearing
console.clear();

// Viewing DOM Elements
// console.log(p); //?
// console.dir(p); //?

// Grouping together
dogs.forEach((dog) => {
  // console.group(`${dog.name}`);
  console.groupCollapsed(`${dog.name}`);
  console.log(dog.name);
  console.log(dog.age);
  console.log(dog.age * 7);
  console.groupEnd(`${dog.name}`);
});
// counting
console.count("pelo");
console.count("pelo");
console.count("pelo");
console.count(333);
console.count("pelo");
console.count("pelo");
console.count(333);
console.count(333);
console.count("pelo");
console.count(333);
console.count(333);
console.count(333);
console.count(333);
console.count(333);
console.count(333);

// timing
console.time("fetching data");
fetch("https://api.github.com/users/pelinoloji")
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
    console.timeEnd("fetching data");
  });

// table
console.table(dogs);

let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = "pelin";
let name2 = "kayhan";
console.log(name, name2);
name = "cuhu";
console.log(name, name2);

console.clear();

const players = ["Wes", "Sarah", "Ryan", "Poppy"];

const team = players;
console.log(players, team);

// team[0] = "Salvador";
console.log(players); //["Salvador", "Sarah", "Ryan", "Poppy"]

const team2 = players.slice();
console.log(team2);

// or create a new array and concat the old one in

const team3 = [].concat(players);
console.log(team3);

// or use the new ES6 Spread. Now when we update it, the original one isn't changed

const team4 = [...players];
// team[0] = "xxxxx";
console.log(team4);
console.log(players);

console.clear();

const team5 = Array.from(players);
team5[1] = "xxxxx";
console.log(team5);
console.log(players);

console.clear();

// with Objects
const person = {
  name: "Wes Bos",
  age: 80,
};

const captain = person;
captain.number = 1;
console.log(person);

// how do we take a copy instead?
const captain2 = Object.assign({}, person, { number: 123, age: 567 });
console.log(captain);
console.log(captain2);

// We will hopefully soon see the object ...spread

const captain3 = { ...person };
console.log(captain3);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

console.clear();

const character = {
  name: "pelo",
  age: 101,
  woman: true,
  social: {
    twitter: "twitter",
    facebook: "facebook",
  },
};

console.log(character);
const pelin2 = Object.assign({}, character);
pelin2.name = "slippers";
console.log(pelin2);
console.log(character);

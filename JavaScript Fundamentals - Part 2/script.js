"use strict";
/* const sanket = [
  "Sanket",
  "Rasal",
  1998 - 2025,
  "Developer",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

for (let i = 0; i < sanket.length; i++) {
  // Reading from sanket array
  console.log(sanket[i], typeof sanket[i]);

  // Filling types array
  // types[i] = typeof sanket[i];

  types.push(typeof sanket[i]);
}

console.log(types);

const years = [1998, 2005, 1997, 2008];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2025 - years[i]);
}

console.log("Ages - ", ages);

// Continue and break
console.log("---- CONTINUE ONLY STRING ----");

for (let i = 0; i < sanket.length; i++) {
  if (typeof sanket[i] != "string") continue;
  console.log(sanket[i], typeof sanket[i]);
}

console.log("---- BREAK WITH NUMBER ----");

for (let i = 0; i < sanket.length; i++) {
  if (typeof sanket[i] === "number") break;
  console.log(sanket[i], typeof sanket[i]);
}



const sanket = [
  "Sanket",
  "Rasal",
  2025 - 1998,
  "Developer",
  ["Michael", "Peter", "Steven"],
  true,
];

// Looping Backwards

for (let i = sanket.length - 1; i >= 0; i--) {
  console.log(sanket[i]);
}

// Loop inside the loop

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------ Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise} : Lifting weight repetition ${rep}`);
  }
}

*/

// While Loop
for (let rep = 1; rep < 10; rep++) {
  console.log(`Lifting weight repetition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
  console.log(`WHILE : Lifting weight repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice != 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log("Loop is about to end...");
  }
}

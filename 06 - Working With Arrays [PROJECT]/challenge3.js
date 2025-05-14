'use strict';
///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = function (dogsAges) {
//     console.log(dogsAges);
//     const dogsAgeInHumanYrs = dogsAges.map((dogAge) =>
//       dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
//     );
//     console.log(dogsAgeInHumanYrs);
//     const adults = dogsAgeInHumanYrs.filter((dogAge) => dogAge >= 18);
//     console.log(adults);

//     const calcAverageHumanAge =
//       adults.reduce((prev, curr) => prev + curr, 0) / adults.length;
//     console.log(calcAverageHumanAge);
//   };

const calcAverageHumanAge = (dogsAges) =>
  dogsAges
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((prev, curr, i, arr) => prev + curr / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(avg1);

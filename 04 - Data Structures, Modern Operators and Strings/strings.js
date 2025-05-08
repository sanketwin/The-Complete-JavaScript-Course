'use strict';

const airline = 'TAP Air India';
const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);

// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B373'.length);

// //Methods
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('india'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// //Example

// const checkMiddleSeat = function (seat) {
//   //B & E are middle seats.
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat');
//   else console.log('You got lucky');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('Sanket'));

//Additional String methods

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix the capitalization in name

// const passenger = 'sAnKet'; //Sanket
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);

// console.log(passengerCorrect);

// Comparing email

const email = 'hello@sanket.io';
const loginEmail = '   Hello@Sanket.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLocaleLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail);

//Replacing

const priceGB = '289,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23 !';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

//Regular Expression
console.log(announcement.replace(/door/g, 'gate'));

// Booleans

const plane1 = 'Airbus A320neo';
console.log(plane1.includes('A320'));
console.log(plane1.startsWith('A'));
console.log(plane1.endsWith('3'));

if (plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
  console.log('Part of the new Airbus family');
}

//Practice Exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard !');
  }
};

checkBaggage('I have a laptop, some food and a pocket Knife');
checkBaggage('Socks and Camera');
checkBaggage('Got some snacks and a gun for protection');

//Split Method

console.log('a+very+nice+string'.split('+'));
console.log('Sanket Rasal'.split(' '));
const [firstName, lastName] = 'Sanket Rasal'.split(' ');
console.log(firstName);
console.log(lastName);

//Join Method

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');

// Padding a string

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));
console.log(message.padEnd(25, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(4236484648464644));

//Repeat

const message2 = 'Bad weather... All departues deplayed...\n';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩️'.repeat(n)}`);
};

planesInLine(2);
planesInLine(5);
planesInLine(12);

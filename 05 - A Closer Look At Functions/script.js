'use strict';

//SECTION Default Parameters -----------------

/*const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5
  //numPassengers = numPassengers || 1;
  //price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH144', 2);
createBooking('LH144', undefined); */

//SECTION Passing Arguments in the functions -----------------

const flight = 'LH456';
const sanket = {
  name: 'Sanket Rasal',
  passport: 565847521,
};

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH123';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 565847521) {
//     alert('Checked in');
//   } else {
//     alert('Wrong Passport !');
//   }
// };

// checkIn(flight, sanket);
// console.log(flight);
// console.log(sanket);

/* Passing a primitive type to a funtion is same as creating a
 copy like this outside the function. */

// const flightNum = flight;
// const passenger = sanket;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000);
// };

// newPassport(sanket);
// checkIn(flight, sanket);

//NOTE: JS does not have passing by reference.-----------------
// Basically we pass reference to a function but not by reference.

//SECTION First-class & Higher-order functions -----------------

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher order function
const transformer = function (str, fn) {
  console.log(`Original string : ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

//NOTE: JS uses callback functions all the time.

//SECTION Function returning function -----------------

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}!`);
  };
};

const greeterHey = greet('Hey');

greeterHey('Sanket');
greeterHey('Durga');

//Same function using arrow function

const greet1 = (greeting) => (name) => console.log(`${greeting} ${name}!`);

greet1('Hi')('Sanket');

//SECTION The call and apply methods -----------------

const airIndia = {
  airline: 'AirIndia',
  iataCode: 'AI',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight `);
  },
};

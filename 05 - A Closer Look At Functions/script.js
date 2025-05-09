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

// const oneWord = function (str) {
//   return str.replaceAll(' ', '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //Higher order function
// const transformer = function (str, fn) {
//   console.log(`Original string : ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

//NOTE: JS uses callback functions all the time.

//SECTION Function returning function -----------------

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}!`);
//   };
// };

// const greeterHey = greet('Hey');

// greeterHey('Sanket');
// greeterHey('Durga');

//Same function using arrow function

// const greet1 = (greeting) => (name) => console.log(`${greeting} ${name}!`);

// greet1('Hi')('Sanket');

//SECTION The call and apply methods -----------------

const airIndia = {
  airline: 'AirIndia',
  iataCode: 'AI',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

// airIndia.book(234, 'Sanket Rasal');
// airIndia.book(134, 'Durga Rasal');
// console.log(airIndia);

const spiceJet = {
  airline: 'SpiceJet',
  iataCode: 'SJ',
  bookings: [],
};

const book = airIndia.book;

//Does not work
// book(23, 'Sarah Williams');

//Call method
// book.call(spiceJet, 23, 'Sarah Williams');
// console.log(spiceJet);

// book.call(airIndia, 235, 'John Dow');
// console.log(airIndia);

// //Apply Method
// const flightData = [586, 'George Cooper'];
// book.apply(spiceJet, flightData);
// console.log(spiceJet);

// book.call(spiceJet, ...flightData);

//Bind Method

// const bookSJ = book.bind(spiceJet);
// const bookAI = book.bind(airIndia);
// bookSJ(27, 'Sanket Rasal');
// bookAI(26, 'Durgas Rasal');

//Bine method with event listeners

airIndia.planes = 300;
airIndia.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// airIndia.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', airIndia.buyPlane.bind(airIndia));

// Partial Application

// const addTax = (rate, value) => value + value * rate;

// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23

//Function calling another funtion

const addTaxRate = (rate) => {
  return (value) => {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);

console.log(addVAT2(100));
console.log(addVAT2(120));

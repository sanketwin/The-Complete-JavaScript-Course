'use strict';

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //ES6 enhanced function literals
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //ES6 enhanced object literals
  openingHours,
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);
// console.log('-------------------------------------------');

// for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);

// console.log('--------------ENHANCED OBJECT LITERAL--------------------');
// console.log(restaurant);

// console.log('--------------OPTIONAL CHAINING--------------------');

// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// //WITH OPTIONAL CHAINING
// console.log(restaurant.openingHours.mon?.open);

// //Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 10;
//   console.log(`On ${day}, We open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exists.');
// console.log(restaurant.orderPizza?.(0, 1) ?? 'Method does not exists.');

// //Arrays
// const users = [{ name: 'Sanket', email: 'sanket@hello.io' }];
// console.log(users[0]?.name ?? 'User array empty.');

console.log('-------------- Looping Objects --------------');

const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
// console.log(openStr);

//Property Values
const values = Object.values(openingHours);
// console.log(values);

//Entire Object
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

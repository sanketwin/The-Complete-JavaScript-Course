'use strict';

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(ordersSet);

// console.log(new Set('SANKET'));

// console.log(ordersSet.size);

// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));

// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');

// ordersSet.delete('Risotto');
// // ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) {
//   console.log(order);
// }

// //Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(staff).size);

// console.log(new Set('Sanket').size);

// ------------------------------------------- New operation to make sets useful -------------------------------------------
// ES2025 got 7 more methods

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Intersection Method
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection - ', commonFoods);
console.log([...commonFoods]);

//Union Method
const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log('Union -', italianMexicanFusion);

console.log([...new Set([...italianFoods, ...mexicanFoods])]);

//Difference Method
const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log('Difference Italian - ', uniqueItalianFoods);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log('Difference Mexican - ', uniqueMexicanFoods);

//Symmetric Difference
const uniqueItalianMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);
console.log('Both Unique - ', uniqueItalianMexicanFoods);

// Is Disjoint from

console.log(italianFoods.isDisjointFrom(mexicanFoods));

'use strict';
// LECTURES

// SLICE
// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));

// //Shallow copy of array
// console.log(arr.slice());

// //SPLICE
// // console.log(arr.splice(2));
// console.log('-----SPLICE-----');

// console.log(arr.splice(-1));
// console.log(arr);
// console.log(arr.splice(1, 2));

// console.log(arr);

// //REVERSE
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];

// console.log(arr2.reverse());
// console.log(arr2);

// //CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);

// //JOIN
// console.log(letters.join(' - '));

//ES2022 - at method

// const arr = [22, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// //getting the last element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);

// //using at method
// console.log(arr.at(-1));

//SECTION forEach Method with Arrays

const account1 = {
  owner: 'Sanket Rasal',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Durga Rasal',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('----- Using forEach -----');

// movements.forEach(function (movement, index, array) {
//   if (movement > 0) {
//     console.log(`Movement ${index + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// });

//SECTION forEach Method with Maps and Sets

//Map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// //Set
// const currenciesUnique = new Set(['USD', 'GBP', 'EUR', 'USD']);
// console.log(currenciesUnique);

// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

//SECTION Map method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUSD = 1.1;

// const movementsUSD = movements.map((mov) => mov * eurToUSD);
// console.log(movements);
// console.log(movementsUSD);

// const movementsDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${mov}`
// );

// console.log(movementsDescriptions);

//SECTION Filter Method

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// const withdrawals = movements.filter((mov) => mov < 0);

// console.log(withdrawals);

//SECTION Reduce Method

console.log(movements);

// const balance = movements.reduce(function (prev, curr, i, arr) {
//   return prev + curr;
// }, 0);

// const balance = movements.reduce((prev, curr) => prev + curr, 0);

// console.log(balance);

//Maximum Value

// const max = movements.reduce(
//   (acc, mov) => (acc > mov ? acc : mov),
//   movements[0]
// );
// console.log(max);

// PIPELINE

// const eurToUSD = 1.1;
// const totalDepositUSD = movements
//   .filter((mov) => mov > 0)
//   .map((mov) => mov * eurToUSD)
//   .reduce((prev, curr) => prev + curr, 0);

// console.log(totalDepositUSD);

// SECTION Find Method

const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find((acc) => acc.owner === 'Sanket Rasal');
console.log(account);

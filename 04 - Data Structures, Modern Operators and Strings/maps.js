'use strict';

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze Italy');
// rest.set(2, 'Lisbon Portugal');
// console.log(rest);

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open.')
//   .set(false, 'We are close.');
// console.log(rest);

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const currentTime = 8;

// console.log(
//   rest.get(currentTime > rest.get('open') && currentTime < rest.get('close'))
// );

// console.log(rest.has('categories'));

// rest.delete(2);
// console.log(rest);
// console.log('Size -', rest.size);
// // console.log('Remove all the elements -', rest.clear());

// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);

// console.log(rest.get(arr));

// ----------------------------------- Maps Iteration -----------------------------------

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'JAVA'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct :)'],
  [false, 'Try Again :('],
]);

console.log(question);

//Quiz app
console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(answer === question.get('correct')));

//Convert map to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);

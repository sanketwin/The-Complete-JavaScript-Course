'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Sanket Rasal',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    '2023-01-10T08:00:00.000Z',
    '2023-01-11T14:30:00.000Z',
    '2023-01-12T16:45:00.000Z',
    '2023-01-13T18:20:00.000Z',
    '2023-01-14T12:15:00.000Z',
    '2026-04-30T19:35:00.000Z',
    '2026-05-05T10:00:00.000Z',
    '2026-05-06T14:30:00.000Z',
  ],
  locale: 'en-IN',
  currency: 'INR',
};

const account2 = {
  owner: 'Durga Rasal',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2023-01-10T08:00:00.000Z',
    '2023-01-11T14:30:00.000Z',
    '2023-01-12T16:45:00.000Z',
    '2023-01-13T18:20:00.000Z',
    '2023-01-14T12:15:00.000Z',
    '2023-01-15T19:35:00.000Z',
    '2023-01-17T10:00:00.000Z',
    '2023-01-18T14:30:00.000Z',
  ],
  locale: 'en-US',
  currency: 'USD',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    '2023-01-10T08:00:00.000Z',
    '2023-01-11T14:30:00.000Z',
    '2023-01-12T16:45:00.000Z',
    '2023-01-13T18:20:00.000Z',
    '2023-01-14T12:15:00.000Z',
    '2023-01-15T19:35:00.000Z',
    '2023-01-17T10:00:00.000Z',
    '2023-01-18T14:30:00.000Z',
  ],
  locale: 'en-US',
  currency: 'USD',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    '2023-01-10T08:00:00.000Z',
    '2023-01-11T14:30:00.000Z',
    '2023-01-12T16:45:00.000Z',
    '2023-01-13T18:20:00.000Z',
    '2023-01-14T12:15:00.000Z',
    '2023-01-15T19:35:00.000Z',
    '2023-01-17T10:00:00.000Z',
    '2023-01-18T14:30:00.000Z',
  ],
  locale: 'en-US',
  currency: 'USD',
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const formatMovementDate = function (date) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  const daysPassed = calcDaysPassed(new Date(), new Date(date));

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  const now = new Date(date);
  const day = `${now.getDate()}`.padStart(2, 0);
  const month = `${now.getMonth() + 1}`.padStart(2, 0);
  const year = now.getFullYear();
  return `${day}/${month}/${year}`;
};

const formatCurrency = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (account, sort = false) {
  containerMovements.innerHTML = '';

  const combinedMovsDates = account.movements.map((mov, i) => ({
    movement: mov,
    date: account.movementsDates[i],
  }));

  if (sort) combinedMovsDates.sort((a, b) => a.movement - b.movement);

  combinedMovsDates.forEach(function (obj, i) {
    const { movement, date } = obj;
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    const displayDate = formatMovementDate(date);

    const formattedMov = formatCurrency(
      movement,
      account.locale,
      account.currency,
    );

    const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
          i + 1
        } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//Compute UserNames

const createUserNames = function (accs) {
  accs.forEach((acc) => {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map((name) => name[0])
      .join('');
  });
};
createUserNames(accounts);

const updateUI = function (acc) {
  //Display Movements
  displayMovements(acc);

  //Display Balance
  displayBalance(acc);

  //Display Summary
  displaySummary(acc);
};

const displayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${formatCurrency(acc.balance, acc.locale, acc.currency)}`;
};

const displaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((prev, curr) => prev + curr, 0);

  labelSumIn.textContent = `${formatCurrency(incomes, acc.locale, acc.currency)}`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((prev, curr) => prev + curr, 0);

  labelSumOut.textContent = `${formatCurrency(Math.abs(out), acc.locale, acc.currency)}`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int) => int >= 1)
    .reduce((prev, curr) => prev + curr, 0);

  labelSumInterest.textContent = `${formatCurrency(interest, acc.locale, acc.currency)}`;
};

const startLogOutTimer = function () {
  let time = 300;
  const tick = function () {
    const min = String(Math.floor(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;

    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }

    time--;
  };
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

let currentAccount, timer;

// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

// Login Functionality
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.userName === inputLoginUsername.value,
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('LOGIN');

    //Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    const now = new Date();

    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long',
    };

    const locale = navigator.language;
    labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(
      now,
    );
    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';

    inputLoginPin.blur();

    clearInterval(timer);
    timer = startLogOutTimer();
    updateUI(currentAccount);
  }
});

//Transfer Money
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.userName === inputTransferTo.value,
  );
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.userName !== currentAccount.userName
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    //Update UI
    updateUI(currentAccount);

    //Reset Timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
  inputTransferAmount.value = inputTransferTo.value = '';
});

//Close Account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.userName === currentAccount.userName,
    );

    accounts.splice(index, 1);

    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    setTimeout(function () {
      //Add the movement
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      //Update UI
      updateUI(currentAccount);

      //Reset Timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);
  }
  inputLoanAmount.value = '';
});

//Sorting

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

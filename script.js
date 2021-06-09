// 1. If shorthand

const favoriteFruit = fruit => {
  // if (    // longhand
  //   fruit === 'apple' ||
  //   fruit === 'banana' ||
  //   fruit === 'cherry' ||
  //   fruit === 'mango'
  // ) {
  //   return 'My favorite food';
  // }

  // shorthand
  if (['apple', 'banana', 'cherry', 'mango'].includes(fruit)) {
    return 'My favorite food';
  } else {
    return 'Not a favorite';
  }
};

// console.log(favoriteFruit('mango'));
// Expected: My favorite food
// console.log(favoriteFruit('berry'));
// Expected: Not a favorite

// 2. Ternary Operator instead of if ... else;

const myChoiceMoney = money => {
  let myChoice = Boolean;
  // if (money > 100) {   // Longhand
  //   myChoice = true;
  // } else myChoice = false;
  // return myChoice;

  //shorthand
  // return myChoice = (money > 100) ? true : false;

  // Super shorthand
  return (myChoice = money > 100);
};

// console.log(myChoiceMoney(200));
// console.log(myChoiceMoney(85));

// 3. Nested shorthand ternary operator

const littleBigGrand = size => {
  return (result = size > 1000 ? 'Grande' : size < 100 ? 'Little' : 'Big');
};

// console.log(littleBigGrand(1100)); // Grande
// console.log(littleBigGrand(700)); // Big
// console.log(littleBigGrand(90)); // Little

// 4. Checking not null values
// shorthand
let data1 = null || undefined || '';
// let data2 = data1 || 'nothing';
// console.log(data2); // expected nothing;

//Longhand1
// if (data1) {
//   let data2 = data1;
//   console.log(data2);
// } else console.log('data1 does not exist');

//longhand2
// if (!data1) {
//   console.log('data1 does not exist');
// } else {
//   let data2 = data1;
//   console.log('data2: ', data2);
// }

// shorthand2
function callMethod() {
  let data2 = data1;
  return 'data2: ' + data2;
}
//if data1 exists execute callMethod;
data1 && console.log(callMethod());

// 5. Assigning default values

// NULL
let test1,
  test2 = test1 ?? 0; // default 0;

// console.log('test1: ' + test1); // null;
// console.log('test2: ' + test2); // 0

// UNDEFINED
let value1 = undefined,
  value2 = value1 || '';

// console.log('value1: ' + value1); // undefined
// console.log('value2: ' + value2); // empty

// 6. Nullish Operator

const user = null ?? 'Yoog';
// console.log(user); // Yoog

const price = 1 ?? 4;
// console.log(price); // 1

// 6. Assigning values;

let [str1, str2, str3] = ['aa', '', 'cc'];
// console.log([str1, str3]); //["aa", "cc"]
// console.log([str2]); // [""]

// 7. Return shorthand

// let user1;
let user1 = 'liza';

function returnMe() {
  if (!user1) {
    return callMeFunction('Ritu');
  } else {
    return user1;
  }
}

const callMeFunction = name => {
  return 'Ritu is substitute teacher!';
};

const user2 = returnMe();
// console.log('User1: ' + user2);
// expected: liza when user1 = "liza"
// expected: Ritu is substitute teacher! when user1 is defined;

// Really a shorthand
const returnShorthand = () => {
  return user1 || callMeFunction('Ritu');
};

// console.log(returnShorthand());
// expected: liza when user1 = "liza"
// expected: Ritu is substitute teacher! when user1 is defined;

// 8. Switch Statement Optimization
function dataSet1() {
  console.log('It is dataSet1');
}

function dataSet2() {
  console.log('It is dataSet2');
}

function dataSet() {
  console.log('It is dataSet');
}

// Longhand
// const sata = prompt('Enter data: ');
// switch (parseInt(sata)) {
//   case 1:
//     dataSet1();
//     break;
//   case 2:
//     dataSet2();
//     break;
//   case 3:
//     dataSet();
//     break;
//     // And so on...
// }

// shorthand
const pata = {
  1: dataSet1,
  2: dataSet2,
  3: dataSet
};
// const item = prompt('Enter data: ');
// pata[item]();

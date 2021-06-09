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
// let data1;
let data2 = data1 || 'nothing';
console.log(data2); // expected nothing;

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

const user = null ?? "Yoog";
// console.log(user); // Yoog

const price = 1 ?? 4;
// console.log(price); // 1

// 6. Assigning values;

let [str1, str2, str3] = ["aa", "", "cc"];
// console.log([str1, str3]); //["aa", "cc"]
// console.log([str2]); // [""]


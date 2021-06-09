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
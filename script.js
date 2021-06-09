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


let age = 25;

// loose comparison (different types can still be equal)

// console.log(age == 25); // true
// console.log(age == '25'); // JavaScript does a type conversion in the background - becomes true

// console.log(age != 25); // false
// console.log(age != '25'); // false

// strict comparison (different types cannot be equal)
console.log(age === 25);
console.log(age === '25');
console.log(age !== 25);
console.log(age !== '25');

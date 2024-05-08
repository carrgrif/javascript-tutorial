// type conversion
let score = '100';

score = Number(score);
console.log(score + 1);
console.log(typeof score); // check the type of a variable

// let result = Number('hello');

// console.log(result); // logs to NaN as it isn't a number

// let result = String(50);

// console.log(result, typeof result); // converts into '50'

// let result = Boolean(100); // truthy value, will be true
// console.log(result, typeof result);

// let result2 = Boolean(0); // 0 is a false value
// console.log(result2, typeof result2);

let result = Boolean('0');
console.log(result, typeof result); // true as any length string > 0 is true

let result2 = Boolean('');
console.log(result2, typeof result2); // false as empty string is false
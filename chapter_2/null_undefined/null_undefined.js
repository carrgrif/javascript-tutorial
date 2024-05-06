// let age;

// first value is undefined because we haven't given it a value yet (haven't told it to be undefined)
// second value - try to use undefined in a formula gives you NaN
// third value = try to output undefined in a template variable, you get undefined in the string itself
// console.log(age, age + 3, `the age is ${age}`);

let age = null;

// first value - explicitly assigned to null so we get null
// second value - try to add 3 to null, we will get 3 (it takes on the value of 0)
// third value - takes on value of null in a string
console.log(age, age + 3, `the age is ${age}`);

// Left off at 1:05:13
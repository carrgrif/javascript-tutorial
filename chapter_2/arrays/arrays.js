let ninjas = ['shaun', 'ryu', 'chun-li'];

// Override a value in the array
// ninjas[1] = 'ken';
// console.log(ninjas[1]);

// let ages = [20, 25, 30, 35];
// console.log(ages[2]);

// let random = ['shaun', 'crystal', 30, 20];
// console.log(random);

// length of array
// console.log(ninjas.length);

// array methods

// take all elements and join them with a delimiter
// let result = ninjas.join(',');

// find index of a value
// let result = ninjas.indexOf('chun-li');

// concatenate two arrays together
//let result = ninjas.concat(['ken', 'crystal']);

// appends a value to the array, returns the new length of the array (alters the original value)
let result = ninjas.push('ken');
// pop returns the value it pops off the array
result = ninjas.pop();

console.log(result);
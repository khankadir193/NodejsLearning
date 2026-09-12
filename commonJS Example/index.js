// const name = "Abdul Kadir Khan";
// const experience = 4;

// console.log(`Hell i am ${name} and i have more than ${experience} years of experience.`);

const { add, sub, multiply, divide } = require('./math.js');
const { getUserName } = require('./user.js');

console.log(add(10, 20));
console.log(sub(40, 20));
console.log(multiply(90, 20));
console.log(divide(100, 20));

console.log('user name...',getUserName());
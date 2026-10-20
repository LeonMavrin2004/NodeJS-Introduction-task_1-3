
const num = 123;

// A count of 1 when the number (num) is divisible by 2, 3, and 5
let result = Number(num % 3 === 0) + Number(num % 2 === 0) + Number(num % 5 === 0);

console.log(result);

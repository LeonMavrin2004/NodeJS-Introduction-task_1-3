// שמות מגישים:
// ליאון מברין
// דניאל ברששת

// number to be checked
const num = 123;

// count how many of the numbers 2, 3, and 5 divide the number without a remainder
let result = Number(num % 3 === 0) + Number(num % 2 === 0) + Number(num % 5 === 0);

// prints result of counting
console.log(result);

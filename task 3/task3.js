// שמות מגישים:
// ליאון מברין
// דניאל ברששת

// Array of integers
const arr = [1, 2, 0, 4, 3, 2, 0, 0, 2, 3, 4, 0];

// variable for counting zeros in the array
let count = 0;

// loop through the array and count the zeros
// the expression arr[i] === 0 returns true or false,
// and Number() converts it to 1 or 0

for (let i = 0; i < arr.length; i++) {
    count += Number(arr[i] === 0);
}

// prints the number of zeros found in the array
console.log(count);

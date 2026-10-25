// שמות מגישים:
// ליאון מברין
// דניאל ברששת

// returns true if the input number is a prime number
function isPrime(num) {
  if (num <= 1) return false; // 0, 1, and negatives are not prime
  if (num === 2) return true; // 2 is prime
  if (num % 2 === 0) return false; // other even numbers are not prime

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

// number from the task
const myNumber = 237;

// prints all prime numbers smaller than myNumber
for (let i = 2; i < myNumber; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

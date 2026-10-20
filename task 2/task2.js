// returns true if the input number is a prime number
function isPrime(num) {
    if (num <= 1) return false; 
    if (num === 2) return true;  

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

const myNumber = 237;

// prints every number that is prime number
for (let i = 2; i < myNumber; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}

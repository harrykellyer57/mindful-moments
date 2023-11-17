/* 
   Filename: ComplexProgram.js
   Content: A complex program that calculates the fibonacci sequence and finds the prime numbers up to a given limit
*/

// Fibonacci function to calculate the nth term
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Prime number checker
function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

// Function to generate fibonacci sequence up to a given limit
function generateFibonacciSequence(limit) {
    let fibonacciNumbers = [];
    for (let i = 0; i <= limit; i++) {
        fibonacciNumbers.push(fibonacci(i));
    }
    return fibonacciNumbers;
}

// Function to get prime numbers up to a given limit
function getPrimeNumbers(limit) {
    let primeNumbers = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            primeNumbers.push(i);
        }
    }
    return primeNumbers;
}

// Example usage:
const fibonacciSequence = generateFibonacciSequence(10);
const primeNumbers = getPrimeNumbers(50);

console.log("Fibonacci Sequence up to 10:", fibonacciSequence);
console.log("Prime Numbers up to 50:", primeNumbers);

// Output:
// Fibonacci Sequence up to 10: [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
// Prime Numbers up to 50: [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ]
/*
 * Problem 6
 * https://projecteuler.net/problem=6
 */

"use strict";

let count = 100;
let sumOfSquares = 0;
let sumOfNumbers = 0;

for (let number = 1; number <= count; number++) {
    sumOfNumbers += number;
    sumOfSquares += (number * number);
}
let squareOfSum = sumOfNumbers * sumOfNumbers;

console.log("Square of Sums: " + squareOfSum);
console.log("Sum of Squares: " + sumOfSquares);

console.log("Difference: " + (squareOfSum - sumOfSquares));

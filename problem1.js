/*
 * Problem 1
 * https://projecteuler.net/problem=1
 * 
 */
"use strict";

let count = 1;
let total = 0;

while (count < 1000) {
    if (divisibleBy(count, 3) || divisibleBy(count, 5)) {
        total = total + count;
    }
    count = count+1;
}

console.log(total);

function divisibleBy(num, div) {
    return num % div === 0;
}

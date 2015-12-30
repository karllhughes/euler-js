/*
 * Problem 2
 * https://projecteuler.net/problem=2
 */

"use strict";

let i = 1;
let j = 0;
let total = 0;

while (i <= 4000000) {
    let next = i + j;
    if (divisibleBy(next, 2)) {
        total = total + next;
    }
    j = i;
    i = next;
}

console.log(total);

function divisibleBy(num, div) {
    return num % div === 0;
}

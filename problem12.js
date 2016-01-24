/*
 * Problem 12
 * https://projecteuler.net/problem=12
 */

"use strict";

const euler = require("./euler.js");
const max = 10000000;
const divisors = 500;

for (let i = 0; i < max; i++) {
    let tri = triNum(i);
    if (countDivisors(tri) >= divisors) {
        console.log(tri);
        break;
    }
}

function countDivisors(num) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (euler.divisibleBy(num, i)) {
            count += 2;
        }
    }
    return count;
}

function triNum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

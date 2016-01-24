/*
 * Problem 12
 * https://projecteuler.net/problem=12
 */

"use strict";

const shared = require("./shared.js");

const max = 100000;
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
    for (let i = 1; i <= num; i++) {
        if (divisibleBy(num, i)) {
            count++;
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

function divisibleBy(num, div) {
    return num % div === 0;
}

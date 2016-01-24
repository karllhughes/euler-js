/*
 * Problem 1
 * https://projecteuler.net/problem=1
 */

"use strict";

const shared = require("./shared.js");

let count = 1;
let total = 0;

while (count < 1000) {
    if (shared.divisibleBy(count, 3) || shared.divisibleBy(count, 5)) {
        total = total + count;
    }
    count = count+1;
}

console.log(total);

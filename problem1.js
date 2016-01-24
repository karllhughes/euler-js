/*
 * Problem 1
 * https://projecteuler.net/problem=1
 */

"use strict";

const euler = require("./euler.js");

let count = 1;
let total = 0;

while (count < 1000) {
    if (euler.divisibleBy(count, 3) || euler.divisibleBy(count, 5)) {
        total = total + count;
    }
    count = count+1;
}

console.log(total);

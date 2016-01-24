/*
 * Problem 7
 * https://projecteuler.net/problem=7
 */

"use strict";

const euler = require("./euler.js");
const maxCount = 10001;
let count = 0;
let j = 2;

while(j) {
    if (euler.isPrime(j)) {
        count++;
        if (count == maxCount) {
            console.log(j);
            break;
        }
    }
    j++;
}

/*
 * Problem 14
 * https://projecteuler.net/problem=14
 */

"use strict";

const euler = require("./euler.js");
const max = 13;
let count = 0;
let patterns = [];
let i = 1;

while (i < max) {
    count = collatzSequenceCount(i);
    i++;
}

function collatzSequenceCount(num)
{
    i = 0;
    while (num > 1) {
        if (euler.divisibleBy(num, 2)) {
            num = num / 2;
        } else {
            num = (3 * num) + 1;
        }
        i++;
    }
    return i;
}

console.log();

/*
 * Problem 14
 * https://projecteuler.net/problem=14
 */

"use strict";

const euler = require("./euler.js");
const max = 1000000;
let count = 0;
let maxcount = 0;
let maxcountId = 0;
let i = 1;

while (i < max) {
    count = collatzSequenceCount(i);
    if (count > maxcount) {
        maxcount = count;
        maxcountId = i;
    }
    i++;
}

function collatzSequenceCount(num)
{
    let j = 1;
    while (num > 1) {
        if (euler.divisibleBy(num, 2)) {
            num = num / 2;
        } else {
            num = (3 * num) + 1;
        }
        j++;
    }
    return j;
}

console.log(maxcountId);

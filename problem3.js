/*
 * Problem 3
 * https://projecteuler.net/problem=3
 */

"use strict";

const euler = require("./euler.js");
const max = 600851475143;

for(var i = 2; i < max; i++) {
    if(euler.divisibleBy(max, i)) {
        let factor = max / i;
        if (isPrime(factor)) {
            console.log(factor);
            break;
        }
    }
}

function isPrime(num) {
    for(var div = 2; div < num; div++) {
        if(euler.divisibleBy(num, div)) {
            return false;
        }
    }
    return num > 1;
}

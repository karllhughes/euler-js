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
        if (euler.isPrime(factor)) {
            console.log(factor);
            break;
        }
    }
}

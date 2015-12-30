/*
 * Problem 3
 * https://projecteuler.net/problem=3
 */

"use strict";

const max = 600851475143;

for(var i = 2; i < max; i++) {
    if(divisibleBy(max, i)) {
        let factor = max / i;
        if (isPrime(factor)) {
            console.log(factor);
            break;
        }
    }
}

function isPrime(num) {
    for(var div = 2; div < num; div++) {
        if(divisibleBy(num, div)) {
            return false;
        }
    }
    return num > 1;
}

function divisibleBy(num, div) {
    return num % div === 0;
}

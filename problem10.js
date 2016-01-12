/*
 * Problem 10
 * https://projecteuler.net/problem=10
 */

"use strict";

const max = 2000000;
let c = 1;
let sum = 0;

while (c < max) {
    if(isPrime(c)) {
        console.log(c);
        sum += c;
    }
    c++;
}
console.log(sum);

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

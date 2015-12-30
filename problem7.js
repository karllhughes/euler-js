/*
 * Problem 7
 * https://projecteuler.net/problem=7
 */

"use strict";

const maxCount = 10001;
let count = 0;
let j = 2;

while(j) {
    if (isPrime(j)) {
        count++;
        if (count == maxCount) {
            console.log(j);
            break;
        }
    }
    j++;
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

/*
 * Shared functions for project Euler solutions in Javascript
 */

"use strict";

// See if a number is evenly divisible by another
exports.divisibleBy = function(num, div) {
    return num % div === 0;
}

// Gets prime numbers through a maximum using 
exports.getPrimes = function(max)
{
    let values = [];
    for (let i = 0; i <= max; i++) {
        values.push(i);
    }
    values[0] = 0; values[1] = 0;

    for (let i = 2; i <= Math.floor(Math.sqrt(max)); i++) {
        if (values[i] > 0) {
            let k = 0;
            for (let j = i*i; j <= max; j = (i*i) + (i*k)) {
                values[j] = 0;
                k++;
            }
        }
    }
    return values;
}

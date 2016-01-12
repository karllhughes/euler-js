/*
 * Problem 10
 * https://projecteuler.net/problem=10
 */

"use strict";

const max = 2000000;
var values = [];
for (var i = 0; i <= max; i++) {
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

let sum = values.reduce(function(pv, cv) { return pv + cv; }, 0);

console.log(sum);

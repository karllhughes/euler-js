/*
 * Problem 5
 * https://projecteuler.net/problem=5
 */

"use strict";

const euler = require("./euler.js");
let number = 1;

while(number) {
    if (divisibleByAll(number, 20)) {
        console.log(number);
        break;
    }
    number++;
}

function divisibleByAll(number, max) {
    for(var i = 1; i <= max; i++) {
        if(euler.divisibleBy(number, i) == false) {
            return false;
        }
    }
    return true;
}

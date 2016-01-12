/*
 * Problem 8
 * https://projecteuler.net/problem=8
 */

"use strict";

const amin = 1;
const bmin = 2;
const cmin = 3;
let a = amin;
let b = bmin;
let c = cmin;

while (c < 1000) {
    while (b < 1000) {
        while (a < 1000) {
            if (isTriplet(a, b, c)) {
                if ((a + b + c) == 1000) {
                    console.log("a:" + a);
                    console.log("b:" + b);
                    console.log("c:" + c);
                    let product = (a*b*c);
                    console.log("Product: " + product);
                    break;
                }
            }
            a++;
        }
        a = amin;
        b++;
    }
    b = bmin;
    c++;
}


function isTriplet(a, b, c) {
    if (((a*a) + (b*b)) === (c*c)) {
        if ((a < b) && (b < c)) {
            return true;
        }
    }
    return false
}
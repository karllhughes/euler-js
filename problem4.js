/*
 * Problem 4
 * https://projecteuler.net/problem=4
 */

"use strict";

let i = 100;
let j = 100;
let result = 0;

while(i < 1000) {
    while(j < 1000) {
        let product = i * j;
        // console.log(product);
        if (isPalindromic(product) && product > result) {
            result = product;
        }
        j++;
    }
    i++;
    j = 100;
}

console.log(result);

function isPalindromic(num) {
    let array = (""+num).split("");
    if(divisibleBy(array.length, 2)) {
        let halfArrayLength = array.length / 2;
        let firstHalf = "";
        let secondHalf = "";
        for(var i = 0; i < array.length; i++) {
            if (i < halfArrayLength) {
                firstHalf = firstHalf + array[i];
            } else {
                secondHalf = array[i] + secondHalf;
            }
        }
        if(firstHalf === secondHalf) {
            return true;
        }
    }
    return false;
}

function divisibleBy(num, div) {
    return num % div === 0;
}

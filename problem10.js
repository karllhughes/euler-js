/*
 * Problem 10
 * https://projecteuler.net/problem=10
 * Sieve of Eratoshtenes Reference: https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
 */

"use strict";

const euler = require("./euler.js");

const max = 2000000;

let primes = euler.getPrimes(max);
let sumOfPrimes = primes.reduce(function(pv, cv) { return pv + cv; }, 0);

console.log(sumOfPrimes);

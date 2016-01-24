/*
 * Problem 10
 * https://projecteuler.net/problem=10
 * Sieve of Eratoshtenes Reference: https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
 */

"use strict";

const shared = require("./shared.js");

const max = 2000000;

let primes = shared.getPrimes(max);
let sum = primes.reduce(function(pv, cv) { return pv + cv; }, 0);

console.log(sum);

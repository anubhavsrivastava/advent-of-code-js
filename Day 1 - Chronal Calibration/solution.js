const fs = require('fs');
const input = fs.readFileSync('./input.txt', { encoding: 'utf8' });
const partA = require('./partA');
const partB = require('./partB');
let inputArray = input.split('\n');

console.log(partA(inputArray));
console.log(partB(inputArray));

// //1. Powers of 2
// const readline = require('readline-sync');
// let inputNumber = readline.questionInt("Enter a number to find power of 2: ");
// console.log("Powers of 2 :");
// for (i = 0; i <= inputNumber; i++) {
//     console.log(Math.pow(2, i) + "  ");
// }


//2.Print nth harmonic number of given form
const lib =  require('./library');
let inputNumber = readline.questionInt("Enter a number.");
let harmonicNumber = 0;

for (i = 1; i <= inputNumber; i++) {
    harmonicNumber = harmonicNumber + (1 / i);
}
console.log("Harmonic number : " + harmonicNumber);



// 1. Flip coin prints heads or tails randomly.
const HEAD = 1;
let flip = Math.floor(Math.random() * 10) % 2;
if (flip == HEAD) {
    console.log("HEADS");
}
else {
    console.log("TAILS");
}


//2. Find Maximum and Minimum of 5 randon 3 digit values
let min = 999;
let max = 0;
console.log("Numbers : ");
for (i = 0; i < 5; i++) {
    let number = Math.floor(Math.random() * 900) + 100;
    console.log((i + 1) + ")" + number);
    if (number < min) {
        min = number;
    }
    if (number > max) {
        max = number;
    }
}
console.log("Min number : " + min);
console.log("Max number : " + max);

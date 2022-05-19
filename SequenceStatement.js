/// 1- Generate a random one digit number
console.log(Math.floor(Math.random()*10));

/// 2- Use random to get dice input between 1 to 6
console.log(Math.floor((Math.random()*1000)%6 +1));

/// 3- Add two dice number and print the result.
let diceOne = Math.floor((Math.random()*1000))%6 +1;
let diceTwo = Math.floor((Math.random()*1000))%6 +1;
let sumDice = diceOne + diceTwo;
console.log("Sum of two dice = " + sumDice);


/// 4- Enter the five number and print sum and average.
let sum = 0;
for(let iterator = 0; iterator<5; iterator++ )
{
    sum += Math.floor(Math.random() * 100);
}
console.log("Sum is: " + sum);
console.log("Average is: " + sum/5);
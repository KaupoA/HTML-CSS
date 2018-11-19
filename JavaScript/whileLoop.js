var allNumbers = -10;
var evenNumbers = 10;
var oddNumbers = 300;
var divNumbers = 5;

console.log("All numbers between -10 and 19");
while (allNumbers <= 19) {
    console.log(allNumbers);
    allNumbers++;
}

console.log("All even numbers between 10 and 40");
while (evenNumbers <= 40) {
    console.log(evenNumbers);
    evenNumbers+=2;
}

/* while (evenNumbers <= 40) {
    if (evenNumbers % 2 === 0) {
        console.log(evenNumbers);
    }
    evenNumbers += 1;
} */

console.log("All odd numbers between 300 and 333");
while (oddNumbers <= 333) {
    if (oddNumbers % 2 === 1) {
    console.log(oddNumbers);
    }
    oddNumbers++;
} 

console.log("All numbers divisible by 5 and 3 between 5 and 50"); 
while (divNumbers <= 50) {
    if (divNumbers % 5 === 0 && divNumbers % 3 === 0) {
        console.log(divNumbers)
    }
    divNumbers++;
} 
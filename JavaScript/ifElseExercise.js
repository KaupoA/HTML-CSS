var age = 7;

if (age < 0) {
    console.log("Error! Age not valid.")
}

else if (age === 21) {
    console.log("Happy 21st birthday!!!")
}

else if (age % 2 !== 0) {
    console.log("Your age is odd!")
}

else if (age % Math.sqrt(age) === 0) {
    console.log("Perfect Square!");
} 

else {
    console.log("Good for you!")
}
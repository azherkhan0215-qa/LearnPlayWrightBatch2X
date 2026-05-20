let number = 10;
if (number % 2 !== 0) {
    console.log("Number is odd");
}
else {
    console.log("Number is even");
}



let grade = 64;
if (grade >= 90) {
    console.log("Grade: A");
}
else if (grade >= 80) {
    console.log("Grade: B");
}
else if (grade >= 70) {
    console.log("Grade: C");
}
else if (grade >= 60) {
    console.log("Grade: D");
}
else {
    console.log("Grade: Fail");
}



let year = 2000;
if (year % 4 === 0 && year % 100 !== 0) {
    console.log(year + " is a leap year.");
}
else if (year % 400 === 0) {
    console.log(year + " is a leap year.");
}
else {
    console.log(year + " is not a leap year.");
}
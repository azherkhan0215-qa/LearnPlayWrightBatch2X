// String Concatenation Operator Examples
// The '+' operator is used to join (concatenate) strings

// 1. Basic concatenation using +
let greeting = "Hello";
let name = "World";
console.log(greeting + " " + name); // Hello World

// 2. Shorthand assignment operator (+=)
let message = "Hi";
message += " Dev";
console.log(message); // Hi Dev

// 3. Concatenating multiple strings
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // John Doe

// 4. String + Number = String! (Type coercion)
let age = 25;
let info = "I am " + age + " years old";
console.log(info); // I am 25 years old

let num1 = "10";
let num2 = 20;
console.log(num1 + num2); // "1020" (not 30!)

// 5. Number + Number + String vs String + Number + Number
console.log(10 + 20 + "30"); // "3030" (10+20=30, then +"30" = "3030")
console.log("10" + 20 + 30); // "102030" ("10"+20="1020", then +30="102030")

// 6. Using .concat() method
let str1 = "Learn";
let str2 = "Playwright";
console.log(str1.concat(" ", str2, " Fast")); // Learn Playwright Fast

// 7. Template Literals (Modern approach using backticks)
let course = "JavaScript";
let year = 2025;
console.log(`Welcome to ${course} in ${year}!`);

// 8. Joining array elements into a string
let words = ["JavaScript", "is", "awesome"];
console.log(words.join(" ")); // JavaScript is awesome

// 9. String + Boolean
console.log("Status: " + true); // Status: true
console.log("Value: " + false); // Value: false

// 10. Empty string concatenation
let empty = "";
console.log(empty + "Start" + "" + "End"); // StartEnd

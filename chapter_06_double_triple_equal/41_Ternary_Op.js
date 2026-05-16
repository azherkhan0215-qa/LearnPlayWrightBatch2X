// Ternary Operator (Conditional Operator) Examples
// Syntax: condition ? expression_if_true : expression_if_false

// 1. Basic ternary - Check if a number is even or odd
let num = 7;
let result = num % 2 === 0 ? "Even" : "Odd";
console.log(result); // Odd

// 2. Ternary for age verification
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Adult

// 3. Ternary with numbers - Find the greater number
let a = 15, b = 25;
let greater = a > b ? a : b;
console.log(greater); // 25

// 4. Ternary in a single console.log
let score = 85;
console.log(score >= 60 ? "Pass" : "Fail"); // Pass

// 5. Nested ternary - Grade evaluation
let marks = 75;
let grade = marks >= 90 ? "A" : marks >= 80 ? "B" : marks >= 70 ? "C" : marks >= 60 ? "D" : "F";
console.log(grade); // C

// 6. Ternary with strings - Check empty or not
let username = "Alice";
let displayName = username ? username : "Guest";
console.log(displayName); // Alice

// 7. Ternary with boolean flag
let isLoggedIn = true;
let message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message); // Welcome back!

// 8. Ternary for assigning default values (alternative to ||)
let input = "";
let value = input ? input : "Default Value";
console.log(value); // Default Value

// 9. Ternary to decide which function to call (simple case)
let isDarkMode = false;
let theme = isDarkMode ? "Dark Theme Applied" : "Light Theme Applied";
console.log(theme); // Light Theme Applied

// 10. Multiple ternary in expression
let x = 10, y = 20, z = 30;
let largest = x > y ? (x > z ? x : z) : (y > z ? y : z);
console.log(largest); // 30

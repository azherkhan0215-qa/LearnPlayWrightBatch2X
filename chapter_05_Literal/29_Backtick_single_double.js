// ==========================================
// 29_Backtick_single_double.js
// Single vs Double vs Backtick (Template Literal)
// ==========================================

/*
SINGLE EXPLANATION:
- 'Single' and "Double" quotes are the SAME in JavaScript. Pick one style and stick to it.
- `Backticks` are DIFFERENT: they allow string interpolation (${variable}) and multi-line text.
*/

// --- Single & Double Quotes (Identical behavior) ---
let name = 'Alice';
let city = "New York";
console.log("Single:", name);
console.log("Double:", city);

// --- Backticks (Template Literals) ---
let age = 25;

// 1. Interpolation: embed variables/expressions directly
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log("\nInterpolation:", greeting);

// 2. Multi-line: write text across multiple lines easily
let address = `123 Main Street,
${city},
USA`;
console.log("\nMulti-line:");
console.log(address);

// 3. Expressions inside ${}
let total = `Sum: ${10 + 20}`;
console.log("\nExpression:", total);

// --- When to use what? ---
console.log("\n--- Rule of Thumb ---");
console.log("Use 'single' or \"double\" for simple, static text.");
console.log("Use `backticks` when you need to inject variables or write multi-line strings.");

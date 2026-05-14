// ==========================================
// 23_null_undefined.js
// Understanding the difference between null and undefined
// ==========================================

console.log("=== NULL vs UNDEFINED ===\n");

// ------------------------------------------
// 1. UNDEFINED
// ------------------------------------------
// "I exist, but I don't have a value yet."
// JavaScript automatically gives this to variables that are declared but not assigned.

let userName;
console.log("1. UNDEFINED Example:");
console.log("   let userName;");
console.log("   userName is:", userName);        // undefined
console.log("   typeof userName is:", typeof userName); // "undefined"
console.log("");

// Common places you see undefined:
function greet() {
    // This function does not return anything
}
let result = greet();
console.log("   Function with no return:", result); // undefined

let person = { age: 25 };
console.log("   Missing property:", person.name);  // undefined
console.log("");


// ------------------------------------------
// 2. NULL
// ------------------------------------------
// "I am intentionally empty."
// The developer explicitly sets a value to null to mean "nothing."

let userEmail = null;
console.log("2. NULL Example:");
console.log("   let userEmail = null;");
console.log("   userEmail is:", userEmail);          // null
console.log("   typeof userEmail is:", typeof userEmail); // "object" (this is a known JS quirk!)
console.log("");

// Real-world use case: Resetting a variable on purpose
let shoppingCart = ["Apple", "Banana"];
console.log("   Before:", shoppingCart);
shoppingCart = null; // User clears the cart intentionally
console.log("   After clearing cart:", shoppingCart);
console.log("");


// ------------------------------------------
// 3. SIDE-BY-SIDE COMPARISON
// ------------------------------------------
console.log("3. COMPARISON:");
console.log("   Value check (==):  undefined == null  ->", undefined == null);   // true  (loose equality)
console.log("   Type check (===):  undefined === null ->", undefined === null);  // false (strict equality - different types!)
console.log("");

let a;           // undefined - JS did this automatically
let b = null;    // null      - developer did this intentionally

console.log("   let a;        -> a is:", a);
console.log("   let b = null; -> b is:", b);
console.log("");


// ------------------------------------------
// 4. QUICK SUMMARY
// ------------------------------------------
console.log("4. SUMMARY TABLE:");
console.log("   +----------------+-------------------------------------------+");
console.log("   | UNDEFINED      | NULL                                      |");
console.log("   +----------------+-------------------------------------------+");
console.log("   | Not assigned   | Intentionally empty                       |");
console.log("   | JS sets this   | Developer sets this                       |");
console.log("   | Means \"oops\"   | Means \"nothing here by choice\"            |");
console.log("   | typeof: undefined | typeof: object (legacy bug)            |");
console.log("   +----------------+-------------------------------------------+");
console.log("");


// ------------------------------------------
// 5. PRACTICAL CHECK
// ------------------------------------------
console.log("5. HOW TO CHECK:");

let value1;
let value2 = null;

// Best practice: Use strict equality (===) or check for both
if (value1 === undefined) {
    console.log("   value1 is undefined");
}

if (value2 === null) {
    console.log("   value2 is null");
}

// Check for "empty-ish" values (null or undefined)
if (value1 == null) {
    console.log("   value1 is null or undefined");
}

// Modern way: Nullish Coalescing Operator (??)
let displayName = value1 ?? "Guest";
console.log("   Using ?? operator:", displayName); // "Guest" because value1 is undefined

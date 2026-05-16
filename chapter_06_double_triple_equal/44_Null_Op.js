// Null / Nullish Coalescing Operator (??) and Related Examples

// 1. Nullish Coalescing Operator (??)
// Returns right-hand value ONLY if left-hand is null or undefined
let userName = null;
let displayName = userName ?? "Guest";
console.log(displayName); // Guest

let userAge = 0;
let age = userAge ?? 18;
console.log(age); // 0 (0 is NOT null/undefined, so 0 is kept!)


let label = "";
console.log(label || "default");  // "default" (empty string is falsy)
console.log(label ?? "default");  // "" (empty string is NOT nullish)

let isActive = false;
console.log(isActive || true);   // true (false is falsy)
console.log(isActive ?? true);   // false (false is NOT nullish)

// Increment (++) and Decrement (--) Operator Examples

// 1. Post-increment (x++): Returns value first, then increments
let a = 5;
console.log(a++);       // 5 (prints old value, then a becomes 6)
console.log(a);         // 6

// 2. Pre-increment (++x): Increments first, then returns new value
let b = 5;
console.log(++b);       // 6 (increments first, then prints 6)
console.log(b);         // 6

// 3. Post-decrement (x--): Returns value first, then decrements
let c = 10;
console.log(c--);       // 10 (prints old value, then c becomes 9)
console.log(c);         // 9

// 4. Pre-decrement (--x): Decrements first, then returns new value
let d = 10;
console.log(--d);       // 9 (decrements first, then prints 9)
console.log(d);         // 9

// 5. Difference in expressions - CRITICAL!
let x = 3;
let y = x++ + 2;        // y gets 3 + 2 = 5, then x becomes 4
console.log(x, y);      // 4, 5

let m = 3;
let n = ++m + 2;        // m becomes 4, then n gets 4 + 2 = 6
console.log(m, n);      // 4, 6

// 6. Used in a loop (most common use case)
console.log("Loop with increment:");
for (let i = 0; i < 5; i++) {
    console.log(i);     // 0, 1, 2, 3, 4
}

// 7. Decrement in reverse loop
console.log("Reverse loop with decrement:");
for (let j = 3; j > 0; j--) {
    console.log(j);     // 3, 2, 1
}

// 8. Combined in one expression
let p = 2;
let q = 2;
let r = p++ + ++q;      // p gives 2 (then p=3), q becomes 3 (then gives 3)
console.log(p, q, r);   // 3, 3, 5

// 9. Multiple increments on same line (tricky!)
let val = 1;
let result = val++ + val++ + val++;  // 1 + 2 + 3 = 6, val ends at 4
console.log(val, result); // 4, 6

// 10. Increment with array index
let scores = [10, 20, 30];
let index = 0;
console.log(scores[index++]);  // scores[0] = 10, then index becomes 1
console.log(scores[index]);    // scores[1] = 20
console.log(scores[++index]);  // index becomes 2 first, then scores[2] = 30

// 11. Shorthand alternatives (same as += 1 and -= 1)
let count = 0;
count += 1;  // same as count++
console.log(count); // 1
count -= 1;  // same as count--
console.log(count); // 0

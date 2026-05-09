// ============================================================
// JavaScript Comments & VS Code Shortcuts
// ============================================================

// ------------------------------------------------------------
// 1. SINGLE-LINE COMMENTS
// ------------------------------------------------------------
// Use // for single-line comments.
// Everything after // on the same line is ignored by JavaScript.

let user = "Alice"; // This is an inline comment

// VS Code Shortcut:
//   Windows/Linux : Ctrl + /
//   Mac           : Cmd + /
//   (Toggles comment on the current line or selected lines)


// ------------------------------------------------------------
// 2. MULTI-LINE COMMENTS (Block Comments)
// ------------------------------------------------------------
/*
  This is a multi-line comment.
  It can span across many lines.
  Useful for disabling blocks of code or writing detailed explanations.
*/

let total = 100;



// ------------------------------------------------------------
// 3. JSDOC COMMENTS (Documentation Comments)
// ------------------------------------------------------------
/**
 * Calculates the sum of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
  return a + b;
}

// VS Code Tip:
//   Type /** above a function and press Enter,
//   VS Code auto-generates JSDoc template on both Windows & Mac.


// ------------------------------------------------------------
// 4. COMMENTING BEST PRACTICES
// ------------------------------------------------------------
// - Use // for short explanations
// - Use /* */ for longer descriptions or temporarily disabling code
// - Use /** */ for function/class documentation
// - Avoid obvious comments: let x = 5; // Set x to 5  <-- BAD
// - Keep comments up-to-date with code changes


// ============================================================
// VS CODE COMMENT SHORTCUTS CHEATSHEET
// ============================================================
//
// | Action                     | Windows/Linux      | Mac              |
// |----------------------------|--------------------|------------------|
// | Toggle Line Comment        | Ctrl + /           | Cmd + /          |
// | Toggle Block Comment       | Shift + Alt + A    | Shift + Option+A |
// | Comment Selection (add)    | Ctrl + K, Ctrl + C | Cmd + K, Cmd + C |
// | Uncomment Selection (rem)  | Ctrl + K, Ctrl + U | Cmd + K, Cmd + U |
//
// ============================================================

console.log("Comment examples loaded successfully.");

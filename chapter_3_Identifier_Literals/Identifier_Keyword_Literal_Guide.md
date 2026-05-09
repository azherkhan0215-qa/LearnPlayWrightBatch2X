# Identifiers, Keywords & Literals — Complete Guide

This guide explains the three fundamental building blocks of JavaScript syntax: **Identifiers**, **Keywords**, and **Literals**.

---

## Table of Contents

1. [Identifiers](#1-identifiers)
2. [Keywords (Reserved Words)](#2-keywords-reserved-words)
3. [Literals](#3-literals)
4. [Quick Comparison](#4-quick-comparison)
5. [Best Practices](#5-best-practices)

---

## 1. Identifiers

An **identifier** is a name used to identify a variable, function, class, property, or label.

### Rules for Naming Identifiers

| Rule | Description | Example |
| :--- | :--- | :--- |
| **Must start with** | A letter (a-z, A-Z), underscore (`_`), or dollar sign (`$`) | `name`, `_private`, `$btn` |
| **Cannot start with** | A digit (0-9) | ~~`1stName`~~ ❌ |
| **After first char** | Letters, digits, underscores, dollar signs allowed | `userName1`, `item_2` |
| **Case-sensitive** | `myVar` and `myvar` are different identifiers | ✅ Valid |
| **No spaces** | Cannot contain whitespace | ~~`my name`~~ ❌ |
| **No special chars** | Hyphens, @, # not allowed (except in specific contexts) | ~~`my-name`~~ ❌ |
| **Unicode supported** | Unicode letters are valid | `const 你好 = "Hello"` ✅ |

### Valid vs Invalid Identifiers

| ✅ Valid | ❌ Invalid | Reason |
| :--- | :--- | :--- |
| `userName` | `123abc` | Starts with a digit |
| `_private` | `my-variable` | Hyphens not allowed |
| `$element` | `my variable` | Spaces not allowed |
| `totalScore` | `class` | Reserved keyword |
| `MAX_SIZE` | `2ndPlace` | Starts with a digit |
| `_` | `user@name` | Special characters not allowed |
| `userName2` | `true` | Reserved keyword |

### Common Naming Conventions

| Convention | Pattern | Use Case | Example |
| :--- | :--- | :--- | :--- |
| **camelCase** | `firstSecondThird` | Variables, functions | `getUserName()` |
| **PascalCase** | `FirstSecondThird` | Classes, constructors | `UserProfile` |
| **snake_case** | `first_second_third` | Constants, config keys | `MAX_RETRY_COUNT` |
| **UPPER_SNAKE_CASE** | `FIRST_SECOND_THIRD` | Constants | `PI`, `API_BASE_URL` |
| **kebab-case** | `first-second-third` | CSS classes, file names (not JS identifiers) | `user-profile` |

### Where Identifiers Are Used

| Context | Example |
| :--- | :--- |
| Variable declaration | `let userName = "John";` |
| Function declaration | `function greet() {}` |
| Class declaration | `class User {}` |
| Object property keys | `{ name: "John", age: 25 }` |
| Labels | `loop1: for (...) {}` |
| Import aliases | `import * as utils from "./utils";` |

---

## 2. Keywords (Reserved Words)

**Keywords** are identifiers that have special meaning in JavaScript. They control the flow and structure of code.

### Always Reserved Keywords

These **cannot** be used as identifiers anywhere in JavaScript:

| Keyword | Purpose | Example |
| :--- | :--- | :--- |
| `break` | Exit a loop or switch | `break;` |
| `case` | Label in switch statement | `case 1:` |
| `catch` | Handle exceptions | `catch (err) {}` |
| `class` | Declare a class | `class User {}` |
| `const` | Declare a constant | `const PI = 3.14;` |
| `continue` | Skip to next iteration | `continue;` |
| `debugger` | Invoke debugging | `debugger;` |
| `default` | Default in switch | `default:` |
| `delete` | Delete property | `delete obj.prop;` |
| `do` | Do-while loop | `do {} while (...)` |
| `else` | If-else condition | `else {}` |
| `export` | Export module members | `export const x = 1;` |
| `extends` | Class inheritance | `class A extends B {}` |
| `false` | Boolean false | `let x = false;` |
| `finally` | Execute after try/catch | `finally {}` |
| `for` | For loop | `for (;;) {}` |
| `function` | Declare function | `function fn() {}` |
| `if` | Conditional statement | `if (x) {}` |
| `import` | Import module | `import x from "mod";` |
| `in` | Property existence check | `"key" in obj` |
| `instanceof` | Type check | `obj instanceof Class` |
| `new` | Create instance | `new Date();` |
| `null` | Null value | `let x = null;` |
| `return` | Return from function | `return 42;` |
| `super` | Access parent class | `super.method();` |
| `switch` | Multi-way branch | `switch (x) {}` |
| `this` | Current object reference | `this.name` |
| `throw` | Throw exception | `throw new Error();` |
| `true` | Boolean true | `let x = true;` |
| `try` | Exception handling block | `try {}` |
| `typeof` | Get type of value | `typeof x === "string"` |
| `var` | Declare variable (older) | `var x = 1;` |
| `void` | Evaluate and return undefined | `void 0` |
| `while` | While loop | `while (x) {}` |
| `with` | Extend scope chain (deprecated) | `with (obj) {}` |

### Strict Mode Reserved Keywords

Reserved **only** in strict mode:

| Keyword | Context |
| :--- | :--- |
| `let` | Block-scoped variable declaration |
| `static` | Static class members |
| `yield` | Generator function pause/resume |

### Module / Async Reserved Keywords

Reserved **only** in module code or async function bodies:

| Keyword | Context |
| :--- | :--- |
| `await` | Pause async function execution |

### Future Reserved Keywords

Reserved for potential future use:

| Always Reserved | Strict Mode Only |
| :--- | :--- |
| `enum` | `implements`, `interface` |
| | `package`, `private` |
| | `protected`, `public` |

### Keywords with Special Meaning (Not Fully Reserved)

These have special meaning in certain contexts but can sometimes be used as identifiers:

| Identifier | Special Context |
| :--- | :--- |
| `async` | Before function declarations for async functions |
| `eval` | Cannot be used as identifier in strict mode |
| `arguments` | Cannot be used as identifier in strict mode |
| `get` | Getter methods in objects/classes |
| `set` | Setter methods in objects/classes |
| `of` | `for...of` loops |
| `as` | Import aliases |
| `from` | Import statements |

---

## 3. Literals

A **literal** is a notation for representing a fixed value directly in the source code.

### Types of Literals

| Literal Type | Description | Examples |
| :--- | :--- | :--- |
| **Null Literal** | Represents no value / empty object reference | `null` |
| **Boolean Literal** | True or false values | `true`, `false` |
| **Numeric Literal** | Integer and floating-point numbers | `42`, `3.14`, `0b1010`, `0xFF`, `1_000_000` |
| **BigInt Literal** | Arbitrary-precision integers | `9007199253740991n`, `0x123n` |
| **String Literal** | Text enclosed in quotes | `'Hello'`, `"World"` |
| **Array Literal** | Ordered list of values in square brackets | `[1, 2, 3]`, `['a', 'b']` |
| **Object Literal** | Key-value pairs in curly braces | `{ name: "John", age: 25 }` |
| **Template Literal** | Strings with embedded expressions | `` `Hello, ${name}!` `` |
| **Regular Expression Literal** | Pattern for matching text | `/ab+c/g`, `/pattern/i` |

### Numeric Literal Details

| Type | Prefix | Example | Decimal Value |
| :--- | :--- | :--- | :--- |
| **Decimal** | (none) | `42`, `3.14`, `1_000` | 42, 3.14, 1000 |
| **Binary** | `0b` or `0B` | `0b1010` | 10 |
| **Octal** | `0o` or `0O` | `0o755` | 493 |
| **Hexadecimal** | `0x` or `0X` | `0xFF` | 255 |
| **Exponential** | `e` or `E` | `1e3`, `175e-2` | 1000, 1.75 |
| **BigInt** | `n` suffix | `123456789012345678901n` | (arbitrary precision) |

### String Literal Escape Sequences

| Escape Sequence | Character | Code Point |
| :--- | :--- | :--- |
| `\0` | Null character | U+0000 |
| `\'` | Single quote | U+0027 |
| `\"` | Double quote | U+0022 |
| `\\` | Backslash | U+005C |
| `\n` | New line (Line Feed) | U+000A |
| `\r` | Carriage return | U+000D |
| `\v` | Vertical tab | U+000B |
| `\t` | Horizontal tab | U+0009 |
| `\b` | Backspace | U+0008 |
| `\f` | Form feed | U+000C |
| `\xNN` | Hexadecimal escape | U+00NN |
| `\uNNNN` | Unicode escape | U+NNNN |
| `\u{N...}` | Unicode code point | U+10FFFF max |

### Examples of Literals in Code

```javascript
// Null Literal
let user = null;

// Boolean Literals
let isActive = true;
let isDeleted = false;

// Numeric Literals
let count = 42;
let price = 19.99;
let binary = 0b1010;      // 10 in decimal
let octal = 0o755;        // 493 in decimal
let hex = 0xFF;           // 255 in decimal
let big = 9007199253740991n; // BigInt
let readable = 1_000_000; // Numeric separator

// String Literals
let firstName = "John";
let lastName = 'Doe';
let quote = "He said, \"Hello!\"";

// Template Literals
let greeting = `Hello, ${firstName}!`;
let multiLine = `Line 1
Line 2
Line 3`;

// Array Literals
let scores = [90, 85, 88];
let mixed = [1, "two", true, null];

// Object Literals
let person = {
  name: "John",
  age: 30,
  isAdmin: true
};

// Regular Expression Literals
let pattern = /ab+c/gi;
```

---

## 4. Quick Comparison

| Feature | Identifier | Keyword | Literal |
| :--- | :--- | :--- | :--- |
| **Purpose** | Names something in code | Has special meaning to JavaScript | Represents a fixed value |
| **Example** | `userName` | `if`, `return`, `class` | `42`, `"hello"`, `true` |
| **Can you create your own?** | ✅ Yes | ❌ No (reserved) | ❌ No (built-in values) |
| **Used for** | Variables, functions, classes, properties | Control flow, declarations, operators | Data values directly in code |
| **Starts with digit?** | ❌ No | ❌ No | ✅ Yes (numeric literals) |
| **Case-sensitive?** | ✅ Yes | ✅ Yes | N/A (values) |
| **Contains spaces?** | ❌ No | ❌ No | N/A (values) |

### Summary in One Line

| Concept | Definition |
| :--- | :--- |
| **Identifier** | A name you give to variables, functions, classes, or properties |
| **Keyword** | A reserved word that JavaScript uses for its own syntax and operations |
| **Literal** | A fixed value written directly into the source code |

---

## 5. Best Practices

### Identifiers

| Practice | Why |
| :--- | :--- |
| Use `camelCase` for variables and functions | Standard JavaScript convention |
| Use `PascalCase` for classes and constructors | Distinguishes classes from instances |
| Use `UPPER_SNAKE_CASE` for constants | Signals immutability |
| Use descriptive names | Improves readability and maintainability |
| Avoid single-letter names (except in loops) | `i`, `j`, `k` are acceptable in loops |
| Don't use reserved keywords | Prevents syntax errors |

### Keywords

| Practice | Why |
| :--- | :--- |
| Learn and memorize reserved words | Avoids naming conflicts |
| Use strict mode (`"use strict"`) | Enables additional reserved words for safer code |
| Use `let` and `const` instead of `var` | Block scope, avoids hoisting issues |
| Don't rely on `with` | Deprecated, causes unpredictable behavior |

### Literals

| Practice | Why |
| :--- | :--- |
| Prefer `const` with literals when value won't change | Prevents accidental reassignment |
| Use template literals for string interpolation | Cleaner and more readable |
| Use numeric separators for large numbers | Improves readability (`1_000_000` vs `1000000`) |
| Use strict equality (`===`) when comparing literals | Avoids type coercion bugs |
| Prefer `null` over `undefined` for intentional absence | Clearer intent |

---

## References

- [MDN — Lexical Grammar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar)
- [MDN — Identifiers](https://developer.mozilla.org/en-US/docs/Glossary/Identifier)
- [ECMAScript® 2027 Language Specification](https://tc39.es/ecma262/)

---

> **Tip:** Understanding identifiers, keywords, and literals is fundamental to reading and writing JavaScript. Practice by examining any JavaScript file and identifying which tokens are identifiers, which are keywords, and which are literals!

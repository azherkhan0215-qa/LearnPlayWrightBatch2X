# Learn Playwright Batch 2X

Welcome to the **Learn Playwright Batch 2X** repository! This project is a structured learning resource for mastering **JavaScript fundamentals** and **Playwright automation testing**. The content is organized into chapters, making it easy to follow along from basics to advanced concepts.

---

## Table of Contents

- [About This Project](#about-this-project)
- [Project Structure](#project-structure)
- [Chapters Overview](#chapters-overview)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [VS Code Shortcuts](#vs-code-shortcuts)
- [Chapter 4: JavaScript Concepts](#chapter-4-javascript-concepts)
- [Chapter 5: Literals](#chapter-5-literals)
- [Chapter 6: Operators & Comparisons](#chapter-6-operators--comparisons)
- [Contributing](#contributing)

---

## About This Project

This repository contains hands-on exercises, examples, and reference materials for learning:

- **JavaScript Basics** — Variables, data types, operators, and control flow
- **JavaScript Concepts** — Functions, scopes, closures, and ES6+ features
- **Identifiers & Literals** — Naming rules, comments, and best practices
- **VS Code Productivity** — Keyboard shortcuts for faster coding

Whether you are a beginner or brushing up your skills, this repo provides practical code examples you can run and experiment with.

---

## Project Structure

```
LearnPlayWrightBatch2X/
├── chapter_01_Basics/              # JavaScript basics & setup
├── chapter_02_JavaScript_Concepts/ # Core JavaScript concepts
├── chapter_3_Identifier_Literals/  # Identifiers, literals, comments & VS Code shortcuts
├── chapter_4_JavaScript_Concepts/  # var, let, const, functions, scope, hoisting
├── chapter_05_Literal/             # Number, String, Boolean, null, undefined, template literals
├── chapter_06_double_triple_equal/ # Operators, comparison (== vs ===), logical, ternary, nullish coalescing
├── README.md                       # You are here!
└── .git/                           # Git version control
```

---

## Chapters Overview

| Chapter | Folder | Topics Covered |
| :--- | :--- | :--- |
| **Chapter 1** | [`chapter_01_Basics`](chapter_01_Basics) | Hello World, variables, setup verification, hot code reloading |
| **Chapter 2** | [`chapter_02_JavaScript_Concepts`](chapter_02_JavaScript_Concepts) | Variables (`var`, `let`, `const`), data types, operators |
| **Chapter 3** | [`chapter_3_Identifier_Literals`](chapter_3_Identifier_Literals) | Identifier naming rules, literals, comments, VS Code shortcuts |
| **Chapter 4** | [`chapter_4_JavaScript_Concepts`](chapter_4_JavaScript_Concepts) | `var`/`let`/`const`, functions, scope, hoisting |
| **Chapter 5** | [`chapter_05_Literal`](chapter_05_Literal) | Number types, String literals, Boolean, null vs undefined, template literals |
| **Chapter 6** | [`chapter_06_double_triple_equal`](chapter_06_double_triple_equal) | Arithmetic, comparison (`==` vs `===`), logical, ternary, increment/decrement, nullish coalescing |

Each chapter contains `.js` files that you can run directly with Node.js to see the output.

---

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/azherkhan0215-qa/LearnPlayWrightBatch2X.git
   cd LearnPlayWrightBatch2X
   ```

2. **Navigate to a chapter**
   ```bash
   cd chapter_01_Basics
   ```

3. **Run a JavaScript file**
   ```bash
   node 01_Basics.js
   ```

4. **Experiment!** Modify the code, save, and run again to see what changes.

---

## Prerequisites

Before you begin, make sure you have the following installed:

| Tool | Purpose | Download |
| :--- | :--- | :--- |
| **Node.js** | Run JavaScript files locally | [nodejs.org](https://nodejs.org) |
| **VS Code** | Code editor with great JavaScript support | [code.visualstudio.com](https://code.visualstudio.com) |
| **Git** | Version control | [git-scm.com](https://git-scm.com) |

**Verify your setup:**
```bash
node --version    # Should print v18+ (recommended)
npm --version     # Should print 9+
git --version     # Should print 2+
```

---

## VS Code Shortcuts

We have compiled a handy reference of **VS Code default keyboard shortcuts** to boost your productivity:

| File | OS | Link |
| :--- | :--- | :--- |
| **Mac Shortcuts** | macOS | [`chapter_3_Identifier_Literals/VS_Code_KeyBoard_Mac_Short_cuts.md`](chapter_3_Identifier_Literals/VS_Code_KeyBoard_Mac_Short_cuts.md) |
| **Windows Shortcuts** | Windows & Linux | [`chapter_3_Identifier_Literals/VS_Code_KeyBoard_Windows_Short_cuts.md`](chapter_3_Identifier_Literals/VS_Code_KeyBoard_Windows_Short_cuts.md) |

> **Tip:** Open Keyboard Shortcuts in VS Code anytime with `Ctrl + K Ctrl + S` (Windows/Linux) or `Cmd + K Cmd + S` (Mac).

---

## Folder README

For a detailed guide on the VS Code shortcuts and how to use them, check out the chapter-specific guide:

[`chapter_3_Identifier_Literals/VS_Code_Shortcuts_Guide.md`](chapter_3_Identifier_Literals/VS_Code_Shortcuts_Guide.md)

---

## Chapter 5: Literals

This chapter dives into JavaScript literal values and data types:

| File | Topic |
| :--- | :--- |
| [`22_Literal.js`](chapter_05_Literal/22_Literal.js) | Introduction to literals |
| [`23_null_undefined.js`](chapter_05_Literal/23_null_undefined.js) | Difference between `null` and `undefined` |
| [`24_null.js`](chapter_05_Literal/24_null.js) | Working with `null` |
| [`25_Literal_All.js`](chapter_05_Literal/25_Literal_All.js) | All literal types overview |
| [`26_Literal_Number_all.js`](chapter_05_Literal/26_Literal_Number_all.js) | All number formats: integer, float, hex, binary, octal, BigInt, Infinity, NaN |
| [`27_String.js`](chapter_05_Literal/27_String.js) | String literals and operations |
| [`28_Template_Literal.js`](chapter_05_Literal/28_Template_Literal.js) | Template literals with backticks |
| [`29_Backtick_single_double.js`](chapter_05_Literal/29_Backtick_single_double.js) | Single quotes vs double quotes vs backticks |

Run any file with:
```bash
node chapter_05_Literal/22_Literal.js
```

---

## Chapter 6: Operators & Comparisons

This chapter covers JavaScript operators from basic arithmetic to advanced comparison and logical operators:

| File | Topic |
| :--- | :--- |
| [`30_Operator.js`](chapter_06_double_triple_equal/30_Operator.js) | Assignment operators |
| [`31_Arithmetic_OP.js`](chapter_06_double_triple_equal/31_Arithmetic_OP.js) | Arithmetic operators (`+`, `-`, `*`, `/`) |
| [`32_Modulus_OP.js`](chapter_06_double_triple_equal/32_Modulus_OP.js) | Modulus (`%`) operator |
| [`33_Expo_OP.js`](chapter_06_double_triple_equal/33_Expo_OP.js) | Exponentiation (`**`) operator |
| [`34_IQ.js`](chapter_06_double_triple_equal/34_IQ.js) | Interview questions on operators |
| [`35_Comparsion_OP.js`](chapter_06_double_triple_equal/35_Comparsion_OP.js) | Comparison operators (`>`, `<`, `>=`, `<=`) |
| [`36_Comparsion_Strict_loose.js`](chapter_06_double_triple_equal/36_Comparsion_Strict_loose.js) | Loose (`==`) vs Strict (`===`) comparison |
| [`37_IQ_Loose_Strict.js`](chapter_06_double_triple_equal/37_IQ_Loose_Strict.js) | Interview questions on loose vs strict |
| [`38_Confusing_Comparsion.js`](chapter_06_double_triple_equal/38_Confusing_Comparsion.js) | Tricky comparison scenarios |
| [`39_Logical_Op.js`](chapter_06_double_triple_equal/39_Logical_Op.js) | Logical operators (`&&`, `\|\|`, `!`) |
| [`40_String_Con_Op.js`](chapter_06_double_triple_equal/40_String_Con_Op.js) | String concatenation operators |
| [`41_Ternary_Op.js`](chapter_06_double_triple_equal/41_Ternary_Op.js) | Ternary (conditional) operator |
| [`42_Type_Op.js`](chapter_06_double_triple_equal/42_Type_Op.js) | Type operators (`typeof`, `instanceof`) |
| [`43_Incre_Decre_Op.js`](chapter_06_double_triple_equal/43_Incre_Decre_Op.js) | Increment (`++`) and decrement (`--`) operators |
| [`44_Null_Op.js`](chapter_06_double_triple_equal/44_Null_Op.js) | Nullish coalescing operator (`??`) |

Run any file with:
```bash
node chapter_06_double_triple_equal/30_Operator.js
```

---

## Contributing

This is a personal learning repository. If you have suggestions or improvements, feel free to fork the repo and submit a pull request!

---

## License

This project is for educational purposes.

---

> **Happy Learning!** 🚀

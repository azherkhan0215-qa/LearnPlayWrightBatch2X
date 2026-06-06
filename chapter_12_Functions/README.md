# Chapter 12 — Functions

This chapter covers function declarations, expressions, arrow functions, scope, closures, higher-order functions, and pure functions.

## Files

| File Name | Topic | Description |
|-----------|-------|-------------|
| `96_Functions.js` | Function Basics | Define → Call workflow |
| `97_Type1_Fn_Basic_Functions.js` | Type 1 | No parameters, no return value |
| `98_Type2_Fn_With_Param_No_Return.js` | Type 2 | With parameters, no return value |
| `99_Type3_Fn_without_Param_Return_Type.js` | Type 3 | No parameters, with return value |
| `100_Type4_Fn_With_Param_With_Return.js` | Type 4 | With parameters, with return value |
| `101_Template_literal.js` | Template Literals | `` `Hello, ${name}` `` inside functions |
| `102_Fn_Expression.js` | Function Expressions | Assigning functions to variables |
| `103_Arrow_Fn.js` | Arrow Functions | ES6 `=>` syntax, implicit return |
| `104_Arrow_Fn_REAL.js` | Real-World Arrow | API status validation with arrow functions |
| `105_IIFE.js` | IIFE | Immediately Invoked Function Expressions |
| `106_Default_Param_Fn.js` | Default Parameters | Fallback values for function arguments |
| `107_IQ.js` | Interview Q&A | Function return values and patterns |
| `108_Rest_Param_Fn.js` | Rest Parameters | `...results` — collect varying arguments |
| `109_IQ.js` | Hoisting Traps | Function expressions vs declarations & TDZ |
| `110_Spead_IQ.js` | Spread + Functions | Pass arrays as individual arguments |
| `111_Scope._Fn.js` | Scope | Global vs local variable access in functions |
| `112_IQ.js` | Nested Scope | Lexical scoping and shadowing |
| `113_Closure.js` | Closure Basics | Inner function accessing outer variables |
| `114_Closure.js` | Closure Pattern | Counter with private state |
| `115_API_REAL_Closure.js` | Real-World Closure | Retry tracker with encapsulated state |
| `116_Higher_Order_Fn.js` | HOF | Functions taking or returning other functions |
| `117_Pure_Fn.js` | Pure Functions | Predictable output, no side effects |

## Key Concepts

```mermaid
mindmap
  root((Chapter 12 — Functions))
    Declaration
      function name()
    Types
      No param No return
      Param No return
      No param Return
      Param Return
    Expressions
      const fn = function()
    Arrow Functions
      () =>
      implicit return
    Advanced
      Default params
      Rest ...args
      Spread ...arr
    Scope
      Global
      Local
      Lexical
    Closure
      Inner accesses outer
      Private state
    HOF
      fn as argument
      fn as return
    Pure
      Same input → same output
      No side effects
```

## Run them

```bash
node chapter_12_Functions/97_Type1_Fn_Basic_Functions.js              # → basic greet
node chapter_12_Functions/100_Type4_Fn_With_Param_With_Return.js        # → sum with return
node chapter_12_Functions/102_Fn_Expression.js                        # → function expression
node chapter_12_Functions/103_Arrow_Fn.js                               # → arrow syntax
node chapter_12_Functions/105_IIFE.js                                   # → IIFE patterns
node chapter_12_Functions/106_Default_Param_Fn.js                     # → default parameters
node chapter_12_Functions/108_Rest_Param_Fn.js                         # → rest parameters
node chapter_12_Functions/113_Closure.js                               # → closure basics
node chapter_12_Functions/115_API_REAL_Closure.js                      # → real-world closure
node chapter_12_Functions/116_Higher_Order_Fn.js                        # → higher-order functions
node chapter_12_Functions/117_Pure_Fn.js                               # → pure vs impure
```

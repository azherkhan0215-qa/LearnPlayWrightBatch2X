# Chapter 14 — Objects

This chapter covers object creation, access, methods, destructuring, spread, getters/setters, iteration, and real-world config patterns.

## Files

| File Name | Topic | Description |
|-----------|-------|-------------|
| `124_Objects.js` | Object Basics | Empty object `{}`, key-value pairs, object vs array vs JSON |
| `125_Objects2.js` | References & Notation | Dot notation `.key`, bracket notation `["key"]` — and the difference between JSON & JS objects |
| `126_Objects_Creation.js` | Reference Equality | Why two identical objects are `===` false (reference comparison) |
| `127_Objects_REAL.js` | Real-World Patterns | Dynamic property assignment, `delete`, conditional checks on config objects |
| `128_Primitive_Ref.js` | Primitive vs Reference | Pass-by-value (numbers, strings) vs pass-by-reference (objects, arrays) |
| `129_Ob_Examples.js` | JSON vs JS Syntax | Double-quoted keys (JSON) vs bare keys (JS) — when each appears |
| `130_IQ.js` | Property Access | Dynamic property access with variables, `Object.getOwnPropertyDescriptor` |
| `131_Object_Fn.js` | Object Methods | Functions as object values, `this` keyword for internal state |
| `132_Obj_Decon.js` | Destructuring | Basic destructuring, renaming variables, default values, nested destructuring |
| `133_Spead.js` | Spread & Mutability | Object spread `{...obj}` for shallow copy, `let` vs `const` with objects |
| `134_Objects_GET_SET_Methods.js` | Getters & Setters | Computed properties with `get` / `set` — dynamic full-name example |
| `135_IQ.js` | Iteration Utilities | `Object.keys`, `Object.values`, `Object.entries`, `for...in` loop |
| `136_Obj_REAL.js` | Real-World Configs | ENV objects, API response shapes, test-configuration objects |
| `137_Let_const_obj.js` | let vs const | Mutating properties (allowed) vs reassigning the variable (not allowed with `const`) |

## Key Concepts

```mermaid
mindmap
  root((Chapter 14 — Objects))
    Creation
      {} literal
      new Object()
    Access
      dot notation
      bracket notation
      dynamic keys
    Mutation
      add property
      delete property
      modify value
    Reference
      copy by reference
      shallow copy
      deep copy
    Methods
      function as value
      this keyword
    Destructuring
      basic {a, b}
      rename {a: x}
      default {a = 1}
      nested {a: {b}}
    Spread
      {...obj}
      merge objects
    Getters/Setters
      get fullName()
      set fullName(v)
    Iteration
      Object.keys
      Object.values
      Object.entries
      for...in
```

## Run them

```bash
node chapter_14_Objects/124_Objects.js              # → object basics
node chapter_14_Objects/127_Objects_REAL.js           # → real-world config object
node chapter_14_Objects/128_Primitive_Ref.js          # → primitive vs reference
node chapter_14_Objects/131_Object_Fn.js              # → object methods with this
node chapter_14_Objects/132_Obj_Decon.js              # → destructuring patterns
node chapter_14_Objects/133_Spead.js                 # → spread & shallow copy
node chapter_14_Objects/134_Objects_GET_SET_Methods.js # → getters & setters
node chapter_14_Objects/135_IQ.js                     # → keys, values, entries
node chapter_14_Objects/137_Let_const_obj.js        # → let vs const with objects
```

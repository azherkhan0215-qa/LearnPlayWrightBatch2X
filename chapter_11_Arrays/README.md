# Chapter 11 — Arrays

This chapter covers creating, accessing, searching, transforming, and validating arrays.

## Files

| File Name | Topic | Description |
|-----------|-------|-------------|
| `83_Arrays.js` | Array Basics | Empty arrays, literals, mixed types, index access |
| `84_Arrays.js` | Creating Arrays | `[]`, `new Array()`, `Array.of()`, `Array.from()` |
| `85_Access_Array.js` | Access & Modify | Index lookup, `.at()` with negative indices, reassignment |
| `86_Arrays_Adding_Remove.js` | Stack / Queue Ops | `push`, `pop`, `unshift`, `shift` |
| `87_Adding_Remove2.js` | Splice Deep Dive | `splice(start, deleteCount, ...items)` — delete, add, replace |
| `88_REAL_Example.js` | Real-World Example | Browser list manipulation with loops |
| `89_Searching.js` | Searching | `indexOf`, `lastIndexOf`, `includes`, `find`, `findIndex`, `findLast` |
| `90_Iterate.js` | Iteration | `for`, `for...of`, `forEach`, `for...in`, `.entries()` |
| `91_Transform_Array.js` | Transform | `map`, `filter`, `reduce`, `flat` |
| `92_Arrays.js` | Sorting | Default sort vs custom comparator `(a, b) => a - b` |
| `93_Array_Slicing.js` | Slice vs Splice | `slice(start, end)` (non-mutating) vs `splice` (mutating) |
| `94_Concat_array.js` | Combine & Join | `concat`, spread `[...a, ...b]`, `.join()` |
| `95_Array_Checking.js` | Validation | `Array.isArray`, `every`, `some` |

## Key Concepts

```mermaid
mindmap
  root((Chapter 11 — Arrays))
    Creation
      [] literal
      new Array()
      Array.of()
      Array.from()
    Access
      index [0]
      .at(-1)
    Mutation
      push pop
      unshift shift
      splice
    Search
      indexOf
      includes
      find findIndex
    Transform
      map
      filter
      reduce
      flat
    Sort
      default sort
      compare fn
    Combine
      concat
      spread ...
      join
    Validate
      Array.isArray
      every some
```

## Run them

```bash
node chapter_11_Arrays/83_Arrays.js              # → array basics
node chapter_11_Arrays/86_Arrays_Adding_Remove.js  # → push, pop, unshift, shift
node chapter_11_Arrays/91_Transform_Array.js       # → map, filter, reduce
node chapter_11_Arrays/92_Arrays.js               # → sort behavior
```

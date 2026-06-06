# Chapter 1 — Basics

This chapter covers Hello World, environment setup, and hot code paths.

## Files

| File Name | Topic | Description |
|-----------|-------|-------------|
| `01_Basics.js` | Hello World | First `console.log`, declaring a variable |
| `02_JS.js` | Variables & Loops | Re-declaring with `let`, calling functions inside loops |
| `03_JS_Verify_Setup.js` | Environment Check | `process.platform`, `process.arch`, `process.version` |
| `04_HotCode.js` | Hot Code Paths | How V8 optimizes frequently-called functions |

## Key Concepts

```mermaid
mindmap
  root((Chapter 1))
    Setup
      Node.js install
      VS Code
      Verify with process.*
    First Program
      console.log
      Run with node file.js
    Variables
      let
      const
      var
    Hot Code
      JIT compilation
      V8 optimization
```

## Run them

```bash
node chapter_01_Basics/01_Basics.js          # → "Hello World"
node chapter_01_Basics/02_JS.js              # → counts to 100000 calling print()
node chapter_01_Basics/03_JS_Verify_Setup.js # → prints platform / arch / node version
node chapter_01_Basics/04_HotCode.js         # → triggers V8 hot-path optimization
```

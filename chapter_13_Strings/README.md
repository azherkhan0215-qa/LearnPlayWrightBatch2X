# Chapter 13 — Strings

This chapter covers string creation, properties, searching, substring extraction, transformation, conversion, and practice tasks.

## Files

| File Name | Topic | Description |
|-----------|-------|-------------|
| `118_Strings.js` | String Basics | Single quotes, double quotes, backticks with interpolation, multiline strings, `String()` constructor |
| `119_String_Properties.js` | Properties & Access | `.length`, bracket `[i]` indexing, `.at()` with negatives, `charAt`, `charCodeAt` |
| `120_Search_Check_Str.js` | Searching & Checking | `includes`, `startsWith`, `endsWith`, `indexOf`, `lastIndexOf`, `search` with regex |
| `121_Substring.js` | Substring Extraction | `slice(start, end)` with negative indices, `substring(start, end)` — no negatives |
| `122_Transform_Str.js` | Transform & Mutate | `toUpperCase`, `toLowerCase`, `trim`/`trimStart`/`trimEnd`, `replace`, `replaceAll`, `split`, `join`, `concat` |
| `123_SC.js` | String Conversion | `toString`, `Number()`, `parseInt`, `parseFloat` — type conversions |
| `task.js` | Practice Tasks | Palindrome checker, anagram checker using `split`, `reverse`, `sort`, `join` |

## Key Concepts

```mermaid
mindmap
  root((Chapter 13 — Strings))
    Creation
      'single'
      "double"
      `template ${x}`
      String(x)
    Properties
      .length
      [index]
      .at(-1)
      charAt
      charCodeAt
    Search
      includes
      startsWith
      endsWith
      indexOf
      lastIndexOf
      search regex
    Extract
      slice
      substring
    Transform
      toUpperCase
      toLowerCase
      trim
      replace
      replaceAll
      split
      join
    Convert
      toString
      Number
      parseInt
      parseFloat
```

## Run them

```bash
node chapter_13_Strings/118_Strings.js              # → string literals & interpolation
node chapter_13_Strings/119_String_Properties.js    # → length, index access, charAt
node chapter_13_Strings/120_Search_Check_Str.js    # → includes, startsWith, indexOf
node chapter_13_Strings/121_Substring.js            # → slice & substring extraction
node chapter_13_Strings/122_Transform_Str.js        # → replace, split, join, trim
node chapter_13_Strings/123_SC.js                   # → toString, parseInt, parseFloat
node chapter_13_Strings/task.js                     # → palindrome & anagram checks
```

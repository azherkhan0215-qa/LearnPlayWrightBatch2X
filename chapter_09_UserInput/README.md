# Chapter 9 — User Input

This chapter covers reading user input from the browser and Node.js CLI.

## Files

| File Name | Topic | Description |
|-----------|-------|-------------|
| `68_User_Input.js` | Browser Prompt | `prompt()` for browser-based input |
| `69_Node_readline.js` | Node Readline | CLI input using `readline` module |
| `70_prompt_sync.js` | Sync Prompt | Synchronous user input patterns |
| `test.js` | Test File | Input handling experiments |

## Key Concepts

```mermaid
mindmap
  root((Chapter 9 — User Input))
    Browser
      prompt()
      alert()
    Node.js
      readline module
      createInterface
      question()
    Conversion
      String → Number
      Validation
    Patterns
      Even/odd from input
      Menu driven programs
```

## Run them

```bash
node chapter_09_UserInput/69_Node_readline.js    # → interactive CLI input
node chapter_09_UserInput/70_prompt_sync.js      # → synchronous prompt demo
```

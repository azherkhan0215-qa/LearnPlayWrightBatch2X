# Export and Import: Default vs Named

## Named Exports and Imports

Named exports allow you to export multiple items from a module using the `export` keyword.

### Exporting Named Exports

```javascript
// utils.js
export const BASE_URL = "https://example.com";
export const API_KEY = "abc123";

export function formatTestName(name) {
  return `TEST: ${name}`;
}

export function formatUpperCaseString(str) {
  return str.toUpperCase();
}
```

### Importing Named Exports

You can import specific named exports or import everything at once:

```javascript
// 169_Utils.js
// Import specific named exports
import { BASE_URL as bul_util, formatTestName } from "../utils.js";
import { formatUpperCaseString } from "../testutils.js";

// Import everything and destructure
import * as utils from "../utils.js";

console.log(utils.BASE_URL); // Access as object properties
console.log(utils.formatTestName("login"));
```

**Key Points:**
- Use curly braces `{ }` for named imports
- You can rename imports using `as`
- You can import multiple named exports from the same file
- Use `export { name1, name2 }` to export multiple items from the same file

---

## Default Exports

Default exports allow you to export only one value per module. This is useful for libraries, main entry points, or when you want to export a single main function or object.

### Exporting Default Export

```javascript
// logger.js
function log(message) {
  console.log(message);
}

export default log;
```

### Importing Default Export

Default exports are imported without curly braces:

```javascript
// 170_Logger.js
import log from '../logger.js';

log("starting the test cases");
```

**Key Points:**
- Use `export default` for a single export
- No curly braces `{ }` when importing
- The name when importing can be anything you want (often `import x from ...`)
- A module can have only one default export

---

## Comparison

| Feature | Named Export | Default Export |
|---------|-------------|----------------|
| Multiple exports | Yes (multiple items) | No (single item only) |
| Import syntax | `{ item } from ...` | `import item from ...` |
| Renaming | `as` keyword | No renaming needed |
| Naming | Must match export name | No naming constraint |
| Best for | Multiple related functions | Single main export |

---

## Common Patterns

### Exporting Multiple Named Items

```javascript
// config.js
export const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000
};

export const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
```

### Exporting Everything as Namespace

```javascript
// utils.js
export const BASE_URL = "https://example.com";
export const API_KEY = "abc123";

// Then import as namespace
import * as utils from "./utils.js";
console.log(utils.BASE_URL);
```

### Exporting a Class as Default

```javascript
// HttpClient.js
class HttpClient {
  async get(url) {
    const response = await fetch(url);
    return response.json();
  }
}

export default HttpClient;
```

```javascript
// app.js
import HttpClient from "./HttpClient.js";
const client = new HttpClient();
```

---

## When to Use Each

**Use Named Exports when:**
- Exporting multiple related functions or constants
- Exporting utilities from a utility file
- Building reusable libraries with multiple exports

**Use Default Exports when:**
- Exporting a single main function or class
- Creating a library with a single entry point
- Building a module that provides one primary functionality
- Following conventions from other libraries

---

## TypeScript Considerations

TypeScript supports both export types the same way:

```typescript
// Named export with types
export interface User {
  id: number;
  name: string;
}

export function getUser(id: number): User {
  // implementation
}

// Default export with class
export default class UserService {
  // implementation
}
```

Both export types work seamlessly with TypeScript's type system.
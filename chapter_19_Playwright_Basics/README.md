# Playwright Basics - Chapter 19

Learning Playwright automation with TypeScript and C# examples.

## Project Structure

```
chapter_19_Playwright_Basics/
├── tests/                    # TypeScript Playwright tests
│   ├── example.spec.ts       # Basic TypeScript test example
│   └── example-dotnet.spec.cs # C# Playwright test example
├── PlaywrightTests/          # C# test project
│   └── UnitTest1.cs          # C# unit test
├── playwright.config.ts      # Playwright configuration
├── package.json              # Node.js dependencies
└── README.md                 # This file
```

## Installation

### Prerequisites
- Node.js (v18+)
- .NET 6.0 or later

### Setup

```bash
# Install dependencies
npm install

# Run TypeScript tests
npx playwright test

# Run C# tests
dotnet test
```

## Tests

### TypeScript Tests
- `tests/example.spec.ts` - Basic TypeScript test with Playwright

### C# Tests
- `PlaywrightTests/UnitTest1.cs` - C# Playwright test
- `tests/example-dotnet.spec.cs` - C# Playwright test example

## Configuration

Playwright configuration is in `playwright.config.ts`.

## License

MIT
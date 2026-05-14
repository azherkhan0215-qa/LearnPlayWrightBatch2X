// ==========================================
// 26_Literal_Number_all.js
// All Number Types and Concepts in JavaScript
// ==========================================

console.log("=== JAVASCRIPT NUMBER TYPES ===\n");

// JavaScript has only ONE numeric type: Number (IEEE 754 double-precision 64-bit)
// It can represent both integers and floating-point numbers.
// Additionally, ES2020 introduced BigInt for arbitrarily large integers.


// ------------------------------------------
// 1. INTEGER LITERALS
// ------------------------------------------
console.log("1. INTEGER LITERALS");

let decimal = 42;
console.log("   Decimal (Base 10):     ", decimal, "->", typeof decimal);

let negative = -100;
console.log("   Negative Integer:      ", negative, "->", typeof negative);

let zero = 0;
console.log("   Zero:                  ", zero, "->", typeof zero);

let largeInt = 9007199254740991; // This is Number.MAX_SAFE_INTEGER
console.log("   Large Safe Integer:    ", largeInt);
console.log("");


// ------------------------------------------
// 2. FLOATING-POINT LITERALS (Decimals)
// ------------------------------------------
console.log("2. FLOATING-POINT LITERALS");

let price = 19.99;
console.log("   Price:                 ", price, "->", typeof price);

let pi = 3.14159;
console.log("   Pi:                    ", pi);

let fraction = 0.5;
console.log("   Fraction:              ", fraction);

let leadingDecimal = .75;   // Valid but not recommended for readability
let trailingDecimal = 5.;    // Valid but not recommended
console.log("   Leading decimal (.75): ", leadingDecimal);
console.log("   Trailing decimal (5.): ", trailingDecimal);
console.log("");


// ------------------------------------------
// 3. EXPONENTIAL (SCIENTIFIC) NOTATION
// ------------------------------------------
console.log("3. EXPONENTIAL NOTATION");

let oneMillion = 1e6;       // 1 * 10^6 = 1,000,000
console.log("   1e6 (1 million):       ", oneMillion);

let tiny = 1e-6;            // 1 * 10^-6 = 0.000001
console.log("   1e-6 (0.000001):       ", tiny);

let avogadro = 6.022e23;
console.log("   6.022e23:              ", avogadro);

let electronMass = 9.109e-31;
console.log("   9.109e-31:             ", electronMass);
console.log("");


// ------------------------------------------
// 4. HEXADECIMAL LITERALS (Base 16)
// ------------------------------------------
console.log("4. HEXADECIMAL (Base 16) - prefix '0x' or '0X'");

let hexColor = 0xFF;        // 255 in decimal
console.log("   0xFF (Red):            ", hexColor);

let hexGreen = 0x00FF00;    // 65280 in decimal
console.log("   0x00FF00 (Green):      ", hexGreen);

let hexBlue = 0x0000FF;
console.log("   0x0000FF (Blue):       ", hexBlue);

let hexNum = 0xABC;
console.log("   0xABC:                 ", hexNum, "(2748 in decimal)");
console.log("");


// ------------------------------------------
// 5. BINARY LITERALS (Base 2) - ES6
// ------------------------------------------
console.log("5. BINARY (Base 2) - prefix '0b' or '0B'");

let binaryFive = 0b101;     // 5 in decimal
console.log("   0b101:                 ", binaryFive);

let binaryByte = 0b11111111; // 255 in decimal
console.log("   0b11111111:            ", binaryByte, "(255 in decimal)");

let binaryMask = 0b1010;
console.log("   0b1010:                ", binaryMask, "(10 in decimal)");
console.log("");


// ------------------------------------------
// 6. OCTAL LITERALS (Base 8) - ES6
// ------------------------------------------
console.log("6. OCTAL (Base 8) - prefix '0o' or '0O'");

let octalTen = 0o12;        // 10 in decimal
console.log("   0o12:                  ", octalTen);

let octalPerm = 0o777;      // 511 in decimal (rwxrwxrwx)
console.log("   0o777:                 ", octalPerm, "(511 in decimal)");

let octalEight = 0o10;      // 8 in decimal
console.log("   0o10:                  ", octalEight);
console.log("");


// ------------------------------------------
// 7. BIGINT - ES2020 (Arbitrarily Large Integers)
// ------------------------------------------
console.log("7. BIGINT - for arbitrarily large integers");

let bigNum = 9007199254740991n;
console.log("   BigInt literal:        ", bigNum, "->", typeof bigNum);

let bigger = 123456789012345678901234567890n;
console.log("   Very large BigInt:     ", bigger);

let fromNumber = BigInt(42);
console.log("   BigInt(42):            ", fromNumber, "->", typeof fromNumber);

let fromString = BigInt("9007199254740991999");
console.log("   BigInt(string):        ", fromString);

// Operations
let sumBig = 100n + 200n;
console.log("   100n + 200n:           ", sumBig);

// NOTE: You CANNOT mix BigInt and Number in arithmetic
// console.log(10n + 5); // TypeError!
console.log("");


// ------------------------------------------
// 8. SPECIAL NUMERIC VALUES
// ------------------------------------------
console.log("8. SPECIAL NUMERIC VALUES");

// Infinity
let positiveInfinity = Infinity;
console.log("   Infinity:              ", positiveInfinity, "->", typeof positiveInfinity);

let divideByZero = 1 / 0;
console.log("   1 / 0:                 ", divideByZero);

let bigOverflow = Number.MAX_VALUE * 2;
console.log("   MAX_VALUE * 2:         ", bigOverflow);

// -Infinity
let negativeInfinity = -Infinity;
console.log("   -Infinity:             ", negativeInfinity);

let negativeDivide = -1 / 0;
console.log("   -1 / 0:                ", negativeDivide);

// NaN (Not-a-Number)
let notANumber = NaN;
console.log("   NaN:                   ", notANumber, "->", typeof notANumber);

let badMath = "hello" / 2;
console.log("   'hello' / 2:           ", badMath);

let sqrtNegative = Math.sqrt(-1);
console.log("   Math.sqrt(-1):         ", sqrtNegative);
console.log("");


// ------------------------------------------
// 9. NUMBER OBJECT PROPERTIES
// ------------------------------------------
console.log("9. NUMBER OBJECT PROPERTIES");

console.log("   Number.MAX_VALUE:      ", Number.MAX_VALUE);
console.log("   Number.MIN_VALUE:      ", Number.MIN_VALUE);
console.log("   Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
console.log("   Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);
console.log("   Number.POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);
console.log("   Number.NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);
console.log("   Number.NaN:            ", Number.NaN);
console.log("   Number.EPSILON:        ", Number.EPSILON);
console.log("");


// ------------------------------------------
// 10. CHECKING NUMBER TYPES
// ------------------------------------------
console.log("10. CHECKING NUMBER TYPES");

let num = 42;
let big = 42n;
let nan = NaN;
let inf = Infinity;

console.log("   typeof 42:             ", typeof num);
console.log("   typeof 42n:            ", typeof big);
console.log("   typeof NaN:            ", typeof nan);  // "number" (weird but true!)
console.log("   typeof Infinity:       ", typeof inf);  // "number"

// Better checks
console.log("   Number.isFinite(42):   ", Number.isFinite(42));
console.log("   Number.isFinite(Infinity):", Number.isFinite(Infinity));
console.log("   Number.isNaN(NaN):     ", Number.isNaN(NaN));
console.log("   Number.isInteger(42):  ", Number.isInteger(42));
console.log("   Number.isInteger(42.5):", Number.isInteger(42.5));
console.log("   Number.isSafeInteger(9007199254740991):", Number.isSafeInteger(9007199254740991));
console.log("");


// ------------------------------------------
// 11. NUMBER CONVERSION
// ------------------------------------------
console.log("11. NUMBER CONVERSION");

console.log("   Number('42'):          ", Number('42'));
console.log("   Number('3.14'):        ", Number('3.14'));
console.log("   Number(true):          ", Number(true));
console.log("   Number(false):         ", Number(false));
console.log("   parseInt('42px'):      ", parseInt('42px'));
console.log("   parseFloat('3.14rad'): ", parseFloat('3.14rad'));
console.log("   parseInt('FF', 16):    ", parseInt('FF', 16));
console.log("   parseInt('1010', 2):   ", parseInt('1010', 2));
console.log("");


// ------------------------------------------
// 12. COMMON GOTCHAS
// ------------------------------------------
console.log("12. COMMON GOTCHAS");

console.log("   0.1 + 0.2 === 0.3?     ", 0.1 + 0.2 === 0.3); // false!
console.log("   0.1 + 0.2:             ", 0.1 + 0.2);        // 0.30000000000000004
console.log("   Fix: Number((0.1+0.2).toFixed(1)):", Number((0.1 + 0.2).toFixed(1)));

console.log("   typeof NaN === 'number':", typeof NaN === 'number');
console.log("   NaN === NaN:           ", NaN === NaN);      // false!
console.log("   isNaN('hello'):        ", isNaN('hello'));   // true (coerces first)
console.log("   Number.isNaN('hello'): ", Number.isNaN('hello')); // false (no coercion)

console.log("   9999999999999999:      ", 9999999999999999);  // Loses precision!
console.log("   Use BigInt: 9999999999999999n:", 9999999999999999n); // Precise!
console.log("");


// ------------------------------------------
// 13. SUMMARY TABLE
// ------------------------------------------
console.log("13. SUMMARY TABLE");
console.log("   +------------------+-----------------------------------------------------+");
console.log("   | Type/Format      | Example                                             |");
console.log("   +------------------+-----------------------------------------------------+");
console.log("   | Integer          | 42, -10, 0                                          |");
console.log("   | Float            | 3.14, .5, 2.                                        |");
console.log("   | Exponential      | 1e6, 2.5e-3                                         |");
console.log("   | Hexadecimal      | 0xFF, 0xABC                                         |");
console.log("   | Binary           | 0b1010, 0b1111                                      |");
console.log("   | Octal            | 0o77, 0o10                                          |");
console.log("   | BigInt           | 9007199254740991n, BigInt(42)                       |");
console.log("   | Infinity         | Infinity, -Infinity, 1/0                            |");
console.log("   | NaN              | NaN, 'hello'/2, Math.sqrt(-1)                       |");
console.log("   +------------------+-----------------------------------------------------+");
console.log("");
console.log("   REMEMBER: In JS, all the above (except BigInt) have typeof === 'number'");

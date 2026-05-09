// ============================================================
// JavaScript Identifier Rules
// ============================================================
// An identifier is a name given to variables, functions, classes,
// or any other user-defined items in JavaScript.
// ============================================================

// 1. ALLOWED CHARACTERS
//    Identifiers can contain:
//    - Letters (a-z, A-Z)
//    - Digits (0-9)
//    - Underscore (_)
//    - Dollar sign ($)

var firstName = "John";
var _private = 10;
var $element = "div";
var user2 = "Alice";
var MAX_COUNT = 100;


// 2. MUST NOT START WITH A DIGIT
//    The first character must be a varter, underscore, or dollar sign.

// Invalid (will throw SyntaxError if uncommented):
// var 2ndUser = "Bob";
// var 123abc = 456;


// 3. CASE-SENSITIVE
//    'myVar', 'MyVar', and 'MYVAR' are three different identifiers.

var myVar = 1;
var MyVar = 2;
var MYVAR = 3;

console.log(myVar); // 1
console.log(MyVar); // 2
console.log(MYVAR); // 3


// 4. NO RESERVED KEYWORDS AS IDENTIFIERS
//    You cannot use JavaScript reserved words as variable names.

// Invalid (will throw SyntaxError if uncommented):
// var class = "Economy";
// var return = 5;
// var function = () => {};
// var var = 10;


// 5. CONVENTIONS (Best Practices)
//    - camelCase for variables and functions:   firstName, getUserData
//    - PascalCase for classes:                  UserProfile, DataModel
//    - UPPER_SNAKE_CASE for constants:          MAX_SIZE, API_KEY
//    - Start with _ for private-ish members:    _internalCounter
//    - Start with $ for DOM elements / jQuery:  $button, $input


// ============================================================
// LIST OF RESERVED KEYWORDS (cannot be used as identifiers)
// ============================================================
/*
break       case        catch       class       const
continue    debugger    default     delete      do
else        export      extends     finally     for
function    if          import      in          instanceof
var         new         return      super       switch
this        throw       try         typeof      var
void        while       with        yield

// Strict mode reserved words:
implements  interface   var         package     private
protected   public      static

// Future reserved words:
enum        await

// Literals (also reserved):
true        false       null
*/


// ============================================================
// EXAMPLES: VALID vs INVALID IDENTIFIERS
// ============================================================

// VALID
var userName = " valid ";
var _score = 0;
var $price = 9.99;
var camelCaseVariable = true;
var snake_case_variable = true;
var π = 3.14159; // Unicode varters are allowed but avoid for clarity

// INVALID (SyntaxError if uncommented)
// var 123go = "invalid";      // starts with digit
// var my-var = "invalid";     // hyphen not allowed
// var my var = "invalid";     // space not allowed
// var return = "invalid";     // reserved keyword
// var first#name = "invalid"; // special character # not allowed

console.log("Identifier rules loaded successfully.");

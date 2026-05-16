// Type Operators in JavaScript

// 1. typeof - Returns the type of a variable
console.log(typeof "Hello");     // string
console.log(typeof 42);          // number
console.log(typeof true);        // boolean
console.log(typeof undefined);     // undefined
console.log(typeof null);        // object (known bug in JS)
console.log(typeof {});          // object
console.log(typeof []);          // object
console.log(typeof function(){}); // function
console.log(typeof Symbol());     // symbol
console.log(typeof 123n);        // bigint

// 2. instanceof - Checks if an object is an instance of a class/constructor
let date = new Date();
console.log(date instanceof Date);       // true
console.log(date instanceof Object);     // true
console.log(date instanceof Array);      // false

let arr = [1, 2, 3];
console.log(arr instanceof Array);       // true
console.log(arr instanceof Object);      // true
console.log(arr instanceof Date);        // false

// 3. in - Checks if a property exists in an object
let person = { name: "Alice", age: 25 };
console.log("name" in person);           // true
console.log("age" in person);            // true
console.log("salary" in person);         // false

// 4. delete - Removes a property from an object
let car = { brand: "Toyota", model: "Camry", year: 2020 };
console.log("Before delete:", car);     // { brand: "Toyota", model: "Camry", year: 2020 }
delete car.model;
console.log("After delete:", car);       // { brand: "Toyota", year: 2020 }


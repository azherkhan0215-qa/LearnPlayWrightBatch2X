//JS Engine
//Line by Line execution
//JIT Compilation
console.log(greeting);
var greeting = "Hello";
console.log(greeting);

//Behind the scenes:

//var greeting;  <-- hoisted with undefined
//console.log(greeting); <-- prints undefined
//greeting = "Hello"; <-- assignment stays in place
//console.log(greeting); <-- "Hello"
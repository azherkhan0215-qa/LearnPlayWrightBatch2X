// Comparsion Op - true / false - boolean

// > , < , >= , <= , == , === , !, !=, !===

// = -> Assignment opearator
// == -> losse comparsion ( sikh vs hindu )
// === -> strict comparsion ( sikh vs hindu , languge, living)


console.log(3 > 4);
console.log(3 < 4);
console.log(4 >= 4); // 4 > 4 or 4===4 -> or gate -> 
console.log(3 <= 4); // 3<4 or 3===4

// 10 > 5      // true
//10 < 5      // false
// 10 >= 10    // true
// 10 <= 9     // false


let a = 10, b = 10;
console.log(a == b); // value check
console.log(a === b); // value and data type check


let c = 10, d = "10", e = "Azhar";
console.log(c>=d); // 10 > "10" or 10 === "10" -> 10 > "10" -> false, 10 === "10" -> false
console.log(c<=d); // 10 < "10" or 10 === "10" -> 10 < "10" -> false, 10 === "10" -> false
console.log(c==d); // 10 == "10" -> true (loose comparison)
console.log(c===d); // 10 === "10" -> false (strict comparison)
console.log(c!=d); // 10 != "10" -> false (loose comparison)
console.log(c!==d); // 10 !== "10" -> true (strict comparison)
console.log(c > d); // 10 > "10" -> false
console.log(c < d); // 10 < "10" -> false
console.log(c > e); // 10 > "Azhar" -> false
console.log(c < e); // 10 < "Azhar" -> false
console.log(c == e); // 10 == "Azhar" -> false
console.log(c === e); // 10 === "Azhar" -> false
console.log(c != e); // 10 != "Azhar" -> true
console.log(c !== e); // 10 !== "Azhar" -> true


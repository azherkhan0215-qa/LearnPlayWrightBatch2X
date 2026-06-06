//✅ String Reverse | Palindrome Program

//Given a string , Reverse it and print true if they are same.


let name = "MADAM";
let normalizedName = name.toLowerCase();

let updatedname = normalizedName.split("").reverse().join("");

if(normalizedName === updatedname)
{
    console.log("Palindrome");
}
else
{
    console.log("Not Palindrome");
}


//✅ Java Anagrams

let str1 = "Azhar";
let str2 = "Test";

let strfirst = str1.toLowerCase().split("").sort().join("");
let strsecond = str2.toLowerCase().split("").sort().join("");

console.log(str1);
console.log(str2);
console.log(strfirst);
console.log(strsecond);

if (strfirst === strsecond){
    console.log("Matched")
}
else
{
    console.log("Not Matched")
}
let a=10;
let retrycount=0;
retrycount = retrycount + 1;
retrycount = retrycount + 1;
console.log("retrycount: " + retrycount);

//let retrycount = 5; // This will throw an error because 'retrycount' has already been declared with 'let'

let teststatus = "passed";

if(teststatus === "passed"){
    let executionTime = 1200; // execution time in milliseconds
    console.log("inside block:", executionTime);
}
//console.log("outside block:", executionTime);
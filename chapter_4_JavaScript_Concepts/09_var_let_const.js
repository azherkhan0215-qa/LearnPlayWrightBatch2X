var v=10;
let l=30;
const c=3.14;

var browser="chrome";
var browser="firefox";//redeclaration is allowed
browser="edge";//reassignment is allowed

var testcases = ["Login", "Logout", "SignUp"];
for(var i=0; i<testcases.length; i++){
    console.log("Running test:", testcases[i]);
}
console.log("i is accessible outside the loop: " + i);
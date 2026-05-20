// Question 1 — HTTP Status Code Categorizer

// Problem: Given an HTTP status code, print which category it belongs to.

let HTTPStatusCode = 200;
if (HTTPStatusCode >=200 && HTTPStatusCode<=299)
{
    console.log(`Input: ${HTTPStatusCode}`)
    console.log("Result : Success")
}
else if(HTTPStatusCode >=300 && HTTPStatusCode<=399)
{
    console.log(`Input: ${HTTPStatusCode}`)
    console.log("Result : Redirection")
}
else if(HTTPStatusCode >=400 && HTTPStatusCode <=499)
{
    console.log(`Input: ${HTTPStatusCode}`)
    console.log("Result : Server Error")
}
else if(HTTPStatusCode >=500 && HTTPStatusCode <=599)
{
    console.log(`Input: ${HTTPStatusCode}`)
    console.log("Result : Server Error")
}
else
{
    console.log(`Input: ${HTTPStatusCode}`)
    console.log("Result : Invalid")
}


//Question 2 — Test Case Pass/Fail Verdict

//Problem: Compare actual result with expected result and print test verdict.

let actual = "Login Successful"
let excepted = "Login Successful"

if(excepted === actual)
{
    console.log("✅ Test Passed")
}
else
{
    console.log("❌ Test Failed")
}



//Question 3 — Bug Severity Classifier

//Problem: Given a bug's impact score (1–10), classify the severity.

let score = 1;

switch(score) {
    case 1 :
    case 2 :
    case 3 :    
        console.log("Low")
        break;
    case 4 :
    case 5 :
    case 6 :    
        console.log("Medium")    
        break;
    case 7 :
    case 8 :
        console.log("High")  
        break;
    case 9 :
    case 10 :
        console.log("Critical (block release)") 
        break;
    default:
        console.log("Invalid Score")

}


//Question 4 — Build Health Reporter

//Problem: Given the percentage of test cases passed in a CI build, report build health.
//100% → Green Build
//90–99% → Stable (investigate failures)
//70–89% → Unstable
//Below 70% → Broken Build (block deployment)


let Input = 85;
if(Input === 100)
{
    console.log("🟡 Green Build")
}
else if(Input>=90 && Input<=95)
{
    console.log("🟡 Stable — Investigate failures")
}
else if(Input>=70 && Input<=89)
{
    console.log("🔵 Unstable")
}
else if(Input<70)
{
    console.log("🔴 Broken Build — Block deployment")
}



//Question 5 — Login Lockout After Failed Attempts

//Problem: Track failed login attempts. Lock the account after 3 failed attempts.

let Input_attempts = 3
switch(Input_attempts){
    case 0 :
        console.log("Login Successful")
        break;
    case 1 :
        console.log("2 attempt left before lockout")
        break;
    case 2 :
        console.log("1 attempt left before lockout")
        break;
    case 3 :
        console.log("🔒 Account Locked — Contact support")
        break;
}
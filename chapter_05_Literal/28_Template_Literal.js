//Template Literally
let name = "Azhar";
let fullName = `My name is ${name} Khan.`;  
console.log(fullName); // My name is Azhar Khan.

const env = "staging";
const userId = 12345;
const apiURl = `https://${env}.api.com/user/${userId}`;
console.log(apiURl); // https://staging.api.com/user/12345


//playwright example
const rowindex = 5;
const columnName = "email";
await page.locator('data-row="${rowIndex}" [data-col="${columnName}"]').click();


//Logs
const testName = "Login Test";
const status = "Failed";
const duration = 2.3; // in milliseconds
console.log(`Test: ${testName} - Status: ${status} - Duration: ${duration} ms`); // Test: Login Test - Status: Failed - Duration: 2.3 ms

const username = "Azhar";
const role = "Admin";

const palyload = `{
    "username": "${username}",
    "role": "${role}",
    timestamp: "${new Date().toISOString()}"
}`;
console.log(palyload);
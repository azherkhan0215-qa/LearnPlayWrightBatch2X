var a=10;
//var is a function scoped

console.log("Value of a: " + a);

function printhello()
{
    console.log("Hello, The Testing Academy!");
    var a=20;
    console.log("Value of a inside function: " + a);
    if(true){
        var a=30;
        console.log("Value of a inside if block: " + a);
    }
}

printhello();
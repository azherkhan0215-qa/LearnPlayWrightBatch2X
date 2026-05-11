var a=10; //global variable
console.log(a);

function printhello()
{
    console.log("Hello, The Testing Academy!");
    var a=20; //function scoped variable
    console.log(a);
    if(true){
        var a=30; //function scoped variable, it will override the previous 'a' in the function scope
        console.log(a);
    }
    console.log("F ->",a); // This will print 30 because 'var' is function scoped and the last assignment to 'a' in the function is 30
}
console.log("G ->" + a); // This will print 10 because the global variable 'a' is not affected by the function scope variable 'a'
printhello();

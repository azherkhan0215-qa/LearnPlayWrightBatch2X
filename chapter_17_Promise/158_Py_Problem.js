function openBrowser(){
    return new Promise(function(resolve){
        //Code to Open the Browser
        resolve("Open Browser");
    })
}

function goToLogin(){
    return new Promise(function (resolve){
        resolve("Login page Loaded");
    });
}

function enterCredentials(){
    return new Promise(function (resolve){
        resolve("Credentials Entered");
    });
}


function clickLogin(){
    return new Promise(function (resolve){
        resolve("Logged In Successfully");
    });
}




openBrowser()
    .then(function (msg){
        console.log("Step 1 -", msg);
        return goToLogin();
    }).then(function (msg){
        console.log("Step 2 -", msg);
        return enterCredentials();
    }).then(function (msg){
        console.log("Step 3 -", msg);
        return clickLogin();
    }).then(function (msg){
        console.log("Step 4 -", msg);
    }).catch(function (error){
        console.log("Error");
    }).finally(function (){
        console.log("Executed on End");
    });
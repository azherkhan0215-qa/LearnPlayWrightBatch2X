let apiCall = new Promise(function(reslove, reject){
    reslove({
        status: 200, body: "User data"
    })
    
});

apiCall.then(function (response){
    console.log(response.status);
})
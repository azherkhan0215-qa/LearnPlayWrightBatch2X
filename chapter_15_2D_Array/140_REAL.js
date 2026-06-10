let testmatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 180]
];

for(let i = 0; i<testmatrix.length; i++){
    for(let j = 0; j<testmatrix[i].length; j++){
        console.log(testmatrix[i][j]);
    }
}

for(let i = 0; i < testmatrix.length; i++) {
    console.log(
        "Test Case = " + testmatrix[i][0] +
        ", Status = " + testmatrix[i][1]
    );
}


for(let row of testmatrix){
    for(let cell of row){
        process.stdout.write(cell + " ")
    }
    console.log();
}

testmatrix.forEach(row => {
    row.forEach(
        cell => process.stdout.write(cell + " "));
    console.log();
});
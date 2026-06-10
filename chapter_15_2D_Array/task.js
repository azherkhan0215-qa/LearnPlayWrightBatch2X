
//Task 1:**Print Reverse**
let n = 5;

for(i=n; i>=1; i--){
    let row = " ";
    for(j=1; j<=i; j++){
        row+= "*"; 
    }
    console.log(row.trim());
}


//Task 2: **Print Pyramid**
let m = 3;

for(let i = 1; i <= m; i++) {

    let row = "";

    // spaces
    for(let j = 1; j <= m - i; j++) {
        row += " ";
    }

    // stars
    for(let k = 1; k <= (2 * i - 1); k++) {
        row += "*";
    }

    console.log(row);
}
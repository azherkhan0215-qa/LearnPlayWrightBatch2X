// let is Blocked-Scoped

let x = "global";
if (true) {
    //TDZ for 'x' starts here
    // console.log(x); // ReferenceError: (Not "global"!)
    let x = "block-scoped"; //TDZ for 'x' ends here
    console.log(x); // block-scoped 

}
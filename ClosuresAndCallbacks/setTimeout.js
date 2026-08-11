console.log("start");
let x = setTimeout(function execute(){
    console.log("task completed");
},4000);
console.log("end");
console.log(x);
console.log(typeof x); //object

let id1 = setTimeout(function execute(){
    console.log("task 1 completed");
},10000);
let id2 = setTimeout(function execute(){
    console.log("task 2 completed");
    clearTimeout(id1);
},4000);



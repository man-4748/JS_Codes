console.log("Start");
let count = 0;
for(let i=0;i<1000000000;i++){
    count++;
}
console.log("Task done",count);
console.log("End");
// Line 6 is executed after some time bec js is sync in nature. Line 6 only gets executed after loop is finished

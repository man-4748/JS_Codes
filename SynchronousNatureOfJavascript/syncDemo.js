console.log("Start");
let count = 0;
for(let i=0;i<1000000000;i++){
    count++;
}
console.log("Task done",count);
console.log("End");
// Line 6 is executed after some time bec js is sync in nature. Line 6 only gets executed after loop is finished

//Single-Threaded & Synchronous: JavaScript executes code on a single thread with a single Call Stack. 
//It processes instructions one line at a time from top to bottom.

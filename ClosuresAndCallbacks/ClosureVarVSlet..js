function test(){
    for(var i=0;i<=3;i++){
        setTimeout(function exec(){
            console.log(`i:${i}`);
        },i*1000)
    }
}
test();
// i:4
// i:4
// i:4
// i:4


function test2(){
    for(let i=0;i<=3;i++){
        setTimeout(function exec(){
            console.log(`i:${i}`);
        },i*1000)
    }
}
test2();

// i:0
// i:1
// i:2
// i:3


function test3(){
    for(var i=0;i<=3;i++){
        let j = i;// here j is block scoped: every time there will be a new j along with its timer
        setTimeout(function exec(){
            console.log(`j:${j}`);
        },j*1000)
    }
}
test3();
/*
i = 1: let j = 1; creates a new block-scoped j independent of the previous iteration. setTimeout schedules exec to run in 1 * 1000 = 1000ms. The callback forms a closure around this j (value 1).

Since j is declared using let inside the loop body, JavaScript instantiates a separate binding for j during each loop iteration.

Each asynchronous exec callback remembers its own unique j variable via closure, preserving 0, 1, 2, and 3 instead of reading a single mutated variable at the end.
*/

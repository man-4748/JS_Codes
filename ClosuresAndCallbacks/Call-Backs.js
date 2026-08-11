// What is a call back?

/*
 the function fun is a higher order function because it takes fn(which is a function ) as argument

 x: number
 fn: function
*/

function fun(x,fn){
    for(let i=0;i<x;i++){
        console.log(i);
        
    }
    fn();
}

fun(10, function exec(){                 // callback function
    console.log("I am executed as well");
})

// fn is a callback function
// Higher order functions take a function as an argument and the function being passed as
//  argument is called a callback function 


setTimeout(function exec(){
    console.log("Running after some time ")
} ,4000);   // after 4000 mili seconds , it executes exec function 

/*
    Problems with callbacks:
    1. Callback Hell      
    --> How you improve it --> Promises ---> there is Promise hell as well :(
    --> Async await ---------> Async await hell
    ** check out callbackhell.com  --> readibility problem --> doesnt hamper business logic


    2. Inversion of control
 */


    // INVERSION OF CONTROL  

    // let arr = [1,10,100,25,68,420,51];
    // arr.sort(function cmp(a,b){
    //     return a-b;
    // })
 
    // console.log(arr);

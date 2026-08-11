function fun(x,fn){
    /**
     * x : expected to be a number
     * fn: callback function
     */ 
    // your logic:
    for(let i=1;i<=x;i++){
        console.log(i);
    }
    fn(); // calling the callback function passed as an arg to fun
}
fun(10, function log(){
    console.log("custom logger"); 
})



// applications of callback:

let arr = [1,2,4,3,5,6];
let x =arr.map(function process(v,i){
    // v---> value , i---> index
    // map : for all the elements in the given array, it passes as an argument to the callback
    console.log(v,i);
})

console.log(x);// ---> undefined array because we are not returning anything inside callback function
let y = arr.map(function parse(v,i){
    console.log(i,v*v);
    return v*v;
})
console.log(y);

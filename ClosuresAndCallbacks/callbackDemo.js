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

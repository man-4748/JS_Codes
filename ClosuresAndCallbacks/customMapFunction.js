// Writing your own custom map function for array: 
function mapper(arr, fn){
    /**
     * arr --> array of integers
     * fn --> callback function which expects 2 arguments, value and index
     */
    let res = [];
    for(let i=0;i<arr.length;i++){
        // i-> index , arr[i]-> value
        res.push(fn(arr[i],i));
    }
    return res;
}

let myArray = [1,2,4,3,5,6];
let newArr = mapper(myArray, function cubeKar(v,i){
    console.log(v, v*v*v ,i); 
    return v*v*v;
})
console.log(myArray,newArr);

// Javascript core nature: single-threaded, synchronous
// zomato application


// cart:

function placeOrder(){
    console.log("Payment is in progress");

    setTimeout(()=>{
        console.log("Payment is received and order is placed");
    },3000);
}

// after order is placed -->notify resuturant to start preparing order

function preparingOrder(){
    console.log("Your food is being prepared");

    setTimeout(()=>{
        console.log("Your food is prepared");
    },3000);
}


placeOrder();
preparingOrder();  // this will be executed before the order is placed because of the asynchronous nature of setTimeout
// setTimeout is asynchronous and will be executed after the synchronous code is executed. So, the output will be:
// Payment is in progress
// Your food is being prepared
// Payment is received and order is placed
// Your food is prepared
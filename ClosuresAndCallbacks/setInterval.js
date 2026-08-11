let id = setInterval(function(){
    console.log("Task done again after 3 sec");
},3000);

let id2 = setTimeout(function(){clearInterval(id)},13000);
// after 13 sec clearInterval of id

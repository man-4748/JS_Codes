function fn(){
    teacher = "Gaurav";
    console.log(teacher);
    var teacher = "Munjal";  
    console.log(teacher);  
}
fn();

/**
 * Phase1 : 
 *          teacher ---> not a formal declaration ---> skip in parsing Phase
 *          var teacher --> formal declaration ---> scope of fn()
 * 
 * NOTE: teacher doesn't become auto-global here: it only has the scope of fn
 * 
 * Phase2 : 
 *         is teacher in scope of fun ---> yes---> give it the value "Gaurav"
 *         fetch the value --> print on console
 *         change value of teacher to Munjal
 *         console.log(Munjal)
 */





var coder = "Rohit";
function fun() {
    var coder = "Aryan";
    codeHelper = "Luv";
    console.log(coder);
    console.log(codeHelper);
}
console.log(coder);
fun();
console.log(codeHelper);
  
/* Phase 1 ----> Parsing  ------> Scope Resolution 
    Phase 2 ---> execution ---> Rohit is printed then fun is called
   AutoGlobal ---> if a variable was not declared outside and is not a formal declaration (it is skipped during parsing phase) (codeHelper)
   in this case: We keep on searching in outer scopes until we find it, and if you don't find it , you allot global scope to the variable automatically
   Here (codeHelper) is allotted global scope 

   But this happens in Execution phase so if we write console.log(codeHelper);  in line no 8 before calling fun() it will give error
*/

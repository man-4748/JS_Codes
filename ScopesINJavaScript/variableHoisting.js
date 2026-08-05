var attack = "Smash";
function Undef(){
    console.log(char);
    var char = "Cyclopse"; 
    var attack = "Laser";
    specialPower = "Rage";        
    console.log(attack); 
}
console.log(attack);
Undef();
console.log(specialPower);
/*
  due to autoglobal , special power is declared but not defined , no value is assigned to it so it gives undefined when we do console.log()
*/

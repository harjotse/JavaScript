// faslys value
// undefined 
// null
// 0
// '' empty string 
// NAN not a number

var user=null; // this is undefined where as null means their should be a value but its not there 
if(user)
{
    console.log("yes it's true");
}
// it will print nothing as the values are the falsy 
// so what are the truethy values rest all are :)

// Coercion  ?? == ===
var num1=2
var num=234;
var num2="2"
var num3="22"
if(num1==num2) // == checks only whats written inside 
{
console.log("yes they are same ");
}
if(num1===num3) // === checks every thing data type value 
{
console.log("yes they are same ");
}

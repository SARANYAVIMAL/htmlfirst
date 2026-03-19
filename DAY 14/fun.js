//SIMPLE DECLARATION//
        1
function loggreetings()
{
    console.log("hellow from the function");
}
loggreetings()

//RETURN VALUE
function getPi()
{
    return 3.141;
}
console.log(getPi());

//FUNCTION WITH PARAMETER
function sayname(name)
{
console.log("hellow" +name);
}
sayname("abi")

//FUNCTION WITH TWO PARAMETERS
function multiply(a,b)
{
    return a*b;
}
const resultt=multiply(5,10);
console.log(resultt);

//ARROW FUNCTION
const subtract = (a, b) => 
    {
  return a - b;
};

const results = subtract(10, 4);
console.log(results);

//ARROW FUNCTION(IMPLICIT RETURN)
const divide = (a, b) => a / b;

console.log(divide(10, 2));

//ARROW FUCTION(SINGLE PARAMETER)
const double = x => x * 2;
console.log(double(5));

//NO ARGUMENT RETURN
const dividee = (a, b) => a / b;

console.log(divide(10, 2));
dividee()

//DEFAULT PARAMETER
function sayName(name)
{
console.log("hellow" + name);
}
sayName("stranger")
//USING A VARAIBLE FOR RETURN
function checkStatus()
{
    return true;
}
if(checkStatus()===true)
{
    console.log("Access Granted");
}
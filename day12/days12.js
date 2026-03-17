const num1=25;
const num2=4;
let remainder=num1/num2;
console.log(remainder);
//ASSIGNMENT SHORTHAND
let counter=10;
counter+=5;
console.log(counter)
//STRICT EQUALITY
if(5==="5")
{
    console.log("it should be false")
}
else{
    console.log("it would be true")
    }
//LOGICAL OR CONDITION
const isweekend=false;
const isholiday=true;
if(isweekend || isholiday)
{
    console.log("Time to Relax")

}
//BASICIF/ELSE//
const trafficlight="red";
if(trafficlight==="red")
{
    console.log("stop")
}
else{
    console.log("go")
}
//ELSEIF//
if(trafficlight==="red")
{
    console.log("stop")
}
else if(trafficlight==="yellow")
{
    console.log("slow down")
}
else
{
    console.log("Go")

}
//COMPLEX AND CONDITION
const israining="true";
const hasumbrella="false";
if (israining && hasumbrella)
{
    console.log("stayinside")
}
//SWITCH SETUP//

const productCode = "PRO";

switch (productCode) {
  case "PRO":
    console.log("Processor");
    break;
  case "RAM":
    console.log("Memory");
    break;
  default:
    console.log("Unknown Device");
    break;
}
const studentScore = 75;

if (studentScore >= 70) 
    {
  console.log("Passed");
}

//combined logic
const hasError="false";
if(!hasError===true)
{
    console.log("System Clear");
}


let currentState="red";
let nextState;
switch (currentState)
{
case "red":
nextState="green";
break;
case "yellow":
nextState="red";
break;
case "green":
nextState="yellow";
break;
case "default":
nextState="invalid";
break;
}
console.log(`"The light changes from" ${currentState} "to" ${nextState}.`);
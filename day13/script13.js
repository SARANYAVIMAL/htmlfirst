//BASIC FORLOOP//
for(let i=1;i<=5;i++)
{
    console.log(i);
}

//COUNTING DOWN
for( let i=10; i>=0;i--)
{
    console.log(i);
}
//LOOPING OVER ARRAY
const fruits=["apple","banana","cherry"];
for (let i = 0; i < fruits.length; i++) 
    {
    console.log(fruits[i]); 
}
 //BASIC WHILE LOOP
let countdown=5;
while(countdown>=0)
    {
        console.log(countdown);
        countdown--;
    }
//do while loop//
let condition=10;
do
{
    console.log(condition);
    condition++;
}
while(condition<10)

//forEach on Array//
const fruit=["apple","banana","cherry"];
fruit.forEach (function (fruit,index)
{
    console.log(fruit,index);
},);
//Using break//
for(let i=1;i<=10;i++)
{
    if (i==7)
        break;
    console.log(i);
    }
//Using continue//
for(let i=1;i<=10;i++)
{
    if(i==7)
        continue;
    console.log(i);
}
//Looping and Modulus//
for(let i=1;i<=20;i++)
{
    if(i%2===0)
        console.log(i);
}



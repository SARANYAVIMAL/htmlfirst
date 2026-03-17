const baseprice=150;
const memberlevel="Gold";
let finalprice=baseprice;
if(memberlevel==="Gold" && baseprice>100)
{
    finalprice=finalprice*0.8;
}
else if(memberlevel==="silver")
{   
    finalprice=finalprice*0.9;
}
else
{
    finalprice=baseprice;
}
console.log(finalprice);

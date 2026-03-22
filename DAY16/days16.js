
//SIMPLE OBJECT CREATION
const car={make:"MARUTHI",model:"MARUTHI 800",year:"1993"}

//DOT NOTATION ACCESS
console.log(car.make);

//BRACKET NOTATION ACCESS
const prop="year";
console.log(car[prop]);

//ADD NEW PROPERTY
let cars={make:"MARUTHI",model:"MARUTHI 800",year:"1993"}
cars.color="BLUE";
console.log(cars);

//NESTED OBJECT
let car1={make:"MARUTHI",model:"MARUTHI 800",year:"1993",engine:{hp:120}}

//ACCESS NESTED PROPERTY
console.log(car1.engine.hp);

//OBJECT METHOD
const car2={make: 'Toyota',model: 'Camry', describe:function()
    { return "This car is a " + this.make + " " + this.model + ".";}};
console.log(car2.describe());

//STRINGIFY
datapoint={x:10,y:20}
const jdatapoint=JSON.stringify(datapoint);
console.log(jdatapoint);

//PARSING
const parsedData=JSON.parse(jdatapoint);
console.log(parsedData);

//METHOD REMOVAL
const jsondataa=JSON.stringify(car2);
console.log(jsondataa);

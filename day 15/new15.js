let names=["saranya","abi","arun","meena"];
//ADD TO END
names.push("ram");
console.log(names);
//REMOVE FIRST
names.shift();
console.log(names);
//.map() to UpperCase
const words=["hello","world","js"];
const upperwords=words.map(word=> word.toUpperCase())
console.log(upperwords);
//.map() with numbers
const data=[10,5,20];
const result=data.map(data=>data+1);
console.log(result);
//.filer() for Length
const wordss=["helloo","worldds","jser"];
const longWords=wordss.filter(words=>words.length>4);
console.log(longWords);
//filter for condition
const temperatures=[32,10,25,40];
const temp1=temperatures.filter(temperatures=>temperatures<30);
console.log(temp1);
//reduce()Summation
const datas=[10,5,20];
const sum=data.reduce((a,curr)=>a+curr);
console.log(sum);
//reduce concatenation
const letters=["A","B","C"];
const newlett=letters.reduce((a,curr)=>a+curr);
console.log(newlett);
//chaining
const temp5=[32,10,25,40];
const finalnumber=temp5.filter(temp5=>temp5<30) .reduce((a,curr)=>a+curr);
console.log(finalnumber);

var num=Number(prompt("enter the size of the array"));
var array=[];
for (let i=0;i<num;i++)
	array[i]=prompt("enter the element "+i+ " into the array");
let newArray=array.map((curElem,index,arr)=>{
	return Index no= ${index} and value is ${curElem} belong to ${arr}
}) 
console.log(newArray);
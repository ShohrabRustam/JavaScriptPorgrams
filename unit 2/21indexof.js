var array=[];
var num =Number(prompt("enter the size of the array"));
for (let i=0;i<num;i++)
array[i]=Number(prompt("enter the " + i +"elements into the array"));
for (let elements of array)
	console.log(elements);
console.log(array.indexOf(5));
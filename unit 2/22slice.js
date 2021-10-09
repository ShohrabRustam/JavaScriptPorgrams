var array=[];
var num =Number(prompt("enter the size of the array"));
for (let i=0;i<num;i++)
array[i]=Number(prompt("enter the " + i +"elements into the array"));
for (let elements of array)
	console.log(elements);
console.log("using the slice(string,ending )");
var start=Number(prompt("enter the start index to traverse the array"));
var end=Number(prompt("enter the last elements to traverse the array "));
console.log(array.slice(start,end));
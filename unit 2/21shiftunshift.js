var array=[];
var num =Number(prompt("enter the size of the array"));
for (let i=0;i<num;i++)
array[i]=Number(prompt("enter the " + i +"elements into the array"));
for (let elements of array)
	console.log(elements);
console.log("using unshift function push 5 into the array");
array.unshift(5);
for (let elements of array)
	console.log(elements);
	array.shift();
	console.log("using shift function remove first elements of the arrray");
	for (let elements of array)
	console.log(elements);


var num=Number(prompt("enter the size of the array"));
var array=[];
for (let i=0;i<num;i++)
	array[i]=prompt("enter the element "+i+ " into the array");
console.log("the reverse of the array is : ");
reversearray(array);
console.log("the uniform array ");
isUniform(array);
console.log("the sum of the array is ");
sumarray(array);
console.log("the max array is ");
maxarray(array);
console.log("the minumum element in the array is ");
min(array);


function reversearray(arr)
{
	for (let i=arr.length-1;i>=0;i--)
		console.log("reverse array is :" + arr[i]);
}
function isUniform(arr)
{
	for(let i=0;i<arr.length;i++)
	{
		if (arr[0]!=arr[i]){
			console.log(false);
			break;
		}
	return true;
	}
	


}
function sumarray(arr)
{
	for (let i=0;i<arr.length;i++)
	{
		var sum=0;
		sum+=arr[i];
	}
	console.log("the sum of the array is : "+ sum);
}
function maxarray(array)
{
	for (let i=0;i<array.length;i++)
	{
		var max=array[0];
		if (max<array[i])
			max=array[i];
	}
	console.log("the max of the array is : "+ max);
}
function min(array)
{
		for (let i=0;i<array.length;i++)
	{
		var min=array[0];
		if (min>array[i])
			max=array[i];
	}
	console.log("the min of the array is : "+ min);
}
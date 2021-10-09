var num=Number (prompt("please enter the size of the array ?"));
var array=[];
for (let i=0;i<num;i++)
{
	array[i]=prompt("enter the element into the array ");
}
array.forEach(function(array)
{
	console.log(array);
});